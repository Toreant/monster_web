/**
 * Created by apache on 15-11-1.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import FollowersActions from '../actions/FollowersActions';
import FollowersStore from '../stores/FollowersStore';
import Pagination from './Pagination';
import FollowBtn from './FollowBtn';

class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = FollowersStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FollowersStore.listen(this.onChange);
        let page = this.props.params.page;
        if(page === undefined) {
            page = 1;
        }
        FollowersActions.getFollowers(page);
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            FollowersActions.getFollowers(this.params.page);
        }
    }

    componentWillUnmount() {
        FollowersStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(option,auth_id) {
        console.log();
        let $self = $("[data-self="+ auth_id +"]");
        if(option === 0) {
            FollowersActions.addFollow($self,auth_id);
        } else if(option === 1) {
            FollowersActions.unFollow($self,auth_id)
        }
    }


    render() {
        let followers;
        if(this.state.followers.length === 0) {
            followers = (
                <p className='bg-danger mon-padding'>还没有人关注我</p>
            );
        } else {
            followers = this.state.followers.map((data,index) => {
                let FollowBtn;
                if(data.following) {
                    FollowBtn = (
                        <a href="javascript:;" data-self={data.user._id.toString()} onClick={this.handleClick.bind(this,1,data.user._id.toString())}>取消关注</a>
                    );
                } else {
                    FollowBtn = (
                        <a href="javascript:;"　data-self={data.user._id.toString()}　onClick={this.handleClick.bind(this,0,data.user._id.toString())}>关注</a>
                    );
                }
                return (
                    <div key={'followers:'+data.user._id} className='listgroup'>
                        <div className='media'>
                            <span className='position pull-left'>{index + 1}</span>
                            <div className='pull-left thumb-lg'>
                                <Link to={'/characters/' + data.user._id}>
                                    <img className='media-object' src={data.user.avatar_url} />
                                </Link>
                            </div>
                            <div className='media-body'>
                                <h4 className='media-heading followers-name'>
                                    <Link to={'/characters/' + data.user._id}>{data.user.username}</Link>
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

        let pagination = this.state.followers.length !== 0 ? (<Pagination/>):null;
        return(
            <div className='col-md-9 col-sm-9 animated fadeInUp'>
                <p className='bg-success mon-padding mon-bg-title'>关注我的</p>
                {followers}
                {pagination}
            </div>
        );
    }
}

export default Followers;