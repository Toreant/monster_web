/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import SetActions from '../actions/SetActions';
import SetStore from '../stores/SetStore';
import Upload from './Upload';

class Set extends React.Component {
    constructor(props) {
        super(props);
        this.state = SetStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SetStore.listen(this.onChange);
        SetActions.getProfile();
    }

    componentWillUnmount() {
        SetStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        let domain = this.state.domain,
            email = this.state.email,
            username = this.state.username,
            intro = this.state.intro,
            avatar_url = $("#user_img").attr('src');
        let error = false;

        let regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
            regDomain = /^[0-9a-zA-Z-]{1,20}$/;

        if(!regEmail.test(email)) {
            SetActions.emailValidateFail(1);
            error = true;
        } else {
            SetActions.emailValidateFail(0);
        }
        if(username.length > 15 || username === '') {
            SetActions.nameValidateFail(1);
            error = true;
        } else {
            SetActions.nameValidateFail(0);
        }
        if(!regDomain.test(domain)) {
            SetActions.domainValidateFail(1);
            error = true;
        } else {
            SetActions.domainValidateFail(0);
        }

        if(!error) {
            SetActions.changeProfile(domain,username,email,intro,avatar_url);
        }
    }

    render() {
        let account;
        switch(this.state.account) {
            case 1: account = (
                <div className='col-sm-10 mon-account'>
                    <a href={this.state.github}><span className='fa fa-github'></span></a>
                </div>
            );
                break;
            case 2: account = (
                <div className='col-sm-10 mon-account'>
                    <a className='fa fa-facebook'></a>
                </div>
            );
                break;
            case 3: account = (
                <div className='col-sm-10 mon-account'>
                    <a className='fa fa-weibo'></a>
                </div>
            );
                break;
            default : account = (
                <div className='col-sm-10 mon-account'>
                    <a href={this.state.github}><span className='fa fa-github'></span></a>
                </div>
            );

        }
        return (
            <div className='col-md-9 col-sm-9 animated fadeInUp'>
                <legend>设置</legend>
                <form className='form-horizontal' role='form'>
                    <div className='form-group'>
                        <label className='col-sm-2 control-label'></label>
                        <div className='col-sm-3'>
                            <img id='user_img' src={this.state.avatar_url} alt="loading" width='200'/>
                        </div>
                        <div className='col-sm-7'>
                            <Upload img="#user_img" />
                        </div>
                    </div>
                    <div className={'form-group '+this.state.domainValidate}>
                        <label htmlFor="individuality_domain" className='col-sm-2 control-label'>个性域名</label>
                        <div className='col-sm-10'>
                            <input type="text" id='individuality_domain' className='form-control' onChange={SetActions.changeDomain} placeholder='数字，英文，破折线' value={this.state.domain}/>
                            <span className={this.state.domainValidate === ''?'hide':'text-danger'}>*个性域名格式错误或太长</span>
                        </div>
                    </div>
                    <div className={'form-group '+this.state.nameValidate}>
                        <label htmlFor="individuality_username"className='col-sm-2 control-label'>用户名</label>
                        <div className='col-sm-10'>
                            <input type="text" id='individuality_username' className='form-control' onChange={SetActions.changeUserName} placeholder='长度不超过10' value={this.state.username} max='15'/>
                            <span className={this.state.nameValidate === ''?'hide':'text-danger'}>*用户名不能为空或是超过15个字</span>
                        </div>
                    </div>
                    <div className={'form-group '+this.state.emailValidate}>
                        <label htmlFor="individuality_email"className='col-sm-2 control-label'>邮箱</label>
                        <div className='col-sm-10'>
                            <input type="email" id='individuality_email' className='form-control' onChange={SetActions.changeEmail} placeholder='example@example.com' value={this.state.email}/>
                            <span className={this.state.emailValidate === ''?'hide':'text-danger'}>*邮箱格式错误</span>
                        </div>
                    </div>
                    <div className={'form-group '+this.state.introValidate}>
                        <label htmlFor="individuality_intro"className='col-sm-2 control-label'>个人简介</label>
                        <div className='col-sm-10'>
                            <textarea type="email" id='individuality_intro' className='form-control' onChange={SetActions.changeIntro} placeholder='留下你的宝贝简介吧' rows='3' value={this.state.intro}></textarea>
                            <span className={this.state.introValidate === ''?'hide':'text-danger'}>*简介字数超出50</span>
                        </div>
                    </div>
                    <div className='fomr-group'>
                        <label htmlFor="individuality_account"className='col-sm-2 control-label'>
                            {this.state.account ===0?"绑定社交账号":"已绑定的账号"}
                        </label>
                        {account}
                    </div>
                    <a href="javascript:;" className='btn btn-primary pull-right' onClick={this.handleClick.bind(this)}>保存设置</a>
                </form>
            </div>
        );
    }
}

export default Set;

