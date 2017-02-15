/**
 * Created by apache on 16-3-29.
 */
const async = require('async');
const User = require('../proxy/user');

class Validate {

    validateUser(req,res,next) {
        var passport = req.session.passport;
        async.waterfall([
            function(_callback) {
                User.getUserByEmail(passport.user['_json'].email,function(data) {
                    if(data.length > 0) {
                        req.session.user = data[0];
                        //res.json({
                        //    meta : '登陆成功',
                        //    code : '200'
                        //});
                        res.redirect('/');
                    } else {
                        _callback();
                    }
                });
            },

            function(_callback) {
                User.saveUser(passport.user['_json'].email,'',passport.user.username,
                passport.user.id,function(numAffected,product) {
                        if(numAffected > 0) {
                            req.session.user = product;
                            //res.json({
                            //    meta : '登陆成功',
                            //    code : '200'
                            //});
                            res.redirect('/');
                        }
                    });
            }
        ],function(err,result){
        });
    }
}

module.exports = new Validate();