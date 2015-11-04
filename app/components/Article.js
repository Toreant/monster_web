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
        //document.getElementById('content').innerHTML = content;
        this.refs.content.getDOMNode().innerHTML = content;
    }

    render() {
        return (
            <div className='container'>
                <div className='raw'>
                    <p>{this.state.title}</p>
                    <p>{this.state.summary}</p>
                    <div ref='content'></div>
                </div>
            </div>
        );
    }
}

export default Article;