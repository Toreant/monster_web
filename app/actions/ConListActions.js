/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';

class ConListActions {
    constructor() {
        this.generateActions(
            'getConListSuccess',
            'subSkip',
            'plusSkip'
        );
    }

    /**
     * 获取列表
     * @param option 0 -- member 1 -- profile
     * @param tab
     * @param param
     */
    getConList(option,tab,param,skip) {

        let params = {
                option: {skip: skip*4,limit: 4,sort: {create_time: 1}}
            },
            url = '/api/'+tab;

        if(option === '0') {
            params.params = {create_user_domain: param};
        } else {
            params.params = {create_user_id : ''};
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

    changeSkip(option) {
        if(option === 0) {
            this.actions.subSkip();
        } else if(option === 1) {
            this.actions.plusSkip();
        }
    }
}

export default alt.createActions(ConListActions);