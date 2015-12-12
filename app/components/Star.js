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

    componentWillUnmount() {
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
        let stared = '',option = 0;

        if(this.props.stared === 'true' || this.state.stared ) {
            stared = 'mon-stared';
            option = 1;
        }

        return (
            <div className="mon-star">
                <a id="substitute" href="javascript:;" className={'fa fa-heart-o animated '+stared}
                   onClick={this.handleClick.bind(this,option)}>
                </a>
            </div>

        );
    }
}

export default Star;