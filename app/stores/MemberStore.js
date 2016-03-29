/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';
import MemberActions from '../actions/MemberActions';

class MemberStore {
    constructor() {
        this.bindActions(MemberActions);
        this.member = false;
        this._id = '';
        this.username = '';
        this.avatar_url = '';
        this.followers = 0;
        this.following = 0;
        this.contribute = 0;
        this.article = [];
        this.animate = [];
        this.music = [];
        this.introduce = 'heh';
        this.star = 0;
        this.followed = false;
        this.loading = true;
        this.error = false;
    }

    onGetMemberSuccess(data) {
        this.loading = false;
        if(data.code === 200) {
            this.member = true;
            let user = data.raw._raw;
            this._id = user._id;
            this.username = user.username;
            this.avatar_url = user.avatar_url;
            this.followers = user.followers.length;
            this.following = user.following.length;
            this.contribute = user.contribute.length;
            this.animate = user.animate;
            this.music = user.music;
            this.article = user.article;
            this.introduce = user.introduce;
            this.star = user.star.length;
            this.followed = data.raw.followed;
        } else if (data.code === 500) {
            toastr.error('服务器错误');
            this.error = true;
        }　else if (data.code === 404) {
            toastr.warning('找不到这个人');
        }
    }

    onFollowSuccess(data) {
        switch(data.code) {
            case 200 :
                toastr.success(data.meta);
                this.followed = !this.followed;
                break;
            case 304 :
            case 400 :
                toastr.warning(data.meta);
                break;
            case 404 :
                toastr.warning(data.meta);
                break;
            case 500 :
                toastr.error(data.meta);
                break;
        }
    }
}

export default alt.createStore(MemberStore);