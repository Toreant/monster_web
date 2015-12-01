/**
 * Created by apache on 15-10-24.
 */
import express from 'express';
let router = express.Router();
import UserCtrl from './controllers/User';
import ArticleCtrl from './controllers/Article';
import CommentCtrl from './controllers/Comment';
import UploaderCtrl from './controllers/Uploader';
import MusicCtrl from './controllers/Music';
import multer from 'multer';
import auth from './middleware/auth';
import multipart from 'connect-multiparty';
var resumable = require('./middleware/resumable-node');


var upload = multer({dest : './public/music'});

// 用户有关
router.post('/api/user',UserCtrl.getSign);

router.put('/api/user',auth.isAuth,UserCtrl.getUpdate);

router.post('/api/getUser',UserCtrl.getUserByDomain);

router.post('/api/users',UserCtrl.getUserById);


router.get('/api/member/:domain',UserCtrl.getUserByDomain);

//　follow有关
router.post('/api/follow',auth.isAuth,UserCtrl.addFollow);

router.post('/api/following',UserCtrl.getFollowing);

router.post('/api/followers',UserCtrl.getFollowers);

router.delete('/api/follow',auth.isAuth,UserCtrl.unFollowing);

//　文章有关
router.post('/api/article',auth.isAuth,ArticleCtrl.getSaveArticle);

router.post('/api/getArticle',ArticleCtrl.getArticle);

router.post('/api/articles',ArticleCtrl.getArticles);

//　评论有关
router.post('/api/comment',CommentCtrl.getComments);

router.put('/api/comment',auth.isAuth,CommentCtrl.savaComment);

router.delete('/api/comment',auth.isAuth,CommentCtrl.deleteComment);

// 收藏
router.post('/api/star',auth.isAuth,UserCtrl.getStar);

router.delete('/api/star',auth.isAuth,UserCtrl.unStar);

router.post('/api/stars',UserCtrl.getStars);

router.post('/api/session',function(req,res,next){
    if((req.session.passport !== undefined || req.session.user !== undefined)) {
        let data = req.session.passport === undefined? req.session.user:req.session.passport.user;
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
    } else {
        res.json({meta : '退出不登陆不成功',code : 400});
    }
});

// 上传
router.post('/api/upload',auth.isAuth,UploaderCtrl.upload);

router.post('/api/upload/:column',auth.isAuth,multipart(),function(req,res,next) {
    resumable.post(req, function(status, filename, original_filename, identifier){
        console.log('POST', status, original_filename, identifier);

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

export default router;