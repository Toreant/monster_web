/**
 * Created by apache on 15-11-1.
 */
import alt from '../alt';
import FollowersActions from '../actions/FollowersActions';

class FollowersStore {
    constructor() {
        this.bindActions(FollowersActions);
        this.followers = [];
    }

    onGetFollowersSuccess(data) {
        console.log(data);
        if(data.code === 200) {
            data.raw.map((obj) => {
                this.followers.push(obj);
            });
        }
    }

    onChangeFollowId(event) {
        this.followId = event.target.value;
    }

    onAddFollowSuccess(data) {
        if(data.code === 200) {
            toastr.success('关注 成功');
        } else if(data.code === 400) {
            toastr.warning('本地用户不存在');
        } else if(data.code === 304) {
            toastr.warning('这个用户已经关注过');
        }
    }
}

export default alt.createStore(FollowersStore);