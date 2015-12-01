/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import PostAnimateActions from '../actions/PostAnimateActions';
import PostAnimateStore from '../stores/PostAnimateStore';
import Upload from './Upload';
import BigUpload from './BigUpload';

class PostAnimate extends React.Component {
    constructor(props) {
        super(props);
        this.state = PostAnimateStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PostAnimateStore.listen(this.onChange);
    }

    componentWillUnmount() {
        PostAnimateStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        PostAnimateActions.postAnimate(this.state.title,this.state.tags,$("#animate_file").text(),$("#upload_animate_img").text());
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp'>
                <p className='bg-success mon-padding mon-bg-title'>
                    分享动漫
                </p>
                <form className='form-horizontal'>
                    <div className="form-group">
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='title'>动漫标题</label>
                        </div>
                        <div className='col-md-11'>
                            <input type="email" className="form-control" id="title" ref='title' onChange={PostAnimateActions.changeTitle} placeholder="文章标题"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="col-md-1">
                            <label className='label label-default'>动漫</label>
                        </div>
                        <div className="col-md-11">
                            <BigUpload tab='animate' target="#animate_file"/>
                            <p id="animate_file" className="text-primary mon-upload-file" onChange={PostAnimateActions.changeMusic}></p>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='tag'>动漫标签</label>
                        </div>
                        <div className='col-md-11'>
                            <input type="text" className='form-control' id='tag' ref='tag' onChange={PostAnimateActions.changeTags} placeholder='请输入文章标签 (标签间以空格分隔)'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default'>封面图片</label>
                        </div>
                        <div className='col-md-8'>
                            <Upload img='#upload_animate_img'/>
                            <p className='text-muted'>请选择您的文章封面图片。封面图片不得包含令人反感的信息，尺寸为480*270像素。
                                请勿使用与内容无关，或分辨率不为16:9的图片作为封面图片。</p>
                        </div>
                        <div className='col-md-3'>
                            <img src="/img/cover-night.png" id='upload_animate_img' width='120' alt="loading" />
                        </div>
                    </div>
                    <a href="javascript:;" id="upload_music" className='btn btn-success pull-right mon-post-btn' onClick={this.handleClick.bind(this)}>
                        <span className='fa fa-check-circle-o'></span>
                        提交稿件
                    </a>
                </form>
            </div>
        );
    }
}

export default PostAnimate;