/**
 * Created by apache on 15-10-27.
 */
import alt from '../alt';
import UserActions from '../actions/UserActions.js';

class UserStore {
    constructor() {
        this.bindActions(UserActions);
        this.username = '';
        this.avatar_url = '';
        this.star = 0;
        this.followers = 0;
        this.contribute = 0;
        this.following = 0;
        this.domain = '';
        this.auth = false;
    }

    onGetUserSuccess(data) {
        if(data.code === 200) {
            this.auth = true;
            this.username = data.raw.username;
            this.avatar_url = data.raw.avatar_url;
            this.followers = data.raw.followers.length;
            this.following = data.raw.following.length;
            this.contribute = data.raw.contribute.length;
            this.star = data.raw.star.length;
            this.doamin = data.raw.domain;
            sessionStorage.profile = JSON.stringify(data.raw);
        } else {
            window.location = '/login';
        }
    };

    onGetUserLocal() {
        let profile = sessionStorage.profile;
        profile = JSON.parse(profile);
        this.auth = true;
        this.username = profile.username;
        this.avatar_url = profile.avatar_url;
        this.followers = profile.followers.length;
        this.following = profile.following.length;
        this.contribute = profile.contribute.length;
        this.star = profile.star.length;
        this.doamin = profile.domain;
    }

    onGetUserFail() {
        toastr.error('服务器错误');
    }
}

export default alt.createStore(UserStore);