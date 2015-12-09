/**
 * Created by apache on 15-12-9.
 */
import alt from '../alt';
import CarouselActions from '../actions/CarouselActions';
import _ from 'underscore';

class CarouselStore {
    constructor() {
        this.bindActions(CarouselActions);
        this.list = [];
        this.loading = true;
    }

    onGetRecommendSuccess(data) {
        console.log(data);
        this.loading = false;
        if(data.code === 200) {
            this.list = data.raw;
        } else if(data.code === 500) {
            toastr.error('获取数据失败');
        }
    }
}

export default alt.createStore(CarouselStore);