/**
 * Created by apache on 15-11-4.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import ArticleActions from '../actions/ArticleActions';
import ArticleStore from '../stores/ArticleStore';
import md from 'markdown';
import Comment from './Comment';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = ArticleStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ArticleStore.listen(this.onChange);
        ArticleActions.getArticle(this.props.params.id);
    }

    componentWillUnMount() {
        ArticleStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            ArticleActions.getArticle(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
        let markdown = md.markdown;
        let content = markdown.toHTML(this.state.content);
        this.refs.content.getDOMNode().innerHTML = content;
    }

    render() {
        let tags = this.state.tags.map((data,index) => {
            return (
                <span key={index} className='mon-article-tag'>{data}</span>
            );
        });

        let recommends = this.state.recommends.map((data,index) => {
            return (
                <li key={index}><Link to={'/article/'+data._id}><a href='javascript:;' className='mon-re-item' title={data.title}>{data.title}</a></Link></li>
            );
        });
        return (
            <div className='container'>
                <div className='raw animated fadeInUp'>
                    <div className='col-md-8 col-sm-8 mon-article'>
                        <p className='mon-article-title'>{this.state.title}</p>
                        <div className='mon-article-detail'>
                            <a href={'/u/'+this.state.createUserDomain}>
                                <img src={this.state.createUserAvatar || '/img/default.png'} alt="loading" width='40'/>
                            </a>
                            <a href={'/u/'+this.state.createUserDomain}>{this.state.createUser}</a>
                            <span>|</span>
                            <span>{this.state.createTime}</span>
                        </div>
                        <p className='bg-success mon-article-summary'>{this.state.summary}</p>
                        <div ref='content' className='mon-article-content'></div>
                        <div className='mon-article-tags'>
                            {tags}
                        </div>
                        <Comment id={this.props.params.id}/>
                    </div>
                    <div className='col-md-4 col-sm-4 mon-offset'>
                        <div className='panel panel-default'>
                            <div className='panel-body media'>
                                <div className='media-left'>
                                    <a href={'/u/'+this.state.createUserDomain} className='mon-article-user'>
                                        <img src={this.state.createUserAvatar || '/img/default.png'} alt="loading"/>
                                    </a>
                                </div>
                                <div className='media-body'>
                                    <div className='media-heading'>
                                        <a href={'/u/'+this.state.createUserDomain} className='mon-user-name'>
                                            {this.state.createUser}
                                        </a>
                                    </div>
                                    <p>{this.state.createUserIntro}</p>
                                </div>
                            </div>
                        </div>
                        <div className='panel panel-info'>
                            <div className='panel-heading'>
                                推荐文章
                            </div>
                            <ul className='mon-recommend'>
                                {recommends}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;