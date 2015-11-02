/**
 * Created by apache on 15-11-2.
 */
import alt from '../alt';
import ContributeActions from '../actions/ContributeActions';
class ContributeStore {
    constructor() {
        this.bindActions(ContributeActions);
        this.contributes = [];
        this.animate = [];
        this.music = [];
        this.article = [];
    }
}

export default alt.createStore(ContributeStore);