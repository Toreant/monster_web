/**
 * Created by apache on 15-12-1.
 */
import Animate from '../models/animate';
import User from '../models/user';
import _ from 'underscore';
import async from 'async';

class md {

    /**
     * 上传动漫
     * @param params
     * @param user
     * @param callback
     */
    postAnimate(params,user,callback) {
        async.waterfall([

            // 查找用户
            function(_callback) {
                User.findById(user,(err,user) => {
                   if(err) {
                       return callback(500);
                   } else if(user === null) {
                       return callback(404);
                   } else {
                       _callback(null,user);
                   }
                });
            },

            // 保存动漫
            function(user,_callback) {
                let animate = new Animate(params);
                animate.save((err,product,raw) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,product);
                    }
                });
            }
        ],(err,result) => {
            return callbac(result);
        });
    }

    /**
     * 获取动漫
     * @param id
     * @param user
     * @param callback
     */
    getAnimate(id,user_id,callback) {
        async.waterfall([

            // 获取动漫
            function(_callback) {
                if(!id.match(/^[0-9a-fA-F]{24}$/)) {
                    return callback(404);
                } else {
                    Animate.findById(id,(err,animate) => {
                        if(err) {
                            return callback(500);
                        } else if(animate === null) {
                            return callback(404);
                        } else {
                            _callback(null,animate);
                        }
                    });
                }
            },

            // 查找发布这个动漫的用户
            function(animate,_callback) {
                User.findById(animate.create_user_id,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,animate,user);
                    }
                });
            },

            // 查看是否收藏了这个动漫
            function(animate,user,_callback) {
                if(user_id === undefined) {
                    _callback(null,{data: animate,user: user,stared : false});
                } else {
                    User.findById(user_id,(err,local_user) => {
                        if(err) {
                            return callback(500);
                        } else if(local_user === null) {
                            _callback(null,{data: animate,user: user,stared : false});
                        } else if(_.indexOf(local_user.star_animate,aniamte._id) !== -1){
                            _callback(null,{data: animate,user: user,stared : true});
                        } else {
                            _callback(null,{data: animate,user: user,stared : false});
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