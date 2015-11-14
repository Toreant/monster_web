/**
 * Created by apache on 15-11-14.
 */
import React from 'react';
import {isEqual} from 'underscore';
import {RouteHandler,Link} from 'react-router';
import Contribute from './Contribute';
import NotFound from './NotFound';
import MemberActions from '../actions/MemberActions';
import MemberStore from '../stores/MemberStore';

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

    componentWillUnMount() {
        MemberStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        let Mem = (
            <div className="col-md-3 col-sm-3">
                <div className='mon-center'>
                    <img src={this.state.avatar_url} width='200' alt="loading"/>
                </div>
                <div className='mon-user-name'>{this.state.username}</div>
                <div className='mon-vcard-stats'>
                    <Link to={'/member/'+this.props.params.domain+'/followers'} className='mon-link'>
                        <span>{this.state.followers}</span>
                        <b>Followers</b>
                    </Link>
                    <Link to={'/member/'+this.props.params.domain+'/following'} className='mon-link'>
                        <span>{this.state.following}</span>
                        <b>Following</b>
                    </Link>
                    <Link to={'/member/'+this.props.params.domain+'/contribute'} className='mon-link'>
                        <span>{this.state.contribute}</span>
                        <b>Star</b>
                    </Link>
                </div>
                <div className='mon-center mon-member'>
                    <p　className='text-muted mon-bg-title'>个人简介</p>
                    <p className='text-success bg-info mon-member-intr'>
                        {this.state.introduce}
                    </p>
                </div>
            </div>
        );
        return (
            <div className='container'>
                <div className="row">
                    {Mem}
                    <Contribute option='0' domain={this.props.params.domain}/>
                </div>
            </div>
        );
    }
}

Member.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Member;