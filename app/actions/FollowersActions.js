/**
 * Created by apache on 15-11-1.
 */
import alt from '../alt';
class FollowersActions {
    constructor() {
        this.generateActions(
            'getFollowersSuccess',
            'changeFollowId',
            'addFollowSuccess'
        );
    }

    getFollowers(page) {
        let params = {
            where: {_id : '56376c400edda2c51e9945f5'},
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
            where : {auth_id : 48561100},
            auth_id : auth_id
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
}

export default alt.createActions(FollowersActions);