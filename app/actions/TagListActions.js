/**
 * Created by apache on 16-4-6.
 */
import alt from '../alt';

class TagListActions {
    constructor() {
        this.generateActions(
            'getListSuccess'
        );
    }

    getList(tag) {
        $.ajax({
            url : '/api/articles/tag/'+tag,
            type : 'get',
            dataType : 'json',
            contentType : 'application/json;charset=utf-8',
            cache : false,
            timeOut : 5000
        }).done((data) => {
            this.actions.getListSuccess(data);
        }).fail(() => {
            toastr.warning('加载不了')
        });
    }
}

export default alt.createActions(TagListActions);