/**
 * Created by apache on 15-10-25.
 */
const config = {
    db: 'mongodb://127.0.0.1/monster',
    github_auth : {
        clientID: "87a71f5437491883a080",
        clientSecret : 'f5801a4f0e497330edfb5667bad290cba315c851',
        callbackURL : 'http://192.168.0.2:3000/auth/github/callback'
    },
    github_auth_dev: {
        clientID: "41be3d6632e48fe437b3",
        clientSecret : '519a336ddfc04fe25f6bb715d6b0319a444e03b6',
        callbackURL : 'http://localhost:3000/auth/github/callback'
    },
    facebook_auth : {
        clientID : "1162206170473800",
        clientSecret : "ff9015b5677a09b1380fabb4dccacf21",
        callbackURL : 'http://www.toreant.top:3000/'
    }
};

module.exports = config;