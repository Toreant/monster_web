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
        FollowingActions.getFollowers(page);
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            FollowingActions.getFollowers(this.params.page);
        }
    }

    componentWillUnMount() {
        FollowingStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(auth_id) {
        let $self = $("[data-self="+ auth_id +"]");
        FollowingActions.unFollow($self,auth_id);
    }

    render() {
        let followers = this.state.followers.map((data,index) => {
            return (
                <div key={data.auth_id} className='listgroup'>
                    <div className='media'>
                        <span className='position pull-left'>{index + 1}</span>
                        <div className='pull-left thumb-lg'>
                            <Link to={'/characters/' + data.auth_id}>
                                <img className='media-object' src={data.avatar_url} />
                            </Link>
                        </div>
                        <div className='media-body'>
                            <h4 className='media-heading followers-name'>
                                <Link to={'/characters/' + data.auth_id}>{data.username}</Link>
                            </h4>
                            <p className='followers-intro'>{data.introduce}</p>
                            <div className='follow'>
                                <span className='fa fa-star-o'></span>
                                <a href="javascript:;" data-self={data.auth_id.toString()} onClick={this.handleClick.bind(this,data.auth_id)}>取消关注</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className='col-md-9 col-sm-9'>
                {followers}
                <Pagination />
            </div>
        );
    }
}

export default Following;