/**
 * Created by apache on 15-12-9.
 */
import alt from '../alt';

class CarouselActions {
    constructor() {
        this.generateActions(
            'getRecommendSuccess'
        );
    }

    getRecommend() {
        $.ajax({
            url : '/api/recommend',
            type : 'get',
            cache : false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getRecommendSuccess(data);
        }).fail(() => {
            toastr.warning('获取数据失败');
        });
    }
}

export default alt.createActions(CarouselActions);