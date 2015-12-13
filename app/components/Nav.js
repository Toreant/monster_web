/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import {Link} from 'react-router';
import NavActions from '../actions/NavActions';
import NavStore from '../stores/NavStore';
import NoticePoint from './NoticePoint';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = NavStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NavStore.listen(this.onChange);
        NavActions.checkLogin();
    }

    componentWillUnmount() {
        NavStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    signOut() {
        NavActions.signOut();
    }

    search() {
        NavActions.search(this.state.search);
    }

    render() {
        let SUBNAV ;
        if(this.state.loginState) {
            SUBNAV = (
                <ul className="nav navbar-nav navbar-right mon-subnav">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src={this.state.avatar} width='30' alt="loading"/> <span className="caret"></span>
                            <NoticePoint />
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to='/profile' className='mon-user'>
                                    <span>Signed as </span>
                                    <span>{this.state.userName}</span>
                                </Link>
                            </li>
                            <li><Link to='/profile/setting'>设置</Link></li>
                            <li><Link to='/profile/notice'>通知</Link></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="javascript:;" onClick={this.signOut.bind(this)}>退出</a></li>
                        </ul>
                    </li>
                </ul>
            );
        } else {
            SUBNAV = (
                <ul className='nav navbar-nav navbar-right'>
                    <li><a href="/login#login">登陆</a></li>
                    <li><a href="/login#sign">注册</a></li>
                </ul>
            );
        }
        return (
            <nav className='navbar navbar-default mon-nav' id='mon-fixed-nav'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button className='navbar-toggle collapsed' data-toggle='collapse' data-target='#my-nav'>
                            <span className='sr-only'>Toggle</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className='navbar-brand icon-name'>
                            Monster
                        </a>
                    </div>
                    <div className='collapse navbar-collapse' id='my-nav'>
                        <ul className='nav navbar-nav'>
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/animates">动漫</Link></li>
                            <li><Link to="/musics">音乐</Link></li>
                            <li><Link to="/articles">文章</Link></li>
                        </ul>
                        <form className='navbar-form navbar-left' role='search'>
                            <div className='form-group'>
                                <input type="text" className='form-control' placeholder='输入搜索' onChange={NavActions.changeSearch}/>
                            </div>
                            <a className='btn btn-default search-btn' onClick={this.search.bind(this)}>Submit</a>
                        </form>
                        {SUBNAV}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;

