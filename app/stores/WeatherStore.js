/**
 * Created by apache on 15-12-11.
 */
import alt from '../alt';
import WeatherActions from '../actions/WeatherActions';

class WeatherStore {
    constructor() {
        this.bindActions(WeatherActions);
        this.loading = true;
        this.error   = false;
        this.weather = null;
        this.city    = '北京';
    }

    onGetWeatherSuccess(data) {
        this.loading = false;

        if(data.code === 200) {
            this.city = data.raw.city;
            this.weather = data.raw.weather;
        } else if(data.code === 404) {
            this.error = true;
            toastr.warning(data.meta);
        } else {
            this.error = true;
            toastr.warning('查询天气失败');
        }
    }
}

export default alt.createStore(WeatherStore);