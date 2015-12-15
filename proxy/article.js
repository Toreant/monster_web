/**
 * Created by apache on 15-11-2.
 */
import async from 'async';
import Article from '../models/article';
import User from '../models/user';
import _ from 'underscore';
import CommonProxy from './CommonProxy';
var markdown = require( "markdown" ).markdown;

class md {

    constructor() {
        this.commonProxy = new CommonProxy('article');
    }

    /**
     * 通过id号查找文章
     * @param id
     * @param u 登陆的用户
     * @param callback
     */
    getArticleById(id,u,callback) {

        async.waterfall([

            //查找文章
            function(_callback) {
                Article.findById(id,(err,docs) => {
                    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
                        return callback(null);
                    }
                    if(err) {
                        return callback(500);
                    }
                    if(docs != undefined && docs !== null) {
                        //文章阅读数增１
                        docs.browser_count += 1;
                        docs.save((err) => {
                            _callback(null,docs);
                        });
                    } else {
                        return callback(null);
                    }
                });
            },

            // 查看是否登陆的用户收藏了
            function(docs,_callback) {
                if(docs === 400) {
                    _callback(null,docs,false);
                }
                if(u === undefined) {
                    _callback(null,docs,false);
                } else {
                    User.findById(u._id,(err,user) => {
                        if(err) {
                            return callback(500);
                        }
                        if(_.indexOf(user.star_article,docs._id.toString()) === -1) {
                            _callback(null,docs,false);
                        } else {
                            _callback(null,docs,true);
                        }
                    });
                }
            },

            // 查找文章的读者
            function(docs,stared,_callback) {
                if(docs === 400) {
                    _callback(null,400,null,null);
                } else {
                    User.findById(docs.create_user_id,'username avatar_url domain introduce',(err,user) => {
                        if(err) {
                            return callback(500);
                        } else {
                            _callback(null,{article : docs, user : user,stared : stared});
                        }
                    });
                }
            }
        ],function(err,result) {

            // 将markdown转成html实体
            result.article.content = markdown.toHTML(result.article.content, 'Maruku');
            callback(result);
        });
    }

    /**
     * 通过一组_id查找文章数组
     * @param ids
     * @param callback
     */
    getArticleByIds(ids,callback) {
        Article.find({_id : {$in : ids}},(err,docs) => {
            if(err) {
                return callback(500);
            } else {
                return callback(docs);
            }
        });
    }


    /**
     * 获取文章列表
     * @param option
     * @param callback
     */
    getArticles(option,callback,params = {}) {

        this.commonProxy.gets(params,option,callback);
    }

    /**
     * 保存文章
     * @param params 保存的数据
     * @param u 用户id
     * @param callback
     */
    saveArticle(params,u,callback) {

        this.commonProxy.create(params,u,callback);
    }

    /**
     * 更新文章
     * @param where
     * @param params
     * @param callback
     */
    updateArticle(where,params,callback) {

    }

    /**
     * 删除文章
     * @param _id 文章id
     * @param u 用户id
     * @param callback
     */
    deleteArticle(_id,u,callback) {

        this.commonProxy.delete(_id,u,callback);
    }
}

export default new md();