/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';

class PostAnimateActions {
    constructor(){
        this.generateActions(
            'postAnimateSuccess',
            'changeTitle',
            'changeTags',
            'changeSummary'
        );
    }

    postAnimate(title,tags,summary,animate_url,avatar_url) {

        let params = {
            title : title,
            tags : tags,
            summary : summary,
            animate_url : animate_url,
            avatar_url : avatar_url,
            create_time : (new Date()).getTime()
        };

        $.ajax({
            url : '/api/animate',
            dataType : 'json',
            type : 'post',
            contentType : 'application/json;charset=utf-8',
            cache : false,
            data : JSON.stringify({params : params})
        }).done((data) => {
            this.actions.postAnimateSuccess(data);
        }).fail(() => {
            toastr.warning('分享失败');
        })
    }
}

export default alt.createActions(PostAnimateActions);