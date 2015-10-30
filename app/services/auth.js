/**
 * Created by apache on 15-10-30.
 */
class Auth {
    constructor() {
        this.auth_in = false;
        this.user = {};
    }

    checkUserLoggedIn() {
        $.ajax({
            url : 'api/session',
            type : 'post',
            cache : false
        }).done((data) => {
            if(data.code === 200) {
                this.auth_in = true;
            }
        });
    }
}

export default new Auth();