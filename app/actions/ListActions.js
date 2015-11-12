/**
 * Created by apache on 15-11-10.
 */
import alt from '../alt';

class ListActions {
    constructor() {
        this.generateActions(
            'getListSuccess'
        );
    }

    /**
     * 获取列表
     * @param column
     * @param skip
     */
    getList(column,skip) {
        let _skip = skip===undefined?1:parseInt(skip);
        if(_skip <= 0) {
            toastr.warning('找不到内容');
            return false;
        }
        /*
         * 通过column,获取是哪一个栏目的列表
         * skip 从那个开始
         */
        $.ajax({
            url : '/api/'+column,
            type : 'post',
            dataType : 'json',
            contentType : 'application/json;charset=utf-8',
            cache : false,
            data : JSON.stringify({option : {skip : (_skip-1)*6,limit : 6,sort : {create_time : -1}}})
        }).done((data) => {
            this.actions.getListSuccess(data);
        }).fail(() => {
            toastr.error('获取内容失败，请刷新重试');
        });
    }
}

export default alt.createActions(ListActions);