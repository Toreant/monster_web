/**
 * Created by apache on 15-11-2.
 */
import alt from '../alt';
class FollowingActions {
    constructor() {
        this.generateActions(
            'getFollowingSuccess',
            'changeFollowId',
            'unFollowSuccess'
        );
    }

    getFollowing(page) {
        let localStorage = window.localStorage,
            userProfile = JSON.parse(localStorage.getItem('user'));

        let params = {
            where : {_id : userProfile.data._id},
            option : {skip : (page-1)*10,limit : 10}
        };
        $.ajax({
            url : '/api/following',
            type : 'post',
            dataType : 'json',
            cache: false,
            contentType: 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.getFollowingSuccess(data);
        }).fail(() => {
            toastr.warning('取消关注者失败');
        });
    }

    unFollow($self,auth_id) {
        let localStorage = window.localStorage,
            userProfile = JSON.parse(localStorage.getItem('user'));
        let params = {
            where : {_id : userProfile.raw._id},
            auth_id : auth_id
        };

        $.ajax({
            url : '/api/unFollow',
            dataType : 'json',
            type : 'post',
            cache: false,
            contentType: 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.unFollowSuccess([$self,data]);
        }).fail(() => {
            toastr.error('关注不成功');
        });
    }
}

export default alt.createActions(FollowingActions);