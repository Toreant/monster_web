/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import SetActions from '../actions/SetActions';

class SetStore {
    constructor() {
        this.bindActions(SetActions);
        this.username = '';
        this.domain = '';
        this.email = '';
        this.account = '';
    }

    onChangeProfileSuccess(data) {
        if(data.code === 200) {
            toastr.success('修改用户资料成功');
        } else if(data.code === 400) {
            toastr.warning('修改用户资料不成功');
        }
    }

    onChangeProfileFail() {
        toastr.error('服务器错误');
    }

    onGetProfileSuccess(userProfile) {

        if(userProfile !== undefined) {
            this.username = userProfile.raw.username;
            this.domain = userProfile.raw.domain;
            this.email = userProfile.raw.email;
        } else {
            $.ajax({
                url : '/api/session',
                type : 'post',
                cache : false
            }).done((data) => {
                localStorage.setItem('user',JSON.stringify(data));
            }).fail((data) => {
                toastr.error('获取用户资料失败');
            });
        }
    }

    onProfileFail() {
        toastr.error('hehe');
    }

    onChangeDomain(event) {
        console.log('heh');
        this.domain = event.target.value;
    }

    onChangeEmail(event) {
        this.email = event.target.value;
    }

    onChangeUserName(event) {
        this.username = event.target.value;
    }
}

export default alt.createStore(SetStore);