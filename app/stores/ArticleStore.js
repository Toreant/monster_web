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
        this.createUserId = '';
        this.createTiem = 0;
    }

    onGetArticleSuccess(data) {
        if(data.code === 200) {
            console.log(data);
            this.content = data.raw.content;
            this.title = data.raw.title;
            this.summary = data.raw.summary;
            this.createUser = data.raw.create_user_name;
            this.createId = data.raw.create_user_id;
            this.createTime = data.raw.create_time;
        }
    }
}
export default alt.createStore(ArticleStore);