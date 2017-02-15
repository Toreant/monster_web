/**
 * Created by apache on 15-12-19.
 */
const async = require('async');

const User = require('../models/user');
const Article = require('../proxy/article');
const Music = require('../proxy/music');
const Animate = require('../proxy/animate');
const CommonProxy = require('../proxy/CommonProxy');

class BasicController {
    constructor(column) {
        this.Proxy = new CommonProxy(column);
    }

    /**
     * 获取一组数据
     * @param query
     * @param value
     * @param option
     * @param callback
     * @param u
     */
    gets(query,value,option,callback,u) {
        let Proxy = this.Proxy;

        async.waterfall([

            function(_callback) {
                if(query === 'profile' && u === undefined) {
                    return callback(406);
                } else if(query === 'profile' && u !== undefined) {
                    _callback(null,{create_user_id : u._id.toString()});
                } else if(query === 'domain') {
                    User.findOne({domain : value},'username',(err,user) => {
                       if(err) {
                           return callback(500);
                       } else if(user === null) {
                           return callback(404);
                       } else {
                           _callback(null,{create_user_id : user._id.toString()});
                       }
                    });
                } else {
                    _callback(null,{});
                }
            },

            function(params,_callback) {
                Proxy.gets(params,option,callback);
            }
        ],(err,result) => {
            return callback(result);
        });
    }
}

module.exports = BasicController;