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

        let Recommends = this.state.recommends.map((data,index) => {
            return (
                <li key={index}><Link to={'/article/'+data._id}><a href='javascript:;' className='mon-re-item' title={data.title}>{data.title}</a></Link></li>
            );
        });

        let Article;
        if(this.state.article) {
            Article = (
                <div className='raw animated fadeInUp clearfix'>
                    <div className='col-md-8 col-sm-8 col-xs-12 mon-article'>
                        <p className='mon-article-title'>{this.state.title}</p>
                        <div className='mon-article-detail'>
                            <a href={'/member/'+this.state.createUserDomain}>
                                <img src={this.state.createUserAvatar || '/img/default.png'} alt="loading" width='40'/>
                            </a>
                            <a href={'/member/'+this.state.createUserDomain}>{this.state.createUser}</a>
                            <span>|</span>
                            <span>{this.state.createTime}</span>
                        </div>
                        <p className='bg-success mon-article-summary'>{this.state.summary}</p>
                        <div ref='content' className='mon-article-content' dangerouslySetInnerHTML={{__html: this.state.content}}>
                        </div>
                        <div className='mon-article-tags'>
                            {Tags}
                        </div>
                        <Star star={this.props.params.id} column='article' stared={this.state.stared} />
                        <Comment id={this.props.params.id} type="article"/>
                    </div>
                    <div className='col-md-4 col-sm-4 col-xs-12'>
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
                        <div className='panel panel-info'>
                            <div className='panel-heading'>
                                推荐文章
                            </div>
                            <ul className='mon-recommend'>
                                {Recommends}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        } else {
            Article =　<Loading/> ;
        }
        return (
            <div className='container'>
                {Article}
                <BtnBlock />
            </div>
        );
    }
}

export default Article;