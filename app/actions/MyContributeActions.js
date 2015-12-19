/**
 * Created by apache on 15-12-15.
 */
import alt from '../alt';

class MyContributeActions {
    constructor() {
        this.generateActions(
            'getContributeSuccess',
            'getContributeFail',
            'deleteSuccess',
            'getSuccess',
            'getFail'
        );
    }

    getContribute(column,skip) {
        let params = {
            option :　{
                skip : skip,
                limit : 10
            },
            query : 'profile'
        };

        $.ajax({
            url : '/api/'+column,
            type : 'post',
            cache : false,
            contentType : 'application/json;charset=utf-8',
            dataType : 'json',
            data : JSON.stringify(params),
            timeOut : 10000
        }).done((data) => {
            this.actions.getContributeSuccess(data);
        }).fail(() => {
            this.actions.getContributeFail();
        }).error(() => {
            this.actions.getContributeFail();
        });
    }

    delete(column,_id,target) {
        $.ajax({
            url : '/api/'+column+'/'+_id,
            type : 'delete',
            contentType : 'application/json;charset=utf-8',
            cache : false
        }).done((data) => {
            this.actions.deleteSuccess({data : data,target : target});
        }).fail(() => {
            toastr.warning('删除不成功');
        })
    }

    get(column,_id) {
        $.ajax({
            url : '/api/'+column+'/'+_id+'/false',
            type : 'get',
            cache : false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getSuccess(data);
        }).fail(() => {
            this.actions.getFail();
        })
    }
}

export default alt.createActions(MyContributeActions);