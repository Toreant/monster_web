/**
 * Created by apache on 15-10-27.
 */
import alt from '../alt';

class UserActions {
    constructor() {
        this.generateActions(
            'getUserSuccess',
            'getUserFail'
        );
    }

    getUser() {
        $.ajax({
            url : '/api/profile',
            cache : false,
            type : 'get'
        }).done((data) => {
            this.actions.getUserSuccess(data);
        }).fail(() => {
            this.actions.getUserFail();
        });
    }
}

export default alt.createActions(UserActions);