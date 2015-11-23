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

    upload(target,preImg) {
        uploadLoad(0);

        // 裁剪时的图片大小
        var $tracker = $(".jcrop-holder img");
        let raw_width = $tracker.css('width'),
            raw_height = $tracker.css('height');
        raw_width = raw_width.split('p')[0];
        raw_height = raw_height.split('p')[0];

        var formData = new FormData(),
            params = {
                width : $("#upload_img_width").val(),
                height : $("#upload_img_height").val(),
                X : $("#upload_img_X").val(),
                Y : $("#upload_img_Y").val(),
                raw_width : raw_width,
                raw_height : raw_height
            };
        formData.append('file',target);
        formData.append('params',JSON.stringify(params));

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
            this.actions.uploadSuccess(data,preImg);
        }).fail(() => {
            toastr.error('上传图片不成功')
        }).error(() => {
            toastr.warning('上传时间超时');
            uploadLoad(1);
        });
    }

    uploadSuccess(data,preImg) {
        uploadLoad(1);
        this.actions.uploadSuccessAfter();
        if(data.code === 200) {
            $(preImg).attr('src','/img/upload/'+data.raw);
            $(preImg+'_value').val('/img/upload/'+data.raw);
            //$(preImg+'_width').val(width);
            //$(preImg+'_height').val(height);
            //$(preImg+'_X').val(X);
            //$(preImg+'_Y').val(Y);
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