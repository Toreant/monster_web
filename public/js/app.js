/**
 * Created by apache on 15-10-23.
 */
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1162206170473800',
        xfbml      : true,
        version    : 'v2.5'
    });

    //FB.ui({
    //    method: 'share_open_graph',
    //    action_type: 'og.likes',
    //    action_properties: JSON.stringify({
    //        object:'https://developers.facebook.com/docs/'
    //    })
    //}, function(response){
    //    // Debug response (optional)
    //    console.log(response);
    //});
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));