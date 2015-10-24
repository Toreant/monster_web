/**
 * Created by apache on 15-10-24.
 */
import mongoose from 'mongoose';

class LoginCtrl {
    getLogin(req,res,next) {
        console.log("login");
        console.log("login body = "+req.body);
        let result = {
            meta : '登陆成功',
            code : 200,
            err : false
        };
        res.json(result);
    }

    getsign(req,res,next) {

    }
}

export default new LoginCtrl();