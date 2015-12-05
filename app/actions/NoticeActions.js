/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class NoticeActions {
    constructor() {
        this.generateActions(
            'getNoticesListSuccess'
        );
    }

    getNoticesList() {
        $.ajax({
            url : '/api/notices',
            type : 'get',
            cache : false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getNoticesListSuccess(data);
        }).fail(() => {
            toastr.warning('获取通知失败');
        })
    }
}

export default alt.createActions(NoticeActions);