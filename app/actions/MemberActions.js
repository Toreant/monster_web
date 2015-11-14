/**
 * Created by apache on 15-11-14.
 */
import alt from '../alt';

class MemberActions {
    constructor() {
        this.generateActions(
            'getMemberSuccess'
        );
    }

    getMember(domain) {
        $.ajax({
            url: '/api/member/'+domain,
            type: 'get',
            cache: false
        }).done((data) => {
            this.actions.getMemberSuccess(data);
        }).fail(() => {
            toastr.error('获取信息失败');
        });
    }
}

export default alt.createActions(MemberActions);