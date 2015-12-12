/**
 * Created by apache on 15-12-12.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import FollowActions from '../actions/FollowActions';
import FollowStore from '../stores/FollowStore'
import Pagination from './Pagination';

class Follow extends React.Component {
    constructor(props) {
        super(props);
        this.state = FollowStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FollowStore.listen(this.onChange);
        let page = this.props.params.page;
        if(page === undefined) {
            page = 1;
        }
        let column = this.props.params.follow;
        FollowActions.getFollows(column,page);
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            let page = this.props.params.page;
            if(page === undefined) {
                page = 1;
            }
            FollowActions.getFollows(this.props.params.follow,page);
        }
    }

    componentWillUnmount() {
        FollowStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(auth_id) {
        let $self = $("[data-self="+ auth_id +"]");
        if($self.data('option').toString() === '0') {
            FollowActions.addFollow($self,auth_id);
        } else {
            FollowActions.unFollow($self,auth_id)
        }
    }

    render() {
        let followers,Title;

        Title = this.props.params.follow === 'followers'?'关注我的':'我关注的';

        if(this.state.follows.length === 0) {
            followers = (
                <p className='bg-danger mon-padding'>没有任何数据</p>
            );
        } else {
            followers = this.state.follows.map((data,index) => {
                let FollowBtn;
                if(data.following) {
                    FollowBtn = (
                        <a href="javascript:;" data-self={data.user._id.toString()} data-option='1' onClick={this.handleClick.bind(this,data.user._id.toString())}>取消关注</a>
                    );
                } else {
                    FollowBtn = (
                        <a href="javascript:;"　data-self={data.user._id.toString()} data-option='0'　onClick={this.handleClick.bind(this,data.user._id.toString())}>关注</a>
                    );
                }
                return (
                    <div key={data.user._id} className='listgroup animated flipInX'>
                        <div className='media'>
                            <span className='position pull-left'>{index + 1}</span>
                            <div className='pull-left thumb-lg'>
                                <Link to={'/member/' + data.user.domain}>
                                    <img className='media-object' width='80' src={data.user.avatar_url} />
                                </Link>
                            </div>
                            <div className='media-body'>
                                <h4 className='media-heading followers-name'>
                                    <Link to={'/member/' + data.user.domain}>{data.user.username}</Link>
                                </h4>
                                <p className='followers-intro'>{data.user.introduce}</p>
                                <div className='follow'>
                                    {FollowBtn}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }

        let pagination = this.state.follows.length !== 0 ? (<Pagination/>):null;
        return(
            <div className='col-md-9 col-sm-9'>
                <p className='bg-success mon-padding mon-bg-title'>{Title}</p>
                {followers}
                {pagination}
            </div>
        );
    }
}

export default Follow;