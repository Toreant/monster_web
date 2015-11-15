/**
 * Created by apache on 15-11-15.
 */
import alt from '../alt';
import StarActions from '../actions/StarActions';

class StarStore {
    constructor() {
        this.bindActions(StarActions);
        this.stared = false;
    }

    onGetStarSuccess(data) {
        switch (data.code) {
            case 200 :
                toastr.success('收藏成功');
                break;
            case 304 :
                toastr.warning('你已经收藏过了');
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

    unStarSuccess(data) {
        switch (data.code) {
            case 200 :
                toastr.success('取消收藏成功');
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
}

export default alt.createStore(StarStore);