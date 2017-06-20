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
        if(window.localStorage.getItem('postArticle') !== null) {
            $(".fog").css('display','block');
        }
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

    showExplain() {

    }

    load(loadable) {
        if(loadable) {
            PostArticleActions.loadEditContent(true);
        }
        $(".fog").css('display','none');
    }

    showExplain(type) {
        if (type == 0) {
            $(".explain-block").show();
        } else {
            $(".explain-block").hide();
        }
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
                            <input type="email" className="form-control" id="title" ref='title' value={this.state.title} onChange={PostArticleActions.changeTitle} placeholder="文章标题"/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='tag'>文章标签</label>
                        </div>
                        <div className='col-md-11'>
                            <input type="text" className='form-control' id='tag' ref='tag' value={this.state.tag} onChange={PostArticleActions.changeTag} placeholder='请输入文章标签 (标签间以空格分隔)'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-1'>
                            <label className='label label-default' htmlFor='summary'>文章简介</label>
                        </div>
                        <div className='col-md-11'>
                            <textarea className='form-control' name="summary" id="summary" rows="5" value={this.state.summary} onChange={PostArticleActions.changeSummary} placeholder='文章简介'></textarea>
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
                            <img src={this.state.abbreviations || "/img/tmp.gif"} id='upload_img' width='120' alt="loading" />
                        </div>
                    </div>
                    <input type="hidden" id="_token" value={this.state.token}/>
                    <a href="javascript:;" class="text-info" onClick={this.showExplain.bind(this, 0)}>编辑说明</a>
                    <textarea id='some-textarea' name="content" data-provide="markdown" rows="15" value={this.state.content} onChange={PostArticleActions.changeContent}></textarea>
                    <a href="javascript:;" className='btn btn-info mon-post-btn' onClick={this.saveArticle.bind(this)}>
                        <span className='fa fa-clock-o'></span>
                        保存
                    </a>
                    <a href="javascript:;" className='btn btn-success pull-right mon-post-btn' onClick={this.handleClick.bind(this)}>
                        <span className='fa fa-check-circle-o'></span>
                        提交稿件
                    </a>
                </form>

                <div className="fog">
                    <div className="mon-tip animated flipInX">
                        <p>你已经保存了稿件，是否加载</p>
                        <div>
                            <a className="btn btn-danger" onClick={this.load.bind(this,false)}>
                                否
                            </a>
                            <a className="btn btn-primary" onClick={this.load.bind(this,true)}>
                                是
                            </a>
                        </div>
                    </div>
                </div>

                <div className="explain-block fadeLeft">
                    <p className="mon-bg-title">说明</p>
                    <span className="explain-close-btn" aria-hidden="true" onClick={this.showExplain.bind(this, 1)}>×</span>
                    <ol className="nav">
                        <li>
                            1. 文章编辑采用markdown格式进行编写，建议先认识markdown的格式使用
                            <a href="http://sspai.com/25137">传送门</a>
                        </li>
                        <li>
                            2. 文章中可以对代码进行高亮，比如：
                            <pre>
                                ```javascript<br/>
                                // bad<br/>
                                var a;<br/><br/>

                                // good<br/>
                                let a;<br/>
                                ```
                            </pre>
                            在常规的代码格式符号后面添加语言，比如<code>javascript</code>或<code>css</code>等。高亮代码支持多种语言，请放心使用。
                        </li>
                        <li>
                            3. 本编辑器下方有一个保存按钮，当你点击保存时，程序会保存当前的文章内容，包裹标题等，但不包括封面。当你下一次进入投稿页时，会自动加载你最后一次保存的内容，可以进行原度回复。
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default PostArticle;
