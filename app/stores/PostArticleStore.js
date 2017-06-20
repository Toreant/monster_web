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
        this.token = '';
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
    }

    onChangeContent(event) {
        this.content = event.target.value;
    }

    onChangeSummary(event) {
        this.summary = event.target.value;
    }

    onPostArticleSuccess(data) {
        switch(data.code) {
            case 200:
                toastr.success('发表文章成功');
                break;
            case 403:
                toastr.warning('你还没有权限发表文章');
                break;
            case 406:
                toastr.warning('这个用户不存在');
                break;
            case 500:
                toastr.error('发表文章不成功');
                break;
        }
    }

    onGetTokenSuccess(data) {
        if(data.code === 200) {
            this.token = data.token;
        }
    }

    onLoadEditContentSuccess() {
        let localStorage = window.localStorage,
            editContent = localStorage.getItem('postArticle');
        editContent = JSON.parse(editContent);
        this.summary = editContent.summary;
        this.title = editContent.title;
        this.abbreviations = editContent.abbreviations;
        this.tag = editContent.tags;
        this.content = editContent.content;
    }
}
export default alt.createStore(PostArticleStore);