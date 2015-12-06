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
        if(this.state.loading) {
            Target = <Loading />;
        } else if(this.state.loading === false && this.state.stars.length > 0) {
            Target = this.state.stars.map((data) => {
                return (
                    <div key={data._id} className="media col-md-6 col-xs-12">
                        <div className="media-left">
                            <img src={data.abbreviations || '/img/abbreviations.png'} width="120" alt="loading"/>
                        </div>
                        <div className="media-body">
                            <p className="text-primary">
                                {data.title}
                            </p>
                            <p className="text-muted">
                                {data.summary}
                            </p>
                        </div>
                    </div>
                );
            });
        }
        if(this.state.starsCount > 10) {
            More = (
                <div>
                    <Link to="/profile/star">
                        <span className="fa fa-plus-square"></span>
                    </Link>
                </div>
            );
        }
        return (
            <div className='col-md-9 col-sm-9'>
                <h1 className="mon-padding-title">个人中心</h1>
                <div className="mon-badge">
                    <span className="fa fa-folder-open"></span>
                    个人投稿
                    <span className="badge">
                        {this.state.contribute}
                    </span>
                </div>
                <div>
                    <div className="mon-badge">
                        <span className="fa fa-file-text"></span>
                        收藏
                        <span className="badge">
                            {this.state.starsCount}
                        </span>
                    </div>
                    <div className="mon-star-list">
                        {Target}
                        {More}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCenter;