/**
 * Created by apache on 15-11-2.
 */
import alt from '../alt';
class FollowingActions {
    constructor() {
        this.generateActions(
            'getFollowersSuccess',
            'changeFollowId',
            'unFollowSuccess'
        );
    }

    getFollowers(page) {
        let params = {
            arrayId : [48561100,56115067],
            option : {skip : (page-1)*10,limit : 10}
        };
        $.ajax({
            url : '/api/users',
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

    unFollow($self,auth_id) {
        let params = {
            where : {auth_id : 48561100},
            auth_id : auth_id
        };

        $.ajax({
            url : '/api/unFollow',
            dataType : 'json',
            type : 'post',
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