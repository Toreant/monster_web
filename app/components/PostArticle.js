/**
 * Created by apache on 15-11-3.
 */
import React from 'react';
import PostArticleActions from '../actions/PostArticleActions';
import PostArticleStore from '../stores/PostArticleStore';
class PostArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = PostArticleStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PostArticleStore.listen(this.onChange);
        this.refs.title.getDOMNode().focus();
        $("#some-textarea").markdown({autofocus:false,savable:false,language : 'zh-en'});
    }

    componentWillUnMount() {
        PostArticleStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        PostArticleActions.postArticle(this.state.title,this.state.summary,this.state.tag,'',this.state.content);
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp'>
                <p className='bg-success mon-padding mon-bg-title'>
                    文章投稿
                </p>

                <form className='form-horizontal'>
                    <div className="form-group">
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='title'>文章标题</label>
                        </div>
                        <div className='col-md-11'>
                            <input type="email" className="form-control" id="title" ref='title' onChange={PostArticleActions.changeTitle} placeholder="文章标题"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='tag'>文章标签</label>
                        </div>
                        <div className='col-md-11'>
                            <input type="text" className='form-control' id='tag' ref='tag' onChange={PostArticleActions.changeTag} placeholder='请输入文章标签 (标签间以空格分隔)'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='summary'>文章简介</label>
                        </div>
                        <div className='col-md-11'>
                            <textarea className='form-control' name="summary" id="summary" rows="5" onChange={PostArticleActions.changeSummary} placeholder='文章简介'></textarea>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default'>封面图片</label>
                        </div>
                        <div className='col-md-8'>
                            <a href="javascript:;" className='btn btn-info'>上传封面图片</a>
                            <p className='text-muted'>请选择您的文章封面图片。封面图片不得包含令人反感的信息，尺寸为480*270像素。
                                请勿使用与内容无关，或分辨率不为16:9的图片作为封面图片。</p>
                        </div>
                        <div className='col-md-3'>
                            <img src="/img/cover-night.png" alt="loading"/>
                        </div>
                    </div>
                    <textarea id='some-textarea' name="content" data-provide="markdown" rows="15" onChange={PostArticleActions.changeContent}></textarea>
                    <a href="javascript:;" className='btn btn-success pull-right mon-post-btn' onClick={this.handleClick.bind(this)}>
                        <span className='fa fa-check-circle-o'></span>
                        提交稿件
                    </a>
                </form>
            </div>
        );
    }
}

export default PostArticle;