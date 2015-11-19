/**
 * Created by apache on 15-11-19.
 */
import alt from '../alt';

class FollowBtnActions {
    constructor() {
        this.generateActions(
            'followSuccess',
            'unFollowSuccess'
        );
    }

    follow(option,auth_id) {
        console.log(auth_id);
        let type;
        if(!option) {
            type = 'post';
        } else {
            type = 'delete';
        }

        $.ajax({
            url : '/api/follow',
            type : type,
            cache : false,
            contentType : 'application/json;charset=utf-8',
            dataType : 'json',
            data : JSON.stringify({_id : auth_id})
        }).done((data) => {
            if(!option) {
                this.actions.followSuccess(data);
            } else {
                this.actions.unFollowSuccess(data);
            }
        }).fail(() => {
            if(option) {
                toastr.warning('关注不成功');
            } else {
                toastr.warning('取消关注不成功');
            }
        });
    }
}

export default alt.createActions(FollowBtnActions);