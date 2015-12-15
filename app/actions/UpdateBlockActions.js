/**
 * Created by apache on 15-12-15.
 */
import alt from '../alt';

class UpdateBlockActions {
    constructor() {
        this.generateActions(
            'changeTitle',
            'changeSummary',
            'changeTags',
            'changeContent',
            'updateSuccess'
        );
    }

    update(title,summary,tags,content,_id) {
        let params = {
            params : {
                title : title,
                summary : summary,
                tags : tags,
                content : content
            },
            _id : _id
        };

        $.ajax({
            url : '/api/article',
            type : 'put',
            dataType : 'json',
            contentType : 'application/json;charset=utf-8',
            cache : false,
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.updateSuccess(data);
        }).fail(() => {
            toastr.warning('更新失败');
        })
    }
}

export default alt.createActions(UpdateBlockActions);