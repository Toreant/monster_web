/**
 * Created by apache on 15-11-15.
 */
import alt from '../alt';

class StarActions {
    constructor() {
        this.generateActions(
            'getStarSuccess'
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
}

export default alt.createActions(StarActions);