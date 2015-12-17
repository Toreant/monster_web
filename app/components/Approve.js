/**
 * Created by apache on 15-12-17.
 */
import React from 'react';
import ApproveActions from '../actions/ApproveActions';
import ApproveStore from '../stores/ApproveStore';

class Approve extends React.Component {
    constructor(props) {
        super(props);
        this.state = ApproveStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ApproveStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ApproveStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    /**
     * 点击点赞或踩后的函数
     * @param point
     */
    handleClick(point) {
        if(point === 0) {
            ApproveActions.approve(point,this.props._id,this.props.column,this.props.approveCallback);
        } else {
            ApproveActions.approve(point,this.props._id,this.props.column,this.props.disCallback);
        }
    }

    render() {
        return (
            <div className="mon-approve">
                <div>
                    <div className="mon-approve-item">
                        <a href="javascript:;" className="mon-approve-click" onClick={this.handleClick.bind(this,0)}>
                            <span className="fa fa-thumbs-o-up mon-thumb"></span>
                        </a>
                    </div>
                    <div className="mon-approve-item">
                        <a href="javascript:;" className="mon-approve-click-o" onClick={this.handleClick.bind(this,1)}>
                            <span className="fa fa-thumbs-o-down mon-thumb"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Approve;