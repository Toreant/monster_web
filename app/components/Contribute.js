/**
 * Created by apache on 15-11-2.
 */
import React from 'react';
import {RouteHandler,Link} from 'react-router';
import ContributeActions from '../actions/ContributeActions';
import ContributeStore from '../stores/ContributeStore';
class Contribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = ContributeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ContributeStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ContributeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        //let domain = this.props.domain;

        return(
            <div className='col-sm-9 col-md-9 animated fadeInUp'>
                <p className="bg-success mon-padding mon-bg-title">
                    他的投稿
                </p>
                <RouteHandler />
            </div>
        );
    }
}
export default Contribute;