/**
 * Created by apache on 15-12-17.
 */
import alt from '../alt';
import ApproveActions from '../actions/ApproveActions';

class ApproveStore {
    constructor() {
        this.bindActions(ApproveActions);
    }

    onApproveSuccess(raw) {
        let data = raw.data,
            _callback = raw._callback;

        switch (data.code) {
            case 200 :
                toastr.success(data.meta);
                _callback.call(this);
                break;
            case 404 :
                toastr.warning('404,就是404');
                break;
            case 406 :
                toastr.warning('你还没登陆');
                break;
            case 500 :
                toastr.error('服务器错误');
                break;
        }
    }
}

export default alt.createStore(ApproveStore);