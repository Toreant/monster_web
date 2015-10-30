/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import StarActions from '../actions/StarActions';
import StarStore from '../stores/StarStore';

class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = StarStore.getState();
        this.onChange =  this.onChange.bind(this);
    }

    componentDidMount() {
        StarStore.listen(this.onChange);
    }

    componentWillUnMount() {
        StarStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='jumbotron mon-home'>
                <p>Monster 分享你的乐趣</p>
                <p>独乐乐，不如猪乐乐</p>
                <a href="/login" className='btn btn-primary'>登陆</a>
            </div>
        );
    }
}

export default Star;
