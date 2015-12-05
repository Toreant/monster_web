/**
 * Created by apache on 15-12-5.
 */
import alt from '../alt';

class NoticeSenderActions {
    constructor() {
        this.generateActions(
            'changeContent',
            'postNoticeSuccess',
            'postNoticeLoad'
        );
    }

    postNotice(content,receiver) {

        let params = {
            params : {
                content : content,
                create_time : (new Date()).getTime(),
                type : 1,
                receiver : receiver
            }
        };

        $.ajax({
            url : '/api/notice',
            type : 'post',
            dataType : 'json',
            contentType : 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.postNoticeSuccess(data);
        }).fail(() => {
            toastr.warning('发送私信失败')
        });
    }
}

export default alt.createActions(NoticeSenderActions);