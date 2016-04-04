/**
 * Created by apache on 15-12-1.
 */
import alt from '../alt';
import MemberFollowActions from '../actions/MemberFollowActions';

class MemberFollowStore {
    constructor() {
        this.bindActions(MemberFollowActions);
        this.follows  = [];
        this.loading = true;
        this.error = false;
    }

    onGetFollowSuccess(data) {
        this.loading = false;
        if(data.code === 200) {
            this.follows = data.raw;
        } else if(data.code === 400) {
            toastr.warning(data.meta);
        } else if(data.code === 500) {
            this.error = true;
            toastr.error(data.meta);
        }
    }

    onGetFollowFail() {
        this.loading = false;
        this.error = true;
    }
}

export default alt.createStore(MemberFollowStore);