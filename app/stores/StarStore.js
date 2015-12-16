/**
 * Created by apache on 15-11-15.
 */
import alt from '../alt';
import StarActions from '../actions/StarActions';

class StarStore {
    constructor() {
        this.bindActions(StarActions);
        this.stared = false;
        this.option = 0;
        this.changed = false;
        this.btnClass = 'btn-primary';
    }

    onGetStarSuccess(o) {
        let data = o.data,
            _callback = o._callback;
        switch (data.code) {
            case 200 :
                toastr.success('收藏成功');
                this.stared = true;
                this.option = 1;
                this.changed = true;
                this.btnClass = 'btn-danger';
                _callback.call(this);
                break;
            case 304 :
                toastr.warning('你已经收藏过了');
                break;
            case 406 :
                toastr.warning('你还没登陆');
                break;
            case 404 :
                toastr.warning('没有这个用户');
                break;
            case 505 :
                toastr.error('服务器错误');
                break;
        }
    }

    unStarSuccess(o) {
        let data = o.data,
            _callback = o._callback;

        switch (data.code) {
            case 200 :
                toastr.success('取消收藏成功');
                this.stared = false;
                this.option = 0;
                this.changed = true;
                this.btnClass = 'btn-primary';
                _callback.call(this);
                break;
            case 304 :
                toastr.warning('你还没有收藏过');
                break;
            case 400 :
                toastr.warning('你还没登陆');
                break;
            case 404 :
                toastr.warning('没有这个用户');
                break;
            case 505 :
                toastr.error('服务器错误');
                break;
        }
    }

    onChangeStateSuccess(option) {
        if(option === 0) {
            this.stared = true;
            this.option = 1;
            this.btnClass = 'btn-danger';
        } else {
            this.stared = false;
            this.option = 0;
            this.btnClass = 'btn-primary';
        }
    }
}

export default alt.createStore(StarStore);