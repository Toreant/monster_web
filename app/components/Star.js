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

    unStarClick() {
        let column = this.props.column,
            star_id = this.props.star;
        StarActions.unStar(star_id,column);
    }

    render() {
        let StarBtn;
        if(this.props.stared === 'true') {
            StarBtn = (
                <a href="javascript:;" className='btn btn-danger' onClick={this.unStarClick.bind(this)}>
                    <span className='fa fa-star-o'></span>取消收藏
                </a>
            );
        } else {
            StarBtn = (
                <a href="javascript:;" className='btn btn-primary' onClick={this.handleClick.bind(this)}>
                    <span className='fa fa-star'></span>收藏
                </a>
            );
        }
        return (
            <div>
                {StarBtn}
            </div>
        );
    }
}

export default Star;