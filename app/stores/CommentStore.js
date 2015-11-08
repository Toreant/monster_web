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
        this.skip = 0;
    }

    onGetCommentSuccess(data) {
        if(data.code === 200) {
            if(data.raw.length === 0) {
                toastr.warning('没有评论了');
            }
            this.commentList = data.raw;
        } else {
            toastr.warning('获取评论失败');
        }
    }

    onPostCommentSuccess(data) {
        if(data.code === 200) {
            toastr.success(data.meta);
        } else if(data.code === 400) {
            toastr.error(data.meta);
        } else {
            toastr.warning(data.meta);
        }
    };

    onChangeComment(event) {
        this.comment = event.target.value;
    }

    onChangeSkip(option) {
        if(option === 0) {
            this.skip = this.skip-10;
        } else {
            this.skip = this.skip+10;
        }
        if(this.skip <= 0) {
            this.skip = 0;
        }
    }
}

export default alt.createStore(CommentStore);