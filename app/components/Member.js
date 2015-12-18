/**
 * Created by apache on 15-11-14.
 */
import React from 'react';
import {isEqual} from 'underscore';
import {RouteHandler,Link} from 'react-router';
import Contribute from './Contribute';
import NotFound from './NotFound';
import NoticeSender from './NoticeSender';
import MemberActions from '../actions/MemberActions';
import MemberStore from '../stores/MemberStore';
import Loading from './Loading';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = MemberStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MemberStore.listen(this.onChange);
        MemberActions.getMember(this.props.params.domain);
    }

    componentDidUpdate(prevProps) {
        if (!isEqual(prevProps.params, this.props.params)) {
            MemberActions.getMember(this.props.params.domain);
        }
    }

    componentWillUnmount() {
        MemberStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick(option,_id) {

        // option 0 -- 关注　1 -- 取消关注
        MemberActions.follow(option,_id);
    }

    render() {
        let domain = this.props.params.domain,
            FollowBtn = '',click,FollowInfo,
            Mem;

        if(this.state.followed) {
            FollowInfo = '已关注';
            FollowBtn = 'btn-default';
            click = this.handleClick.bind(this,1,this.state._id);
        } else {
            FollowInfo = '关注';
            FollowBtn = 'btn-info';
            click = this.handleClick.bind(this,0,this.state._id);
        }

        if(!this.member) {


            Mem = (
                <div className="col-md-3 col-sm-3">
                    <div className='mon-center'>
                        <img src={this.state.avatar_url || '/img/dd9901f664234eb44f6b217e7fa04e17.jpg'} width='200' alt="loading"/>
                    </div>
                    <div className='mon-user-name'>{this.state.username}</div>
                    <div className='mon-vcard-stats'>
                        <Link to={'/member/'+domain+'/followers'} className='mon-link'>
                            <span>{this.state.followers}</span>
                            <b>Followers</b>
                        </Link>
                        <Link to={'/member/'+domain+'/following'} className='mon-link'>
                            <span>{this.state.following}</span>
                            <b>Following</b>
                        </Link>
                        <Link to={'/member/'+domain+'/star'} className='mon-link'>
                            <span>{this.state.star}</span>
                            <b>Star</b>
                        </Link>
                    </div>
                    <div className='mon-center mon-member'>
                        <p　className='text-muted mon-bg-title'>个人简介</p>
                        <p className='text-success bg-info mon-member-intr'>
                            {this.state.introduce}
                        </p>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#noticeSender">
                            私信
                        </button>
                        <button className={"btn "+FollowBtn} onClick={click}>
                            {FollowInfo}
                        </button>
                    </div>
                </div>
            );
        } else {
            Mem = <Loading />;
        }


        return (
            <div className='container'>
                <div className="row">
                    {Mem}
                    <Contribute option='0' domain={this.props.params.domain}/>
                </div>
                <NoticeSender receiver={this.state._id}/>
            </div>
        );
    }
}

Member.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Member;