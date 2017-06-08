/**
 * Created by apache on 15-10-23.
 */
import React from 'react';

class Footer extends React.Component {

    show(type) {
        switch (type) {
            case 'weixin':

                break;
        }
    }

    render() {
        return (
            <footer className='mon-footer'>
                <div className='container'>
                    <div className='col-md-4 col-sm-4'>
                        <p>友情链接</p>
                        <a href="http://www.gameday.ren/" target="_blank">比赛日官网</a>
                        <a href="https://www.espnzhibo.com/" target="_blank">ESPN直播</a>
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        <p>技术栈</p>
                        <div className="flex-box">
                            <a href="http://www.gulpjs.com.cn/" target="_blank">gulp</a>
                            <a href="https://nodejs.org/en/" target="_blank">nodejs</a>
                            <a href="http://www.bootcss.com/" target="_blank">bootstrap</a>
                            <a href="http://facebook.github.io/react/" target="_blank">react</a>
                            <a href="https://www.mongodb.org" target="_blank">mongodb</a>
                            <a href="http://www.bootcss.com/p/lesscss/" target="_blank">less</a>
                            <a href="http://cn.vuejs.org/" target="_blank">vue</a>
                            <a href="http://www.ttlsa.com/" target="_blank">运维生存时间</a>
                            <a href="https://segmentfault.com/" target="_blank">segmentfault</a>
                            <a href="http://www.csdn.net/" target="_blank">csdn</a>
                            <a href="http://sentsin.com/daohang/" target="_blank">前端江湖</a>
                        </div>
                    </div>
                    {/*<div className='col-md-4 col-sm-4'>*/}
                        {/*<p>关注我</p>*/}
                        {/*<a href="https://coding.net/u/gameday/" target="_blank">*/}
                            {/*<span className='fa fa-github'></span>*/}
                        {/*</a>*/}
                        {/*<a href="javascript:;" onClick={this.show.bind(this, 'weixin')}>*/}
                            {/*<span className="fa fa-weixin"></span>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                </div>
            </footer>
        );
    }
}

export default Footer;