/**
 * Created by apache on 15-10-22.
 */
const express = require('express');
const logger = require('morgan');
const swig = require('swig');
// const React = require('react');
// const Router = require('react-router');
const path = require('path');
const colors = require('colors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const compress = require('compression');
const cookieParser = require('cookie-parser');

const oauth = require('./middleware/oauth');
const apiRouter = require('./router');
// const routes = require('./app/routes');
const config = require('./config');
require('./models');

let app = new express();

app.set('port',process.env.PORT || 3000);
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('trust proxy', 1); // trust first proxy

app.use(cookieParser());
app.use(compress());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    maxAge: 24*60*60*1000,
    saveUninitialized: false,
    cookie: { secure: false} //由于没有配置ssl，所以必须设置为false
}));

oauth(app);
app.use(apiRouter);

app.get('*', (req, res) => {
    // console.log('redirect');
    // res.redirect('/articles');
    let page = swig.renderFile('./views/index.html');
    res.send(page);
});

// app.use(function(req,res) {
//     Router.run(routes,req.path,function(Handler) {
//         let html = React.renderToString(React.createElement(Handler));
//         let page = swig.renderFile('./views/index.html',{html : html});
//         res.send(page);
//     });
// });

app.listen(app.get('port'),()=>{
    console.log(colors.grey("server listen "+app.get('port')));
});

module.exports = app;
