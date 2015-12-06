/**
 * Created by apache on 15-11-1.
 */
import React from 'react';
import ProfileCenterActions from '../actions/ProfileCenterActions';
import ProfileCenterStore from '../stores/ProfileCenterStore';
import Loading from './Loading';
import {Link} from 'react-router';

class ProfileCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = ProfileCenterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ProfileCenterStore.listen(this.onChange);
        ProfileCenterActions.getProfile();
    }

    componentWillUnmount() {
        ProfileCenterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let Target = null,More = null;
        if(this.state.starsCount > 7) {
            More = (
                <div className="col-md-3 col-xs-12 mon-more">
                    <Link to="/profile/star" className="mon-muted">
                        <span className="fa fa-plus"></span>
                    </Link>
                </div>
            );
        }
        if(this.state.loading) {
            Target = <Loading />;
        } else if(this.state.loading === false && this.state.stars.length > 0) {
            Target = this.state.stars.map((data) => {
                return (
                    <div key={data._id} className="media col-md-6 col-xs-12">
                        <div className="media-left">
                            <Link to={'/article/'+data._id}>
                                <img src={data.abbreviations || '/img/abbreviations.png'} width="120" alt="loading"/>
                            </Link>
                        </div>
                        <div className="media-body">
                            <Link to={'/article/'+data._id} className="text-primary">
                                {data.title}
                            </Link>
                            <p className="text-muted">
                                {data.summary || '什么鬼也没有'}
                            </p>
                        </div>
                    </div>
                );
            });
        }

        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp'>
                <div className="mon-badge mon-tab">
                    <span className="fa fa-folder-open text-info"></span>
                    <Link to={'/profile/contribute'} className="mon-muted">
                        个人投稿
                    </Link>
                    <span className="badge">
                        {this.state.contribute}
                    </span>
                </div>
                <div className="mon-tab">
                    <div className="mon-badge">
                        <span className="fa fa-file-text text-success"></span>
                        <Link to={'/profile/star'} className="mon-muted">
                             收藏
                        </Link>
                        <span className="badge">
                            {this.state.starsCount}
                        </span>
                    </div>
                    <div className="mon-star-list clearfix">
                        {Target}
                        {More}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCenter;