/**
 * Created by apache on 15-10-24.
 */
const express = require('express');
const multer = require('multer');
const multipart = require('connect-multiparty');

// controller
const UserCtrl = require('./controllers/User');
const ArticleCtrl = require('./controllers/Article');
const CommentCtrl = require('./controllers/Comment');
const UploaderCtrl = require('./controllers/Uploader');
const MusicCtrl = require('./controllers/Music');
const ContributeCtrl = require('./controllers/Contribute');
const SearchCtrl = require('./controllers/Search');
const AnimateCtrl = require('./controllers/Animate');
const NoticeCtrl = require('./controllers/Notice');
const AuthCtrl = require('./controllers/Auth');
const Helper = require('./controllers/Helper');
const Validate = require('./controllers/Validate');

// middleware
const resumable = require('./middleware/resumable-node');
const auth = require('./middleware/auth');
const Token = require('./middleware/token');

let router = express.Router();
let upload = multer({dest : './public/music'});

// 用户有关
router.post('/api/user',UserCtrl.getSign);

router.put('/api/user',auth.isAuth,UserCtrl.getUpdate);

router.post('/api/getUser',UserCtrl.getUserByDomain);

router.post('/api/users',UserCtrl.getUserById);

router.get('/api/users/:skip',UserCtrl.getUsers);

router.get('/api/profile',auth.isAuth,UserCtrl.getProfile);

router.get('/api/profile/center',auth.isAuth,UserCtrl.getProfileCenter);

router.get('/api/member/:domain',UserCtrl.getUserByDomain);

//　follow有关
router.post('/api/follow',auth.isAuth,UserCtrl.addFollow);

router.post('/api/following',UserCtrl.getFollowing);

router.post('/api/followers',UserCtrl.getFollowers);

router.delete('/api/follow',auth.isAuth,UserCtrl.unFollowing);

router.get('/api/token',Token.csrfProtection(),Token.getToken);

//　文章有关
router.post('/api/article',auth.isAuth, auth.authCode(5),Token.validateToken,ArticleCtrl.getSaveArticle);

router.post('/api/getArticle',ArticleCtrl.getArticle);

router.get('/api/article/:id/:transform?',ArticleCtrl.getArticle);

router.get('/api/articles/tag/:tag',ArticleCtrl.getArticleForTag);

router.post('/api/home', ArticleCtrl.getArticles);
router.post('/api/articles',ArticleCtrl.getArticles);

router.put('/api/article',auth.isAuth, auth.authCode(5),ArticleCtrl.updateArticle);

router.delete('/api/article/:id',auth.isAuth, auth.authCode(5),ArticleCtrl.deleteArticle);

//　评论有关
router.post('/api/comment',CommentCtrl.getComments);

router.put('/api/comment',auth.isAuth, auth.authCode(3),Token.validateToken,CommentCtrl.savaComment);

router.delete('/api/comment',auth.isAuth, auth.authCode(3), CommentCtrl.deleteComment);

// 收藏
router.post('/api/star',auth.isAuth,UserCtrl.getStar);

router.delete('/api/star',auth.isAuth,UserCtrl.unStar);

router.post('/api/stars',UserCtrl.getStars);

router.post('/api/session',function(req,res,next){
    if((req.session.passport !== undefined || req.session.user !== undefined)) {
        let data = {
            userName: req.session.user.username,
            avatar_url: req.session.user.avatar_url
        };
        res.json({meta : '账户已经登陆',code : 200,raw : data});
    } else {
        res.json({meta : '你还没登陆',code : 400});
    }
});

// 登陆登出
router.post('/api/login',auth.isNotAuth,UserCtrl.getLogin);

router.post('/api/signout',auth.isAuth,function(req,res,next){
    if(req.session.destroy()) {
        res.json({meta : '退出登陆成功',code : 200});
        //res.redirect('/');
    } else {
        res.json({meta : '退出不登陆不成功',code : 400});
    }
});

// 上传
router.post('/api/upload',auth.isAuth, auth.authCode(5), Token.validateToken,UploaderCtrl.upload);

router.post('/api/upload/:column',auth.isAuth,multipart(),function(req,res,next) {
    resumable.post(req, function(status, filename, original_filename, identifier){
        res.send(status, {
            // NOTE: Uncomment this funciton to enable cross-domain request.
            //'Access-Control-Allow-Origin': '*'
        });
    });
});

router.delete('/api/upload/:column',auth.isAuth,multipart(),function(req,res,next) {
    resumable.clean(req.body.identifier,function() {
        res.status(200).json({
            meta : '取消上传成功',
            code : 200
        });
    });
});

// 获取上传的资源
router.get('/upload/:identifier',function(req,res,next) {
    resumable.write(req.params.identifier,res);
});


// 音乐
router.post('/api/music',auth.isAuth,MusicCtrl.postMusic);

router.get('/api/music/:id',MusicCtrl.getMusic);

router.post('/api/musics',MusicCtrl.getMusics);

router.delete('/api/music/:id',auth.isAuth,MusicCtrl.deleteMusic);

// 动漫
router.post('/api/animate',auth.isAuth,AnimateCtrl.postAnimate);

router.get('/api/animate/:id',AnimateCtrl.getAnimate);

router.post('/api/animates',AnimateCtrl.getAnimates);

// 推荐
router.get('/api/recommend',ContributeCtrl.getRecommend);

// 搜索
router.post('/api/search',SearchCtrl.getSearch);

// 通知
router.get('/api/notices',auth.isAuth,NoticeCtrl.getNotice);

router.get('/api/notice/:id',auth.isAuth,NoticeCtrl.viewNotice);

router.post('/api/notice',auth.isAuth,NoticeCtrl.postNotice);

// 帮助
router.get('/api/weather',Helper.getWeather);

router.post('/api/approve',auth.isAuth,ContributeCtrl.approveContribute);

router.get('/validate',Validate.validateUser);

router.get('/auth/login', AuthCtrl.authLogin);

module.exports = router;