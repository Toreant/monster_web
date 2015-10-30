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
            'profileFail',
            'changeDomain',
            'changeEmail',
            'changeUserName'
        );
    }

    changeProfile(domain,username,email) {
        $.ajax({
            url : '/api/user',
            type : 'put',
            cahce : 'false',
            dataType : 'json',
            data : {
                where : {auth_id : '48561079'},
                params : {
                    email : email,
                    username : username,
                    domain : domain
                }
            }
        }).done((data) => {
            this.actions.changeProfileSuccess(data);
        }).fail((data) => {
            this.actions.changeProfileFail();
        });
    }

    getProfile() {
        let localStorage = window.localStorage;
        let userProfile = localStorage.getItem('user');
        userProfile = JSON.parse(userProfile);
    }
}

export default alt.createActions(SetActions);