/**
 * Created by apache on 15-11-25.
 */

import Music from '../models/music';
import User from '../models/user';
import async from 'async';
import _ from 'underscore';

class md {

    /**
     * 通过id号找到
     * @param id
     */
    getMusicById(id,option,callback) {
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return callback(null);
        } else {
            Music.findById(id,null,option,(err,music) => {
                if(err) {
                    return callback(500);
                } else {
                    return callback(music);
                }
            });
        }
    }


    /**
     * 通过一组id找到音乐
     * @param ids
     * @param callback
     */
    getMusicByIds(ids,callback) {
        Music.find({_id : {$in : ids}},(err,docs) => {
            if(err) {
                return callback(500);
            } else {
                return callback(docs);
            }
        });
    }

    /**
     * 获取音乐列表
     * @param option
     * @param callback
     */
    getMusics(option,params,callback) {
        async.waterfall([
            // 获取音乐列表
            function(_callback) {
                Music.find(params,null,option,(err,docs) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,docs);
                    }
                });
            },

            // 获取发布音乐的用户
            function(docs,_callback) {
                if(docs === undefined || docs === null) {
                    return callback(null);
                } else {
                    let createUserIds = [];
                    for(let i =0, len = docs.length; i < len; i++) {
                        createUserIds.push(docs[i].create_user_id);
                    }
                    _callback(null,docs,createUserIds);
                }
            },

            function(docs,createUserIds,_callback) {
                User.find({_id : {$in : createUserIds}},(err,users) => {
                    console.log(err);
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,docs,users);
                    }
                });
            },

            // 将音乐和用户结合起来
            function(docs,users,_callback) {
                let result = [];
                for(let i = 0, len = docs.length; i < len; i++) {
                    let item = {};
                    item.data = docs[i];
                    for(let j = 0, num = users.length; j < num; j++) {
                        if(docs[i].create_user_id == users[j]._id) {
                            item.user = users[j];
                            break;
                        }
                    }
                    result.push(item);
                }
                _callback(null,{ _raw : result,count : result.length});
            }
        ],(err,result) => {
            return callback(result);
        });
    }

    /**
     * 上传音乐资料
     * @param params
     * @param where
     * @param callback
     */
    saveMusic(params,where,callback) {

        async.waterfall([

            //　查找用户是否存在
            function(_callback) {
                if(!where._id.match(/^[0-9a-fA-F]{24}$/)) {
                    return callback(404);
                }
                User.findOne(where,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else if(user === undefined || user === null) {
                        return callback(404);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            // 保存音乐资料
            function(user,_callback) {
                let music = new Music(params);
                music.save((err,product) => {
                    if(err) {
                        console.log(err);
                        return callback(500);
                    } else {
                        _callback(null,user,product);
                    }
                });
            },

            // 更新用户资料
            function(user,product,_callback) {
                if(product) {
                    user.music.push(product._id);
                    user.contribute.push(product._id);
                    user.save((err) => {
                        if(err) {
                            return callback(500);
                        } else {
                            _callback(null,200);
                        }
                    });
                }
            }
        ],(err,result) => {
            return callback(result);
        });
    }
}

export default new md();