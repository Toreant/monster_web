/**
 * Created by apache on 15-10-24.
 */
import alt from '../alt';

class LoginActions {
    constructor() {
        this.generateActions(
            'doPasswordFail',
            'loginSuccess',
            'loginFail',
            'doSignSuccess',
            'doSignFail'
        );
    }

    /**
     * 登陆
     * @param email
     * @param password
     * @param prePwd
     */
    login(email,password) {
        $.post(
            '/api/login',
            {
                email : email,
                password : password
            },
            (data) =>{
                if(data.err) {
                    this.actions.loginFail();
                } else {
                    this.actions.loginSuccess(data);
                }
            }
        );
    }

    /**
     * 注册
     * @param email
     * @param password
     * @param prePwd
     */
    sign(email,password,prePwd) {
        if(password !== prePwd) {
            this.actions.doPasswordFail();
        } else {
            $.post(
                '/api/sign',
                {
                    eamil : email,
                    password : password
                },
                function(data) {
                    if(data.err) {
                        this.actions.doSignFail(data);
                    } else {
                        this.actions.doSignSuccess();
                    }
                }
            );
        }
    }
}

export default alt.createActions(LoginActions);