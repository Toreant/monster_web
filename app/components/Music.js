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

    handleClick(option) {
        if(option === 0) {
            this.setState({
                stars : this.state.stars + 1
            });
        } else {
            this.setState({
                stars : this.state.stars -1 < 0? 0: this.state.stars -1
            });
        }
    }

    render() {
        let Target,User,Tags,Visitor,Aside,
            plusClick = this.handleClick.bind(this,0),
            subClick = this.handleClick.bind(this,1);

        if(this.state.visitor !== undefined && this.state.visitor.length !== 0) {
            Visitor = this.state.visitor.map((data) => {
                return (
                    <Link key={data._id} to={'/member/'+data.domain} className="clearfix">
                        <img src={data.avatar_url || '/img/dd9901f664234eb44f6b217e7fa04e17.jpg'} alt="loading"/>
                    </Link>
                );
            });
        }

        if(this.state.loading) {
            Target = <Loading />;
        } else if(!this.state.loading && !this.state.finded) {
            Target = <NotFount state={this.state.error} />
        } else {
            // 标签
            Tags = this.state.tags.map((data,index) => {
                return (
                    <span key={index} className="label label-info">
                        {data}
                    </span>
                );
            });

            Aside = (
                <aside className="col-md-4 col-sm-4 col-xs-12">
                    <div>
                        <p className="mon-comment-title">
                            最近访客
                        </p>
                        <div className="mon-visitor-block clearfix">
                            {Visitor}
                        </div>
                    </div>
                </aside>
            );

            Target = (
                <div className="col-md-8">
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
                            <p className="text-info">
                                {this.state.title}
                            </p>
                            <div className="mon-music-info">
                                <Link to={'/member/'+this.state.createUserDomain}>
                                    <img src={this.state.createUserAvatarURL} alt=""/>
                                </Link>
                                <Link to={'/member/'+this.state.createUserDomain}>
                                    {this.state.createUserName}
                                </Link>
                            </div>
                            <div className="mon-music-star" >
                                <span>收藏：</span>
                                <Star star={this.props.params.id} column='music' stared={this.state.stared} plusClick={plusClick} subClick={subClick}/>
                                <span>{this.state.stars}</span>
                            </div>
                        </div>
                    </div>
                    <div className="raw">
                        <div className="panel mon-music-info panel-default">
                            <div className="panel-body">
                                <p className="text-muted">
                                    简介：{this.state.summary}
                                </p>
                                <div className="mon-music-tags">
                                    {Tags}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="raw">
                        <Comment id={this.props.params.id} type="music"/>
                    </div>
                </div>
            );
        }
        return (
            <div className="container animated fadeInUp">
                {Target}
                {Aside}
            </div>
        );
    }
}

export default Music;