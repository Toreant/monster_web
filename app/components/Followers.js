/**
 * Created by apache on 15-11-1.
 */
import React from 'react';
import {Link} from 'react-router';
import FollowersActions from '../actions/FollowersActions';
import FollowersStore from '../stores/FollowersStore';

class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = FollowersStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FollowersStore.listen(this.onChange);
        FollowersActions.getFollowers();
        console.log("hehe");
    }

    componentWillUnMount() {
        FollowersStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(auth_id) {
        console.log(auth_id);
        FollowersActions.addFollow(auth_id);
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
                                <a href="javascript:;" onClick={this.handleClick.bind(this,data.auth_id)}>关注</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className='col-md-9 col-sm-9'>
                {followers}
            </div>
        );
    }
}

export default Followers;