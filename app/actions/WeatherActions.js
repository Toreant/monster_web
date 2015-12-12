/**
 * Created by apache on 15-12-11.
 */
import alt from '../alt';

class WeatherActions {
    constructor() {
        this.generateActions(
            'getWeatherSuccess'
        );
    }

    getWeather() {
        $.ajax({
            url : '/api/weather',
            type : 'get',
            cache : false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getWeatherSuccess(data);
        }).fail(() => {
            toastr.warning('获取天气失败');
        });
    }
}

export default alt.createActions(WeatherActions);