/**
 * Created by apache on 15-10-30.
 */
import alt from '../alt';
import SetActions from '../actions/SetActions';

class SetStore {
    constructor() {
        this.bindActions(SetActions);
        this.avatar_url = '';
        this.username = '';
        this.domain = '';
        this.email = '';
        this.account;
        this.intro = '';
        /* 输入检测时输出状态 */
        this.domainValidate = '';
        this.nameValidate = '';
        this.emailValidate = '';
        this.introValidate = '';
    }

    onChangeProfileSuccess(data) {
        if (data.code === 200) {
            toastr.success('修改用户资料成功');
        } else if(data.code === 500) {
            toastr.error('服务器错误');
        } else {
            toastr.warning(data.meta);
        }
    }

    onChangeProfileFail() {
        toastr.error('服务器错误');
    }

    onGetProfileSuccess(data) {

        if(data !== undefined && data.code === 200) {
            this.avatar_url = data.raw.avatar_url;
            this.username = data.raw.username;
            this.domain = data.raw.domain;
            this.email = data.raw.email;
            this.account = data.raw.account;
            this.intro = data.raw.introduce;
        }
    }

    onGetProfileLocal(data) {
        this.username = data.raw.username;
        this.domain = data.raw.domain;
        this.email = data.raw.email;
        this.account = data.raw.account;
        this.intro = data.raw.introduce;
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

    onChangeIntro(event) {
        this.intro = event.target.value;
    }

    /**
     * @param option 1--error 0--not error
     */
    onDomainValidateFail(option) {
        if(option === 1) {
            this.domainValidate = 'has-error';
        } else if(option === 0) {
            this.domainValidate = '';
        }
    }

    onNameValidateFail(option) {
        if(option === 1) {
            this.nameValidate = 'has-error';
        } else if(option === 0) {
            this.nameValidate = '';
        }
    }

    onEmailValidateFail(option) {
        if(option === 1) {
            this.emailValidate = 'has-error';
        } else if(option === 0) {
            this.emailValidate = '';
        }
    }

    onIntroValidateFail(option) {
        if(option === 1) {
            this.introValidate = 'has-error';
        } else if(option === 0) {
            this.introValidate = '';
        }
    }
}

export default alt.createStore(SetStore);