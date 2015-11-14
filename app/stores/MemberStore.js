/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';
import MemberActions from '../actions/MemberActions';

class MemberStore {
    constructor() {
        this.bindActions(MemberActions);
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
    }

    onGetMemberSuccess(data) {
        if(data.code === 200) {
            this.username = data.raw.username;
            this.avatar_url = data.raw.avatar_url;
            this.followers = data.raw.followers.length;
            this.following = data.raw.following.length;
            this.contribute = data.raw.contribute.length;
            this.animate = data.raw.animate;
            this.music = data.raw.music;
            this.article = data.raw.article;
            this.introduce = data.raw.introduce;
            this.star = data.raw.star.length;
        } else if (data.code === 500) {
            toastr.error('服务器错误');
        }　else if (data.code === 404) {
            toastr.warning('找不到这个人');
        }
    }
}

export default alt.createStore(MemberStore);