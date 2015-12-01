/**
 * Created by apache on 15-12-1.
 */
import alt from '../alt';

class MemberFollowActions {
    constructor() {
        this.generateActions(
            'getFollowSuccess',
            'getFollowFail'
        );
    }

    /**
     * 获取following或followers
     * @param follow
     */
    getFollow(domain,follow,skip) {
        let url = '/api/'+follow;

        let params = {
            where : {
                domain : domain
            },
            option : {
                skip : skip || 0,
                limit : 10
            }
        };

        $.ajax({
            url : url,
            type : 'post',
            contentType : 'application/json;charset=utf-8',
            dataType : 'json',
            cache : false,
            data : JSON.stringify(params),
            timeout : 10000
        }).done((data) => {
            this.actions.getFollowSuccess(data);
        }).fail(() => {
            this.actions.getFollowFail();
        }).error(() => {
            this.actions.getFollowFail();
        });
    }
}

export default alt.createActions(MemberFollowActions);