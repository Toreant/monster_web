/**
 * Created by apache on 15-11-25.
 */
import alt from '../alt';
import PostMusicActions from '../actions/PostMusicActions';

class PostMusicStore {
    constructor() {
        this.bindActions(PostMusicActions);
        this.title;　　　　 // 标题
        this.tags = [];　　// 标签
        this.summary = '';
    }

    onChangeTitle(event) {
        this.title = event.target.value;
    }

    onChangeTags(event) {
        let tags = event.target.value.replace(/\s+/g,",");
        tags = tags.split(',');
        this.tags = [];
        tags.map((data) => {
            this.tags.push(data);
        });
    }

    onChangeSummary(event) {
        this.summary = event.target.value;
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