/**
 * Created by apache on 15-11-29.
 */
import alt from '../alt';
import MusicActions from '../actions/MusicActions';

class MusicStore {
    constructor() {
        this.bindActions(MusicActions);
        this.avatar_url = '';
        this.title = '';
        this.create_user_name = '';
        this.create_user_avatar_url = '';
        this.create_user_domain = '';
        this.create_user_introduce = '';
        this.music = '';
        this.star = 0;
        this.tags = [];
        this.finded = true;
        this.loading = true;
        this.error = ''
    }

    onGetMusicSuccess(data) {
        console.log(data);
        if(data.code === 200) {
            this.avatar_url = data.raw.music.avatar_url;
            this.music = data.raw.music.music_url;
            this.title = data.raw.music.title;
            this.star = data.raw.music.star;
            this.tags = data.raw.music.tags;
            this.create_user_name = data.raw.user.username;
            this.create_user_avatar_url = data.raw.user.avatar_url;
            this.create_user_domain = data.raw.user.domain;
            this.create_user_introduce = data.raw.user.introduce;
            this.loading = false;
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