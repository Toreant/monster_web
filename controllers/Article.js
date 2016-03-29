/**
 * Created by apache on 15-11-3.
 */
import article from '../proxy/article';
import User from '../models/user';
import _ from 'underscore';
import async from 'async';
import BasicContrl from './BasicController';

class ArticleCtrl {
    /**
     * 保存文章
     * @param req
     * @param res
     * @param next
     */
    getSaveArticle(req,res,next) {

        let params = req.body.params,
            token = req.body.token;

        params.create_user_id = req.session.user._id;

        article.saveArticle(params,params.create_user_id,(data) => {
            let result = {
                meta : '',
                code : 0
            };
            if(data === 500) {
                result.meta = '保存文章不成功';
            } else if(data === 406) {
                result.meta = '这个用户不存在';
            } else if(data === 200) {
                result.meta = '保存文章成功';
            }
            result.code = data;
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
        let id = req.params.id,
            user = req.session.user,
            transform =req.params.transform;

        article.getArticleById(id,user,(data) => {
            let result = {
                meta : '',
                code : 0,
                raw : null
            };

            if(data === 404) {
                result.meta = '找不到这个文章';
                result.code = 404;
            } else if(data === 500){
                result.meta= '服务器错误';
                result.code = 500;
            } else {
                result.meta  = '获取文章成功';
                result.code = 200;
                result.raw = data;
            }
            res.json(result);
        },transform);
    }


    /**
     * 获取文章列表
     * @param req
     * @param res
     */
    getArticles(req,res) {

        /**
         * option 选项
         * value 选择条件的值
         * query 选择的条件　null--全部　domain--通过域名　profile--本地用户
         */
        let option = req.body.option,
            value = req.body.value,
            query  = req.body.query,
            user = req.session.user;

        new BasicContrl('article').gets(query,value,option,(data) => {
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
            } else if(data === 404) {
                res.json({
                    meta : '404',
                    code : 404
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
     * 删除文章
     */
    deleteArticle(req,res,next) {
        let _id = req.params.id,
            user = req.session.user;

        let result = {
            meta : '',
            code : 0
        };

        article.deleteArticle(_id,user._id.toString(),(data) => {
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

    /**
     * 更新文章
     * @param req
     * @param res
     * @param next
     */
    updateArticle(req,res,next) {
        let params = req.body.params,
            where = req.body._id,
            user = req.session.user;

        let result = {
            meta : '',
            code : 0
        };

        article.updateArticle({_id : where},params,user._id.toString(),(data) => {

            if(data === 500) {
                result.meta = '服务器错误';
            } else if(data === 404) {
                result.meta = '不存在这个用户';
            } else if(data === 200) {
                result.meta = '更新成功';
            }

            result.code = 200;

            res.json(result);
        });
    }
}

export default new ArticleCtrl();