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
        //if(data.code === 200) {
        //    data.raw.map((obj) => {
        //        this.followers.push(obj);
        //    });
        //}
    }

    onChangeFollowId(event) {
        this.followId = event.target.value;
    }

    /**
     * 添加关注
     * @param data {type : [$self,data]}
     */
    onAddFollowSuccess(data) {
        switch (data[1].code) {
            case 400 :
                toastr.error('本地用户不存在');
                break;
            case 200 :
                toastr.success('关注成功');
                data[0].text('取消关注');
                break;
            case 304 :
                toastr.warning('你已经关注过这个用户');
                break;
            case 404 :
                toastr.error('关注的用户不存在');
                break;
        }
    }
}

export default alt.createStore(FollowersStore);