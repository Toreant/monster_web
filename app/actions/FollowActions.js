/**
 * Created by apache on 15-12-12.
 */
import alt from '../alt';

class FollowActions {
    constructor() {
        this.generateActions(
            'getFollowSuccess',
            'changeFollowId',
            'addFollowSuccess',
            'unFollowSuccess'
        );
    }

    getFollows(column,page) {
        let url = '/api/'+column;

        let params = {
            option : {
                skip : page,
                limit : 10
            }
        };

        $.ajax({
            url : url,
            cache : false,
            contentType : 'application/json;charset=utf-8',
            dataType : 'json',
            type : 'post',
            date : JSON.stringify(params)
        }).done((data) => {
            this.actions.getFollowSuccess(data);
        }).fail(() => {
            toastr.warning('获取数据失败');
        })
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

export default alt.createActions(FollowActions);