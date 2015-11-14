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

    componentWillUnMount() {
        ContributeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let ConNav;
        if(this.props.option === '0') {
            ConNav = (
                <div className='mon-contribute-nav'>
                    <Link to={'/member/'+this.props.domain+'/article'}>
                        文章
                    </Link>
                    <Link to={'/member/'+this.props.domain+'/music'}>
                        音乐
                    </Link>
                    <Link to={'/member/'+this.props.domain+'/animate'}>
                        动漫
                    </Link>
                </div>
            );
        }　else {
            ConNav = (
                <div className='mon-contribute-nav'>
                    <Link to={'/profile/article'}>
                        文章
                    </Link>
                    <Link to={'/profile/music'}>
                        音乐
                    </Link>
                    <Link to={'/profile/animate'} >
                        动漫
                    </Link>
                </div>
            );
        }
        return(
            <div className='col-sm-9 col-md-9 animated fadeInUp'>
                <p className='bg-success mon-padding mon-bg-title'>我的贡献分享</p>
                <div className='mon-contribute-block'>
                    {ConNav}
                </div>
                <RouteHandler />
            </div>
        );
    }
}
export default Contribute;