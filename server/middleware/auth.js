/**
 * Created by apache on 15-10-25.
 */
const User = require('../models/user');
class auth {

    // 是否登陆
    isAuth (req,res,next) {
        if(req.session.user !== undefined) {
            User.findById(req.session.user._id,(err,user) => {
                if(err) {
                    res.json({
                        meta : '服务器错误',
                        code : 500
                    });
                } else if(user === null) {
                    res.json({
                        meta : '这个用户不存在',
                        code : 410
                    });
                } else {
                    req.authCode = user.auth_code;
                    return next();
                }
            });
        } else {
            res.json({
                meta : '你还没登陆',
                code : 406
            });
        }
    }

    // 是否未登陆
    isNotAuth(req,res,next) {
        if(req.session.user === undefined ) {
            next();
        } else {
            res.json({
                meta : '你已经登陆了',
                code : 304
            });
        }
    }

    authCode(code) {
        return function(req, res, next) {
            if (req.authCode && req.authCode >= code) {
                next();
            } else {
                res.json({
                    code: 403,
                    meta: 'forbidden'
                });
            }
        };
    }
}

module.exports = new auth();
