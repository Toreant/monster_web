/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import StarActions from '../actions/StarListActions';

class StarListStore {
    constructor() {
        this.bindActions(StarActions);
        this.starList = [];
    }

    onGetStarListSuccess(data) {
        console.log(data);
        if(data.code === 500) {
            toastr.error('服务器错误');
        } else if(data.code === 200) {
            this.starList = data.raw;
        }
    }
}

export default alt.createStore(StarListStore);