/**
 * Created by apache on 15-11-25.
 */
import React from 'react';
import BigUploadActions from '../actions/BigUploadActions';
import BigUploadStore from '../stores/BigUploadStore';
import _ from 'underscore';

class BigUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = BigUploadStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        BigUploadStore.listen(this.onChange);

        // 超大文件上传

        if(!this.state.r.support) {
            toastr.warning('你的浏览器不支持这个功能，请更新为最新的浏览器');
        } else {
            this.state.r.assignBrowse($('#file_select')[0]);  //　添加选择的文件的功能键

            // 添加文件
            this.state.r.on('fileAdded',(file,event) => {
                let target = file.file;
                let $upload = $("#upload"),
                    accept_type = [
                        'audio/mpeg',
                        'audio/ogg',
                        'video/mp4'
                    ];
                if(_.indexOf(accept_type,target.type) === -1) {
                    toastr.warning('不支持的格式');
                    $("#file_type_error").text('不支持的格式');
                    $upload.addClass('disabled');
                } else {
                    this.error = '';
                    let $fileLoader = $('#upload_file_loader');
                    if( ! $fileLoader.hasClass('mon-preview-block-o') ) {
                        $("#upload_file_select").removeClass('mon-upload').addClass('mon-upload-o');
                        $fileLoader.removeClass('mon-preview-block').addClass('mon-preview-block-o');
                    }
                    $upload.removeClass('disabled');
                    $(this.props.target).html(file.uniqueIdentifier);
                    $("#mon_cancel").attr('data-target',file.uniqueIdentifier);
                    $("#progress_bar").css('width','0');
                }
            });

            // 文件成功添加后
            this.state.r.on('fileSuccess',function(file,message) {
                $("#progress_bar").css('width','0');
            });

            this.state.r.on('fileError',function() {
                toastr.error('文件添加失败');
            });

            // 上传文件期间
            this.state.r.on('fileProgress',function(file) {
                $("#progress_bar").css('width',parseInt(file.progress()*100)+'%');
            });

            // 上传文件结束
            this.state.r.on('complete',() => {
                $("#progress_bar").css('width','100%');
                //this.closeBlock();
            });

            // 暂停
            this.state.r.on('pause',function() {
                $(".mon-upload-btn").removeClass('mon-active');
                $("#mon_pause").addClass('mon-active')
            });

            // 取消
            this.state.r.on('cancel',function() {
                $("#progress_bar").css('width','0');
            });
        }
    }

    componentWillUnmount() {
        BigUploadStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    closeBlock() {
        $("#file_upload").removeClass('mon-upload-block-o').addClass('mon-upload-block');
    }

    openBlock() {
        $("#file_upload").removeClass('mon-upload-block').addClass('mon-upload-block-o');
    }

    handleClick() {
        this.state.r.upload();
    }

    pause() {
        this.state.r.pause();
    }

    cancel() {
        this.state.r.cancel();
        BigUploadActions.cancelPost($("#mon_cancel").data('target'));
    }

    render() {
        let Type = this.props.tab === 'music'?'.mp3、.ape、.ogg':'.mp4';
        return (
            <div>
                <a href="javascript:;" className='btn btn-info' onClick={this.openBlock.bind(this)}>
                    <span className='fa fa-file'></span>
                    选择文件
                </a>
                <div id='file_upload' className='mon-upload-block animated flipInX'>
                    <div id='upload_file_select' className="mon-upload">
                        <label htmlFor="file_select" className='btn btn-info'>打开文件</label>
                        <input id='file_select' type="file" className='mon-fileloader'/>
                        <p className='text-warning'>
                            文件的类型为{Type}
                        </p>
                        <p id="file_type_error" className="text-danger mon-disabled">不支持的文件类型</p>
                    </div>
                    <div id='upload_file_loader' className='mon-preview-block'>
                        <div className='mon-progress-block'>
                            <div className="mon-progress">
                                <div id='progress_bar' className="mon-progress-bar">
                                </div>
                            </div>
                            <a id='mon_pause' className='fa fa-pause mon-upload-btn' onClick={this.pause.bind(this)}></a>
                            <a id='mon_upload' className='fa fa-play mon-upload-btn' onClick={this.handleClick.bind(this)}></a>
                            <a id='mon_cancel' className='fa fa-close mon-upload-btn' data-target="" onClick={this.cancel.bind(this)}></a>
                        </div>

                        <a href="javascript:;" className='btn btn-danger'>
                            <label htmlFor="file_select">
                                <span className='fa fa-history'></span>
                                重新选择文件
                            </label>
                        </a>
                        <a href="javascript:;" id="upload" className='btn btn-primary disabled' onClick={this.handleClick.bind(this)}>
                            上传
                        </a>
                    </div>
                    <span className='mon-close fa fa-close' onClick={this.closeBlock.bind(this)}></span>
                </div>
            </div>
        );
    }
}

export default BigUpload;