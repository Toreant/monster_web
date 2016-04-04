/**
 * Created by apache on 15-11-8.
 */
import Comment from '../models/comment';
import User from '../models/user';
import async from 'async';
import _ from 'underscore';

class md {

    /**
     * 通过id获取评论
     * @param param
     * @param callback
     */
    getCommentById(param,option,callback) {
        async.waterfall([

            //　获取评论
            function(_callback) {
                Comment.find(param,null,option,(err,docs) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,docs);
                    }
                });
            },

            //　获取评论者信息
            function(docs,_callback) {
                if(docs === null) {
                    _callback(null,null);
                } else {
                    let ids = [];
                    for(let i=0,len = docs.length; i<len; i++) {
                        ids.push(docs[i].create_user_id);
                    }
                    console.log(ids);
                    User.find({_id : {$in : ids}},'username avatar_url domain',(err,users) => {
                        if(err) {
                            console.log(err);
                        } else {
                            _callback(null,docs,users);
                        }
                    });
                }
            },


            //　匹配评论和作者
            function(comments,users,_callback) {
                let result = [];
                for(let i = 0, len = comments.length; i<len; i++) {
                    let item = {};
                    item.comment = comments[i];
                    for(let j = 0, num = users.length; j<num; j++) {

                        if(comments[i].create_user_id == users[j]._id) {
                            item.user = users[j];
                            break;
                        }
                    }
                    if(!item.hasOwnProperty('user')) {
                        item.user = null;
                    }
                    result.push(item);
                }
                _callback(null,result);
            }
        ],function(err,result) {
            callback(result);
        });
    }

    /**
     * 通过一组id获取评论
     * @param ids
     * @param callback
     */
    getCommentsByIds(ids,callback) {
        Comment.find({_id : {$in : ids}},(err,docs) => {
            callback(docs);
        });
    }


    /**
     * 保存评论
     * @param params
     * @param callback
     */
    saveComment(params,callback) {
        let comment = new Comment(params);
        comment.save((err, product, numAffected) => {
            if(err) {
                callback(null);
            } else {

                User.findOne({_id : product['create_user_id']},'username avatar_url domain',(err,user) => {
                    if(err) {
                        console.log(err);
                        callback(null);
                    } else {
                        callback(numAffected,{ comment : product,user : user});
                    }
                });
            }
        });
    }


    /**
     * 删除评论
     * @param params
     * @param callback
     */
    deleteComment(params,callback) {
        Comment.remove(params,(err) => {
            if(err) {
                callback(null);
            } else {
                callback(1);
            }
        });
    }
}

export default new md();