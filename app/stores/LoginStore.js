/**
 * Created by apache on 15-10-24.
 */
import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {
    constructor() {
        this.bindActions(LoginActions);
        this.email = '';
        this.authId = '';
        this.password = '';
        this.stateInfo = ''; // 登陆状态信息
        this.err = false;
    }

    /**
     * 密码和确认密码不一样的错误
     */
    onDoPasswordFail() {
        this.stateInfo = '两次密码不一样';
        this.err = true;
    }

    /**
     * @param email 登陆邮箱
     * @param passwod 登陆密码
     */
    onLoginSuccess(data) {
        console.log(data);
    }

    /**
     * 登陆失败
     * @param data
     */
    onLoginFail() {
        this.stateInfor = '邮箱未注册，或密码不正确';
        this.err = true;
        toastr.error(this.stateInfor);
    }

    /**
     * 注册成功
     */
    onDoSignSuccess() {

    }

    /**
     * 注册失败
     */
    onSignFail(data) {
        this.err = true;
        if(!data.error) {
            switch(data.failId) {
                case 1: this.stateInfo = '邮箱已经被注册了';break;
                case 2: this.stateInfo = '邮箱不支持';break;
            }
            return toastr.warning(this.stateInfo);
        } else {
            this.stateInfo = '服务器错误';
            return toastr.error(this.stateInfo);
        }
    }

    onChangeEmail(event) {
        this.email = event.target.value;
    }

    onChangePassword(event) {
        this.password = event.target.value;
    }
}

export default alt.createStore(LoginStore);