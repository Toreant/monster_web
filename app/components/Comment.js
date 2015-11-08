/**
 * Created by apache on 15-11-8.
 */
import React from 'react';
import {isEqual} from 'underscore';
import {Link} from 'react-router';
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
        CommentActions.getComment(this.props.id,0);
    }

    componentDidUpdate(prevProps) {
        //　判断是不是更改了文章
        if(prevProps.id !== this.props.id) {
            CommentActions.getComment(this.props.id,0);
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

    getComment(option) {
        if(option === 0) {
            CommentActions.changeSkip(0);
            console.log(this.state.skip);
            CommentActions.getComment(this.props.id,this.state.skip-10);
        } else {
            CommentActions.changeSkip(1);
            console.log(this.state.skip);
            CommentActions.getComment(this.props.id,this.state.skip+10);
        }
    }

    render() {

        let CommentList;
        if(this.state.commentList.length >0) {
            CommentList = this.state.commentList.map((data) => {
                return (
                    <li key={data.comment._id} className='clearfix mon-comment-item'>
                        <div className='col-md-1'>
                            <Link to={'/u/'+data.user.domain}>
                                <img src={data.user.avatar_url} alt="loading" width='40'/>
                            </Link>
                        </div>
                        <div className='col-md-11'>
                            <div>
                                <Link to={'/u/'+data.user.domain} className='mon-user-name'>
                                    {data.user.username}
                                </Link>
                                <span className='pull-right'>{new Date(data.comment.create_time).toLocaleDateString()}</span>
                            </div>
                            <article>
                                {data.comment.content}
                            </article>
                        </div>
                    </li>
                );
            });
        } else {
            CommentList = (
                <p className='text-danger'>没有评论了</p>
            );
        }

        return (
            <div className='row mon-comment'>
                <form role='form'>
                    <div className='form-group'>
                        <textarea name="comment" className='form-control' rows='5' placeholder='输入你的大评吧！！！' onChange={CommentActions.changeComment}></textarea>
                    </div>
                    <div className='form-group clearfix'>
                        <a href="javascript:;" className='btn btn-info pull-right'　onClick={this.handleClick.bind(this)}>
                            保存评论
                        </a>
                    </div>
                </form>
                <p className='mon-comment-title'>评论列表</p>
                <ul className='mon-comment-list'>
                    {CommentList}
                </ul>
                <a href="javascript:;" className='btn mon-page mon-prev-page' onClick={this.getComment.bind(this,0)}><span className='fa fa-long-arrow-left'></span></a>
                <a href="javascript:;" className='btn mon-page mon-next-page' onClick={this.getComment.bind(this,1)}><span className='fa fa-long-arrow-right'></span></a>


            </div>
        );
    }
}

export default Comment;