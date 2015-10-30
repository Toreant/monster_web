/**
 * Created by apache on 15-10-25.
 */
import alt from '../alt';
import NavActions from '../actions/NavActions';

class NavStore {
    constructor() {
        this.bindActions(NavActions);
        this.loginState = false;
        this.userName = '';
        this.avatar = '';
    }

    onChangeState(data) {
        this.loginState = true;
        this.userName = data.username ;
        this.avatar = data._json === undefined ? data.avatar_url : data._json.avatar_url;
        this.domain = data._json === undefined ? data.domain : data._json.username;
    }

    onCheckLoginSuccess(data) {
        if (data.code === 200) {
            this.onChangeState(data.raw);
        }
    }

    onCheckLoginFail() {
        toastr.error("服务器错误");
    }

    onSignOutSuccess(data) {
        if(data.code === 200) {
            let localStorage = window.localStorage;
            localStorage.setItem('user','');
            window.location = '/';
        } else if(data.code === 400) {
            toastr.error('退出不成功');
        }
    }

    onSignOutFail() {
        toastr.error("服务器错误");
    }
}

export default alt.createStore(NavStore);