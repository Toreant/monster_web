/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import StarListActions from '../actions/StarListActions';
import StarListStore from '../stores/StarListStore';

class StarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = StarListStore.getState();
        this.onChange =  this.onChange.bind(this);
    }

    componentDidMount() {
        StarListStore.listen(this.onChange);
        if(this.props.what === undefined) {
            StarListActions.getStarList(0,null);
        } else {
            StarListActions.getStarList(1,this.props.domain,this.props.option);
        }
    }

    componentWillUnMount() {
        StarListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp mon-padding'>
                <p className='bg-info mon-bg-title'>
                    收藏列表
                </p>
            </div>
        );
    }
}

export default StarList;
