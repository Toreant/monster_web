/**
 * Created by apache on 15-11-8.
 */
import alt from '../alt';

class CommentActions {
    constructor() {
        this.generateActions(
            'getCommentSuccess',
            'postCommentSuccess',
            'changeComment',
            'changeSkip',
            'getTokenSuccess'
        );
    }

    getComment(id,skip) {
        let params = {
            con_id : id
        };
        if(skip < 0) {
            skip = 0;
            toastr.warning('不能在向前获取评论了');
            return false;
        }
        $.ajax({
            url : '/api/comment',
            type : 'post',
            contentType: 'application/json;charset=utf-8',
            cache : false,
            dataType : 'json',
            data : JSON.stringify({params : params,option : {skip : skip,limit : 10,sort : {create_time : -1}}})
        }).done((data) => {
            this.actions.getCommentSuccess(data);
        }).fail(() => {
            toastr.warning('获取评论失败');
        });
    }

    postComment(params,token) {
        $.ajax({
            url : '/api/comment',
            type : 'put',
            contentType: 'application/json;charset=utf-8',
            dataType : 'json',
            cache : false,
            data : JSON.stringify({params : params,token : token})
        }).done((data) => {
            this.actions.postCommentSuccess(data);
        }).fail(() => {
            toastr.error('网络链接有问题   ');
        });
    }

    getToken() {
        $.ajax({
            url : '/api/token',
            type : 'get'
        }).done((data) => {
            this.actions.getTokenSuccess(data);
        });
    }
}

export default alt.createActions(CommentActions);