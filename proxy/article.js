/**
 * Created by apache on 15-11-2.
 */
import async from 'async';
import Article from '../models/article';
import User from '../models/user';

class md {
    /**
     * 通过id号查找文章
     * @param id
     * @param callback
     */
    getArticleById(id,callback) {

        async.waterfall([

            //查找文章
            function(_callback) {
                Article.findById(id,(err,docs) => {
                    _callback(null,docs);
                });
            },

            //查找文章的读者
            function(docs,_callback) {
                if(docs === null) {
                    _callback(null);
                } else {
                    User.findById(docs.create_user_id,'username avatar_url domain',(err,user) => {
                        if(err) {
                            console.log(err);
                        } else {
                            _callback(null,{article : docs, user : user});
                        }
                    });
                }
            }
        ],function(err,result) {
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
            callback(docs);
        });
    }

    /**
     * 保存文章
     * @param params
     * @param callback
     */
    saveArticle(params,callback) {
        let article = new Article(params);
        async.waterfall([
            //保存文章到文章collection中
            function(_callback) {
                article.save((err, product, numAffected) => {
                    if (err) {
                        return _callback(null,null);
                    } else {
                        return _callback(null,product);
                    }
                });
            },
            //保存文章id到用户的资料中
            function(result,_callback) {
                if(result === null) {
                    _callback(null);
                } else {
                    User.findOne({_id : params.create_user_id},(err,user) => {
                        if(user) {
                            user.contribute.push(result._id);
                            user.article.push(result._id);
                            user.save((err) => {
                                _callback(null,1);
                            });
                        } else {
                            _callback(null,0);
                        }
                    });
                }
            }
        ],(err,result) => {
            /**
             * result
             * 0 没找到这个用户
             * 1 保存资料成功
             * null 保存文章不成功
             */
            callback(result);
        });
    }

    /**
     * 更新文章
     * @param where
     * @param params
     * @param callback
     */
    updateArticle(where,params,callback) {

    }
}

export default new md();