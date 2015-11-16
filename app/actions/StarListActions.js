/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class StarListActions {
    constructor() {
        this.generateActions(
            'getStarListSuccess'
        );
    }

    /**
     * 获取收藏列表
     * @param what　0--通过id 获取用户　１－－通过domain 获取用户
     * @param user
     * @param option　　'all','article','music','animate'
     * @param skip
     */
    getStarList(what,user,option = 'all',skip = 0) {
        console.log('hehe');
        let params = {
            what : what,
            user : {},
            option : option,
            skip : skip
        };

        if(what === 0) {
            params.user = {_id : user};
        } else {
            parasm.user = {domain : user};
        }

        $.ajax({
            url : '/api/stars',
            cache : false,
            type : 'post',
            data : JSON.stringify(params),
            dataType : 'json',
            contentType: 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getStarListSuccess(data);
        }).fail((data) => {
            toastr.error('链接出现问题');
        });
    }
}

export default alt.createActions(StarListActions);