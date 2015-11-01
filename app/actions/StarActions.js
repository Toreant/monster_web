/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class StarActions {
    constructor() {
        this.generateActions(
            'getStarSuccess'
        );
    }

    getStar() {
        let params = {
            arrayId : [56115100,48561100]
        };
        params = JSON.stringify(params);
        $.ajax({
            url : '/api/getStar',
            cache : false,
            type : 'post',
            data : params,
            dataType : 'json',
            contentType: 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getStarSuccess(data);
        }).fail((data) => {
            toastr.error('链接出现问题');
        });
    }
}

export default alt.createActions(StarActions);