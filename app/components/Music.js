/**
 * Created by apache on 15-11-29.
 */
import React from 'react';
import MusicActions from '../actions/MusicActions';
import MusicStore from '../stores/MusicStore';
import Loading from './Loading';
import NotFount from './NotFound';
import Comment from './Comment';
import Star from './Star';
import {Link} from 'react-router';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = MusicStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MusicStore.listen(this.onChange);
        MusicActions.getMusic(this.props.params.id);
    }

    componentWillUnmount() {
        MusicStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.params.id !== this.props.params.id ) {
            MusicActions.getMusic(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    play() {
        let music = this.refs.music.getDOMNode();
        music.play();
        $("#music_play").css('display','none');
        $("#musci_pause").css('display','flex');
    }

    pause() {
        let music = this.refs.music.getDOMNode();
        music.pause();
        $("#music_play").css('display','flex');
        $("#musci_pause").css('display','none');
    }

    render() {
        let Target,User,Tags;
        if(this.state.loading && this.state.finded) {
            Target = <Loading />;
        } else if(!this.state.loading && !this.state.finded) {
            Target = <NotFount text={this.state.error} />
        } else {
            // 标签
            Tags = this.state.tags.map((data,index) => {
                return (
                    <span key={index} className="label label-info">
                        {data}
                    </span>
                );
            });

            Target = (
                <div className="col-md-8">
                    <p className="text-primary mon-bg-title">
                        {this.state.title}
                    </p>
                    <div className="mon-music-info">
                        <Link to={'/member/'+this.state.createUserDomain}>
                            <img src={this.state.createUserAvatarURL} alt="loading" width="80"/>
                        </Link>
                        <Link to={'/member/'+this.state.createUserDomain}>
                            {this.state.createUserName}
                        </Link>
                        <span className="pull-right">
                            {this.state.createTime}
                        </span>
                    </div>
                    <div className="raw clearfix">
                        <div className="mon-music col-md-6">
                            <img src={this.state.abbreviations} alt="loading"/>
                            <div className="mon-music-block">
                                <audio ref="music" id="music" className="mon-music-url" src={this.state.music}></audio>
                                <a href="javascript:;" id="music_play" onClick={this.play.bind(this)}>
                                    <span className="fa fa-play"></span>
                                </a>
                                <a href="javascript:;" id="music_pause" onClick={this.pause.bind(this)}>
                                    <span className="fa fa-pause"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 mon-music-summary">
                            <label className="label label-info">
                                简介
                            </label>
                            <p className="bg-info mon-padding">
                                {this.state.summary}
                            </p>
                        </div>
                    </div>
                    <div className="raw mon-music-tags">
                        {Tags}
                    </div>
                    <Star star={this.props.params.id} column='music' stared={this.state.stared} />
                    <div className="raw">
                        <Comment id={this.props.params.id} type="music"/>
                    </div>
                </div>
            );

            User = (
                <div className="col-md-4">
                    <div className='panel panel-default'>
                        <div className='panel-body media'>
                            <div className='media-left'>
                                <a href={'/member/'+this.state.create_user_domain} className='mon-article-user'>
                                    <img src={this.state.createUserAvatar || '/img/default.png'} alt="loading"/>
                                </a>
                            </div>
                            <div className='media-body'>
                                <div className='media-heading'>
                                    <a href={'/member/'+this.state.create_user_domain} className='mon-user-name'>
                                        {this.state.create_user_name}
                                    </a>
                                </div>
                                <p>{this.state.create_user_introduce}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );



        }
        return (
            <div className="container animated fadeInUp">
                {Target}
                {User}
            </div>
        );
    }
}

export default Music;