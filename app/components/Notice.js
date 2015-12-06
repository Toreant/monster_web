/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import NoticeActions from '../actions/NoticeActions';
import NoticeStore from '../stores/NoticeStore';
import {Link} from 'react-router';
import Loading from './Loading';

class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.state = NoticeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NoticeStore.listen(this.onChange);
        NoticeActions.getNoticesList();
    }

    componentWillUnmount() {
        NoticeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    readed(_id) {
        NoticeActions.getNotice(_id);
    }

    render() {
        let Target = null;
        if(this.state.loading === false && this.state.notices.length !== 0) {
            Target = this.state.notices.map((data) => {
                return (
                    <div key={data.notice._id} data-item={data.notice._id} className="mon-conlist-item mon-notice-item media animated flipInX">
                        <div className="media-left">
                            <Link to={'/member/'+data.user.domain}>
                                <img src={data.user.avatar_url} alt="loading" width="60"/>
                            </Link>
                        </div>
                        <div className="media-body">
                            <p className="text-info">
                                {data.notice.content}
                            </p>
                            <div>
                            <span>
                                {(new Date(data.notice.create_time)).toLocaleDateString()}
                            </span>
                            </div>
                        </div>
                        <button className="btn btn-danger mon-read" onClick={this.readed.bind(this,data.notice._id)}>
                            已读
                        </button>
                    </div>
                );
            });
        } else if(this.state.loading === false && this.state.notices.length === 0) {
            Target = (
                <div className="bg-primary mon-padding">
                    没有私信或通知
                </div>
            );
        } else if(this.state.loading === true) {
            Target = <Loading />
        }
        return (
            <div className='col-md-9 col-sm-9'>
                <p className="bg-info mon-bg-title mon-padding">
                    通知／私信
                </p>
                {Target}
            </div>
        );
    }
}

export default Notice;