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
    getSign(req, res, next) {
        let email = req.body.email,
            password = req.body.password,
            name = req.body.name,
            auth_id = _.random(10000000, 99999999);

        let sha = crypto.createHash("sha1");
        sha.update(password);
        password = sha.digest('hex');

        User.saveUser(email, password, name, auth_id, auth_id.toString(), (data, product) => {
            let result = {
                meta: "",
                code: 0,
                data: {},
                err: false
            };
            if (data === 1) {
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
    getLogin(req, res, next) {
        let email = req.body.email,
            password = req.body.password;
        //加密
        let sha = crypto.createHash("sha1");
        sha.update(password);
        password = sha.digest('hex');

        User.getUserByEmailAndPwd(email, password, (data) => {
            let result = {
                meta: "",
                code: "",
                data: null,
                err: false
            };
            if (data.length > 0) {
                result.meta = "登陆成功";
                result.code = 200;
                req.session.save((err) => {
                    req.session.user = data[0];
                    result.data = req.session.user;
                    res.json(result);
                });
            } else {
                result.meta = "登陆不成功";
                result.code = 400;
                res.json(result);
            }

        });
    }

    /**
     * 更新用户资料
     * @param req
     * @param res
     * @param next
     */
    getUpdate(req, res, next) {
        let params = req.body.params,
            user = req.session.user,
            where = {};

        if (user === !undefined) {
            res.json({meta: '你还没登陆', code: 406});
        } else {

            where._id = user._id;

            User.updateUser(where, params, (data, docs) => {

                let result = {
                    meta: '',
                    code: 0,
                    data: null
                };

                if (data.ok === 1) {
                    result.meta = '修改成功';
                    result.code = 200;
                    result.data = docs;
                } else if (data === 500) {
                    result.meta = '服务器错误';
                    result.code = 500;
                } else if (docs === null) {
                    result.meta = '没有这个用户';
                    result.code = 404;
                } else {
                    result.meta = '修改用户资料不成功';
                    result.code = 400;
                }
                res.json(result);
            });
        }
    }

    /**
     * 获取个人资料
     * @param req
     * @param res
     */
    getProfile(req,res) {
        let user = req.session.user;
        let result = {
            meta: '',
            code: 0,
            raw: null
        };

        User.getUserById([user._id], {}, (docs) => {
            if (docs.length >= 1) {
                result.meta = '查找成功';
                result.code = 200;
                result.raw = docs[0];
            } else {
                result.meta = '查找不成功';
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
    getUserByDomain(req, res, next) {
        let domain = req.params.domain;
        console.log(domain);

        let result = {
            meta: '',
            code: 0,
            raw: null
        };

        User.getUserByDomain(domain, function (docs) {
            if (docs !== null) {
                result.meta = '获取用户资料成功';
                result.code = 200;
                result.raw = docs;
            } else if (docs === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else {
                result.meta = '找不到这个人';
                result.code = 404;
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
    getUserById(req, res, next) {
        let arrayId = req.body.arrayId,
            option = req.body.option;
        let result = {
            meta: '',
            code: 0,
            raw: null
        };

        User.getUserById(arrayId, option, (docs) => {
            if (docs.length >= 1) {
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
    getFollowing(req, res, next) {
        let where = req.body.where,
            option = req.body.option;
        let result = {
            meta: '',
            code: 0,
            raw: null
        };
        User.getFollowing(where, option, (docs) => {
            if (docs === null) {
                result.meta = '你还没有关注过人';
                result.code = 400;
            } else if (docs === 0) {
                result.meta = '本地用户不存在';
                result.code = 404;
            } else {
                result.meta = '获取关注者成功';
                result.code = 200;
                result.raw = docs;
            }
            res.json(result);
        });
    }

    /**
     * 获取关注我的用户
     * @param req
     * @param res
     * @param next
     */
    getFollowers(req, res, next) {
        let option = req.body.option,
            where = req.body.where,
            user = req.session.user; //　本地登陆用户
        console.log(where);

        User.getFollowers(where, option, user, (data) => {
            let result = {
                meta: '',
                code: 0,
                raw: null
            };

            if (data === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else if(data === 404) {
                result.meta = '没有这个用户';
                result.code = 404;
            } else {
                result.meta = '获取关注者成功';
                result.code = 200;
                result.raw = data;
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
    addFollow(req, res, next) {
        let auth_id = req.body._id,
            where = req.session.user;

        let result = {
            meta: '',
            code: 0
        };
        User.follow({_id: where._id}, auth_id, 0, (data) => {
            if (data === 0) {
                result.meta = '本地用户不存在';
                result.code = 400;
            } else if (data === 1) {
                result.meta = '关注成功';
                result.code = 200;
            } else if (data === 2) {
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
    unFollowing(req, res, next) {
        let auth_id = req.body._id,
            where = req.session.user;

        let result = {
            meta: '',
            code: 0
        };
        User.follow({_id: where._id}, auth_id, 1, (data) => {
            if (data === 0) {
                result.meta = '本地用户不存在';
                result.code = 400;
            } else if (data === 1) {
                result.meta = '取消关注成功';
                result.code = 200;
            } else if (data === 2) {
                result.meta = '这个用户不在关注列表中';
                result.code = 304;
            } else {
                result.meta = '这个用户不存在';
                result.code = 404;
            }
            res.json(result);
        });
    }

    /**
     * 关注，收藏
     * @param req
     * @param res
     * @param next
     */
    getStar(req, res, next) {

        let user_id = req.session.user._id, // 登陆的用户
            star_id = req.body.star_id,     // 收藏的id
            column = req.body.column;      // 收藏的栏目
        User.getStar(user_id, star_id, column, (data) => {
            let result = {
                meta: '',
                code: 0
            };

            switch (data) {
                case 200 :
                    result.meta = '收藏成功';
                    break;
                case 304 :
                    result.meta = '你已经收藏过了';
                    break;
                case 404 :
                    result.meta = '没有这个用户';
                    break;
                case 500 :
                    result.meta = '服务器错误';
                    break;
            }
            result.code = data;
            res.json(result);
        });

    }

    /**
     * 取消关注
     * @param req
     * @param res
     * @param next
     */
    unStar(req, res, next) {

        let star_id = req.body.star_id,
            user_id = req.session.user._id,
            column = req.body.column;
        User.unStar(user_id, star_id, column, (data) => {
            let result = {
                meta: '',
                code: 0
            };
            switch (data) {
                case 200 :
                    result.meta = '取消收藏成功';
                    break;
                case 304 :
                    result.meta = '你还没有收藏';
                    break;
                case 404 :
                    result.meta = '没有这个用户';
                    break;
                case 500 :
                    result.meta = '服务器错误';
                    break;
            }
            result.code = data;
            res.json(result);
        });

    }

    /**
     * 获取收藏列表
     * @param req
     * @param res
     * @param next
     */
    getStars(req, res, next) {
        let what = req.body.what,
            skip = req.body.skip,
            option = req.body.option,
            user;

        if (what === 0) {
            user = {_id: req.session.user._id};
        } else {
            user = req.body.user;
        }

        User.getStars(user, skip, option, (data) => {
            let result = {
                meta: '',
                code: 0,
                raw: null
            };

            if (data === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else {
                result.meta = '获取收藏列表成功';
                result.code = 200;
                result.raw = data;
            }
            res.json(result);
        });
    }
}

export default new UserCtrl();