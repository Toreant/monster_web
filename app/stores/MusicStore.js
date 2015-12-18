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
        this.star = 0;
        this.tags = [];
        this.createTime;
        this.alubmn = '';
        this.finded = true;
        this.loading = true;
        this.error = '';
        this.stared = false;
        this.visitor = [];  // 访客
    }

    onGetMusicSuccess(data) {
        if(data.code === 200) {
            console.log(data.raw);
            this.abbreviations = data.raw.music.abbreviations;
            this.music = data.raw.music.music_url;
            this.title = data.raw.music.title;
            this.star = data.raw.music.star;
            this.tags = data.raw.music.tags;
            this.summary = data.raw.music.summary;
            this.alubmn = data.raw.music.alubmn;
            this.createUserName = data.raw.user.username;
            this.createUserAvatarURL = data.raw.user.avatar_url;
            this.createUserDomain = data.raw.user.domain;
            this.createUserIntr = data.raw.user.introduce;
            this.createTime = new Date(data.raw.music.create_time).toLocaleDateString();
            this.loading = false;
            this.stared = data.raw.stared.toString();
            this.visitor = data.raw.visitor;
        } else if(data.code === 404) {
            this.finded = false;
            this.loading = false;
            this.error = '404找不到';
            toastr.warning('找不到这个音乐');
        } else {
            this.finded = false;
            this.loading = false;
            this.error = '500服务器错误';
            toastr.error('服务器错误');
        }
    }
}

export default alt.createStore(MusicStore);