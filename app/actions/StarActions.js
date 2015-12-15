/**
 * Created by apache on 15-11-15.
 */
import alt from '../alt';

class StarActions {
    constructor() {
        this.generateActions(
            'getStarSuccess',
            'unStarSuccess',
            'changeStateSuccess'
        );
    }

    getStar(id,column) {
        $.ajax({
            url : '/api/star',
            dataType : 'json',
            type : 'post',
            cache : false,
            contentType : 'application/json;charset=utf-8',
            data : JSON.stringify({star_id : id,column : column})
        }).done((data) => {
            this.actions.getStarSuccess(data);
        }).fail(() => {
            toastr.error('收藏不成功');
        });
    }

    unStar(id,column) {

        $.ajax({
            url : '/api/star',
            dataType : 'json',
            type : 'delete',
            cache : false,
            contentType : 'application/json;charset=utf-8',
            data : JSON.stringify({star_id : id,column : column})
        }).done((data) => {
            this.actions.unStarSuccess(data);
        }).fail(() => {
            toastr.error('取消收藏不成功');
        });
    }

    changeState(option) {
        if(this.$Dispatcher_isDispatching) {
            console.log('hehe');
            window.setTimeout(() => {
                this.actions.changeSuccess(option);
            });
        }

    }
}

export default alt.createActions(StarActions);