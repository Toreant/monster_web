/**
 * Created by apache on 15-11-25.
 */
import Music from '../proxy/music';
import User from '../proxy/user';
import async from 'async';
import _ from 'underscore';

class MusicCtrl {

    // 分享音乐
    postMusic(req,res) {
        let params  = req.body.params,
            user_id = req.session.user._id;

        console.log(params);

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
     * @param next
     */
    getMusic(req,res,next) {
        let id = req.params.id;

        let result = {
            meta : '',
            code : 0,
            raw  : null
        };

        async.waterfall([

            // 获取音乐
            function(_callback) {
                Music.getMusicById(id,{},(data) => {
                    _callback(null,data);
                });
            },

            // 获取发布音乐的用户
            function(music,_callback) {
                if(music === null || music === 500) {
                    _callback(null,{music : music,user : null});
                } else {
                    User.getUserById([music.create_user_id],{},(data) => {
                        if(data === 500) {
                            _callback(null,{music : music,user :500});
                        } else {
                            _callback(null,{music : music,user : data[0]});
                        }
                    });
                }
            },

            // 判断用户是否收藏了这个音乐
            function(data,_callback) {
                let local_user = req.session.user;

                if(local_user === undefined) {

                    // 未登陆的当做还没收藏
                    data.stared = false;
                    _callback(null,data);
                } else if(local_user !== undefined && data.music !== null && data.music !== 500 ){

                    // 查找用户
                    User.getUser({ _id : local_user._id },(user) => {

                        if(user === 500) {
                            _callback(null,500);
                        } else if(_.indexOf(user[0].star,data.music._id.toString()) !== -1) {

                            // 这首歌在用户的收藏列表中
                            data.stared = true;
                            _callback(null, data);
                        } else {
                            data.stared = false;
                            _callback(null,data);
                        }
                    });
                } else {

                    // 音乐查找有问题，当做为收藏
                    data.stared = false;
                    _callback(null,data);
                }
            }
        ],(err,data) => {
            if( data === 500 || data.music === 500 || data.user === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else if (data.music === null){
                result.meta = '找不到这个音乐';
                result.code = 404;
            } else {
                result.meta = '查找成功';
                result.code = 200;
                result.raw = data;
            }
            res.status(result.code).json(result);
        });
    }


    /**
     * 获取音乐列表
     * @param req
     * @param res
     * @param next
     */
    getMusics(req,res,next) {
        let option = req.body.option,
            params = req.body.params;
        if(params === undefined) {
            Music.getMusics(option,params,(data) => {
                let result = {
                    meta : '',
                    code : 0,
                    raw  : null
                };
                if(data === 500) {
                    result.meta = '服务器错误';
                    result.code = 500;
                } else if(data === null) {
                    result.meta = '没有找到音乐';
                    result.code = 404;
                } else {
                    result.meta = '查找音乐成功';
                    result.code = 200;
                    result.raw  = data;
                }
                res.json(result);
            });
        }
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

        Music.deleteArticle(_id,user._id.toString(),(data) => {
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