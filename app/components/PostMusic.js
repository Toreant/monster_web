/**
 * Created by apache on 15-11-25.
 */
import React from 'react';
import PostMusicActions from '../actions/PostMusicActions';
import PostMusicStore from '../stores/PostMusicStore';
import Upload from './Upload';
import BigUpload from './BigUpload';

class PostMusic extends React.Component {
    constructor(props) {
        super(props);
        this.state = PostMusicStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PostMusicStore.listen(this.onChange);
    }

    componentWillUnmount() {
        PostMusicStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        let music_url = '/upload/'+$('#music_file').text(),
            avatar_url = $("#upload_album_img").attr('src');
        PostMusicActions.postMusic(this.state.title,this.state.tags,music_url,avatar_url);
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp'>
                <p className='bg-success mon-padding mon-bg-title'>
                    分享音乐
                </p>
                <form className='form-horizontal'>
                    <div className="form-group">
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='title'>音乐标题</label>
                        </div>
                        <div className='col-md-11'>
                            <input type="email" className="form-control" id="title" ref='title' onChange={PostMusicActions.changeTitle} placeholder="文章标题"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className="col-md-1">
                            <label className='label label-default'>音乐</label>
                        </div>
                        <div className="col-md-11">
                            <BigUpload tab='music' target="#music_file"/>
                            <p id="music_file" className="text-primary mon-upload-file" onChange={PostMusicActions.changeMusic}></p>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='tag'>音乐标签</label>
                        </div>
                        <div className='col-md-11'>
                            <input type="text" className='form-control' id='tag' ref='tag' onChange={PostMusicActions.changeTags} placeholder='请输入文章标签 (标签间以空格分隔)'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default'>封面图片</label>
                        </div>
                        <div className='col-md-8'>
                            <Upload img='#upload_album_img'/>
                            <p className='text-muted'>请选择您的文章封面图片。封面图片不得包含令人反感的信息，尺寸为480*270像素。
                                请勿使用与内容无关，或分辨率不为16:9的图片作为封面图片。</p>
                        </div>
                        <div className='col-md-3'>
                            <img src="/img/cover-night.png" id='upload_album_img' width='120' alt="loading" />
                        </div>
                    </div>
                    <a href="javascript:;" className='btn btn-success pull-right mon-post-btn' onClick={this.handleClick.bind(this)}>
                        <span className='fa fa-check-circle-o'></span>
                        提交稿件
                    </a>
                </form>
            </div>
        );
    }
}

export default PostMusic;