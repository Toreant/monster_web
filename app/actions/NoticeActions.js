/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class NoticeActions {
    constructor() {
        this.generateActions(
            'getToastrSuccess'
        );
    }

    getToastr() {
        this.actions.getToastrSuccess();
    }
}

export default alt.createActions(NoticeActions);