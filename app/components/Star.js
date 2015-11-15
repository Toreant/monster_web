/**
 * Created by apache on 15-11-15.
 */
import React from 'react';
import StarActions from '../actions/StarActions';
import StarStore from '../stores/StarStore';

class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = StarStore.getState();
        this.onChange = this.onChange.bind(this);
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

    handleClick() {
        let column = this.props.column,
            star_id = this.props.star;
        StarActions.getStar(star_id,column);
    }

    render() {
        return (
            <a href="javascript:;" className='btn btn-primary' onClick={this.handleClick.bind(this)}>
                <span className='fa fa-star'></span>收藏
            </a>
        );
    }
}

export default Star;