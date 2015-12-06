/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import NoticeActions from '../actions/NoticeActions';

class NoticeStore {
    constructor() {
        this.bindActions(NoticeActions);
        this.notices = [];
        this.loading = true;
    }

    onGetNoticesListSuccess(data) {
        if(data.code === 500) {
            toastr.warning('获取通知失败');
        } else if(data.code === 404) {
            toastr.warning('用户不存在');
        } else if(data.code === 200) {
            this.notices = data.raw;
        }
        this.loading = false;
    }

    onGetNoticeSuccess(raw) {
        console.log(raw);
        let data = raw.data,
            item = raw._id;
        if(data.code === 500) {
            toastr.error('服务器错误')
        } else if(data.code === 404) {
            toastr.warning('通知（私信）不存在');
        } else if(data.code === 200) {
            $('[data-item="'+item+'"]').fadeOut("normal",function() {
                $(this).remove();
            });
        }
        console.log(data);
        if(data.count === 0) {
            console.log('hdhsdas');
            this.notices = [];
        }
    }
}

export default alt.createStore(NoticeStore);