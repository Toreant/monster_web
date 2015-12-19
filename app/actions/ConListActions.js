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
     * @param tab
     * @param domain
     * @param skip
     */
    getConList(tab,domain,skip) {

        console.log(tab);

        let params = {
                option: {skip: skip*6,limit: 6,sort: {create_time: 1}},
                query : 'domain',
                value : domain
            },
            url = '/api/'+tab;


        $.ajax({
            url : url,
            type : 'post',
            dataType : 'json',
            contentType: 'application/json;charset=utf-8',
            cache: false,
            data: JSON.stringify(params)
        }).done((data) => {
            console.log(data);
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