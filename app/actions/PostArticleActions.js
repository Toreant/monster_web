/**
 * Created by apache on 15-11-3.
 */
import alt from '../alt';
class PostArticleActions {
    constructor() {
        this.generateActions(
            'changeTitle',
            'changeAbbreviations',
            'changeTag',
            'changeContent',
            'changeSummary',
            'postArticleSuccess'
        );
    }

    postArticle(title,summary,tags,abbreviations,content) {
        let localStorage = window.localStorage,
            userProfile = localStorage.getItem('user');
        userProfile = JSON.parse(userProfile);
        let params = {
            params : {
                title : title,
                summary : summary,
                tags : tags,
                abbreviations : abbreviations,
                content : content,
                create_user_id : userProfile.raw._id,
                create_user_name : userProfile.raw.username,
                create_time : Date.parse(new Date())
            }
        };

        $.ajax({
            url : '/api/article',
            type : 'post',
            dataType : 'json',
            cache : false,
            contentType: 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {this.actions.postArticleSuccess(data);})
        .fail(() => {toastr.error('发表文章不成功');});
    }
}
export default alt.createActions(PostArticleActions);