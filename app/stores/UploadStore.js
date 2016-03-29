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
        this.croper = {};

        // 保存参数的块
        this.width = '';
        this.height = '';
        this.X = '';
        this.Y = '';
    }

    onChangeFile(event) {
        let target = this.file = event.target.files[0];
        var croper,
            isChange = false;

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
                var fileReader = new FileReader(),
                    result;
                fileReader.readAsDataURL(target);
                fileReader.onload = (e) => {
                    result = e.target.result;
                    $("#img-preview").attr('src',result).Jcrop({
                        onChange: (event) => {
                            $("#upload_img_width").val(event.w);
                            $("#upload_img_height").val(event.h);
                            $("#upload_img_X").val(event.x);
                            $("#upload_img_Y").val(event.y);
                        }
                    },function() {
                        croper = this;
                        isChange = true;
                    });
                    if(isChange) {
                        this.croper = croper;
                    }
                    this.croper.setImage(result); // 设置图片
                };
            } else {
                toastr.warning('不支持的图片格式');
            }
        }
    }


}

export default alt.createStore(UploadStore);