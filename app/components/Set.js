/**
 * Created by apache on 15-10-30.
 */
import React from 'react';
import SetActions from '../actions/SetActions';
import SetStore from '../stores/SetStore';

class Set extends React.Component {
    constructor(props) {
        super(props);
        this.state = SetStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SetStore.listen(this.onChange);
    }

    componentWillUnMount() {
        SetStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleClick() {
        let domain = this.state.domain,
            email = this.state.email,
            username = this.state.username;
        console.log(domain+" "+email+" "+username);
        //SetActions.changeProfile();
    }

    render() {
        return (
            <div>
                <legend>设置</legend>
                <form className='form-horizontal' role='form'>
                    <div className='form-group'>
                        <label htmlFor="individuality_domain" className='col-sm-2 control-label'>个性域名</label>
                        <div className='col-sm-10'>
                            <input type="text" id='individuality_domain' className='form-control' onChange={SetActions.changeDomain} placeholder='数字，英文，破折线'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="individuality_username"className='col-sm-2 control-label'>用户名</label>
                        <div className='col-sm-10'>
                            <input type="text" id='individuality_username' className='form-control' onChange={SetActions.changeUserName} placeholder='长度不超过10' max='10'/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="individuality_email"className='col-sm-2 control-label'>邮箱</label>
                        <div className='col-sm-10'>
                            <input type="email" id='individuality_email' className='form-control' onChange={SetActions.changeEmail} placeholder='example@example.com'/>
                        </div>
                    </div>
                    <div className='fomr-group'>
                        <label htmlFor="individuality_account"className='col-sm-2 control-label'>绑定社交账号</label>
                        <div className='col-sm-10 mon-account'>
                            <a href="/auth/github"><span className='fa fa-github'></span></a>
                            <a href="/auth/facebook"><span className='fa fa-facebook'></span></a>
                            <a href="/auth/weibo"><span className='fa fa-weibo'></span></a>
                        </div>
                    </div>
                    <a href="javascript:;" className='btn btn-primary' onClick={this.handleClick.bind(this)}>保存设置</a>
                </form>
            </div>
        );
    }
}

export default Set;

