/**
 * Created by apache on 15-11-22.
 */
import React from 'react';
import UploadActions from '../actions/UploadActions';
import UploadStore from '../stores/UploadStore';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = UploadStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        UploadStore.listen(this.onChange);
    }

    componentWillUnmount() {
        UploadStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        $("#file_loader").removeClass('mon-upload-block').addClass('mon-upload-block-o');
    }

    closeClick() {
        $("#file_loader").removeClass('mon-upload-block-o').addClass('mon-upload-block');
    }

    upload() {
        UploadActions.upload(this.state.file,this.props.img);
    }

    render() {
        return (
            <div>
                <a className='btn btn-info' onClick={this.handleClick.bind(this)}>
                    <span className='fa fa-file'>
                        上传图片
                    </span>
                </a>
                <div id='file_loader' className='mon-upload-block animated flipInX' >
                    <div id='file_loader_file' className='mon-upload'>
                        <label htmlFor="uploader" className='btn btn-info'>选择文件</label>
                        <input type="file" id='uploader' className='mon-fileloader' onChange={UploadActions.changeFile}/>
                        <p className='text-muted'>
                            图片选择尺寸为800*400
                        </p>
                    </div>
                    <div id='preview_block' className='mon-preview-block'>
                        <div className='mon-preview-img'>
                            <img src="/img/cover-night.png" id='img-preview' width='200' alt="loading"/>
                        </div>
                        <div id='loader' className="loader-inner ball-pulse mon-loader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <a href="javascript:;" className='btn btn-danger' htmlFor='uploader'>
                            <label htmlFor="uploader"><span className='fa fa-history'></span>重新选择图片</label>
                        </a>
                        <a href="javascript:;" className='btn btn-primary' onClick={this.upload.bind(this)}>
                            <span className='fa fa-check-circle'></span>确定
                        </a>
                    </div>
                    <span className='fa fa-close mon-close' onClick={this.closeClick.bind(this)}></span>
                </div>
            </div>
        );
    }
}

export default Upload;