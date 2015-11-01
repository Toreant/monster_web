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
        StarActions.getStar();
    }

    componentWillUnMount() {
        StarStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9'>

            </div>
        );
    }
}

export default Star;
