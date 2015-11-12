/**
 * Created by apache on 15-11-3.
 */
import alt from '../alt';
import PostArticleActions from '../actions/PostArticleActions';
class PostArticleStore {
    constructor() {
        this.bindActions(PostArticleActions);
        this.title = '';
        this.abbreviations = '';
        this.tag = [];
        this.content = '';
        this.summary = '';
    }

    onChangeTitle(event) {
        this.title = event.target.value;
    }

    onChangeAbbreviations(event) {
        this.abbreviations = event.target.value;
    }

    onChangeTag(event) {
        let tags = event.target.value.replace(/\s+/g,",");
        tags = tags.split(',');
        this.tag = [];
        tags.map((data) => {
            this.tag.push(data);
        });
        console.log(this.tag);
    }

    onChangeContent(event) {
        this.content = event.target.value;
    }

    onChangeSummary(event) {
        this.summary = event.target.value;
    }

    onPostArticleSuccess(data) {
        if(data.code === 200) {
            toastr.success('发表文章成功');
        } else if(data.code === 400) {
            toastr.warning('这个用户不存在');
        }　else if(data.code === 500) {
            toastr.error('发表文章不成功');
        }
    }
}
export default alt.createStore(PostArticleStore);