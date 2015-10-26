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
        this.avatar = data._json.avatar_url;
    }

    onCheckLoginSuccess(data) {
        if (data.code === 200) {
            console.log(data.raw);
            this.onChangeState(data.raw);
            toastr.success("恭喜你登陆了");
        }
    }

    onCheckLoginFail() {
        //toastr.error("服务器错误");
    }
}

export default alt.createStore(NavStore);