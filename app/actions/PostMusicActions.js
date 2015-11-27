/**
 * Created by apache on 15-11-25.
 */
import alt from '../alt';

class PostMusicActions {
    constructor() {
        this.generateActions(
            'changeTitle',
            'changeMusicUrl',
            'changeTags',
            'changeAvatar',
            'postMusicSuccess'
        );
    }

    postMusic(title,tags,music_url,avatar_url) {
        let postData = {
            params : {
                title : title,
                tags : tags,
                music_url : music_url,
                avatar_url : avatar_url
            }
        };

        $.ajax({
            url : '/api/music',
            cache : false,
            dataType : 'json',
            contentType : 'application/json;charset=utf-8',
            type : 'post',
            data : JSON.stringify(postData)
        }).success((data) => {
            this.actions.postMusicSuccess(data);
        }).fail(() => {
            toastr.warning('分享不成功');
        });
    }
}

export default alt.createActions(PostMusicActions);