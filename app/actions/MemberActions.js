/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';

class MemberActions {
    constructor() {
        this.generateActions(
            'getMemberSuccess',
            'followSuccess'
        );
    }

    getMember(domain) {
        $.ajax({
            url: '/api/member/'+domain,
            type: 'get',
            cache: false,
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getMemberSuccess(data);
        }).fail(() => {
            toastr.error('获取信息失败');
        });
    }

    follow(option,_id) {

        let type = option === 0 ? 'post' : 'delete';
        $.ajax({
            url : '/api/follow',
            type : type,
            dataType : 'json',
            contentType : 'application/json;charset=utf-8',
            data : JSON.stringify({_id : _id}),
            cache : false,
            timeOut : 4000
        }).done((data) => {
            this.actions.followSuccess(data);
        }).fail(() => {
            toastr.error('网络错误');
        }).error(() => {
           toastr.warning('操作超时');
        });
    }
}

export default alt.createActions(MemberActions);