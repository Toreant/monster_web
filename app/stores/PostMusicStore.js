/**
 * Created by apache on 15-11-25.
 */
import alt from '../alt';
import PostMusicActions from '../actions/PostMusicActions';

class PostMusicStore {
    constructor() {
        this.bindActions(PostMusicActions);
        this.title;　　　　 // 标题
        this.music_url;　　//　音乐地址
        this.tags = [];　　// 标签
        this.avatar_url;  //　封面图
    }

    onChangeTitle(event) {
        this.title = event.target.value;
    }

    onChangeMusic(url) {
        console.log('hehe');
        this.music_url = url;
    }

    onChangeTags(event) {
        console.log('heh');
        let tags = event.target.value.replace(/\s+/g,",");
        tags = tags.split(',');
        this.tags = [];
        tags.map((data) => {
            this.tags.push(data);
        });
        console.log(this.tags);
    }

    onChangeAvatar(url) {
        this.avatar_url = url;
    }

    onPostMusicSuccess(data) {
        switch(data.code) {
            case 200 :
                toastr.success('分享成功');
                break;
            case 404 :
                toastr.warning('用户不存在');
                break;
            case 500 :
                toastr.error('服务器错误');
                break;
        }
    }
}

export default alt.createStore(PostMusicStore);