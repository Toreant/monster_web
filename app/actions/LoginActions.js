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
            'doSignFail',
            'changeEmail',
            'changePassword'
        );
    }

    /**
     * 登陆
     * @param email
     * @param password
     * @param prePwd
     */
    login(email,password) {
        $.ajax({
            type : 'POST',
            url : '/api/login',
            cache: false,
            dataType : 'json',
            data : {
                email : email,
                password : password
            }
        }).done((data) => {this.actions.loginSuccess(data)})
        .fail((data) => {this.actions.loginFail});
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