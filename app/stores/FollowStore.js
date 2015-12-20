/**
 * Created by apache on 15-12-12.
 */
import alt from '../alt';
import FollowActions from '../actions/FollowActions';

class FollowStore {
    constructor() {
        this.bindActions(FollowActions);
        this.follows = [];
        this.loading = true;
        this.error = false;
    }

    onGetFollowSuccess(data) {
        this.loading = true;
        if(data.code === 200) {
            this.follows = data.raw;
        } else if(data.code === 500) {
            toastar.warning('获取数据失败');
            this.error = true;
        }
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
                data[0].data("option",1);
                break;
            case 304 :
                toastr.warning('你已经关注过这个用户');
                break;
            case 404 :
                toastr.error('关注的用户不存在');
                break;
        }
    }

    onUnFollowSuccess(data) {
        switch (data[1].code) {
            case 400 :
                toastr.error('本地用户不存在');
                break;
            case 200 :
                toastr.success('取消关注成功');
                data[0].text('关注');
                data[0].data("option",0);
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

export default alt.createStore(FollowStore);