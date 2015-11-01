/**
 * Created by apache on 15-11-1.
 */
import alt from '../alt';
import ProfileCenterActions from '../actions/ProfileCenterActions';

class ProfileCenterStore {
    constructor() {
        this.bindActions(ProfileCenterActions);
    }
}

export default alt.createStore(ProfileCenterStore);