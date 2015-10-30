/**
 * Created by apache on 15-10-23.
 */
import React from 'react';
import NavStore from '../stores/NavStore';
import NavAction from '../actions/NavActions';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = NavStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NavStore.listen(this.onChange);
        NavAction.checkLogin();
    }

    componentWillUnMount() {
        NavStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    signOut() {
        NavAction.signOut();
    }

    render() {
        let SUBNAV ;
        if(this.state.loginState) {
            SUBNAV = (
                <ul className="nav navbar-nav navbar-right mon-subnav">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src={this.state.avatar} width='30' alt="loading"/> <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href='/profile' className='mon-user'>
                                    <span>Signed as </span>
                                    <span>{this.state.userName}</span>
                                </a>
                            </li>
                            <li><a href='/profile/setting'>设置</a></li>
                            <li><a href='/profile/toastr'>通知</a></li>
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
                        <a href="/" className='navbar-brand'>
                            <span className='icon-name'>Monster</span>
                        </a>
                    </div>
                    <div className='collapse navbar-collapse' id='my-nav'>
                        <ul className='nav navbar-nav'>
                            <li><a href="/">首页</a></li>
                            <li><a href="/anime">动漫</a></li>
                            <li><a href="/music">音乐</a></li>
                            <li><a href="/article">文章</a></li>
                        </ul>
                        <form className='navbar-form navbar-left' role='search'>
                            <div className='form-group'>
                                <input type="text" className='form-control' placeholder='输入搜索'/>
                            </div>
                            <button type='submit' className='btn btn-default search-btn'>Submit</button>
                        </form>
                        {SUBNAV}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;

