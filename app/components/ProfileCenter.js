/**
 * Created by apache on 15-11-1.
 */
import React from 'react';
import ProfileCenterActions from '../actions/ProfileCenterActions';
import ProfileCenterStore from '../stores/ProfileCenterStore';

class ProfileCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = ProfileCenterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ProfileCenterStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ProfileCenterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9'>
                个人用户中心
            </div>
        );
    }
}

export default ProfileCenter;