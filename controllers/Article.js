/**
 * Created by apache on 15-11-3.
 */
import article from '../proxy/article';
import user from '../proxy/user';
import _ from 'underscore';
import async from 'async';

class ArticleCtrl {
    /**
     * 保存文章
     * @param req
     * @param res
     * @param next
     */
    getSaveArticle(req,res,next) {

        let params = req.body.params;
        params.create_user_id = req.session.user._id;

        article.saveArticle(params,params.create_user_id,(data) => {
            let result = {
                meta : '',
                code : 0
            };
            if(data === 500) {
                result.meta = '保存文章不成功';
                result.code = 500;
            } else if(data === 406) {
                result.meta = '这个用户不存在';
                result.code = 400;
            } else if(data === 200) {
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
        let id = req.params.id,
            user = req.session.user,
            transform =req.params.transform;
        console.log(transform);

        article.getArticleById(id,user,(data) => {
            let result = {
                meta : '',
                code : 0,
                raw : null
            };

            if(data === null) {
                result.meta = '找不到这个文章';
                result.code = 400;
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
     * @param next
     */
    getArticles(req,res,next) {
        let option = req.body.option,
            params = req.body.params;

        // 通过create_user_id查找
        if(params !== undefined && params.create_user_id !== undefined) {
            let user = req.session.user;
            if(user === undefined) {
                res.json({meta : '你还没有登陆',code : 406});
            } else {
                params.create_user_id = user._id;
            }
        }

        /**
         * 查找文章，可能是通过create_user_domain查找
         * 但是，这个domain可以修改的，所以，要先通过domain，找到这个user,通过user的_id
         * 查找条件为{create_user_id}
         */
        async.waterfall([

            function(_callback) {

                // 如果是通过domain查找文章，先通过domain找到给用户，获取用户id
                if(params !== undefined && params.create_user_domain !== undefined) {
                    user.getUserByDomain(params.create_user_domain,(user) => {
                        if(user === 500) {
                            res.json({meta : '服务器错误',code : 500});
                        } else if(user === null) {
                            res.json({meta : '找不到这个用户',code : 406});
                        } else {
                            _callback(null,{create_user_id : user._id});
                        }
                    });
                } else {
                    _callback(null,params);
                }
            }
        ],(err,params) => {
            article.getArticles(option,(data) => {
                let result = {
                    meta : '',
                    code : 0,
                    raw  : null
                };
                if(data === 500) {
                    result.meta = '服务器错误';
                    result.code = 500;
                } else {
                    result.meta = '获取文章列表成功';
                    result.code = 200;
                    result.raw  = data;
                }
                res.json(result);
            },params);
        });
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