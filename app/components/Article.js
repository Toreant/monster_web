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
import BtnBlock from './BtnBlock';
import Star from './Star';
import Loading from './Loading';
import NotFound from './NotFound';

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

    componentWillUnmount() {
        ArticleStore.unlisten(this.onChange);
    }


    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            ArticleActions.getArticle(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let Tags = this.state.tags.map((data,index) => {
            return (
                <span key={index} className='mon-article-tag'>{data}</span>
            );
        });

        let Article,Aside,Abbr;
        if(this.state.article) {
            Abbr = (
                <div className="mon-abbr">
                    <div className="mon-abbr-back">
                        <img src={this.state.abbreviations} alt="loading"/>
                    </div>
                    <div className="mon-abbr-content">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <p className='mon-article-title'>{this.state.title}</p>
                            <div className='mon-article-detail media'>
                                <div className="media-left">
                                    <a href={'/member/'+this.state.createUserDomain}>
                                        <img src={this.state.createUserAvatar || '/img/default.png'} alt="loading"/>
                                    </a>
                                </div>
                                <div className="media-body">
                                    <a href={'/member/'+this.state.createUserDomain}>{this.state.createUser}</a>
                                    <Star star={this.props.params.id} column='article' stared={this.state.stared} />
                                    {this.state.stars}
                                    <p className="mon-detail-time">
                                        {this.state.createTime}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

            Article = (
                <div className='raw animated fadeInUp clearfix'>
                    <div className='col-md-8 col-sm-12 col-xs-12 col-md-offset-2 mon-article'>
                        <p className='bg-success mon-article-summary'>{this.state.summary}</p>
                        <div ref='content' className='mon-article-content' dangerouslySetInnerHTML={{__html: this.state.content}}>
                        </div>
                        <div className='mon-article-tags'>
                            {Tags}
                        </div>
                        <Comment id={this.props.params.id} type="article"/>
                    </div>
                </div>
            );

            Aside = (
                <div className="raw">
                    <div className='col-md-8 col-sm-12 col-md-offset-2 col-xs-12'>
                        <div className='panel panel-default'>
                            <div className='panel-body media'>
                                <div className='media-left'>
                                    <a href={'/member/'+this.state.createUserDomain} className='mon-article-user'>
                                        <img src={this.state.createUserAvatar || '/img/default.png'} alt="loading"/>
                                    </a>
                                </div>
                                <div className='media-body'>
                                    <div className='media-heading'>
                                        <a href={'/member/'+this.state.createUserDomain} className='mon-user-name'>
                                            {this.state.createUser}
                                        </a>
                                    </div>
                                    <p>{this.state.createUserIntro}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        } else if(this.state.loading) {
            Article =　<Loading/> ;
        } else {
            Article = <NotFound />;
        }
        return (
            <div>
                {Abbr}
                <div className='container'>
                    {Article}
                    {Aside}
                    <BtnBlock />
                </div>
            </div>
        );
    }
}

export default Article;