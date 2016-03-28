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

    componentWillUnmount() {
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
            name = this.state.username;
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        if(option === 0) {
            if(email === '' || !reg.test(email)) {
                this.refs.loginEmail.getDOMNode().focus();
                toastr.warning("邮箱不可为空或则邮箱不符合规则");
            }
            if(password === '') {
                this.refs.loginPwd.getDOMNode().focus();
                toastr.warning("密码不可为空");
            }
            else if(email !=='' && password !== '') LoginActions.login(email,password);
        } else if(option === 1) {
            if (email === '' || !reg.test(email)) {
                this.refs.email.getDOMNode().focus();
                toastr.error("邮箱不可为空或邮箱不符合规则");
            } else if (password === '') {
                this.refs.password.getDOMNode().focus();
                toastr.error("密码不可为空");
            } else if (prePassword === '') {
                this.refs.prePassword.getDOMNode().focus();
                toastr.warning("请确认密码");
            } else if (name === '') {
                this.refs.user.getDOMNode().focus();
                toastr.error("用户名不可为空");
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
            <div className='container mon-login mon-main'>
                <div className='row'>
                    <div className='col-md-4 col-sm-4 col-xs-12 col-md-offset-4 col-sm-offset-4 auth'>
                        <p>
                            auth登陆
                        </p>
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
                </div>
            </div>
        );
    }
}

export default Login;