/**
 * Created by apache on 15-10-27.
 */
import React from 'react';
import {RouteHandler,Link} from 'react-router';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        UserStore.listen(this.onChange);
        UserActions.getUser(this.props.params.domain);
    }

    componentDidUpdate(prevProps) {
        // Fetch new charachter data when URL path changes
        if (prevProps.params.id !== this.props.params.id) {
            UserActions.getUser(this.props.params.id);
        }
    }

    componentWillUnMount() {
        UserStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-3'>
                        <div className='mon-center'>
                            <img src={this.state.avatar_url} width='200' alt="loading"/>
                        </div>
                        <div className='mon-user-name'>{this.state.username}</div>
                        <div className='mon-vcard-stats'>
                            <Link to={'/u/'+this.state.doamin+'/followers'}>
                                <a className='mon-link'>
                                    <span>{this.state.followers}</span>
                                    <b>Followers</b>
                                </a>
                            </Link>
                            <Link to={'/u/'+this.state.doamin+'/following'}>
                                <a className='mon-link'>
                                    <span>{this.state.followers}</span>
                                    <b>Following</b>
                                </a>
                            </Link>
                            <Link to={'/u/'+this.state.doamin+'/contribute'}>
                                <a className='mon-link'>
                                    <span>{this.state.contribute}</span>
                                    <b>Contribute</b>
                                </a>
                            </Link>
                        </div>
                        <ul className='nav mon-ability-list'>
                            <li><a href=""><span className='fa fa-cog'></span>设置</a></li>
                            <li><a href=""><span className='fa fa-user'></span>中心</a></li>
                            <li><a href=""><span className='fa fa-star'></span>关注</a></li>
                            <li>
                                <a href="javascript:;" data-toggle='collapse' data-target='#my-contribute'>
                                    <span className='fa fa-pencil-square'></span>投稿
                                </a>
                                <ul className='nav collapse mon-contribute' id='my-contribute'>
                                    <li><a href=""><span className='fa fa-video-camera'></span>动漫</a></li>
                                    <li><a href=""><span className='fa fa-music'></span>音乐</a></li>
                                    <li><a href=""><span className='fa fa-file'></span>文章</a></li>
                                </ul>
                            </li>
                            <li><a href=""><span className='fa fa-bell'></span>通知</a></li>
                        </ul>
                    </div>
                    <div className='col-md-9 col-sm-9'>
                        <RouteHandler />
                    </div>
                </div>
            </div>
        );
    }
}

User.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default User;