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
        let tags = event.target.value.split(" ");
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
}
export default alt.createStore(PostArticleStore);