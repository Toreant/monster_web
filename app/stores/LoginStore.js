/**
 * Created by apache on 15-10-24.
 */
import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {
    constructor() {
        this.bindActions(LoginActions);
        //登陆信息
        this.email = '';
        this.password = '';
        //注册信息
        this.username = '';
        this.prePassword = '';
        // 状态信息
        this.stateInfo = '';
        this.err = '';
    }

    /**
     * 密码和确认密码不一样的错误
     */
    onDoPasswordFail() {
        this.stateInfo = '两次密码不一样';
        this.err = true;
        toastr.warning(this.stateInfo);
    }

    /**
     * @param email 登陆邮箱
     * @param passwod 登陆密码
     */
    onLoginSuccess(data) {
        if(data.code === 200) {
            let localStorage = window.localStorage;
            localStorage.setItem('user',JSON.stringify(data));
            window.location = '/';
        } else if(data.code === 400) {
            toastr.error('登陆失败');
        }
    }

    /**
     * 登陆失败
     * @param data
     */
    onLoginFail() {
        this.stateInfor = '服务器错误';
        this.err = true;
        toastr.error(this.stateInfor);
    }

    /**
     * 注册成功
     */
    onDoSignSuccess(data) {
        console.log(data);
        if(data.code === 200) {
            toastr.success("注册成功,3秒后将跳转到首页");
            setTimeout(function(){
                window.location = '/';
            },3000);
        } else if(data.code === 400) {
            toastr.warning("邮箱或用户名已经被注册");
        }
    }

    /**
     * 注册失败
     */
    onSignFail(data) {
        this.stateInfo = '服务器错误';
        toastr.warning(this.stateInfo);
    }

    onChangeEmail(event) {
        this.email = event.target.value;
    }

    onChangePassword(event) {
        this.password = event.target.value;
    }

    onChangeName(event) {
        this.username = event.target.value;
    }

    onChangePrePassword(event) {
        this.prePassword = event.target.value;
    }
}

export default alt.createStore(LoginStore);