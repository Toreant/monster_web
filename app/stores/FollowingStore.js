/**
 * Created by apache on 15-11-2.
 */
import alt from '../alt';
import FollowingActions from '../actions/FollowingActions';

class FollowingStore {
    constructor() {
        this.bindActions(FollowingActions);
        this.followers = [];
    }

    onGetFollowersSuccess(data) {
        if(data.code === 200) {
            data.raw.map((obj) => {
                this.followers.push(obj);
            });
        }
    }

    onChangeFollowId(event) {
        this.followId = event.target.value;
    }

    /**
     * 添加关注
     * @param data {type : [$self,data]}
     */
    onUnFollowSuccess(data) {
        switch (data[1].code) {
            case 400 :
                toastr.error('本地用户不存在');
                break;
            case 200 :
                toastr.success('取消关注成功');
                data[0].text('关注');
                break;
            case 304 :
                toastr.warning('你还没有关注过这个用户');
                break;
            case 404 :
                toastr.error('关注的用户不存在');
                break;
        }
    }
}

export default alt.createStore(FollowingStore);