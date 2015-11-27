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
    getMusicById(id,callback) {
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return callback(null);
        } else {
            Music.findById(id,(err,music) => {
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