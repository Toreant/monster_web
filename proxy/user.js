/**
 * Created by apache on 15-10-25.
 */
import async from 'async';
import User from '../models/user';
import Article from '../models/article';
import Music from '../models/music';
import Animate from '../models/animate';
import CommonProxy from '../proxy/CommonProxy';
import _ from 'underscore';

class md {
    constructor() {
        this.query = 'username avatar_url introduce domain email following followers star star_article star_music star_animate ' +
            'article music animate contribute';
    }
    /**
     * 保存用户和新增用户
     * @param email 邮箱
     * @param password 注册密码
     * @param name 用户名
     * @param domain
     * @param callback
     */
    saveUser(email, password, name,domain, callback) {
        let user = new User({
            email: email,
            password: password,
            username: name,
            domain : domain
        });
        user.save((err, product, numAffected) => {
            if (err) {
                return callback(err);
            } else {
                return callback(numAffected,product);
            }
        });
    }



    /**
     * 更新用户资料
     * @param where
     * @param params
     * @param callback
     */
    updateUser(where,params,callback) {
        User.update(where,params,{upsert : true},(err,raw,docs) => {
            if(err) {
                callback(500);
            } else {
                callback(raw,docs);
            }
        });
    }

    /**
     * 通过邮箱查找用户
     * @param email
     * @param callback
     */
    getUserByEmail(email, callback) {
        User.find({email: email},this.query,(err, docs) => {
            if (err) return callback(err);
            else callback(docs);
        });
    }

    /**
     * 通过用户名查找
     * @param name
     * @param callback
     */
    getUser(where,callback) {
        User.find(where,this.query, (err, docs) => {
            if (err) callback(err);
            else callback(docs);
        });
    }

    /**
     * @param email
     * @param password
     * @param callback
     */
    getUserByEmailAndPwd(email,password,callback) {
        User.find({email : email,password : password},this.query,(err,docs) => {
            if(err) {
                callback(err);
            } else {
                callback(docs);
            }
        });
    }

    /**
     * 通过账号id获取用户
     * @param arrayId
     * @param option
     * @param callback
     */
    getUserById(arrayId,option,callback) {
        User.find({_id : {$in : arrayId}},this.query,option,(err,docs) => {
            if(err) {
                callback(500);
            } else {
                callback(docs);
            }
        });
    }

    getUsers(skip,callback) {
        User.find({},this.query,{skip: skip,limit: 20},(err,docs) => {
            if(err) {
                callback(err);
            } else {
                callback(docs);
            }
        })
    }

    /**
     * 通过个性域名查找
     * @param u 本地用户
     * @param domain
     * @param callback
     */
    getUserByDomain(domain,callback,u) {
        User.findOne({domain : domain},this.query,(err,docs) => {

            if(err) {
                return callback(500);
            } else if(docs === null) {
                return callback(404);
            } else {
                if(u === null || u === undefined) {
                    return callback({_raw : docs,followed : false});
                } else {
                    User.findById(u.toString(),(err,user) => {
                        let followed = _.indexOf(user.following,docs._id.toString()) !== -1;
                        return callback({_raw : docs,followed : followed});
                    });
                }
            }
        });
    }

    /**
     * 获取关注的用户
     * @param where
     * @param callback
     */
    getFollowing(where,option,callback) {
        async.waterfall([
            //查找用户
            function(_callback) {
                User.findOne(where,(err,user) => {
                    _callback(null,user);
                });
            },
            //查找本地用户中的关注数组
            function(user,_callback) {
                if(user === null) {
                    return callback(404);
                } else {
                    let following = user.following;
                    User.find({_id : {$in : following}},'username domain avatar_url introduce',option,(err,docs) => {
                        if(err) {
                            return callback(500);
                        } else if(docs === null) {
                            return callback(null);
                        } else {
                            _callback(null,docs);
                        }
                    });
                }
            },

            // 标上已关注
            function(users,_callback) {
                let result = [];
                for(let i = 0, num = users.length; i < num; i++) {
                    let item = {};
                    item.user = users[i];
                    item.following = true;
                    result.push(item);
                }
                _callback(null,result);
            }
        ],function(err,result){
            callback(result);
        });
    }

