/**
 * Created by apache on 15-10-25.
 */
import User from '../models/user';
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
}

export default new auth();
