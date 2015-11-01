/**
 * Created by apache on 15-11-1.
 */
import alt from '../alt';
import FollowersActions from '../actions/FollowersActions';

class FollowersStore {
    constructor() {
        this.bindActions(FollowersActions);
    }
}

export default alt.createStore(FollowersStore);