/**
 * Created by apache on 15-11-3.
 */
import article from '../proxy/article';
import user from '../proxy/user';
import md from 'markdown';
import _ from 'underscore';

class ArticleCtrl {
    /**
     * 保存文章
     * @param req
     * @param res
     * @param next
     */
    getSaveArticle(req,res,next) {
        let params = req.body.params;
        article.saveArticle(params,(data) => {
            let result = {
                meta : '',
                code : 0
            };
            if(data === null) {
                result.meta = '保存文章不成功';
                result.code = 500;
            } else if(data === 0) {
                result.meta = '这个用户不存在';
                result.code = 400;
            } else if(data === 1) {
                result.meta = '保存文章成功';
                result.code = 200;
            }
            res.json(result);
        });
    }

    /**
     * 获取文章
     * @param req
     * @param res
     * @param next
     */
    getArticle(req,res,next) {
        let id = req.body.id;
        let result = {
            meta : '',
            code : 0,
            raw : null
        };
        let markdown = md.markdown;
        article.getArticleById(id,(data) => {
            console.log('data : '+data);
            result.meta = '获取文章成功';
            result.code = 200;
            result.raw = data;
            res.json(result);
        });
    }
}

export default new ArticleCtrl();