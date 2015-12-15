/**
 * Created by apache on 15-11-2.
 */
import React from 'react';
import {RouteHandler,Link} from 'react-router';
import ContributeActions from '../actions/ContributeActions';
import ContributeStore from '../stores/ContributeStore';
class Contribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = ContributeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ContributeStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ContributeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let domain = this.props.domain;
        let ConNav;
        if(this.props.option === '0') {
            ConNav = (
                <div className='mon-contribute-nav'>
                    <Link to={'/member/'+domain+'/article'}>
                        文章
                    </Link>
                    <Link to={'/member/'+domain+'/music'}>
                        音乐
                    </Link>
                    <Link to={'/member/'+domain+'/animate'}>
                        动漫
                    </Link>
                </div>
            );
        }　else {
            ConNav = (
                <div className='mon-contribute-nav'>
                    <Link to={'/profile/contribute/articles'}>
                        文章
                    </Link>
                    <Link to={'/profile/contribute/musics'}>
                        音乐
                    </Link>
                    <Link to={'/profile/contribute/animates'} >
                        动漫
                    </Link>
                </div>
            );
        }
        return(
            <div className='col-sm-9 col-md-9 animated fadeInUp'>
                <div>
                    <div className='mon-contribute-block'>
                        {ConNav}
                    </div>
                </div>
                <RouteHandler />
            </div>
        );
    }
}
export default Contribute;