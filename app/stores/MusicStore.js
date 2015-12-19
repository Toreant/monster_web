/**
 * Created by apache on 15-11-29.
 */
import alt from '../alt';
import MusicActions from '../actions/MusicActions';

class MusicStore {
    constructor() {
        this.bindActions(MusicActions);
        this.abbreviations = '';
        this.title = '';
        this.createUserName = '';
        this.createUserDomain = '';
        this.createUserAvatarURL = '';
        this.createUserIntr = '';
        this.music = '';
        this.stars = 0;
        this.tags = [];
        this.createTime;
        this.alubmn = '';
        this.stared = false;
        this.visitor = [];  // 访客

        this.finded = false;
        this.loading = true;
        this.error = '';
    }

    onGetMusicSuccess(data) {
        this.loading = false;
        if(data.code === 200) {

            this.abbreviations = data.raw.music.abbreviations;
            this.music = data.raw.music.music_url;
            this.title = data.raw.music.title;
            this.stars = data.raw.music.stars;
            this.tags = data.raw.music.tags;
            this.summary = data.raw.music.summary;
            this.alubmn = data.raw.music.alubmn;
            this.createUserName = data.raw.user.username;
            this.createUserAvatarURL = data.raw.user.avatar_url;
            this.createUserDomain = data.raw.user.domain;
            this.createUserIntr = data.raw.user.introduce;
            this.createTime = new Date(data.raw.music.create_time).toLocaleDateString();
            this.stared = data.raw.stared.toString();
            this.visitor = data.raw.visitor;

            this.finded = true;
        } else if(data.code === 404) {
            toastr.warning('找不到这个音乐');
            this.error = '404 Not Found';
        } else {
            this.error = '500 服务器错误';
            toastr.error('服务器错误');
        }
    }
}

export default alt.createStore(MusicStore);