/**
 * Created by apache on 15-12-1.
 */

const async = require('async');
const User = require('../proxy/user');
const Article = require('../proxy/article');
const Music = require('../proxy/music');

class Search {

    /**
     * 搜索
     */
    getSearch(req,res,next) {
        let what = req.body.what,
            option = req.body.option,
            where = new RegExp(what);

        let result = {
            meta : '',
            code : 0,
            raw : null
        };

        async.waterfall([

            // 查找用户
            function(_callback) {

                User.getUser({username : where},(data) => {
                    _callback(null,data);
                })
            },

            // 查找文章
            function(users,_callback) {
                Article.getArticles(option,(data) => {
                        _callback(null,users,data);
                    },
                    {title : where}
                );
            },

            // 音乐
            function(users,articles,_callback) {
                Music.getMusics(option,{title : where},(data) => {
                    _callback(null,{users : users,articles : articles,music : data});
                });
            }
        ],(err,data) => {
            result.meta = '搜索成功';
            result.code = 200;
            result.raw = data;
            res.json(result);
        });
    }
}

module.exports = new Search();