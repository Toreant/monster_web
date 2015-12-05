/**
 * Created by apache on 15-12-1.
 */
import React from 'react';
import AnimateActions from '../actions/AnimateActions';
import AnimateStore from '../stores/AnimateStore';
import Loading from './Loading';
import NotFound from './NotFound';
import {Link} from 'react-router';

class Animate extends React.Component {
    constructor(props) {
        super(props);
        this.state = AnimateStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AnimateStore.listen(this.onChange);
        AnimateActions.getAnimate(this.props.params.id);
    }

    componentWillUnmount() {
        AnimateStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.params.id !== this.props.params.id) {
            AnimateActions.getAnimate(this.props.params.id);
        }
    }

    onChange(state) {
        this.setState(state);
    }

    play() {
        console.log('play');
        let video = this.refs.video.getDOMNode();
        console.log(video.duration);
        video.play();
    }

    render() {
        let Target,Tags;
        if(this.state.loading) {
            Target = <Loading />;
        } else if(!this.state.loading && !this.state.founded) {
            Target = <NotFound />
        } else {
            Tags = this.state.tags.map((data,index) => {
                return (
                    <span key={index} className="label label-default">
                        data
                    </span>
                );
            });
            Target = (
                <div className="raw">
                    <p className="text-primary mon-bg-title">
                        {this.state.title}
                    </p>
                    <div>
                        <Link to={'/member/'+this.state.createUserDomain}>
                            <img src={this.state.createUserAvatarURL} width="80" alt="loading"/>
                        </Link>
                        <Link to={'/member/'+this.state.createUserDomain}>
                            {this.state.createUserName}
                        </Link>
                    </div>
                    <div>
                        <video id="really-cool-video" className="video-js vjs-default-skin" width="640" height="264" controls="controls"  data-setup='{}'>
                            <source src={this.state.animate_url} type="video/mp4"/>
                        </video>
                        <a href="javascript:;" classNam="btn btn-default" onClick={this.play.bind(this)}>
                            播放
                        </a>
                    </div>
                    <div className="panel panel-info">
                        <div className="panel-body">
                            <p>
                                {this.state.summary}
                            </p>
                        </div>
                    </div>
                    {Tags}
                </div>
            );
        }
        return (
            <div className="container">
                {Target}
            </div>
        );
    }
}

export default Animate;