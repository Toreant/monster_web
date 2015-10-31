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
            'domainValidateFail',
            'nameValidateFail',
            'emailValidateFail'
        );
    }

    changeProfile(domain,username,email) {
        let localStorage = window.localStorage;
        let userProfile = localStorage.getItem('user');
        userProfile = JSON.parse(userProfile);
        let params = {
            where : {auth_id : userProfile.raw.auth_id},
            params : {
                email : email,
                domain : domain,
                username : username
            }
        };
        $.ajax({
            url : '/api/user',
            type : 'put',
            cahce : 'false',
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
            url: '/api/session',
            type: 'post',
            cache: false
        }).done((data) => {
            this.actions.getProfileSuccess(data);
        }).fail(() => {
        });

    }
}

export default alt.createActions(SetActions);