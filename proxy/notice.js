/**
 * Created by apache on 15-12-5.
 */
import User from '../models/user';
import Notice from '../models/notice';
import async from 'async';
import _ from 'underscore';

class md {

    /**
     * 获取通知
     * @param user
     * @param callback
     */
    getNotice(user,callback) {
        async.waterfall([

            // 查找用户
            function(_callback) {
                User.findById(user,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else if(user === null) {
                        return callback(404);
                    } else {
                        _callback(null,user);
                    }
                })
            },

            // 查看用户未读通知
            function(user,_callback) {
                let notice = user.notice;
                _callback(null,notice);
            },

            // 将数据库中的通知取出来
            function(notice,_callback) {
                if(notice.length === 0) {
                    _callback(null,[]);
                } else {
                    Notice.find({_id : {$in : notice}},(err,noticeList) => {
                        if(err) {
                            return callback(500);
                        } else {
                            _callback(null,noticeList);
                        }
                    });
                }
            },

            // 获取发送通知的用户
            function(noticeList,_callback) {
                let userIDs = [];　// 发送通知的用户id

                for(let i = 0, num = noticeList.length; i < num; i++) {
                    userIDs.push(noticeList[i].create_user_id);
                }

                // 查找用户
                User.find({_id : {$in : userIDs}},'username domain avatar_url',(err,users) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,noticeList,users);
                    }
                });
            },

            // 将发送者和通知(私信)匹配起来
            function(noticeList,users,_callback) {
                let result = [];
                for(let i = 0, num = noticeList.length; i < num; i++) {
                    let item = {};
                    item.notice = noticeList[i];
                    item.user = null;
                    for(let j = 0, len = users.length; j < len; j++) {
                        if(noticeList[i].create_user_id == users[j]._id) {
                            item.user = users[j];
                            break;
                        }
                    }
                    result.push(item);
                }

                _callback(null,result);
            }
        ],(err,result) => {
            return callback(result);
        });
    }

    /**
     * 发送通知（私信）
     * @param postUser　发送的用户
     * @param recvUser　接受的用户
     * @param notice 通知（私信）
     * @param callback
     */
    postNotice(postUser,recvUser,notice,callback) {
        async.waterfall([

            // 查找本地用户
            function(_callback) {
                User.findById(postUser,(err,user) => {
                    if(err) {
                        return callback(500);
                    } else if(user === null) {
                        return callback(406);
                    } else {
                        _callback(null,user);
                    }
                });
            },

            // 查找接受的用户
            function(user,_callback) {
                User.findById(recvUser,(err,receiver) => {
                    if(err) {
                        return callback(500);
                    } else if(receiver === null) {
                        return callback(404);
                    } else {
                        _callback(null,receiver);
                    }
                });
            },

            // 保存通知
            function(receiver,_callback) {
                let _notice = new Notice(notice);
                _notice.save((err, product, numAffected) => {
                    if(err) {
                        return callback(500);
                    } else {
                        _callback(null,receiver,product);
                    }
                });
            },

            // 接手者接受通知
            function(receiver,product,_callback) {
                receiver.notice.push(product._id);
                receiver.save((err) => {
                    if(err) {
                        return callback(500);
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
     * 查看通知
     * @param user 查看的用户
     * @param noticeID　通知id
     * @param callback
     */
    viewNotice(user,noticeID,callback) {
        async.waterfall([

            // 查看通知
            function(_callback) {
                Notice.findByIdAndRemove(noticeID,(err,notice) => {
                   if(err) {
                       return callback(500);
                   } else if(notice === null) {
                       return callback(404);
                   } else {
                       _callback(null,notice);
                   }
                });
            },

            //　用户删除该通知（设置该通知为已读）
            function(notice,_callback) {
              User.findById(user,(err,localUser) => {
                  if(err) {
                      return callback(500);
                  } else {

                      // 在用户通知列表中删除该通知
                      localUser.notice = _.without(localUser.notice,notice._id.toString());
                      console.log(localUser.notice);
                      localUser.save((err) => {
                          if(err) {
                              return callback(500);
                          } else {
                              _callback(null,{ code : 200,count : localUser.notice.length});
                          }
                      });
                  }
              });
            }
        ],(err,result) => {
            if(err) {
                return callback(500);
            } else {
                return callback(result);
            }
        });
    }
}

export default new md();