/**
 * Created by apache on 15-10-27.
 */
import React from 'react';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

class User extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        UserStore.listen(this.onChange);
        UserActions.getUser("56115067");
        console.log(this.props.params);
    }

    componentWillUnMount() {
        UserStore.unlisten(this.onChange);
        console.log(this.props);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-4'>
                        <img src={this.state.avatar_url} width='200' alt="loading"/>
                        <p className='mon-user-name'>{this.state.username}</p>
                        <div>
                            <span>
                                <b>{this.state.followers}</b>
                                Followers
                            </span>
                            <span>
                                <b>{this.state.contribute}</b>
                                Contribute
                            </span>
                            <span>
                                <b>{this.state.following}</b>
                                Following
                            </span>
                        </div>
                    </div>
                    <div className='col-md-8 col-sm-8'></div>
                </div>
            </div>
        );
    }
}

User.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default User;