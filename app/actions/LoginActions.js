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
            'changePassword',
            'changeName',
            'changePrePassword'
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
    sign(email,password,prePwd,userName) {
        console.log(email+" "+password+" "+prePwd+" "+userName);
        if(password !== prePwd) {
            this.actions.doPasswordFail();
        } else {
            $.ajax({
                url : '/api/user',
                dataType : 'json',
                type : 'post',
                cache : false,
                data : {
                    email : email,
                    password : password,
                    name : userName
                }
            }).done((data) => {
                this.actions.doSignSuccess(data);
            }).fail((data) => {
                this.actions.doSignFail(data);
            });
        }
    }
}

export default alt.createActions(LoginActions);