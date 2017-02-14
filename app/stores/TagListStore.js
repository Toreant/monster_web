/**
 * Created by apache on 16-4-6.
 */
import alt from '../alt';
import TagListActions from '../actions/TagListActions';

class TagListStore {
    constructor() {
        this.bindActions(TagListActions);
        this.list = [];
    }

    onGetListSuccess(data) {
        console.log(data);
        if(data.code === 200) {
            this.list = data.raw._raw;
        } else {
            toastr.warning(data.meta);
        }
    }
}

export default alt.createStore(TagListStore);