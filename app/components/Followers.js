/**
 * Created by apache on 15-11-1.
 */
import React from 'react';
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
    }

    componentWillUnMount() {
        FollowersStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return(
            <div className='col-md-9 col-sm-9'>

            </div>
        );
    }
}

export default Followers;