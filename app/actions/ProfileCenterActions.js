/**
 * Created by apache on 15-11-1.
 */
import alt from '../alt';

class ProfileCenterActions {
    constructor() {
        this.generateActions(
            'getProfileSuccess'
        );
    }

    getProfile() {
        console.log('dads');
        $.ajax({
            url : '/api/profile/center',
            type : 'get',
            cache : false,
            contentType : 'application/json;charset=utf-8',
            timeOut : 3000
        }).done((data) => {
            this.actions.getProfileSuccess(data);
        }).fail(() => {
            toastr.warning('获取资料失败');
        }).error(() => {
            toastr.warning('获取资料失败');
        });
    }
}

export default alt.createActions(ProfileCenterActions);