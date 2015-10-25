/**
 * Created by apache on 15-10-25.
 */
import passport from 'passport';
import Github from 'passport-github';

var GithubStrategy = Github.Strategy;

passport.use(new GithubStrategy({
    clientID: "XXXXX",
    clientSecret: "XXXXX",
    callbackURL: "http://localhost:3000/auth/github/callback"
},function(accessToken, refreshToken, profile, done) {
    done(null, profile);
}));