/**
 * Created by apache on 15-10-24.
 */
import React from 'react';
import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        LoginStore.listen(this.onChange);
        let hash = window.location.hash ;
        hash = hash.split('#')[1];
        let $sinForm = $(".sign-form"),$loginForm = $(".login-form");
        if(hash === 'login') {
            $sinForm.css('display','none');
            $loginForm.css('display','block');
        } else if (hash === 'sign') {
            $sinForm.css('display','block');
            $loginForm.css('display','none');
        } else {
            $sinForm.css('display','none');
            $loginForm.css('display','block');
            window.location.hash = 'login';
        }
    }

    componentWillUnMount() {
        LoginStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    /**
     * 处理登陆，注册的按钮事件
     * @param option 0————login 1————sign
     */
    handleClick(option) {
        var email = this.state.email,
            password = this.state.password,
            prePassword = this.state.prePassword,
            name = this.state.name;
        if(option === 0) {
            if(email === '') {
                this.refs.loginEmail.getDOMNode().focus();
            }
            if(password === '') {
                this.refs.loginPwd.getDOMNode().focus();
            }
            else if(email !=='' && password !== '')LoginActions.login(email,password);
        } else if(option === 1) {
            if (email === '') {
                this.refs.email.getDOMNode().focus();
            } else if (password === '') {
                this.refs.password.getDOMNode().focus();
            } else if (prePassword === '') {
                this.refs.prePassword.getDOMNode().focus();
            } else if (name === '') {
                this.refs.name.getDOMNode().focus();
            } else LoginActions.sign(email, password, prePassword, name);
        }
    }

    changeForm(form) {
        let $preForm,$newForm;
        let $signForm = $('.sign-form'),$loginForm = $('.login-form');
        let location = window.location;
        switch (form) {
            case 0 :
                $preForm = $signForm;
                $newForm = $loginForm;
                location.hash = 'login';
                break;
            case 1:
                $preForm = $loginForm;
                $newForm = $signForm;
                location.hash = 'sign';
                break;
        }

        $preForm.css('display','none');
        $newForm.css('display','block');

    }

    render() {
        return (
            <div className='container mon-login'>
                <div className='row'>
                    <div className='col-md-8 col-sm-8'></div>
                    <div className='col-md-4 col-sm-4'>
                        <form className='login-form' >
                            <div className='form-legend'>
                                <span>登陆</span>
                                <a href="javascript:;" onClick={this.changeForm.bind(this,1)} className='form-change'><span className='fa fa-arrow-circle-o-right'></span>注册</a>
                            </div>
                            <div className='form-group'>
                                <label for="login-email">邮箱</label>
                                <input id='login-email' className='form-control ' ref='loginEmail' onChange={LoginActions.changeEmail} type="email"  autoFocus placeholder='邮箱'/>
                            </div>
                            <div className='form-group'>
                                <label for="login-pwd">密码</label>
                                <input id='login-pwd' className='form-control ' ref='loginPwd' onChange={LoginActions.changePassword} type="password"  placeholder='密码'/>
                            </div>
                            <a href='javascript:;' onClick={this.handleClick.bind(this,0)} className='btn btn-primary btn-block'>登陆</a>
                            <div className='mon-other-login'>
                                <p>其他账户登陆</p>
                                <a href="/auth/github">
                                    <span className='fa fa-github'></span>
                                </a>
                                <a href="">
                                    <span className='fa fa-weibo'></span>
                                </a>
                                <a href="/auth/facebook">
                                    <span className='fa fa-facebook-square'></span>
                                </a>
                            </div>
                        </form>

                        <form className='sign-form'>
                            <div className='form-legend'>
                                <span>注册</span>
                                <a href="javascript:;" onClick={this.changeForm.bind(this,0)} className='form-change'><span className='fa fa-arrow-circle-o-right'></span>登陆</a>
                            </div>
                            <div className='form-group'>
                                <label for="sign-email">邮箱</label>
                                <input id='sign-email' className='form-control' ref='email' onChange={LoginActions.changeEmail} type="email"  placeholder='邮箱'/>
                            </div>
                            <div className='form-group'>
                                <label for="sign-name">用户名</label>
                                <input id="sign-name" className='form-control' ref='name' onChange={LoginActions.changeName}  type="text" placeholder="用户名"/>
                            </div>
                            <div className='form-group'>
                                <label for="sign-pwd">密码</label>
                                <input id='sign-pwd' className='form-control' ref='password' onChange={LoginActions.changePassword} type="password"  placeholder='密码'/>
                            </div>
                            <div className='form-group'>
                                <label for="sign-pwd">确认密码</label>
                                <input id='sign-pwd' className='form-control' ref='prePassword' onChange={LoginActions.changePrePassword} type="password"  placeholder='密码'/>
                            </div>
                            <a href='javascript:;' onClick={this.handleClick.bind(this,1)} className='btn btn-primary btn-block'>登陆</a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;