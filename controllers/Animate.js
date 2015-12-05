/**
 * Created by apache on 15-12-1.
 */
import Animate from '../proxy/animate';

class AnimateCtrl {

    /**
     * 上传动漫
     * @param req
     * @param res
     * @param next
     */
    postAnimate(req,res,next) {
        let params = req.body.params,
            user = req.session.user;
        params.create_user_id = user._id;

        let result = {
            meta : '',
            code : 0
        };

        Animate.postAnimate(params,user._id,(data) => {
            if(data === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else if(data === 404) {
                result.meta = '用户不存在';
                result.code = 404;
            } else {
                result.meta = '分享成功';
                result.code = 200;
            }
            res.json(result);
        });
    }


    /**
     * 获取动漫
     * @param req
     * @param res
     * @param next
     */
    getAnimate(req,res,next) {
        let id = req.params.id,
            user = req.session.user;

        let result = {
            meta : '',
            code : 0,
            raw  : null
        };
        Animate.getAnimate(id,user === undefined?undefined:user._id,(data) => {
            if(data === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else if(data === 404) {
                result.meta = '404 Not Found';
                result.code = 404;
            } else {
                result.meta = '获取动漫成功';
                result.code = 200;
                result.raw  = data;
            }
            res.json(result);
        });
    }

    /**
     * 获取动漫列表
     * @param req
     * @param res
     * @param next
     */
    getAnimates(req,res,next) {
        let params = req.body.params,
            option = req.body.option;

        let result = {
            meta : '',
            code : 0,
            raw  : null
        };

        Animate.getAnimates(params,option,(data) => {
            if(data === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else if(data === null) {
                result.meta = '没有动漫';
                result.code = 404;
            } else {
                result.meta = '获取动漫列表成功';
                result.code = 200;
                result.raw  = data;
            }
            res.json(result);
        });
    }
}

export default new AnimateCtrl();