/**
 * Created by apache on 15-10-25.
 */
import async from 'async';
import User from '../models/user';
import _ from 'underscore';

class md {
    /**
     * 保存用户和新增用户
     * @param email 邮箱
     * @param password 注册密码
     * @param name 用户名
     * @param auth_id
     * @param callback
     */
    saveUser(email, password, name,auth_id,domain, callback) {
        let user = new User({
            email: email,
            password: password,
            username: name,
            auth_id : auth_id,
            domain : domain
        });
        user.save((err, product, numAffected) => {
            if (err) {
                return callback(err);
            } else {
                return callback(numAffected,product);
            }
        });
    }

    /**
     * 更新用户资料
     * @param where
     * @param params
     * @param callback
     */
    updateUser(where,params,callback) {
        User.update(where,params,{upsert : true},(err,raw,docs) => {
            if(err) {
                callback(err);
            } else {
                callback(raw,docs);
            }
        });
    }

    /**
     * 通过邮箱查找用户
     * @param email
     * @param callback
     */
    getUserByEmail(email, callback) {
        User.find({email: email}, (err, docs) => {
            if (err) return callback(err);
            else callback(docs);
        });
    }

    /**
     * 通过用户名查找
     * @param name
     * @param callback
     */
    getUser(where, callback) {
        User.find(where, (err, docs) => {
            if (err) callback(err);
            else callback(docs);
        });
    }

    /**
     * @param email
     * @param password
     * @param callback
     */
    getUserByEmailAndPwd(email,password,callback) {
        User.find({email : email,password : password},(err,docs) => {
            if(err) {
                callback(err);
            } else {
                callback(docs);
            }
        });
    }

    /**
     * 通过账号id获取用户
     * @param id
     * @param callback
     */
    getUserById(arrayId,callback) {
        User.find({auth_id : {$in : arrayId}},'username introduce avatar_url auth_id',(err,docs) => {
            if(err) {
                callback(err);
            } else {
                callback(docs);
            }
        });
    }

    /**
     * 通过个性域名查找
     * @param domain
     * @param callback
     */
    getUserByDomain(domain,callback) {
        User.find({domain : domain},(err,docs) => {
            if(err) {
                callback(err);
            } else {
                callback(docs);
            }
        });
    }

    /**
     * 添加关注，取消关注
     * @param where
     * @param auth_id
     * @param callback
     * @param option 0--关注 1--取消关注
     */
    follow(where,auth_id,option,callback) {
        async.waterfall([
            /* 查找本地用户 */
            function(_callback) {
                User.findOne(where,(err,user) => {
                    if(user === null) {
                        _callback(null,0);
                    } else{
                        _callback(null,user);
                    }
                });
            },
            /* 查找auth_id是否存在 */
            function(user,_callback) {
                if(user === 0) {
                    _callback(null,0);
                } else {
                    User.findOne({auth_id : auth_id},(err,docs) => {
                        _callback(null,docs,user);
                    })
                }
            },
            /* 检查这个用户是否已经在关注的列表中 */
            function(docs,user,_callback){
                if(docs === null) {
                    _callback(null,3);
                } else if(docs === 0) {
                    _callback(0);
                } else {
                    let following = user.following;
                    /* 关注功能 */
                    if(option === 0) {
                        if(_.indexOf(following,auth_id) !== -1) {
                            _callback(null,2);
                        } else {
                            user.following.push(auth_id);
                            user.save(function(err){
                                _callback(null,1);
                            });
                        }
                    } else {
                        /* 取消关注功能 */
                        if(_.indexOf(following,auth_id) === -1) {
                            _callback(null,2);
                        } else {
                            _.without(user.following,auth_id);
                            user.save((err) => {
                                _callback(null,1);
                            });
                        }
                    }
                }
            }
        ],(err,result) => {
            /**
             * result
             * 0 本地用户不存在
             * 1 关注成功
             * 2 已经关注过（关注功能） 或 不在关注列表中（取消关注功能）
             * 3 要关注的用户不存在
             */
            callback(result);
        });
    }
}

export default new md();