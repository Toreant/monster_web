/**
 * Created by apache on 15-10-25.
 */
var config = {
    db: 'mongodb://127.0.0.1/monster',
    github_auth : {
        clientID: "87a71f5437491883a080",
        clientSecret : 'f5801a4f0e497330edfb5667bad290cba315c851',
        callbackURL : 'http://localhost:3000/auth/github/callback'
    },
    facebook_auth : {
        clientID : "1162206170473800",
        clientSecret : "ff9015b5677a09b1380fabb4dccacf21",
        callbackURL : 'http://localhost:3000/'
    }
};

export default config;