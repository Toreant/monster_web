/**
 * Created by apache on 15-11-8.
 */
import alt from '../alt';
import CommentActions from '../actions/CommentActions';

class CommentStore {
    constructor() {
        this.bindActions(CommentActions);
        this.commentList = [];
        this.comment = '';
    }

    onGetCommentSuccess(data) {
        if(data.code === 200) {
            console.log(data);
            this.commentList = data.raw;
        } else {
            toastr.warning('获取评论失败');
        }
    }

    onPostCommentSuccess(data) {
        if(data.code === 200) {
            toastr.success(data.meta);
        } else {
            toastr.error(data.meta);
        }
    };

    onChangeComment(event) {
        this.comment = event.target.value;
    }
}

export default alt.createStore(CommentStore);