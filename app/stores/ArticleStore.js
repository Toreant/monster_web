/**
 * Created by apache on 15-11-4.
 */
import alt from '../alt';
import ArticleActions from '../actions/ArticleActions';
class ArticleStore　{
    constructor() {
        this.bindActions(ArticleActions);
        this.content = '';
        this.title = '';
        this.summary = '';
        this.createUser = '';
        this.createUserAvatar = '';
        this.createTime = '';
        this.createUserDomain = '';
        this.createUserIntro = '';
        this.tags = [];
        this.recommends = [];
    }

    onGetArticleSuccess(data) {
        if(data.code === 200) {
            console.log(data);
            var options = {
                weekday: "long", year: "numeric", month: "short",
                day: "numeric", hour: "2-digit", minute: "2-digit"
            };
            this.content = data.raw.article.content;
            this.title = data.raw.article.title;
            this.summary = data.raw.article.summary || '这个文章没有简介，呜呜';
            this.createUser = data.raw.article.create_user_name;
            this.createUserAvatar = data.raw.user.avatar_url;
            this.createUserDomain = data.raw.user.domain;
            this.tags = data.raw.article.tags;
            this.createUserIntro = data.raw.user.introduce;
            this.createTime = new Date(data.raw.article.create_time*1000).toLocaleTimeString();
            this.recommends = data.raw.recommend;
        } else if(data.code === 400) {
            toastr.warning(data.meta);
        }
    }
}
export default alt.createStore(ArticleStore);