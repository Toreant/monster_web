/**
 * Created by apache on 15-10-25.
 */
class auth {

    // 是否登陆
    isAuth (req,res,next) {
        if(req.session.user !== undefined) {
            next();
        } else {
            res.json({meta : '你还没登陆',code : 406});
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