/**
 * Created by apache on 15-10-23.
 */
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className='mon-footer'>
                <div className='container'>
                    <div className='col-md-4 col-sm-4'>
                        <p>友情链接</p>
                        <a href="http://www.bilibili.com/">哔哩哔哩</a>
                        <a href="http://www.acfun.tv/">acfun</a>
                        <a href="http://music.163.com/">网易云音乐</a>
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <p>技术栈</p>
                        <a href="http://www.gulpjs.com.cn/">
                            <img src="/img/gulp.svg" width="40" alt="loading"/>
                        </a>
                        <a href="https://nodejs.org/en/">
                            <img src="/img/node.svg" width="50" alt="loading"/>
                        </a>
                        <a href="http://www.bootcss.com/">bootstrap</a>
                        <a href="http://facebook.github.io/react/">react</a>
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <p>关注我的账号</p>
                        <a href="http://weibo.com/u/1894138207/">
                            <span className='fa fa-weibo'></span>
                        </a>
                        <a href="https://github.com/Toreant/">
                            <span className='fa fa-github'></span>
                        </a>
                        <a href="http://music.163.com/#/user/home?id=38777415">网易云音乐</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;