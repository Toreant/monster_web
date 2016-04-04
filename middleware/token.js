/**
 * Created by apache on 16-3-29.
 */
var csrf = require('csurf');
var csrfProtection = csrf();

var obj = {};

obj.csrfProtection = function(req,res,next) {

    return csrfProtection;
};

obj.validateToken = function(req,res,next) {
    console.log(req.headers['x-http-token']);
    console.log(req.body.token);
    console.log(req.session.token);
    let bToken = req.body.token,
        hToken = req.headers['x-http-token'];
    if(bToken != req.session.token && hToken !== req.session.token) {
        res.json({
            meta : 'crossDomain send',
            code : 403
        });
    } else {
        return next();
    }
};

obj.getToken = function(req,res,next) {
    var token = req.csrfToken();
    req.session.token = token;
    res.json({
        meta : 'token get',
        code : 200,
        token : token
    });
};

module.exports = obj;