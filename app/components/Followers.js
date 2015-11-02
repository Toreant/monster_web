/**
 * Created by apache on 15-11-1.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import FollowersActions from '../actions/FollowersActions';
import FollowersStore from '../stores/FollowersStore';
import Pagination from './Pagination';

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
            console.log('hehe');
        } else {
            console.log('aha');
        }
    }

    componentWillUnMount() {
        FollowersStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(auth_id) {
        let $self = $("[data-self="+ auth_id +"]");
        FollowersActions.addFollow($self,auth_id);
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
                                <a href="javascript:;" data-self={data.auth_id.toString()} onClick={this.handleClick.bind(this,data.auth_id)}>关注</a>
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

export default Followers;