/**
 * Created by apache on 15-11-25.
 */
import Music from '../proxy/music';
import User from '../models/user';
import async from 'async';
import _ from 'underscore';
import BasicController from './BasicController';

class MusicCtrl {

    // 分享音乐
    postMusic(req,res) {
        let params  = req.body.params,
            user_id = req.session.user._id;

        params.create_user_id = user_id;

        Music.saveMusic(params,{_id : user_id},(data) => {
            let result = {
                meta : '',
                code : 0
            };

            if(data === 500) {
                result.code = 500;
                result.meta = '服务器错误';
            } else if(data === 404) {
                result.code = 404;
                result.meta = '这个用户不存在';
            } else {
                result.code = 200;
                result.meta = '分享成功';
            }

            res.status(result.code).json(result);
        });
    }

    /**
     * 获取音乐
     * @param req
     * @param res
     */
    getMusic(req,res) {
        let id = req.params.id,
            visitor = req.session.user;

        let result = {
            meta : '',
            code : 0,
            raw  : null
        };

        async.waterfall([

            // 获取音乐
            function(_callback) {
                Music.getMusicById(id,visitor,(music) => {
                    if(music === null) {
                        return res.json({
                            meta : '404找不到哟~~',
                            code : 404
                        });
                    } else if(music === 500) {
                        return res.json({
                            meta : '服务器错误',
                            code : 500
                        });
                    } else {
                        _callback(null,music);
                    }
                });
            },

            // 获取发布音乐的用户
            function(music,_callback) {
                User.findById(music.create_user_id,'avatar_url username summary domain',(err,user) => {
                    if(err) {
                        return res.json({
                            meta : '服务器错误',
                            code : 500
                        });
                    } else {
                        _callback(null,{music : music,user :user});
                    }
                });
            },

            // 判断用户是否收藏了这个音乐
            function(data,_callback) {
                let local_user = req.session.user;

                if(local_user === undefined) {

                    // 未登陆的当做还没收藏
                    data.stared = false;
                    _callback(null,data);
                } else {

                    // 查找用户
                    User.findById(local_user._id,(err,user) => {

                        if(err) {
                            _callback(null,500);
                        } else if(user === null) {

                            data.stared = false;
                            _callback(null,data);

                        }else if(_.indexOf(user.star,data.music._id.toString()) !== -1) {

                            // 这首歌在用户的收藏列表中
                            data.stared = true;
                            _callback(null, data);

                        } else {
                            data.stared = false;
                            _callback(null,data);
                        }
                    });
                }
            },

            // 查找访客
            function(data,_callback) {
                if(data.music.visitor.length === 0) {
                    data.vistor = [];
                    _callback(null,data);
                } else {
                    let visitors = data.music.visitor;
                    User.find({_id : {$in : visitors}},'avatar_url username domain',(err,users) => {
                        if(err) {
                            return res.json({
                                meta : '服务器错误',
                                code : 500
                            });
                        } else {
                            data.visitor = users;
                            _callback(null,data);
                        }
                    });
                }
            }
        ],(err,data) => {
            result.meta = '查找音乐成功';
            result.code = 200;
            result.raw = data;
            res.status(result.code).json(result);
        });
    }


    /**
     * 获取音乐列表
     * @param req
     * @param res
     */
    getMusics(req,res) {
        let option = req.body.option,
            value = req.body.value,
            query = req.body.query,
            user = req.session.user;

        new BasicController('music').gets(query,value,option,(data) => {
            if(data === 500) {
                res.json({
                    meta : '服务器错误',
                    code : 500
                });
            } else if(data === 406) {
                res.json({
                    meta : '你还没登陆',
                    code : 406
                });
            } else if(data !== null) {
                res.json({
                    meta : '查找成功',
                    code : 200,
                    raw  : data
                });
            }
        },user);
    }

    /**
     * 删除
     * @param req
     * @param res
     * @param next
     */
    deleteMusic(req,res,next) {
        let _id = req.params.id,
            user = req.session.user;

        let result = {
            meta : '',
            code : 0
        };

        Music.deleteMusic(_id,user._id.toString(),(data) => {
            switch(data) {
                case 200 :
                    result.meta = '删除成功';
                    break;
                case 404 :
                    result.meta = '这篇文章不存在';
                    break;
                case 406 :
                    result.meta = '用户不存在';
                    break;
                case 500 :
                    result.meta = '服务器错误';
                    break;
            }
            result.code = data;
            res.json(result);
        });
    }
}

export default new MusicCtrl();