/**
 * Created by apache on 15-11-14.
 */
import React from 'react';
import MemberContributeActions from '../actions/MemberContributeActions';
import MemberContributeStore from '../stores/MemberContributeStore';

class MemberContribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = MemberContributeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        MemberContributeStore.listen(this.onChange);
    }

    componentWillUnMount() {
        MemberContributeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <p></p>
        );
    }
}

export default MemberContribute;