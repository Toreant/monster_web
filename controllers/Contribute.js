/**
 * Created by apache on 15-11-2.
 */
const Article = require('../proxy/article');
const Music = require('../proxy/music');
const CommonProxy = require('../proxy/CommonProxy');
const async = require('async');

class Contribute {

    /**
     * 推荐介绍
     * @param req
     * @param res
     * @param next
     */
    getRecommend(req,res,next) {
        let result = {
            meta : '',
            code : 0,
            raw  : []
        };

        let wrong = {
            meta : '服务器错误',
            code : 500,
            raw  : []
        };

        let option = {
            skip : 0,
            limit : 2
        };

        async.waterfall([

            // 获取文章推荐
            function(_callback) {
                Article.getArticles({},(data) =>{
                    if(data === 500) {
                        return res.json(wrong);
                    } else {
                        _callback(null,data);
                    }
                },{sticky : true});
            }

        ],(err,data) => {
            let _raw = [];
            for(let i = 0, num = data._raw.length; i < num; i++) {
                data._raw[i].option = 'article';
                _raw.push(data._raw[i]);
            }

            result.meta = '获取推荐成功';
            result.code = 200;
            result.raw = _raw;
            res.json(result);
        });
    }

    deleteContribute(req,res,next) {}

    /**
     * 点赞　踩
     * @param req
     * @param res
     */
    approveContribute(req,res) {

        /**
         * @param point 观点(approve -- 0 ,disapprove -- 1)
         * @parma _id 内容的id号
         * @param column 栏目(article,music,animate)
         */
        let point = req.body.point,
            _id = req.body._id,
            column = req.body.column,
            user = req.session.user._id;

        let result = {
            meta : '',
            code : 0
        };

        new CommonProxy(column).approveContribute(user,point,_id,(data) => {
            switch(data) {
                case 200 :
                    result.meta = point === 0?'点赞成功':'呵呵，你踩了人家';
                    break;
                case 404 :
                    result.meta = '对象不存在';
                    break;
                case 500 :
                    result.meta = '服务器错误';
                    break;
            }
            result.code = data;
            res.json(result);
        });
    }
}

module.exports = new Contribute();