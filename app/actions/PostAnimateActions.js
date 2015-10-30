/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class PostAnimateActions {
    constructor(){
        this.generateActions(
            'postAnimateSuccess'
        );
    }

    postAnimate() {
        this.actions.postAnimateSuccess();
    }
}

export default alt.createActions(PostAnimateActions);