/**
 * Created by apache on 16-4-3.
 */
import passport from 'passport';
import Github from 'passport-github2';
import config from '../config';
import validate from '../controllers/Validate';

export default function(app) {
    app.use(passport.initialize());
    app.use(passport.session());

//auth
    var GithubStrategy = Github.Strategy;

    passport.use(new GithubStrategy(config.github_auth,(accessToken, refreshToken, profile, done) => {
        done(null, profile);
    }));

    app.get("/auth/github", passport.authenticate("github",{scope : "email"}));
    app.get("/auth/github/callback",
        passport.authenticate("github",{
            failureRedirect: '/login#login'
        }),
        validate.validateUser
    );

    passport.serializeUser( (user, done) => {//保存user对象
        done(null, user);//可以通过数据库方式操作
    });

    passport.deserializeUser( (user, done)=> {//删除user对象
        done(null, user);//可以通过数据库方式操作
    });

};