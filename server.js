/**
 * Created by apache on 15-10-22.
 */
import config from './config';
import express from 'express';
import logger from 'morgan';
import swig from 'swig';
import React from 'react';
import Router from 'react-router';
import routes from './app/routes';
import path from 'path';
import colors from 'colors';
import apiRouter from './router';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
var compress = require('compression');
//import redis from 'redis';
var mongoDB = require('./models') ;

var app = new express();
//var client = redis.createClient();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('port',process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(compress());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    maxAge: 24*60*60*1000,
    saveUninitialized: false,
    cookie: { secure: false} //由于没有配置ssl，所以必须设置为false
}));

import oauth from './middleware/oauth';
oauth(app);

app.use(apiRouter);

app.use(function(req,res) {
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
