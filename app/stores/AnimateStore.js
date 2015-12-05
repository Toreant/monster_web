/**
 * Created by apache on 15-12-2.
 */
import alt from '../alt';
import AnimateActions from '../actions/AnimateActions';

class AnimateStore {
    constructor() {
        this.bindActions(AnimateActions);
        this.loading = true;
        this.founded = false;
        this.error = false;
        this.title = '';
        this.summary = '';
        this.tags = [];
        this.avatar_url = '';
        this.animate_url = '';
        this.create_time = 0;
        this.createUserName = '';
        this.createUserDomain = '';
        this.createUserAvatarURL ='';
        this.stared = false;
    }

    onGetAnimateSuccess(data) {
        if(data.code === 500) {
            this.error = true;
            this.loading = false;
            toastr.error(data.meta);
        } else if(data.code === 404) {
            this.loading = false;
            toastr.warning('找不到这个动漫');
        }　else if(data.code === 200) {
            this.loading = false;
            this.founded = true;
            this.title = data.raw.data.title;
            this.summary = data.raw.data.summary;
            this.tags = data.raw.data.tags;
            this.create_time = data.raw.data.create_time;
            this.avatar_url = data.raw.data.avatar_url;
            this.animate_url = data.raw.data.animate_url;
            this.stared = data.raw.stared;
            this.createUserName = data.raw.user.username;
            this.createUserDomain = data.raw.user.domain;
            this.createUserAvatarURL = data.raw.user.avatar_url;
        }
    }
}

export default alt.createStore(AnimateStore);