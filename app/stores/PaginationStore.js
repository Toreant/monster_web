/**
 * Created by apache on 15-11-2.
 */
import alt from '../alt';
import PaginationActions from '../actions/PaginationActions';
class PaginationStore {
    constructor() {
        this.bindActions(PaginationActions);
    }
}
export default alt.createStore(PaginationStore);