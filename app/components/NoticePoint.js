/**
 * Created by apache on 15-12-5.
 */
import React from 'react';
import NoticePointActions from '../actions/NoticePointActions';
import NoticePointStore from '../stores/NoticePointStore';

class NoticePoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = NoticePointStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NoticePointStore.listen(this.onChange);
        NoticePointActions.getNotices();
    }

    componentWillUnmount() {
        NoticePointStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
        if(this.state.count === 0) {
            let node = this.refs.notice.getDOMNode();
            node.className = node.className + ' mon-disabled';
        }
    }

    render() {
        return (
            <span ref="notice" className="mon-notice-point badge">
                {this.state.count}
            </span>
        );
    }
}

export default NoticePoint;