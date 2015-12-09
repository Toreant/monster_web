/**
 * Created by apache on 15-11-2.
 */
import Articel from '../proxy/article';
import Music from '../proxy/music';
import async from 'async';

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
                Articel.getArticles(option,(data) =>{
                    if(data === 500) {
                        return res.json(wrong);
                    } else {
                        _callback(null,data);
                    }
                },{});
            },

            // 获取音乐
            function(articles,_callback) {
                Music.getMusics(option,{},(data) => {
                    if(data === 500) {
                        return res.json(wrong);
                    } else {
                        _callback(null,{articles : articles,musics : data});
                    }
                });
            }

        ],(err,data) => {
            let _raw = [];
            for(let i = 0, num = data.articles._raw.length; i < num; i++) {
                console.log('dada');
                data.articles._raw[i].option = 'article';
                _raw.push(data.articles._raw[i]);
            }
            for(let i = 0, num = data.musics._raw.length; i < num; i++) {
                data.musics._raw[i].option = 'music';
                _raw.push(data.musics._raw[i]);
            }
            result.meta = '获取推荐成功';
            result.code = 200;
            result.raw = _raw;
            res.json(result);
        });
    }
}

export default new Contribute();