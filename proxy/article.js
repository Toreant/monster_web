/**
 * Created by apache on 15-11-2.
 */
import async from 'async';
import Article from '../models/article';
import User from '../models/user';
import _ from 'underscore';

class md {
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
                    if(err) {
                        callback(500);
                    }
                    if(docs !== undefined && docs !== null) {
                        //文章阅读数增１
                        docs.browser_count += 1;
                        docs.save((err) => {
                            _callback(null,docs);
                        });
                    } else {
                        _callback(null,null);
                    }
                });
            },

            // 查看是否登陆的用户收藏了
            function(docs,_callback) {
                if(u === undefined) {
                    _callback(null,docs,false);
                } else {
                    User.findById(u._id,(err,user) => {
                        if(err) {
                            callback(500);
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

                if(docs === null) {
                    _callback(null,null,null);
                } else {
                    User.findById(docs.create_user_id,'username avatar_url domain introduce',(err,user) => {
                        if(err) {
                            callback(500);
                        } else {
                            _callback(null,docs, user,stared);
                        }
                    });
                }
            },

            // 推荐文章
            function(docs,user,stared,_callback) {
                if(docs === null && user === null) {
                    _callback(null,null);
                } else {
                    Article.find({},'title',{sort : {browser_count : -1},skip : 1,limit : 6},(err,articles) => {
                        _callback(null,{article : docs, user : user,stared : stared, recommend : articles});
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
     * 获取文章列表
     * @param option
     * @param callback
     */
    getArticles(option,callback,params = {}) {
        async.waterfall([
            /*
             获取文章
             */
            function(_callback) {
                Article.find(params,null,option,(err,docs) => {
                    if(err) {
                        _callback(null,500);
                    } else {
                        _callback(null,docs);
                    }
                });
            },

            /*
             获取作者
             */
            function(docs,_callback) {
                let ids = [];

                if(Array.isArray(docs)) {
                    for(let i=0, len = docs.length ; i < len; i++) {
                        ids.push(docs[i].create_user_id);
                    }

                    User.find({_id : {$in : ids}},(err,users) => {
                        if(err) {
                            _callback(null,docs,888);
                        } else {
                            _callback(null,docs,users);
                        }
                    });
                } else {
                    _callback(null,docs,null);
                }
            },

            /*
             把文章和作者组合在一起
             */
            function(docs,users,_callback) {
                if(docs === 500) {

                    /*
                     * 服务器错误
                     */
                    _callback(null,500);
                } else {
                    let result = [];
                    for(let i = 0, len = docs.length; i < len; i++) {
                        let item = {};
                        item.data = docs[i];
                        item.user = null;
                        for(let j = 0, num = users.length; j < num; j++) {
                            if(docs[i].create_user_id == users[j]._id) {
                                item.user = users[j];
                                break;
                            }
                        }
                        result.unshift(item);
                    }

                    _callback(null,result);
                }
            },

            //计算文章总数
            function(result,_callback) {
                if(result === 500) {
                    _callback(null,500);
                } else {
                    Article.count(params,function(err,count) {
                        console.log(count);
                        if(err) {
                            _callback(null,500);
                        } else {
                            _callback(null,{_raw: result,count: count});
                        }
                    });
                }
            }
        ],function(err,result) {
            /**
             * result = 500 ；服务器错误
             * result = 【｛article,user｝】 ; 结果
             */
            callback(result);
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