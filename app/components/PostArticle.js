/**
 * Created by apache on 15-11-3.
 */
import React from 'react';
import PostArticleActions from '../actions/PostArticleActions';
import PostArticleStore from '../stores/PostArticleStore';
import Upload from './Upload';
import md from 'markdown';
class PostArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = PostArticleStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PostArticleStore.listen(this.onChange);
        this.refs.title.getDOMNode().focus();
        PostArticleActions.getToken();

        let markdown = md.markdown;
        $("#some-textarea").markdown({
            autofocus:false,
            savable:false,
            onPreview: function(e) {
                var previewContent;

                if (e.isDirty()) {
                    var originalContent = e.getContent();

                    previewContent = markdown.toHTML(originalContent);
                } else {
                    previewContent = "写下你的大作吧！！！"
                }
                return previewContent;
            }
        });
    }

    componentWillUnmount() {
        PostArticleStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        PostArticleActions.postArticle(this.state.title,this.state.summary,
            this.state.tag,$("#upload_img_value").val(),this.state.content,
        this.state.token);
    }

    saveArticle() {
        let localStorage = window.localStorage;
        let article = {
            title : this.state.title,
            summary : this.state.summary,
            tags : this.state.tag,
            content : this.state.content,
            abbreviations : $("#upload_img_value").val(),
            post : false
        };
        localStorage.setItem('postArticle',JSON.stringify(article));
        toastr.success('保存稿件成功');
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
                            <Upload img='#upload_img'/>
                            <p className='text-muted'>请选择您的文章封面图片。封面图片不得包含令人反感的信息，尺寸为480*270像素。
                                请勿使用与内容无关，或分辨率不为16:9的图片作为封面图片。</p>
                        </div>
                        <div className='col-md-3'>
                            <img src="/img/cover-night.png" id='upload_img' width='120' alt="loading" />
                        </div>
                    </div>
                    <input type="hidden" id="_token" value={this.state.token}/>
                    <textarea id='some-textarea' name="content" data-provide="markdown" rows="15" onChange={PostArticleActions.changeContent}></textarea>
                    <a href="javascript:;" className='btn btn-info mon-post-btn' onClick={this.saveArticle.bind(this)}>
                        <span className='fa fa-clock-o'></span>
                        保存
                    </a>
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