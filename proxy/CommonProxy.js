/**
 * Created by apache on 15-12-15.
 */
import _ from 'underscore';
import Article from '../models/article';
import Music from '../models/music';
import Animate from '../models/animate';
import User from '../models/user';
import async from 'async';

class CommonProxy {

    constructor(column) {
        this.Model = null;
        this.column = column;
        if(column === 'article') {
            this.Model = Article;
        } else if(column === 'music') {
            this.Model = Music;
        } else {
            this.Model = Animate;
        }
    }

    /**
     * 保存数据
     * @param params　数据
     * @param u       用户id
     * @param callback
     */
    create(params,u,callback) {
        let column = this.column,
            Model = this.Model;

        async.waterfall([

            // 查看用户是否存在
            function(_callback) {
                User.findById(u,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else if(user === null) {
                        return callback(406);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            // 保存资料
            function(user,_callback) {
                let model = new Model(params);
                model.save((err,product) => {
                   if(err) {
                       return callback(500);
                   } else {
                       _callback(null,user,product);
                   }
                });
            },

            // 更新用户资料
            function(user,product,_callback) {
                if(product) {
                    user[column].push(product._id);
                    user.contribute.push(product._id);
                    user.save((err) => {
                        if(err) {
                            return callback(500);
                        } else {
                            _callback(null,200);
                        }
                    });
                }
            }
        ],(err,result) => {
            return callback(result);
        });
    }

    /**
     * 删除
     * @param _id
     * @param u 用户id
     * @param callback
     */
    delete(_id,u,callback) {
        let model = this.Model;
        let column = this.column;

        async.waterfall([

            // 找到用户
            function(_callback) {
                User.findById(u,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else if(user === null) {
                        return callback(406);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            // 在数据库中删除文章那个
            function(user,_callback) {
                model.findByIdAndRemove(_id,(err,data) => {
                    if(err) {
                        return callback(500);
                    } else if(data === null) {
                        return callback(404);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            // 更新用户资料
            function(user,_callback) {
                user.contribute = _.without(user.contribute,_id);
                user[column] = _.without(user[column],_id);
                user.save((err) => {
                    if(err) {
                        _callback(null,500);
                    } else {
                        _callback(null,200);
                    }
                });
            }
        ],(err,result) => {
            return callback(result);
        });
    }

    /**
     * 获取一组数据
     * @param params
     * @param option
     * @param callback
     */
    gets(params,option,callback) {
        let Model = this.Model;

        async.waterfall([
            /*
             获取数据
             */
            function(_callback) {
                Model.find(params,null,option,(err,docs) => {
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
                        result.push(item);
                    }

                    _callback(null,result);
                }
            },

            //计算总数
            function(result,_callback) {
                if(result === 500) {
                    _callback(null,500);
                } else {
                    Model.count(params,function(err,count) {
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
     * 更新
     * @param where
     * @param params
     * @param u
     * @param callback
     */
    update(where,params,u,callback) {
        let Model = this.Model;
        async.waterfall([

            // 查找用户
            function(_callback) {
                User.findById(u,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else if(user === null) {
                        return callback(406);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            // 更新
            function(user,_callback) {
                Model.update(where,params,(err,raw) => {
                    console.log(raw);
                    if(err) {
                        _callback(null,500);
                    } else {
                        _callback(null,200);
                    }
                });
            }
        ],(err,result) => {
            return callback(result);
        });
    }
}

export default CommonProxy;