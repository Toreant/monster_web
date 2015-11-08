/**
 * Created by apache on 15-11-8.
 */
import React from 'react';

class BtnBlock extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    handlerClick() {
        $("html,body").animate({scrollTop:0},700);
    }

    render() {
        return (
            <div className='mon-btn-block'>
                <a href="javascript:;" className='btn btn-default'>
                    <span className='fa fa-weibo'></span>
                    <span className='mon-btn-fix'>微博分享</span>
                </a>
                <a href="javascript:;" className='btn btn-default'>
                    <span className='fa fa-facebook'></span>
                    <span className='mon-btn-fix'>FA分享</span>
                </a>
                <a href="javascript:;" className='btn btn-default'>
                    <span className='fa fa-weixin'></span>
                    <span className='mon-btn-fix'>微信分享</span>
                </a>
                <a href="javascript:;" className='btn btn-default' onClick={this.handlerClick.bind(this)}>
                    <span className='fa fa-arrow-up'></span>
                    <span className='mon-btn-fix'>回到顶部</span>
                </a>
            </div>
        );
    }
}

export default BtnBlock;