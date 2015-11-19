/**
 * Created by apache on 15-11-19.
 */
import React from 'react';
import FollowBtnActions from '../actions/FollowBtnActions';
import FollowBtnStore from '../stores/FollowBtnStore';

class FollowBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = FollowBtnStore.getState();
        this.state.follow = props.follow;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FollowBtnStore.listen(this.onChange);
    }

    componentWillUnmount() {
        FollowBtnStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        console.log('heh');
        console.log(this.props.auth_id);
    }

    handleClick() {
        FollowBtnActions.follow(this.state.follow,this.props.auth_id);
    }

    render() {
        let Btn;
        if(this.state.follow ) {
            Btn = '取消关注';
        } else {
            Btn = '关注';
        }

        return (
            <a href="javascript:;" className='btn btn-default' onClick={this.handleClick.bind(this)}>
                {Btn}
            </a>
        );
    }
}

export default FollowBtn;