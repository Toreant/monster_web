/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';
import Carousel from './Carousel';
import Loading from './Loading';
import Weather from './Weather';
import {Link} from 'react-router';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);

        window.location = '/articles';

        // HomeActions.getArticles();
        // HomeActions.getMusics();
    }

    componentDidUpdate(nextProps,preProps) {

    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let Articles,Musics;
        if(this.state.a_loading) {
            Articles = <Loading/>;
        } else {
            Articles = this.state.articles.map((data) => {
                return (
                    <div key={'article'+data.data._id} className="mon-item">
                        <div className="mon-fragmentation">
                            <div>
                                <Link to={'/article/'+data.data._id}>
                                    <img src={data.data.abbreviations || '/img/abbreviations.png'} alt="loading"/>
                                </Link>
                            </div>
                            <div>
                                <Link to={'/member/'+data.user.domain} className="btn btn-block clearfix">
                                    <img src={data.user.avatar_url} alt="loading"/>
                                    <span className="pull-right">
                                        {data.user.username}
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="mon-aside">
                            <Link to={'/article/'+data.data._id}>
                                {data.data.title}
                            </Link>
                        </div>
                    </div>

                );
            });
        }
        if(this.state.m_loading) {
            Musics = <Loading />;
        } else {
            Musics = this.state.musics.map((data) => {
                return (
                    <div key={'music'+data.data._id} className="mon-item">
                        <div className="mon-fragmentation">
                            <div>
                                <Link to={'/music/'+data.data._id}>
                                    <img src={data.data.abbreviations || '/img/abbreviations.png'} alt="loading"/>
                                </Link>
                            </div>
                            <div >
                                <Link to={'/member/'+data.user.domain} className="btn btn-block clearfix">
                                    <img src={data.user.avatar_url} alt="loading"/>
                                    <span className="pull-right">
                                        {data.user.username}
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="mon-aside">
                            <Link to={'/article/'+data.data._id}>
                                {data.data.title}
                            </Link>
                        </div>
                    </div>
                );
            });
        }
        return (
            <div className="container mon-main">
                <div className="raw clearfix mon-section mon-carousel">
                    <div className="col-md-8">
                        <Carousel />
                    </div>
                    <div className="col-md-4">
                        <Weather />
                    </div>
                </div>
                <div className="raw clearfix mon-section">
                    <span className="mon-label">文章</span>
                    <div className="mon-box">
                        {Articles}
                    </div>
                </div>
                <div className="raw clearfix mon-section">
                    <p className="mon-label">音乐</p>
                    <div className="mon-box">
                        {Musics}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;