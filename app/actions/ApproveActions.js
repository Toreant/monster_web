/**
 * Created by apache on 15-12-17.
 */
import alt from '../alt';

class ApproveActions {
    constructor() {
        this.generateActions(
            'approveSuccess'
        );
    }

    /**
     * 点赞或踩
     * @param point　0 --　点赞　1 -- 踩
     * @param _id　　　目标_id
     * @param column　栏目
     */
    approve(point,_id,column) {
        let params = {
            point : point,
            _id   : _id,
            column : column
        };

        $.ajax({
            url : '/api/approve',
            dataType : 'json',
            type : 'post',
            cache : false,
            contentType : 'application/json;charset=utf-8',
            data : JSON.stringify(params)
        }).done((data) => {
            this.actions.approveSuccess({data : data , point : point});
        }).fail(() => {
           toastr.warning('对不起，不成功');
        });
    }
}

export default alt.createActions(ApproveActions);