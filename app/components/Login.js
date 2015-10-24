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

    handleClick() {
        console.log("login");
        LoginActions.login("123","123");
    }

    changeForm(form) {
        let $preForm,$newForm;
        switch (form) {
            case 0 :
                $preForm = $('.sign-form');
                $newForm = $('.login-form');
                window.location.hash = 'login';
                break;
            case 1:
                $preForm = $('.login-form');
                $newForm = $('.sign-form');
                window.location.hash = 'sign';
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
                                <input id='login-email' className='form-control' type="email" required placeholder='邮箱'/>
                            </div>
                            <div className='form-group'>
                                <label for="login-pwd">密码</label>
                                <input id='login-pwd' className='form-control' type="password" required placeholder='密码'/>
                            </div>
                            <a href='javascript:;' onClick={this.handleClick.bind(this)} className='btn btn-primary btn-block'>登陆</a>
                            <div className='mon-other-login'>
                                <p>其他账户登陆</p>
                                <a href="http://www.baidu.com">
                                    <span className='fa fa-github'></span>
                                </a>
                                <a href="">
                                    <span className='fa fa-weibo'></span>
                                </a>
                                <a href="">
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
                                <label for="login-email">邮箱</label>
                                <input id='login-email' className='form-control' type="email" required placeholder='邮箱'/>
                            </div>
                            <div className='form-group'>
                                <label for="login-pwd">密码</label>
                                <input id='login-pwd' className='form-control' type="password" required placeholder='密码'/>
                            </div>
                            <div className='form-group'>
                                <label for="login-pwd">确认密码</label>
                                <input id='login-pwd' className='form-control' type="password" required placeholder='密码'/>
                            </div>
                            <a href='javascript:;' onclick='handleclick' className='btn btn-primary btn-block'>登陆</a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;