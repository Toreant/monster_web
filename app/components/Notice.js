/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import NoticeActions from '../actions/NoticeActions';
import NoticeStore from '../stores/NoticeStore';

class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.state = NoticeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NoticeStore.listen(this.onChange);
    }

    componentWillUnmount() {
        NoticeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9'>
                Toastr
            </div>
        );
    }
}

export default Notice;