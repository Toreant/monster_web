/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import NoticeActions from '../actions/NoticeActions';

class NoticeStore {
    constructor() {
        this.bindActions(NoticeActions);
    }

    onGetToastrSuccess() {
        toastr.success('hehe');
    }
}

export default alt.createStore(NoticeStore);