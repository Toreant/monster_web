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
        let params = {
            params : {
                title : title,
                summary : summary,
                tags : tags,
                abbreviations : abbreviations,
                content : content,
                create_time : new Date().getTime()/1000
            }
        };

        console.log(params);

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