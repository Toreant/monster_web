/**
 * Created by apache on 15-10-24.
 */
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
        let where = req.body.where,
            params = req.body.params;

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
     * 通过个性域名查找用户
     * @param req
     * @param res
     * @param next
     */
    getUserByDomain(req,res,next) {
        let domain = req.body.domain;

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

    /**
     * 获取用户资料
     * @param req
     * @param res
     * @param next
     */
    getUserById(req,res,next) {
        let arrayId = req.body.arrayId,
            option = req.body.option;
        let result = {
            meta : '',
            code : 0,
            raw : null
        };

        User.getUserById(arrayId,option,(docs) => {
            if(docs.length >= 1) {
                result.meta = '查找成功';
                result.code = 200;
                result.raw = docs;
            } else {
                result.meta = '查找不成功';
                result.code = 400;
            }
            res.json(result);
        });
    }

    /**
     * 获取关注的用户
     * @param req
     * @param res
     * @param next
     */
    getFollowing(req,res,next) {
        let where = req.body.where,
            option = req.body.option;
        let result = {
            meta : '',
            code : 0,
            raw  : null
        };
        User.getFollowing(where,option,(docs) => {
            if(docs === null) {
                result.meta = '你还没有关注过人';
                result.code = 400;
            } else if(docs === 0) {
                result.meta = '本地用户不存在';
                result.code = 404;
            } else {
                result.meta = '获取关注者成功';
                result.code = 200;
                result.raw  = docs;
            }
            res.json(result);
        });
    }

    /**
     * 关注
     * @param req
     * @param res
     * @param next
     */
    addFollow(req,res,next) {
        let auth_id = req.body.auth_id,
            where = req.body.where;
        let result = {
            meta : '',
            code : 0
        };
        User.follow(where,auth_id,0,(data) => {
            if(data === 0) {
                result.meta = '本地用户不存在';
                result.code = 400;
            } else if(data === 1) {
                result.meta = '关注成功';
                result.code = 200;
            } else if(data === 2) {
                result.meta = '你已经关注过这歌用户';
                result.code = 304;
            } else {
                result.meta = '关注的用户不存在';
                result.code = 404;
            }
            res.json(result);
        });
    }

    /**
     * 取消关注
     * @param req
     * @param res
     * @param next
     */
    unFollowing(req,res,next) {
        let auth_id = req.body.auth_id,
            where = req.body.where;
        let result = {
            meta : '',
            code : 0
        };
        User.follow(where,auth_id,1,(data) => {
            if(data === 0) {
                result.meta = '本地用户不存在';
                result.code = 400;
            } else if(data === 1) {
                result.meta = '取消关注成功';
                result.code = 200;
            } else if(data === 2) {
                result.meta = '这个用户不在关注列表中';
                result.code = 304;
            } else {
                result.meta = '这个用户不存在';
                result.code = 404;
            }
            res.json(result);
        });
    }
}

export default new UserCtrl();