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
            'changeSummary'
        );
    }
}
export default alt.createActions(PostArticleActions);