/**
 * Created by apache on 16-4-6.
 */
import React from 'react';
import TagListActions from '../actions/TagListActions';
import TagListStore from '../stores/TagListStore';
import CommonList from './CommonList';

class TagList extends React.Component {
    constructor(props) {
        super(props);
        this.state = TagListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        TagListStore.listen(this.onChange);
        TagListActions.getList(this.props.params.tag);
    }

    componentWillUnmount() {
        TagListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let List = null;
        if(this.state.list.length > 0) {
            List = <CommonList list={this.state.list} column="/article/" />;
        } else {
            List = (
                <div className="mon-table">
                    <div>找不到 T_T</div>
                </div>
            );
        }

        return (
            <div id="lists" className='container mon-main'>
                <div className='row'>
                    <div className='col-md-8 col-md-offset-2 col-sm-12 col-xs-12'>
                        <span className="mon-article-tag">{this.props.params.tag}</span>
                        {List}
                    </div>
                </div>
            </div>
        );
    }
}

export default TagList;