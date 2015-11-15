/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import StarActions from '../actions/StarListActions';

class StarListStore {
    constructor() {
        this.bindActions(StarActions);
    }

    onGetStarSuccess(data) {
        console.log(data);
    }
}

export default alt.createStore(StarListStore);