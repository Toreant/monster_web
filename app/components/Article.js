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
import Approve from './Approve';

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
        $(".mon-abbr-back").css('background-image','url('+this.state.abbreviations+')');
        //$("#app").lazyload({
        //    effect : "fadeIn"
        //}).bind('img');
    }

    /**
     * 点击Star组件后触发的函数
     * @param option　１－－关注＋１　０－－取消关注－１
     */
    handleClick(option) {
        if (option === 1) {
            this.setState({
                stars: this.state.stars + 1
            });
        } else {
            let stars = this.state.stars - 1;
            this.setState({
                stars: stars > 0 ? stars : 0
            });
        }
    }

    approveClick(option) {
        if(option === 0) {
            this.setState({
                approve : this.state.approve + 1
            });
        } else {
            this.setState({
                disapprove : this.state.disapprove + 1
            });
        }
    }

    render() {
        let Tags = this.state.tags.map((data,index) => {
            return (
                <span key={index} className='mon-article-tag'>{data}</span>
            );
        });

        let Article,Aside,Abbr,
            boundClick = this.handleClick.bind(this,1),
            subClick = this.handleClick.bind(this,0),
            approveClick = this.approveClick.bind(this,0),
            disClick = this.approveClick.bind(this,1);

        if(this.state.article) {
            Abbr = (
                <div className="mon-abbr">
                    <div className="mon-abbr-back">
                    </div>
                    <div className="mon-abbr-content">
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <p className='mon-article-title'>{this.state.title}</p>
                            <div className='mon-article-detail media'>
                                <div className="media-left">
                                    <Link to={'/member/'+this.state.createUserDomain}>
                                        <img src={this.state.createUserAvatar || '/img/default.png'} alt="loading"/>
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <Link to={'/member/'+this.state.createUserDomain}>{this.state.createUser}</Link>
                                    <Star star={this.props.params.id} column='article' stared={this.state.stared} plusClick={boundClick} subClick={subClick}/>
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
                        <div ref='content' className='mon-article-content' dangerouslySetInnerHTML={{__html: this.state.content}}>
                        </div>
                        <div className='mon-article-tags'>
                            {Tags}
                        </div>
                        <Approve ref="approve" _id={this.props.params.id} column="article" approved={this.state.approved} approveCallback={approveClick} disCallback={disClick}/>
                        <div className="mon-approve-count">
                            <span>{this.state.approve > 1000 ? '999+': this.state.approve}</span>
                            <span>{this.state.disapprove > 1000 ? '999+': this.state.disapprove}</span>
                        </div>
                        <Comment id={this.props.params.id} type="article" />
                    </div>
                </div>
            );

            Aside = (
                <div className="raw clearfix">
                    <div className='col-md-8 col-sm-12 col-md-offset-2 col-xs-12 mon-no-padding'>
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
            Article = <NotFound state="404 Not Found"/>;
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