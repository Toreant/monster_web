/**
 * Created by apache on 15-12-1.
 */
import React from 'react';
import MemberFollowActions from '../actions/MemberFollowActions';
import MemberFollowStore from '../stores/MemberFollowStore';
import Loading from './Loading';
import {Link} from 'react-router';
import NotFound from './NotFound';

class MemberFollow extends React.Component {
    constructor(props) {
        super(props);
        this.state = MemberFollowStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MemberFollowStore.listen(this.onChange);
        MemberFollowActions.getFollow(this.props.params.domain,this.props.params.follow,this.props.params.skip);
    }

    componentWillUnmount() {
        MemberFollowStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let Follows;
        let follow;
        if(this.state.follows.length > 0 && this.state.loading === false && this.state.error === false) {
            Follows = this.state.follows.map((data) => {
                follow = this.props.params.follow === 'following'?data:data.user;
                return (
                    <div key={follow._id} className="media mon-follow-item col-md-3 animated fadeIn">
                        <div className="media-left">
                            <Link to={'/member/'+follow.domain}>
                                <img src={follow.avatar_url} alt="loading"/>
                            </Link>
                        </div>
                        <div className="media-body">
                            <Link to={'/member/'+follow.domain}>
                                {follow.username}
                            </Link>
                            <p className="text-muted mon-follow-intr">
                                {follow.introduce}
                            </p>
                        </div>
                    </div>
                );
            });
        } else if(this.state.loading === true) {
            Follows = <Loading />
        } else if(this.state.follows.length === 0) {
            Follows = (
                <p className="bg-info mon-bg-title mon-padding">
                    没有，就是没有，你咬我
                </p>
            );
        }
        return (
            <div className="raw">
                {Follows}
            </div>
        );
    }
}

export default MemberFollow;