/**
 * Created by apache on 15-12-5.
 */
import alt from '../alt';
import NoticeSenderActions from '../actions/NoticeSenderActions';

class NoticeSenderStore {
    constructor() {
        this.bindActions(NoticeSenderActions);
        this.content = '';
        this.loading = false;
    }

    onChangeContent(event) {
        this.content = event.target.value;
    }

    onPostNoticeSuccess(data) {
        this.loading = false;
        if(data.code === 500) {
            toastr.warning('发送私信失败');
        } else if(data.code === 404) {
            toastr.warning('用户不存在');
        } else if(data.code === 200) {
            toastr.success('发送私信成功');
        }
    }

    onPostNoticeLoad() {
        this.loading = true;
    }
}

export default alt.createStore(NoticeSenderStore);