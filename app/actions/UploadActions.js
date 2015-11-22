/**
 * Created by apache on 15-11-22.
 */
import alt from '../alt';
import _ from 'underscore';

function uploadLoad(option) {
    if(option === 0) {
        $("#loader").removeClass('mon-loader').addClass('mon-loader-o');
    } else {
        $("#loader").removeClass('mon-loader-o').addClass('mon-loader');
    }
}

class UploadActions {
    constructor() {
        this.generateActions(
            'changeFile'
        );
    }

    upload(target,preImg,imgValue) {
        uploadLoad(0);
        var formData = new FormData();
        formData.append('file',target);
        $.ajax({
            url : '/api/upload',
            contentType : false,
            type : 'post',
            cache : false,
            dataType : 'json',
            processData : false,
            timeout : 10000,
            data : formData
        }).success((data) => {
            this.actions.uploadSuccess(data,preImg,imgValue);
        }).fail(() => {
            toastr.error('上传图片不成功')
        }).error(() => {
            toastr.warning('上传时间超时');
            uploadLoad(1);
        });
    }

    uploadSuccess(data,preImg,imgValue) {
        uploadLoad(1);
        this.actions.uploadSuccessAfter();
        if(data.code === 200) {
            $(preImg).attr('src','/img/upload/'+data.raw);
            $(imgValue).val('/img/upload/'+data.raw);
        } else {
            toastr.warning('上传图片不成功');
        }
    }

    uploadSuccessAfter() {
        $("#file_loader").removeClass('mon-upload-block-o').addClass('mon-upload-block');
        $("#file_loader_file").removeClass('mon-upload-o').addClass('mon-upload');
        $("#preview_block").removeClass('mon-preview-block-o').addClass('mon-preview-block')
    }

}

export default alt.createActions(UploadActions);