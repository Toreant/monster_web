/**
 * Created by apache on 15-10-27.
 */
import React from 'react';
import {Router,RouteHandler,Link} from 'react-router';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';
import NoticePoint from './NoticePoint';
import UpdateBlock from './UpdateBlock';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        UserStore.listen(this.onChange);
        UserActions.getUser();
    }

    componentDidUpdate(prevProps) {
        // Fetch new charachter data when URL path changes
        if (prevProps.params.id !== this.props.params.id) {
            UserActions.getUser(this.props.params.id);
        }
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let content;
        if(this.state.auth) {
            content = (
                <div className="row">
                    <div className='col-md-3 col-sm-3'>
                        <div className='mon-center mon-user-img'>
                            <img src={this.state.avatar_url} width='200' alt="loading"/>
                        </div>
                        <div className='mon-user-name'>{this.state.username}</div>
                        <div className='mon-vcard-stats'>
                            <Link to={'/profile/followers'}>
                                <a className='mon-link'>
                                    <span>{this.state.followers}</span>
                                    <b>Followers</b>
                                </a>
                            </Link>
                            <Link to={'/profile/following'}>
                                <a className='mon-link'>
                                    <span>{this.state.following}</span>
                                    <b>Following</b>
                                </a>
                            </Link>
                            <Link to={'/profile/contribute/articles'}>
                                <a className='mon-link'>
                                    <span>{this.state.contribute}</span>
                                    <b>Contribute</b>
                                </a>
                            </Link>
                        </div>
                        <ul className='nav mon-ability-list'>
                            <li><Link to='/profile/setting'><span className='fa fa-cog'></span>设置</Link></li>
                            <li><Link to='/profile/center'><span className='fa fa-user'></span>中心</Link></li>
                            <li><Link to='/profile/star'><span className='fa fa-star'></span>关注</Link></li>
                            <li>
                                <a href="javascript:;" data-toggle='collapse' data-target='#my-contribute'>
                                    <span className='fa fa-pencil-square'></span>投稿
                                </a>
                                <ul className='nav collapse mon-contribute' id='my-contribute'>
                                    <li><Link to='/post/animate'><span className='fa fa-video-camera'></span>动漫</Link></li>
                                    <li><Link to='/post/music'><span className='fa fa-music'></span>音乐</Link></li>
                                    <li><Link to='/post/article'><span className='fa fa-file'></span>文章</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/profile/notice'>
                                    <span className='fa fa-bell'></span>通知
                                    <NoticePoint />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <RouteHandler />
                </div>);
        } else {
            content = (
                <div>

                </div>
            );
        }

        return (
            <div className='container'>
                {content}
                <UpdateBlock />
            </div>
        );
    }
}

User.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default User;