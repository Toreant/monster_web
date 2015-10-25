/**
 * Created by apache on 15-10-24.
 */
import mongoose from 'mongoose';
import User from '../proxy/user';
import crypto from 'crypto';

class LoginCtrl {
    getSign(req,res,next) {
        let email = req.body.email,
            password = req.body.password;
        let sha = crypto.createHash("sha1");
        console.log(User.saveUser);
        User.saveUser(email,password,"yuhuajie",function(data){
            let result = {
                meta : "",
                code : "",
                data : "",
                err  : false
            };
            if(data === 1 ) {
                result.meta = "登陆成功";
                result.code = 200;
                result.data = "1";
            } else {
                result.meta = "登陆不成功";
                result.code = 400;
                result.err = true;
            }
            res.json(result);
        })
    }

    getLogin(req,res,next) {
        let email = req.body.email,
            password = req.body.password;
        User.getUserByEmailAndPwd(email,password,function(data){
            let result = {
                meta : "",
                code : "",
                data : "",
                err  : false
            };
            if(data.length >0) {
                result.meta = "登陆成功";
                result.code = 200;
                result.data = data[0];
            } else {
                result.meta = "登陆不成功";
                result.code = 400;
                result.data = null;
            }
            res.json(result);
        });
    }
}

export default new LoginCtrl();