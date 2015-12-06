/**
 * Created by apache on 15-12-5.
 */
import Notice from '../proxy/notice';

class NoticeCtrl {

    /**
     * 获取未读通知（私信）
     * @param req
     * @param res
     * @param next
     */
    getNotice(req,res,next) {
        let user = req.session.user,
            result = {
                meta : '',
                code : 0,
                raw  : null
            };

        Notice.getNotice(user._id,(data) => {
            if(data === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else if(data === 404) {
                result.meta = '找不到这个用户';
                result.code = 404;
            } else {
                result.meta = '获取通知成功';
                result.code = 200;
                result.raw  = data;
            }
            res.json(result);
        });
    }

    /**
     * 发送通知（私信）
     * @param req
     * @param res
     * @param next
     */
    postNotice(req,res,next) {
        let params = req.body.params,
            receiver = params.receiver,
            user = req.session.user;

        console.log(receiver);

        params.create_user_id = user._id;

        let result = {
            meta : '',
            code : 0
        };

        Notice.postNotice(user._id,receiver,params,(data) => {
            if(data === 500) {
                result.meta = '服务器错误';
            } else if(data === 404) {
                result.meta = '私信的用户不存在';
            } else {
                result.meta = '发送私信成功';
            }
            result.code = data;
            res.json(result);
        });
    }


    /**
     * 查看私信，通知
     * @param req
     * @param res
     * @param next
     */
    viewNotice(req,res,next)　{
        let user = req.session.user,
            noticeId = req.params.id;

        let result = {
            meta : '',
            code : 0,
            count  : 0
        };

        Notice.viewNotice(user._id,noticeId,(data) => {
            if(data === 500) {
                result.meta = '服务器错误';
                result.code = 500;
            } else if(data === 404) {
                result.meta = '通知不存在';
                result.code = 404;
            } else {
                result.meta = '读取通知成功';
                result.code = 200;
                result.count = data.count;
            }

            res.json(result);
        });
    }
}

export default new NoticeCtrl();