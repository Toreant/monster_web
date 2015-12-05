/**
 * Created by apache on 15-12-2.
 */
import alt from '../alt';

class AnimateActions {
    constructor() {
        this.generateActions(
            'getAnimateSuccess'
        );
    }

    getAnimate(id) {
        let url = '/api/animate/'+id;

        $.ajax({
            url : url,
            type : 'get',
            contentType : 'application/json;charset=utf-8',
            cache : false,
            timeOut : 3000
        }).done((data) => {
            this.actions.getAnimateSuccess(data);
        }).fail(() => {
            toastr.warning('获取动漫失败');
        }).error(() => {
            toastr.warning('获取动漫失败，请刷新');
        })
    }
}

export default alt.createActions(AnimateActions);