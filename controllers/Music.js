/**
 * Created by apache on 15-11-25.
 */
import Music from '../proxy/music';
import User from '../proxy/user';
import async from 'async';

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
        console.log(id);

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
                            _callback(null,null,500);
                        } else {
                            _callback(null,{music : music,user : data[0]});
                        }
                    });
                }
            }
        ],(err,data) => {
            if(data.music === 500 || data.user === 500) {
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
}

export default new MusicCtrl();