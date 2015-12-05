/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import NoticeActions from '../actions/NoticeActions';

class NoticeStore {
    constructor() {
        this.bindActions(NoticeActions);
        this.notices = [];
        this.loading = true;
    }

    onGetNoticesListSuccess(data) {
        console.log(data);
        this.loading = false;
        if(data.code === 500) {
            toastr.warning('获取通知失败');
        } else if(data.code === 404) {
            toastr.warning('用户不存在');
        } else if(data.code === 200) {
            this.notices = data.raw;
        }
    }
}

export default alt.createStore(NoticeStore);