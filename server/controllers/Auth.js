/**
 * Created by toreant on 2017/6/20.
 */
const cache = require('../models/cache');

class Auth {
    static authCodeFromMail(code) {
        return cache.getAsync('code').then(data => {
            if (!data) {
                return 404;
            } else if (data === code) {
                return 200;
            } else {
                return 400;
            }
        }).catch(exp => {
            console.log(exp);
            return 500;
        });
    }

    static authLogin(req, res) {
        let code = req.query.code;

        Auth.authCodeFromMail(code).then(data => {
            switch(data) {
                case 200:
                    res.redirect('/login');
                    break;
                case 400:
                    res.send('the code is invalid');
                    break;
                case 404:
                    res.send('you should send the mail again');
                    break;
                case 500:
                    res.send('500');
                    break;
            }
        }).catch(exp => {
            console.error(exp);
            res.send('500');
        });
    }
}

module.exports = Auth;