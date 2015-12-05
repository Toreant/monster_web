/**
 * Created by apache on 15-12-5.
 */
import alt from '../alt';
import NoticePointActions from '../actions/NoticePointActions';

class NoticePointStore {
    constructor() {
        this.bindActions(NoticePointActions);
        this.count = 0;
    }

    onGetNoticesSuccess(data) {
        if(data.code === 200) {
            this.count = data.raw.length;
        } else if(data.code === 500) {
            toastr.warning('获取通知失败');
        }
    }

    onGetNoticesFail() {
        toastr.warning('获取通知失败');
    }
}

export default alt.createStore(NoticePointStore);