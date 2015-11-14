/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';
import ConListActions from '../actions/ConListActions';

class ConListStore {
    constructor() {
        this.bindActions(ConListActions);
        this.contributes = [];
        this.count = 0;
    }

    onGetConListSuccess(data) {
        if(data.code === 200) {
            this.contributes = data.raw._raw;
            this.count = data.raw.count;
        } else if(data.code === 500) {
            toastr.error('服务器错误');
        }
    }
}

export default alt.createStore(ConListStore);