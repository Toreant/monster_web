/**
 * Created by apache on 15-11-2.
 */
import async from 'async';
import Article from '../models/article';
import User from '../models/user';
import _ from 'underscore';
import CommonProxy from './CommonProxy';
var markdown = require('markdown-it');
var mark = new markdown();
class md {

    constructor() {
        this.commonProxy = new CommonProxy('article');
    }

    /**
     * 通过id号查找文章
     * @param id
     * @param u 登陆的用户
     * @param callback
     * @param transform 是否不转化成html
     */
    getArticleById(id,u,callback,transform = 'true') {

        async.waterfall([

            //查找文章
            function(_callback) {
                Article.findById(id,(err,docs) => {
                    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
                        return callback(404);
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
                        return callback(404);
                    }
                });
            },

            // 查看是否登陆的用户收藏了,点赞或踩了
            function(docs,_callback) {

                if(u === undefined) {
                    _callback(null,docs,false,2);
                } else {
                    User.findById(u._id,(err,user) => {
                        if(err) {
                            return callback(500);
                        }
                        let _id = docs._id.toString();
                        let stared = _.indexOf(user.star_article,_id)!== -1,
                            approved = _.indexOf(user.approve,_id+'_0') !== -1,
                            disapproved = _.indexOf(user.approve,_id+'_1') !== -1;

                        if(approved) {
                            _callback(null,docs,stared,0);
                        } else if(disapproved){
                            _callback(null,docs,stared,1);
                        } else {
                            _callback(null,docs,stared,2);
                        }
                    });
                }
            },

            // 查找文章的读者
            function(docs,stared,approved,_callback) {

                /**
                 * docs 文章
                 * stared 是否已经收藏过
                 * approved 0 -- 点了赞　　１-- 踩了人家　2 -- 什么也没有做过
                 */
                User.findById(docs.create_user_id,'username avatar_url domain introduce',(err,user) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,{article : docs, user : user,stared : stared,approved : approved});
                    }
                });

            }
        ],function(err,result) {

            if(transform === 'true') {
                // 将markdown转成html实体
                result.article.content = mark.render(result.article.content || '> 什么鬼页没有', 'Maruku');
            }
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
     * @param u
     * @param callback
     */
    updateArticle(where,params,u,callback) {

        this.commonProxy.update(where,params,u,callback);
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