/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
    }

    componentDidUpdate(nextProps,preProps) {

    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron mon-home'>
                    <p>Monster 分享你的乐趣</p>
                    <p>独乐乐，不如猪乐乐</p>
                    <a href="/login" className='btn btn-primary'>登陆</a>
                </div>
            </div>
        );
    }
}

export default Home;