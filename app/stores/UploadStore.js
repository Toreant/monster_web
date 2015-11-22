/**
 * Created by apache on 15-11-22.
 */
import alt from '../alt';
import UploadActions from '../actions/UploadActions';
import _ from 'underscore';

class UploadStore {
    constructor() {
        this.bindActions(UploadActions);
        this.file = {};
    }

    changeFile(event) {
        var target = $("#uploader").get(0).files[0];
        this.file = target;
        $("#file_loader_file").removeClass('mon-upload').addClass('mon-upload-o');
        $("#preview_block").removeClass('mon-preview-block').addClass('mon-preview-block-o');

        if(typeof FileReader !== undefined) {
            var acceptType = [
                'image/png',
                'image/jpeg',
                'image/jpg',
                'image/gif'
            ];

            if(_.indexOf(acceptType,target.type) !== -1) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL(target);
                fileReader.onload = function(e) {
                    $("#img-preview").attr('src',this.result);
                };
            } else {
                toastr.warning('不支持的图片格式');
            }
        }
    }


}

export default alt.createStore(UploadStore);