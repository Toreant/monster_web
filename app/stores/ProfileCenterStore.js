/**
 * Created by apache on 15-11-1.
 */
import alt from '../alt';
import ProfileCenterActions from '../actions/ProfileCenterActions';

class ProfileCenterStore {
    constructor() {
        this.bindActions(ProfileCenterActions);
        this.contribute = 0;
        this.stars = [];
        this.starsCount = 0;
        this.loading = true;
    }

    onGetProfileSuccess(data) {
        this.loading = false;
        if(data.code === 200) {
            this.contribute = data.raw.profile.contribute.length;
            this.stars = data.raw.stars._raw;
            this.starsCount = data.raw.stars.count;
        } else {
            toastr.warning('获取资料失败');
        }
    }
}

export default alt.createStore(ProfileCenterStore);