/**
 * Created by apache on 15-10-24.
 */
import mongoose from 'mongoose';
import User from '../proxy/user';
import crypto from 'crypto';
import _ from 'underscore';

class UserCtrl {
    /**
     * 注册
     * @param req
     * @param res
     * @param next
     */
    getSign(req,res,next) {
        let email = req.body.email,
            password = req.body.password,
            name = req.body.name,
            auth_id = _.random(10000000,99999999);

        let sha = crypto.createHash("sha1");
        sha.update(password);
        password = sha.digest('hex');

        console.log(email+' '+password+" "+name+' '+auth_id);

        User.saveUser(email,password,name,auth_id,auth_id.toString(),(data,product) => {
            let result = {
                meta : "",
                code : 0,
                data : {},
                err  : false
            };
            if(data === 1 ) {
                result.meta = "注册成功";
                result.code = 200;
                result.data = product;
            } else {
                result.meta = "注册不成功";
                result.code = 400;
                result.err = true;
            }
            res.json(result);
        });
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

        User.getUserByEmailAndPwd(email,password,(data) => {
            let result = {
                meta : "",
                code : "",
                data : "",
                err  : false
            };
            if(data.length >0) {
                result.meta = "登陆成功";
                result.code = 200;
                result.raw = data[0];
                req.session.user = data[0];
            } else {
                result.meta = "登陆不成功";
                result.code = 400;
                result.data = null;
            }
            res.json(result);
        });
    }

    /**
     * 更新用户资料
     * @param req
     * @param res
     * @param next
     */
    getUpdate(req,res,next) {
        console.log('update');
        console.log(req.body);
        let where = req.body.where,
            params = req.body.params;
        console.log(where);

        let result = {
            meta : '',
            code : 0,
            data : ''
        };

        User.updateUser(where,params,(data,docs) => {
            if(data.ok === 1) {
                result.meta = '修改成功';
                result.code = 200;
                result.data = docs;
            } else {
                result.meta = '修改不成功';
                result.code = 400;
                result.data = null;
                result.err = data;
            }
            res.json(result);
        });
    }

    /**
     * 获取用户资料
     * @param req
     * @param res
     * @param next
     */
    getUserById(req,res,next) {
        let user_id = req.body.user_id;

        let result = {
            meta : '',
            code : 0,
            data : null
        };

        User.getUserById(id,function(docs){
            if(docs.length >=1) {
                result.meta = '获取用户资料成功';
                result.code = 200;
                result.raw = docs;
            } else {
                result.meta = '获取用户资料不成功';
                result.code = 400;
            }
            res.json(result);
        });
    }

    /**
     * 通过个性域名查找用户
     * @param req
     * @param res
     * @param next
     */
    getUserByDomain(req,res,next) {
        let domain = req.body.domain;
        console.log('domain = '+domain);

        let result = {
            meta : '',
            code : 0,
            data : null
        };

        User.getUserByDomain(domain,function(docs){
            if(docs.length >=1) {
                result.meta = '获取用户资料成功';
                result.code = 200;
                result.raw = docs;
            } else {
                result.meta = '获取用户资料不成功';
                result.code = 400;
            }
            res.json(result);
        })
    }
}

export default new UserCtrl();