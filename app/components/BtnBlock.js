/**
 * Created by apache on 15-11-8.
 */
import React from 'react';

class BtnBlock extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(window).scroll(function() {
            var $window = $(this);
            if($window.scrollTop() < 400) {
                $("#_back").fadeOut();
            } else {
                $("#_back").fadeIn();
            }
        });
    }

    handlerClick() {
        $("html,body").animate({scrollTop:0},700);
    }

    shareFB() {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1162206170473800',
                xfbml      : true,
                version    : 'v2.5'
            });

            let u = window.location.href;
            FB.ui({
                method: 'share_open_graph',
                action_type: 'og.likes',
                action_properties: JSON.stringify({
                    object: u.toString()
                })
            }, function(response){
                // Debug response (optional)
                console.log(response);
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render() {
        return (
            <div className='mon-btn-block'>
                <a href="javascript:;" className='btn btn-default'>
                    <span className='fa fa-weibo'></span>
                    <span className='mon-btn-fix'>微博分享</span>
                </a>
                <a href="javascript:;" className='btn btn-default' onClick={this.shareFB.bind(this)}>
                    <span className='fa fa-facebook'></span>
                    <span className='mon-btn-fix'>FA分享</span>
                </a>
                <a href="javascript:;" className='btn btn-default'>
                    <span className='fa fa-weixin'></span>
                    <span className='mon-btn-fix'>微信分享</span>
                </a>
                <a id="_back" href="javascript:;" className='btn btn-default' onClick={this.handlerClick.bind(this)}>
                    <span className='fa fa-arrow-up'></span>
                    <span className='mon-btn-fix'>回到顶部</span>
                </a>
            </div>
        );
    }
}

export default BtnBlock;