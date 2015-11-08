/**
 * Created by apache on 15-11-8.
 */
import alt from '../alt';

class CommentActions {
    constructor() {
        this.generateActions(
            'getCommentSuccess',
            'postCommentSuccess',
            'changeComment'
        );
    }

    getComment(id) {
        let params = {
            con_id : id
        };

        $.ajax({
            url : '/api/comment',
            type : 'post',
            contentType: 'application/json;charset=utf-8',
            cache : false,
            dataType : 'json',
            data : JSON.stringify({params : params })
        }).done((data) => {
            this.actions.getCommentSuccess(data);
        }).fail(() => {
            toastr.warning('获取评论失败');
        });
    }

    postComment(params) {
        $.ajax({
            url : '/api/comment',
            type : 'put',
            contentType: 'application/json;charset=utf-8',
            dataType : 'json',
            cache : false,
            data : JSON.stringify({params : params,option : {skip : 0,limit : 10}})
        }).done((data) => {
            this.actions.postCommentSuccess(data);
        }).fail(() => {
            toastr.warning('评论不成功');
        });
    }
}

export default alt.createActions(CommentActions);