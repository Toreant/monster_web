/**
 * Created by apache on 16-4-2.
 */
$(document).ready(function() {

    let url = "http://localhost:3000/super";

    $("#submit").click(function() {
        var email = $("#email").val(),
            password = $("#password").val();
        var $this = $(this);

        $this.attr('disabled','disabled');
        $.ajax({
            url : '/api/login',
            type : 'post',
            dataType : 'json',
            contentType : 'application/json;charset=utf-8',
            data : JSON.stringify({email : email, password: password})
        }).done(function(data) {
            $this.removeAttr('disabled');
            if(data.code === 200) {
                location.href = url;
                sessionStorage.admin = JSON.stringify(data);
            } else {
                console.log('hehe');
            }
        }).fail(function() {
            console.log('hehe');
        });
    });


});