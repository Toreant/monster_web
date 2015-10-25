/**
 * Created by apache on 15-10-25.
 */
import eventproxy from 'eventproxy';
import User from '../models/user';

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
            name: name,
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
        User.update({email : where},params,(err,raw,docs) => {
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
    getUserByName(name, callback) {
        User.find({name: name}, (err, docs) => {
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
}

export default new md();