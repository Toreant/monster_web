/**
 * Created by apache on 15-11-25.
 */
import alt from '../alt';
import BigUploadActions　from '../actions/BigUploadActions';
import Resumable from '../resumable';

class BigUploadStore {
    constructor() {
        this.bindActions(BigUploadActions);
        this.file = {};
        this.r = new Resumable({
            target:'/api/upload/music',
            chunkSize:1*1024*1024,
            simultaneousUploads:4,
            testChunks:false,
            throttleProgressCallbacks:1,
            generateUniqueIdentifier : null
        });
        this.error = '';
    }

    onChangeFile(event) {
        console.log(event.target.files);
        let target = this.file = event.target.files[0];
        console.log(target);
        let $upload = $("#upload"),
            accept_type = [
                'audio/mpeg',
                'video/mp4'
            ];
        if(_.indexOf(accept_type,this.file.type) === -1) {
            toastr.warning('不支持的格式');
            this.error = '不支持的格式';
        } else {
            this.error = '';
            let $fileLoader = $('#upload_file_loader');
            if( ! $fileLoader.hasClass('mon-preview-block-o') ) {
                $("#upload_file_select").removeClass('mon-upload').addClass('mon-upload-o');
                $fileLoader.removeClass('mon-preview-block').addClass('mon-preview-block-o');
            }
        }

    }

    onPostBgFileSuccess(data) {
        console.log(data);
    }
}

export default alt.createStore(BigUploadStore);