/**
 * Created by apache on 15-11-8.
 */
import Comment from '../proxy/comment';

class CommentCtrl {

    /**
     * 获取评论
     * @param req
     * @param res
     * @param next
     */
    getComments(req,res,next) {
        let params = req.body.params,
            option = req.body.option;
        let result = {
            meta : '',
            code : 0,
            raw  : null
        };

        if(Array.isArray(params)) {
            Comment.getArticleByIds(params,option,(data) => {
                if(docs === null) {
                    result.meta = '获取评论失败';
                    result.code = 400;
                } else {
                    result.meta = '获取评论成功';
                    result.code = 200;
                    result.raw  = data;
                }
                res.json(result);
            });
        } else {
            Comment.getCommentById(params,option,(data) => {
                if(data === null) {
                    result.meta = '获取评论失败';
                    result.code = 400;
                } else {
                    result.meta = '获取评论成功';
                    result.code = 200;
                    result.raw = data;
                }
                res.json(result);
            });
        }
    }


    /**
     * 删除评论
     * @param req
     * @param res
     * @param next
     */
    deleteComment(req,res,next) {
        let params = req.body.params;
        let result = {
            meta : '',
            code : 0
        };

        Comment.deleteComment(params,(data) => {
            if(data === null) {
                result.meta = '删除评论失败';
                result.code = 400;
            } else if(data === 1) {
                result.meta = '删除评论成功';
                result.code = 200;
            }
            res.json(result);
        });
    }

    /**
     * 保存评论
     * @param req
     * @param res
     * @param next
     */
    savaComment(req, res, next) {
        let params = req.body.params;

        params.create_user_id = req.session.user._id;
        let result = {
            meta: '',
            code: 0,
            data: null
        };

        Comment.saveComment(params, (data,product) => {
            if (data === null) {
                result.meta = '评论失败';
                result.code = 400;
            } else {
                result.meta = '评论成功';
                result.code = 200;
                result.data = product;
            }

            res.json(result);
        });
    }
}

export default new CommentCtrl();