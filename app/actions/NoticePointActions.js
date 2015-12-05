/**
 * Created by apache on 15-12-5.
 */
import alt from '../alt';

class NoticePointActions {
    constructor() {
        this.generateActions(
            'getNoticesSuccess',
            'getNoticesFail'
        );
    }

    getNotices() {
        $.ajax({
            url : '/api/notices',
            type : 'get',
            cache : false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getNoticesSuccess(data);
        }).fail(() => {
            this.actions.getNoticesFail();
        })
    }
}

export default alt.createActions(NoticePointActions);