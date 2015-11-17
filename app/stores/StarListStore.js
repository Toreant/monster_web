/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import StarActions from '../actions/StarListActions';

class StarListStore {
    constructor() {
        this.bindActions(StarActions);
        this.starList = [];
        this.skip = 0;
        this.count = 0;
    }

    onGetStarListSuccess(data) {
        console.log(data);
        if(data.code === 500) {
            toastr.error('服务器错误');
        } else if(data.code === 200) {
            this.starList = data.raw._raw;
            this.count = data.raw.count;
        }
    }

    onChangeSkipSuccess(option) {
        if(option === 0) {
            this.skip = this.skip-1;
        } else {
            this.skip = this.skip+1;
        }
    }
}

export default alt.createStore(StarListStore);