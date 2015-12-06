/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class NoticeActions {
    constructor() {
        this.generateActions(
            'getNoticesListSuccess',
            'getNoticeSuccess'
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

    getNotice(_id) {
        $.ajax({
            url : '/api/notice/'+_id,
            type : 'get',
            cache : false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getNoticeSuccess({data : data,_id : _id});
        }).fail(() => {
            toastr.warning('网络链接不正常');
        })
    }
}

export default alt.createActions(NoticeActions);