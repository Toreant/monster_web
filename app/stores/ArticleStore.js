/**
 * Created by apache on 15-11-4.
 */
import alt from '../alt';
import ArticleActions from '../actions/ArticleActions';
class ArticleStore　{
    constructor() {
        this.bindActions(ArticleActions);
        this.article = false;
        this.content;
        this.title = '';
        this.summary = '';
        this.createUser = '';
        this.createUserAvatar = '';
        this.createTime = '';
        this.createUserDomain = '';
        this.createUserIntro = '';
        this.tags = [];
        this.stars = 0;
        this.stared = 'false';
    }

    onGetArticleSuccess(data) {
        if(data.code === 200) {

            this.article = true;
            this.content = data.raw.article.content;
            this.title = data.raw.article.title;
            this.summary = data.raw.article.summary || '这个文章没有简介，呜呜';
            this.createUser = data.raw.user.username;
            this.createUserAvatar = data.raw.user.avatar_url;
            this.createUserDomain = data.raw.user.domain;
            this.tags = data.raw.article.tags;
            this.createUserIntro = data.raw.user.introduce;
            this.createTime = new Date(data.raw.article.create_time).toLocaleDateString("en-US");
            this.stars = data.raw.article.stars;
            this.stared = data.raw.stared.toString();

        } else if(data.code === 400) {
            toastr.warning(data.meta);
        } else if(data.code === 500) {
            toastr.error('服务器错误');
        }
    }
}
export default alt.createStore(ArticleStore);