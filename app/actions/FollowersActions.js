/**
 * Created by apache on 15-11-1.
 */
import alt from '../alt';
class FollowersActions {
    constructor() {
        this.generateActions(
            'getFollowersSuccess',
            'changeFollowId',
            'addFollowSuccess',
            'unFollowSuccess'
        );
    }

    getFollowers(page) {
        let params = {
            option: {skip: (page - 1) * 10, limit: 10}
        };
        $.ajax({
            url : '/api/followers',
            type : 'post',
            dataType : 'json',
            contentType: 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.getFollowersSuccess(data);
        }).fail(() => {
            toastr.warning('获取关注者失败');
        });
    }

    addFollow($self,auth_id) {
        let params = {
            _id : auth_id
        };

        $.ajax({
            url : '/api/follow',
            dataType : 'json',
            type : 'post',
            contentType: 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.addFollowSuccess([$self,data]);
        }).fail(() => {
            toastr.error('关注不成功');
        });
    }

    unFollow($self,auth_id) {
        let params = {
            _id : auth_id
        };

        $.ajax({
            url : '/api/follow',
            type : 'delete',
            cache: false,
            contentType : 'application/json;charset=UTF-8',
            dataType: 'json',
            data: JSON.stringify(params)
        }).done((data) => {
            this.actions.unFollowSuccess([$self,data]);
        }).fail(() => {
            toastr.warning('取消关注不成功');
        });
    };

}

export default alt.createActions(FollowersActions);