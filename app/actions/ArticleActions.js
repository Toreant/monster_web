import alt from '../alt';
class ArticleActions {
    constructor() {
        this.generateActions(
            'getArticleSuccess'
        );
    }

    getArticle(id) {
        $.ajax({
            url: '/api/article/'+id,
            type: 'get',
            cache: false
        }).done(
            (data) => {
                this.actions.getArticleSuccess(data);
            }
        ).fail(
            () => {
                toastr.error('获取文章失败');
            }
        );
    }
}
export default alt.createActions(ArticleActions);