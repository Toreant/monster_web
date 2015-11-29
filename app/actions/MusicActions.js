/**
 * Created by apache on 15-11-29.
 */
import alt from '../alt';

class MusicActions {
    constructor() {
        this.generateActions(
            'getMusicSuccess'
        );
    }

    getMusic(id) {
        $.ajax({
            url : '/api/music/'+id,
            type : 'get',
            contentType : 'application/json;charset=utf-8'
        }).done((data) => {
            this.actions.getMusicSuccess(data);
        }).fail(() => {
            toastr.warning('获取音乐失败');
        });
    }
}

export default alt.createActions(MusicActions);