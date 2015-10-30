/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import PostAnimateActions from '../actions/PostAnimateActions';

class PostAnimateStore {
    constructor() {
        this.bindActions(PostAnimateActions);
    }

    onPostAnimateSuccess() {
        console.log('post animate success');
    }
}

export default alt.createStore(PostAnimateStore);