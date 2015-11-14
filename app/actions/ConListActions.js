/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';

class ConListActions {
    constructor() {
        this.generateActions(
            'getConListSuccess'
        );
    }

    /**
     * 获取列表
     * @param option 0 -- member 1 -- profile
     * @param tab
     * @param param
     */
    getConList(option,tab,param) {

        let params = {
                option: {skip: 0,limit: 10,sort: {create_time: 1}}
            },
            url = '';
        if(option === '0') {
            params.params = {create_user_domain: param};
            url = '/api/'+tab;
        }

        $.ajax({
            url : url,
            type : 'post',
            dataType : 'json',
            contentType: 'application/json;charset=utf-8',
            cache: false,
            data: JSON.stringify(params)
        }).done((data) => {
            this.actions.getConListSuccess(data);
        }).fail((data) => {
            toastr.error('网络链接有问题');
        });
    }
}

export default alt.createActions(ConListActions);