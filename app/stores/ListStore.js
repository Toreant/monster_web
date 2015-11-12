/**
 * Created by apache on 15-11-10.
 */
import alt from '../alt';
import ListActions from '../actions/ListActions';

class ListStore {
    constructor() {
        this.bindActions(ListActions);
        this.list = [];
        this.count = 0;
        this.loading = true;
    }

    onGetListSuccess(data) {
        console.log(data);
        if(data.code === 200) {
            this.list = data.raw._raw;
            this.count = data.raw.count;
            this.loading = false;
        } else if(data.code === 500) {
            toastr.error('服务器错误');
        }
    }
}

export default alt.createStore(ListStore);