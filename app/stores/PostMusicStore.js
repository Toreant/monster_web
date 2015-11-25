/**
 * Created by apache on 15-11-25.
 */
import alt from '../alt';
import PostMusicActions from '../actions/PostMusicActions';

class PostMusicStore {
    constructor() {
        this.bindActions(PostMusicActions);
    }
}

export default alt.createStore(PostMusicStore);