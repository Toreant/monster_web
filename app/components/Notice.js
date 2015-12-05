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

    render() {
        let Target;
        if(this.state.loading === false && this.state.notices.length !== 0) {
            Target = this.state.notices.map((data) => {
                return (
                    <div className="mon-notice-item media animated flipInX">
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
                                {new Date(data.notice.create_time)}
                            </span>
                            </div>
                        </div>
                    </div>
                );
            });
        } else if(this.state.loading === false && this.state.notices.length === 0) {
            Target = (
                <p className="bg-primary mon-padding">
                    没有私信或通知
                </p>
            );
        } else if(this.state.loadin === true) {
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