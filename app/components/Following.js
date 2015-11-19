/**
 * Created by apache on 15-11-2.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import FollowingActions from '../actions/FollowingActions';
import FollowingStore from '../stores/FollowingStore';
import Pagination from './Pagination';

class Following extends React.Component {
    constructor(props) {
        super(props);
        this.state = FollowingStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FollowingStore.listen(this.onChange);
        let page = this.props.params.page;
        if(page === undefined) {
            page = 1;
        }
        FollowingActions.getFollowing(page);
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            FollowingActions.getFollowing(this.params.page);
        }
    }

    componentWillUnmount() {
        FollowingStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(_id) {
        let $self = $("[data-self="+ _id +"]");
        FollowingActions.unFollow($self,_id);
    }

    render() {
        let following;
        if(this.state.following.length === 0) {
            following = (
                <p className='bg-danger mon-padding'>这家伙还没有关注任何人</p>
            );
        } else {
            following = this.state.following.map((data,index) => {
                return (
                    <div key={'following:'+data._id} className='listgroup'>
                        <div className='media'>
                            <span className='position pull-left'>{index + 1}</span>
                            <div className='pull-left thumb-lg'>
                                <Link to={'/member/' + data.domain}>
                                    <img className='media-object' src={data.avatar_url} />
                                </Link>
                            </div>
                            <div className='media-body'>
                                <h4 className='media-heading followers-name'>
                                    <Link to={'/member/' + data.domain}>{data.username}</Link>
                                </h4>
                                <p className='followers-intro'>{data.introduce}</p>
                                <div className='follow'>
                                    <span className='fa fa-star-o'></span>
                                    <a href="javascript:;" data-self={data._id} onClick={this.handleClick.bind(this,data._id)}>取消关注</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }

        return(
            <div className='col-md-9 col-sm-9 animated fadeInUp'>
                <p className='bg-success mon-padding mon-bg-title'>我关注的</p>
                {following}
            </div>
        );
    }
}

export default Following;