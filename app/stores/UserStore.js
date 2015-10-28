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
    }

    onGetUserSuccess(data) {
        console.log(data);
        if(data.code === 200) {
            this.username = data.raw[0].username;
            this.avatar_url = data.raw[0].avatar_url;
            this.followers = data.raw[0].followers.length;
            this.following = data.raw[0].following.length;
            this.contribute = data.raw[0].contribute.length;
            this.star = data.raw[0].star.length;
            this.doamin = data.raw[0].domain;
        } else {
            toastr.error('获取联系人失败');
        }
    };

    onGetUserFail() {
        toastr.error('服务器错误');
    }
}

export default alt.createStore(UserStore);