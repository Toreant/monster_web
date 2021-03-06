/**
 * Created by apache on 15-10-25.
 */
import alt from '../alt';

class NavActions {
    constructor() {
        this.generateActions(
            'changeState',
            'checkLoginSuccess',
            'checkLoginFail',
            'signOutSuccess',
            'signOutFail',
            'getProfileLocal',
            'searchSuccess',
            'changeSearch'
        );
    }

    checkLogin() {
        let sessionStorage = window.sessionStorage,
            userProfile = sessionStorage.getItem('profile');
        let localStorage = window.localStorage,
            localProfile = JSON.parse(localStorage.getItem('user'));

        if(userProfile !== null && localProfile !== null && userProfile !== '' && localProfile !== '' && userProfile._id === localProfile.data._id) {
            this.actions.getProfileLocal(userProfile);
        } else {
            $.ajax({
                url : '/api/session',
                cache : false,
                type : 'post',
                dataType : 'json'
            }).done((data) => {this.actions.checkLoginSuccess(data);})
                .fail((data) => {this.actions.checkLoginFail();});
        }
    }

    signOut() {
        $.ajax({
            url : '/api/signout',
            type : 'post',
            cache : false,
            dataType : 'json'
        }).done((data) => {this.actions.signOutSuccess(data);})
        .fail((data) => {this.actions.signOutFail();});
    }
}

export default alt.createActions(NavActions);