/**
 * Created by apache on 15-11-4.
 */
import React from 'react';
import ArticleActions from '../actions/ArticleActions';
import ArticleStore from '../stores/ArticleStore';
import md from 'markdown';

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

    onChange(state) {
        this.setState(state);
        let markdown = md.markdown;
        let content = markdown.toHTML(this.state.content);
        this.refs.content.getDOMNode().innerHTML = content;
    }

    render() {
        let tags = this.state.tags.map((data) => {
            return (
                <span className='mon-article-tag'>{data}</span>
            );
        });
        return (
            <div className='container'>
                <div className='raw'>
                    <div className='col-md-8 col-sm-8 mon-article'>
                        <p className='mon-article-title'>{this.state.title}</p>
                        <div className='mon-article-detail'>
                            <a href={'/u/'+this.state.createUserDomain}>
                                <img src={this.state.createUserAvatar} alt="loading" width='40'/>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;