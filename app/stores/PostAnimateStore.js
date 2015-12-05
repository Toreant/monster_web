/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import PostAnimateActions from '../actions/PostAnimateActions';

class PostAnimateStore {
    constructor() {
        this.bindActions(PostAnimateActions);
        this.title = '';
        this.tags = [];
        this.summary = '';
        this.avatar_url = '';
        this.animate_url = '';
    }

    onPostAnimateSuccess(data) {
        if(data.code === 500) {
            toastr.error(data.meta);
        } else if(data.code === 404){
            toastr.warning('用户不存在');
        } else if(data.code === 200) {
            toastr.success('分享成功');
        }
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
}

export default alt.createStore(PostAnimateStore);