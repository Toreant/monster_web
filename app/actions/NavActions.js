/**
 * Created by apache on 15-10-25.
 */
import alt from '../alt';

class NavActions {
    constructor() {
        this.generateActions(
            'changeState',
            'checkLoginSuccess',
            'checkLoginFail'
        );
    }

    checkLogin() {
        $.ajax({
            url : '/api/session',
            cache : false,
            type : 'post',
            dataType : 'json'
        }).done((data) => {this.actions.checkLoginSuccess(data)})
        .fail((data) => {this.actions.checkLoginFail()});
    }
}

export default alt.createActions(NavActions);