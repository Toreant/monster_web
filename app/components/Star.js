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
        if (option === 0) {
            StarActions.getStar(star_id, column,this.props.plusClick);
        } else {
            StarActions.unStar(star_id, column,this.props.subClick);
        }
    }

    render() {
        let stared = '',option = 0;

        if((!this.state.changed && this.props.stared === 'true') || this.state.stared ) {
            stared = 'mon-stared';
            option = 1;
        } else {
            option = 0;
            stared = '';
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