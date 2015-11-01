/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import PostAnimateActions from '../actions/PostAnimateActions';
import PostAnimateStore from '../stores/PostAnimateStore';
class PostAnimate extends React.Component {
    constructor(props) {
        super(props);
        this.state = PostAnimateStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PostAnimateStore.listen(this.onChange);
        PostAnimateActions.postAnimate();
        console.log('did mount');
    }

    componentWillUpdate(nextProps,nextState) {
        console.log('will update animate');
    }

    componentDidUpdate(preProps,prevState) {
        console.log('did update animate');
    }

    componentWillUnMount() {
        PostAnimateStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9'>
                动漫投稿
            </div>
        );
    }
}

export default PostAnimate;