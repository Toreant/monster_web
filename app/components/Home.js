/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';
import Carousel from './Carousel';
import Loading from './Loading';
import {Link} from 'react-router';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
        HomeActions.getArticles();
        HomeActions.getMusics();
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
                            <div >
                                <Link to={'/article/'+data.data._id} className="mon-muted">
                                    {data.data.summary || '什么鬼也没有'}
                                </Link>
                            </div>
                        </div>
                        <div className="mon-aside">
                            <Link to={'/member/'+data.user.domain}>
                                <img src={data.user.avatar_url} alt="loading"/>
                            </Link>
                            <span>
                                {(new Date(data.data.create_time)).toLocaleDateString()}
                            </span>
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
                            <div>
                                <Link to={'/music/'+data.data._id} className="mon-muted">
                                    {data.data.summary || '什么鬼也没有'}
                                </Link>
                            </div>
                        </div>
                        <div className="mon-aside">
                            <Link to={'/member/'+data.user.domain}>
                                <img src={data.user.avatar_url} alt="loading"/>
                            </Link>
                            <span>
                                {(new Date(data.data.create_time)).toLocaleDateString()}
                            </span>
                        </div>
                    </div>

                );
            });
        }
        return (
            <div className="container mon-main">
                <div className="raw clearfix mon-section">
                    <div className="col-md-8">
                        <Carousel />
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