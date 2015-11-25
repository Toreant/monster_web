/**
 * Created by apache on 15-11-25.
 */
import React from 'react';
import PostMusicActions from '../actions/PostMusicActions';
import PostMusicStore from '../stores/PostMusicStore';

class PostMusic extends React.Component {
    constructor(props) {
        super(props);
        this.state = PostMusicStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PostMusicStore.listen(this.onChange);
    }

    componentWillUnmount() {
        PostMusicStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default PostMusic;