/**
 * Created by apache on 16-3-29.
 */

import User from '../proxy/user';
import async from 'async';

class Validate {

    validateUser(req,res,next) {
        var passport = req.session.passport;
        async.waterfall([
            function(_callback) {
                User.getUserByEmail(passport.user['_json'].email,function(data) {
                    if(data.length > 0) {
                        req.session.user = data[0];
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
                            res.redirect('/');
                        }
                    });
            }
        ],function(err,result){
        });
    }
}

export default new Validate();