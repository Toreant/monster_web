/**
 * Created by apache on 15-11-8.
 */
import React from 'react';
import {isEqual} from 'underscore';
import CommentActions from '../actions/CommentActions';
import CommentStore from '../stores/CommentStore';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = CommentStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CommentStore.listen(this.onChange);
        CommentActions.getComment(this.props.id);
    }

    componentDidUpdate(prevProps) {
        //　判断是不是更改了文章
        if(prevProps.id !== this.props.id) {
            CommentActions.getComment(this.props.id);
        }
    }

    ComponentWillUnMount() {
        CommentStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        let params = {
            content : this.state.comment,
            create_time : new Date().getTime(),
            type : 'article',
            con_id : this.props.id
        };

        CommentActions.postComment(params);
    }

    render() {

        let CommentList = this.state.commentList.map((data) => {
            return (
                <li key={data.comment._id}>
                    <a href={'/u/'+data.user.domain}>
                        <img src={data.user.avatar_url} alt="loading" width='40'/>
                    </a>
                    {data.comment.content}
                </li>
            );
        });
        return (
            <div className='row'>
                <form role='form'>
                    <div className='form-group'>
                        <textarea name="comment" className='form-control' onChange={CommentActions.changeComment}></textarea>
                    </div>
                    <a href="javascript:;" className='btn btn-info'　onClick={this.handleClick.bind(this)}>
                        保存评论
                    </a>
                </form>
                <ul>
                    {CommentList}
                </ul>
            </div>
        );
    }
}

export default Comment;