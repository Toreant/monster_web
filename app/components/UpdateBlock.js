/**
 * Created by apache on 15-12-15.
 */
import React from 'react';
import UpdateBlockActions from '../actions/UpdateBlockActions';
import UpdateBlockStore from '../stores/UpdateBlockStore';

class UpdateBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = UpdateBlockStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        UpdateBlockStore.listen(this.onChange);
    }

    componentWillUnmount() {
        UpdateBlockStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        let $updateModal = $("#updateModal");
        let title = $updateModal.find("input[name='title']").val(),
            summary = $updateModal.find("textarea[name='summary']").val(),
            tags = $updateModal.find("input[name='tag']").val().replace(/\s+/g,","),
            content = $updateModal.find("textarea[name='content']").val();

        tags = tags.split(',');
        let tag = [];
        tags.map((data) => {
            tag.push(data);
        });

        UpdateBlockActions.update(title,summary,tag,content,$("#_id").val());
    }

    render() {
        return (
            <div id="updateModal" className="modal fade"  tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4>更新</h4>
                        </div>
                        <div className="modal-body">
                            <form role="form">
                                <div className="form-group">
                                    <p className="text-info">
                                        标题
                                    </p>
                                    <input name="title" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <p className="text-info">
                                        简介
                                    </p>
                                    <textarea name="summary" cols="30" rows="4" className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <p className="text-info">
                                        标签
                                    </p>
                                    <input name="tag" type="text" className="form-control"/>
                                </div>
                                <input id="_id" type="hidden" name="_id"/>
                                <div className="form-group">
                                    <p className="text-info">
                                        主体内容
                                    </p>
                                    <textarea id="updateContent" name="content" cols="30" rows="10" className="form-control"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary pull-right" onClick={this.handleClick.bind(this)}>
                                保存更新
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateBlock;