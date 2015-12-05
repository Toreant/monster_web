/**
 * Created by apache on 15-12-5.
 */
import React from 'react';
import NoticeSenderActions from '../actions/NoticeSenderActions';
import NoticeSenderStore from '../stores/NoticeSenderStore';

class NoticeSender extends React.Component {
    constructor(props) {
        super(props);
        this.state = NoticeSenderStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NoticeSenderStore.listen(this.onChange);
    }

    componentWillUnmount() {
        NoticeSenderStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        NoticeSenderActions.postNotice(this.state.content,this.props.receiver);
    }

    render() {
        let Loading;
        if(this.state.loading) {
            Loading = (
                <div class="loader-inner ball-pulse">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            );
        } else {
            Loading = null;
        }
        return (
            <div id="noticeSender" className="modal fade"  tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">私信</h4>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <textarea name="content" rows="10" className="form-control" placeholder="输入你想对他说的话" onChange={NoticeSenderActions.changeContent}></textarea>
                            </form>
                            {Loading}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>提交</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoticeSender;