/**
 * Created by apache on 15-10-25.
 */
import eventproxy from 'eventproxy';
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
     * 添加关注
     * @param where
     * @param auth_id
     * @param callback
     */
    addFollow(where,auth_id,callback) {
        User.findOne(where,function(err,user){
            if(user === null) {
                callback(0);
            } else {
                let following = user.following;
                if(_.indexOf(following,auth_id) !== -1) {
                    callback(null);
                } else {
                    user.following.push(auth_id);
                    user.save(function(err,docs){
                        callback(1);
                    });
                }
            }
        });
    }
}

export default new md();