    /**
     * 获取关注我的用户
     * @param where
     * @param option
     * @param user  本地用户
     * @param callback
     */
    getFollowers(where,option,user,callback) {
        async.waterfall([

            // 检查where中的followers
            function(_callback) {
                User.findOne(where,'followers',(err,u) =>{
                    if(err) {
                        return callback(500);
                    } else {
                        if(u === null) {
                            return callback(404);
                        } else {
                            _callback(null,u.followers);
                        }
                    }
                });
            },

            // 实例化followers
            function(followers,_callback) {
                User.find({_id : {$in : followers}},'username domain avatar_url introduce',option,(err,users) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,users);
                    }
                });
            },

            //　检查用户中是否有我关注的
            function(users,_callback) {
                if(user === undefined) {
                    let result = [],
                        item = {};

                    for(let i = 0, len = users.length; i < len ; i++) {
                        item.user = users[i];
                        item.following = false;
                        result.unshift(item);
                    }

                    _callback(null,result);
                } else {
                    User.findById(user._id,'following',(err,docs) => {

                        let following = docs.following;

                        if(err) {
                            return callback(500);
                        } else {
                            let result = [];


                            for(let i=0, len = users.length; i < len; i++) {
                                let item = {};
                                item.user = users[i];

                                if(_.indexOf(following,users[i]._id.toString()) !== -1) {
                                    item.following = true;
                                } else {
                                    item.following = false;
                                }

                                result.unshift(item);
                            }
                            _callback(null,result);
                        }
                    });
                }
            }
        ],(err,result) => {
            callback(result);
        });
    }

    /**
     * 添加关注，取消关注
     * @param where
     * @param auth_id
     * @param callback
     * @param option 0--关注 1--取消关注
     */
    follow(where,auth_id,option,callback) {
        async.waterfall([

            /* 查找本地用户 */
            function(_callback) {
                if(!auth_id.match(/^[0-9a-fA-F]{24}$/)) {
                    return callback(404);
                }
                User.findOne(where,(err,user) => {
                    if(err) {
                        return callback(500);
                    }
                    if(user === null) {
                        return callback(400);
                    } else{
                        _callback(null,user);
                    }
                });
            },

            /* 查找auth_id是否存在 */
            function(user,_callback) {
                User.findOne({_id : auth_id},(err,docs) => {
                    if(err) {
                        return callback(500);
                    } else if(docs === null) {
                        return callback(404);
                    } else {
                        _callback(null,docs,user);
                    }
                })
            },

            /* 检查这个用户是否已经在关注的列表中 */
            function(docs,user,_callback){

                let following = user.following;
                /* 关注功能 */
                if(option === 0　&& _.indexOf(following,auth_id) !== -1) {
                    _callback(null,304);
                } else if(option === 0) {
                    user.following.push(auth_id);
                } else if(option === 1 && _.indexOf(following,auth_id) === -1){
                    /* 取消关注功能 */
                    _callback(null,304);
                } else {
                    user.following = _.without(user.following,auth_id);
                }

                // 保存用户
                user.save((err) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,200);
                    }
                });

            }
        ],(err,result) => {
            /**
             * result
             * 200 关注(取消关注)成功
             * 304 已经关注过（关注功能） 或 不在关注列表中（取消关注功能）
             * 404 要关注的用户不存在
             * 410 本地用户不存在
             * 500 服务器错误
             */
            callback(result);
        });
    }

    /**
     * 收藏
     * @param user_id
     * @param star_id
     * @param column
     * @param callback
     */
    getStar(user_id,star_id,column,callback) {
        async.waterfall([

            // 查找用户
            function(_callback) {
                User.findOne({_id : user_id},(err,user) => {
                    if(err) {
                        callback(500);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            // 添加关注到用户资料中
            function(user,_callback) {
                if(user === null) {
                    callback(404);
                } else {
                    if(_.indexOf(user.star,star_id) === -1) {
                        switch(column) {
                            case 'article' :
                                user.star_article.unshift(star_id);
                                break;
                            case 'music' :
                                user.star_music.unshift(star_id);
                                break;
                            case 'animate' :
                                user.star_animate.unshift(star_id);
                                break;
                        }
                        user.star.unshift(star_id);
                        user.save((err, product, numAffected) => {
                            if(err) {
                                _callback(null,500);
                            } else {
                                _callback(null,200);
                            }
                        });
                    } else {
                        _callback(null,304);
                    }
                }
            },

            // 更新star
            function(result,_callback) {
                if(result === 200) {
                    let Model;
                    switch(column) {
                        case 'article' :
                            Model = Article;
                            break;
                        case 'music' :
                            Model = Music;
                            break;
                        case 'animate' :
                            Model = Animate;
                            break;
                    }

                    // 查找，并更新
                    Model.findById(star_id,(err,data) => {
                        if(err) {
                            return callback(500);
                        } else {
                            data.stars = data.stars + 1;
                            data.save((err) => {
                                if(err) {
                                    return callback(500);
                                } else {
                                    _callback(null,200);
                                }
                            });
                        }
                    });
                } else {
                    _callback(null,result);
                }
            }
        ],function(err,result) {
            /**
             * result
             * 200 成功收藏
             * 304　已经收藏过
             * 404 没有这个用户
             * 500　服务器错误
             */
            callback(result);
        });
    }

    /**
     * 取消关注
     * @param user_id
     * @param star_id
     * @param column
     * @param callback
     */
    unStar(user_id,star_id,column,callback) {
        async.waterfall([

            //　查找用户
            function(_callback) {
                User.findOne({_id : user_id},(err,user) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            //　取消关注
            function(user,_callback) {
                if(user === null) {
                    callback(404);
                } else {
                    if(_.indexOf(user.star,star_id) === -1) {
                        return callback(304);
                    } else {
                        user.star = _.without(user.star,star_id);
                        switch(column) {
                            case 'article' :
                                user.star_article = _.without(user.star_article,star_id);
                                break;
                            case 'music' :
                                user.star_music = _.without(user.star_music,star_id);
                                break;
                            case 'animate' :
                                user.star_animate = _.without(user.star_animate,star_id);
                                break;
                        }
                        user.save((err) => {
                            if(err) {
                                return callback(500);
                            } else {
                                _callback(null,200);
                            }
                        });
                    }
                }
            },

            // 更新star
            function(result,_callback) {
                if(result === 200) {
                    let Model;

                    switch(column) {
                        case 'animate' :
                            Model = Animate;
                            break;
                        case 'music' :
                            Model = Music;
                            break;
                        case 'article' :
                            Model = Article;
                            break;
                    }

                    //　查找，并更新
                    Model.findById(star_id,(err,data) => {
                        if(err) {
                            return callback(500);
                        } else {
                            data.stars = data.stars -1;
                            data.save((err) => {
                                if(err) {
                                    return callback(500);
                                } else {
                                    _callback(null,200);
                                }
                            });
                        }
                    });
                } else {
                    _callback(null,result);
                }
            }
        ],(err,result) => {
            callback(result);
        });
    }

    /**
     * 获取收藏列表
     * @param user
     * @param skip
     * @param option 选择那个关注列表 all article music animate
     * @param callback
     */
    getStars(user,skip,option,callback) {
        async.waterfall([

            // 获取用户的收藏列表
            function(_callback) {
                User.findOne(user,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else {
                        switch (option) {
                            case 'all' :
                                _callback(null,user.star);
                                break;
                            case 'article' :
                                _callback(null,user.star_article);
                                break;
                            case 'music' :
                                _callback(null,user.star_music);
                                break;
                            case 'animate' :
                                _callback(null,user.star_animate);
                                break;
                        }
                    }
                });
            },

            // 实例化收藏列表
            function(starList,_callback) {
                if(starList === null) {
                    return callback(404);
                }
                switch (option) {
                    case 'all' :
                        _callback(null,starList);
                        break;
                    case 'article' :
                        Article.find({_id : {$in : starList}},null,{skip : skip,limit: 10},(err,docs) => {
                            if(err) {
                                return callback(500);
                            } else {
                                return callback({_raw : docs,count : starList.length});
                            }
                        });
                        break;
                    case 'music' :
                        return callback(null);
                        break;
                    case 'animate' :
                        return callback(null);
                        break;
                }
            },

            // 藏的文章收
            function(starList,_callback) {
                Article.find({_id : {$in : starList}},null,{skip : skip,limit: 10},(err,docs) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,{_raw : docs,count : starList.length});
                    }
                });
            }
        ],(err,result) => {
            callback(result);
        });
    }
}

export default new md();