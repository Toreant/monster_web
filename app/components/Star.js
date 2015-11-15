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

    handleClick(option) {

        let column = this.props.column,
            star_id = this.props.star;

        // option 0-- 关注　１－－ 取消关注
        if(option === 0) {
            StarActions.getStar(star_id,column);
        } else {
            StarActions.unStar(star_id,column);
        }
    }

    render() {
        let StarBtn;
        if(this.state.stared === 'true' || this.state.stared ) {
            StarBtn = (
                <a href="javascript:;" className='btn btn-danger'
                   onClick={this.handleClick.bind(this,1)}>
                    <span className='fa fa-star-o'>取消收藏</span>
                </a>
            );
        } else {
            StarBtn = (
                <a href="javascript:;" className='btn btn-primary'
                   onClick={this.handleClick.bind(this,0)}>
                    <span className='fa fa-star'>收藏</span>
                </a>
            );
        }
        return (
            <div className='mon-star'>
                {StarBtn}
            </div>
        );
    }
}

export default Star;