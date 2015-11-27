/**
 * Created by apache on 15-11-25.
 */
import alt from '../alt';

class BgUploadActions {
    constructor() {
        this.generateActions(
            'postBgFileSuccess',
            'changeFile'
        );
    }

    cancelPost(identifier) {
        $.ajax({
            url : '/api/upload/music',
            type: 'delete',
            dataType: 'json',
            cache: false,
            data : {identifier: identifier}
        }).done((data) => {
            if(data.code === 200) {
                toastr.success(data.meta);
            }
        }).fail(() => {
            toastr.error('取消上传失败');
        });
    }
}

export default alt.createActions(BgUploadActions);