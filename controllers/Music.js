/**
 * Created by apache on 15-11-25.
 */
import Music from '../proxy/music';

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
}

export default new MusicCtrl();