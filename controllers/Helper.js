/**
 * Created by apache on 15-12-12.
 */
import request from 'request';
import async from 'async';

class Helper {

    /**
     * 获取天气预报
     * @param req
     * @param res
     * @param next
     */
    getWeather(req,res,next) {
        let city = 'beijing',
            body = req.body.params;

        let result = {
            meta : '',
            code : 0,
            raw  : null
        };

        // 用户ip地址
        var ip = req.connection.remoteAddress;

        // 获取天气
        async.waterfall([
            function(_callback) {
                var option = {
                    url : 'https://api.heweather.com/x3/weather?cityip='+ip+'&key=02aeb507f9984554aa9f2c25eb9f182e'
                };
                console.log(option.url);

                request.get(
                    option.url,
                    function(err,response,body) {
                        // 数据返回的主体
                        var body = JSON.parse(body);

                        var _raw = body['HeWeather data service 3.0'][0];

                        if(err) {
                            console.log(err);
                            _callback(null,500);
                        } else if(_raw.status === 'unknown city') {
                            _callback(null,404);
                        } else {
                            // 天气，城市
                            var weather = null;
                            var city = "";

                            weather = _raw.daily_forecast[0];
                            city = _raw.basic.city;

                            _callback(null,{ city : city,weather : weather});
                        }
                    }
                );
            }
        ],(err,data) => {
            if(err || data === 500) {
                result.code = 500;
                result.meta = '服务器错误';
            } else if(data === 404) {
                result.meta = '定位不了';
                result.code = 404;
            } else {
                result.meta = '查询天气成功';
                result.code = 200;
                result.raw  = data;
            }
            res.json(result);
        });
    }
}

export default new Helper();