/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';
import MemberContributeActions from '../actions/MemberContributeActions';

class MemberContributeStore {
    constructor() {
        this.bindActions(MemberContributeActions);
    }
}

export default alt.createStore(MemberContributeStore);