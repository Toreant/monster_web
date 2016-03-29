/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class SetActions {
    constructor() {
        this.generateActions(
            'changeProfileSuccess',
            'changeProfileFail',
            'getProfileSuccess',
            'getProfileLocal',
            'changeDomain',
            'changeEmail',
            'changeUserName',
            'changeIntro',
            'domainValidateFail',
            'nameValidateFail',
            'emailValidateFail',
            'introValidateFail'
        );
    }

    changeProfile(domain,username,email,intro,avatar_url) {
        let localStorage = window.localStorage;
        let userProfile = localStorage.getItem('user');
        userProfile = JSON.parse(userProfile);
        let params = {
            params : {
                email : email,
                domain : domain,
                username : username,
                introduce : intro,
                avatar_url : avatar_url
            }
        };
        console.log(params.params);
        $.ajax({
            url : '/api/user',
            type : 'put',
            cache : 'false',
            dataType : 'json',
            contentType: 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.changeProfileSuccess(data);
        }).fail((data) => {
            this.actions.changeProfileFail();
        });
    }

    getProfile() {
        $.ajax({
            url: '/api/profile',
            type: 'get',
            cache: false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getProfileSuccess(data);
        }).fail(() => {
            toastr.warning('获取个人资料失败');
        });
    }
}

export default alt.createActions(SetActions);