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

        let approve = this.props.approve,
            disapprove = this.props.disapprove;

        this.setState({
            approve : approve,
            disapprove : disapprove
        });

        ApproveStore.state.approve = approve;
        ApproveStore.state.disapprove = disapprove;

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
        ApproveActions.approve(point,this.props._id,this.props.column);
    }

    render() {
        return (
            <div className="mon-approve">
                <div className="mon-approve-item">
                    <a href="javascript:;" onClick={this.handleClick.bind(this,0)}>
                        <span className="fa fa-thumbs-o-up mon-thumb"></span>
                    </a>
                    <span className="mon-count">{this.state.approve}</span>
                </div>
                <div className="mon-approve-item">
                    <a href="javascript:;" onClick={this.handleClick.bind(this,1)}>
                        <span className="fa fa-thumbs-o-down mon-thumb"></span>
                    </a>
                    <span className="mon-count-o">{this.state.disapprove}</span>
                </div>
            </div>
        );
    }
}

export default Approve;