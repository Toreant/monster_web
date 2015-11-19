/**
 * Created by apache on 15-11-19.
 */
import alt from '../alt';
import FollowBtnActions from '../actions/FollowBtnActions';

class FollowBtnStore {
    constructor() {
        this.bindActions(FollowBtnActions);
        this.follow = false;
        this.opion = 0;
    }

    onFollowSuccess(data) {
        console.log(data);
        if(data.code === 200) {
            this.follow = true;
            toastr.success('关注成功');
        } else if(data.code === 400) {
            toastr.warning('你还没有登陆');
        } else if(data.code === 400) {
            toastr.warning('用户不存在');
        } else if(data.code === 304) {
            toastr.warning(data.meta);
        }
    }

    onUnFollowSuccess(data) {
        if(data.code === 200) {
            this.follow = false;
            toastr.success('取消关注成功');
        } else if(data.code === 400) {
            toastr.warning('你还没有登陆');
        } else if(data.code === 400) {
            toastr.warning('用户不存在');
        } else {
            toastr.warning('服务器错误');
        }
    }
}

export default alt.createStore(FollowBtnStore);