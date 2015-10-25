/**
 * Created by apache on 15-10-24.
 */
import mongoose from 'mongoose';
import User from '../proxy/user';
import crypto from 'crypto';

class LoginCtrl {
    /**
     * 注册
     * @param req
     * @param res
     * @param next
     */
    getSign(req,res,next) {
        let email = req.body.email,
            password = req.body.password,
            name = req.body.name;

        console.log(email+" "+password+" "+name);

        let sha = crypto.createHash("sha1");
        sha.update(password);
        password = sha.digest('hex');

        User.saveUser(email,password,name,function(data){
            let result = {
                meta : "",
                code : 0,
                data : "",
                err  : false
            };
            if(data === 1 ) {
                result.meta = "注册成功";
                result.code = 200;
                result.data = "1";
            } else {
                result.meta = "注册不成功";
                result.code = 400;
                result.err = true;
            }
            res.json(result);
        })
    }

    /**
     * 登陆
     * @param req
     * @param res
     * @param next
     */
    getLogin(req,res,next) {
        let email = req.body.email,
            password = req.body.password;
        //加密
        let sha = crypto.createHash("sha1");
        sha.update(password);
        password = sha.digest('hex');

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