/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import StarActions from '../actions/StarActions';

class StarStore {
    constructor() {
        this.bindActions(StarActions);
    }
}

export default alt.createStore(StarStore);