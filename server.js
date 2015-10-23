/**
 * Created by apache on 15-10-22.
 */
import express from 'express';
import logger from 'morgan';
import swig from 'swig';
import React from 'react';
import Router from 'react-router';
import routes from './app/routes';
import path from 'path';
import colors from 'colors';

var app = new express();

app.set('port',process.env.PORT || 3000);
app.set('');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res) => {
    Router.run(routes,req.path,(Handler) => {
        let html = React.renderToString(React.createElement(Handler));
        let page = swig.renderFile('./views/index.html',{html : html});
        res.send(page);
    });
});

app.listen(app.get('port'),()=>{
    console.log(colors.grey("server listen "+app.get('port')));
});

export default app;