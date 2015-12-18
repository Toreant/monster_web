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
        if(this.props.approved !== 2) {
            toastr.warning('你已经点赞过或踩过了');
            return;
        }
        if(point === 0) {
            ApproveActions.approve(point,this.props._id,this.props.column,this.props.approveCallback);
        } else {
            ApproveActions.approve(point,this.props._id,this.props.column,this.props.disCallback);
        }
    }

    render() {
        let approved = '',disapproved = '';
        switch(this.props.approved) {
            case 0 :
                approved = 'mon-approved';
                disapproved = ' mon-ban-approve';
                break;
            case 1 :
                approved = 'mon-ban-approve';
                disapproved = ' mon-disapproved';
                break;
            case 2 :
                break;
        }
        return (
            <div className="mon-approve">
                <div>
                    <div className="mon-approve-item">
                        <a href="javascript:;" className={"mon-approve-click "+approved} onClick={this.handleClick.bind(this,0)}>
                            <span className="fa fa-thumbs-o-up mon-thumb"></span>
                        </a>
                    </div>
                    <div className="mon-approve-item">
                        <a href="javascript:;" className={"mon-approve-click-o "+disapproved} onClick={this.handleClick.bind(this,1)}>
                            <span className="fa fa-thumbs-o-down mon-thumb"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Approve;