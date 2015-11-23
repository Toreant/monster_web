/**
 * Created by apache on 15-10-24.
 */
import express from 'express';
let router = express.Router();
import UserCtrl from './controllers/User';
import ArticleCtrl from './controllers/Article';
import CommentCtrl from './controllers/Comment';
import UploaderCtrl from './controllers/Uploader';
import multer from 'multer';

var upload = multer({dest : './public/img/upload'});

// 用户有关
router.post('/api/user',UserCtrl.getSign);

router.put('/api/user',UserCtrl.getUpdate);

router.post('/api/getUser',UserCtrl.getUserByDomain);

router.post('/api/users',UserCtrl.getUserById);

router.post('/api/followers',UserCtrl.getFollowers);

router.get('/api/member/:domain',UserCtrl.getUserByDomain);

//　follow有关
router.post('/api/follow',UserCtrl.addFollow);

router.post('/api/following',UserCtrl.getFollowing);

router.delete('/api/follow',UserCtrl.unFollowing);

//　文章有关
router.post('/api/article',ArticleCtrl.getSaveArticle);

router.post('/api/getArticle',ArticleCtrl.getArticle);

router.post('/api/articles',ArticleCtrl.getArticles);

//　评论有关
router.post('/api/comment',CommentCtrl.getComments);

router.put('/api/comment',CommentCtrl.savaComment);

router.delete('/api/comment',CommentCtrl.deleteComment);

// 收藏
router.post('/api/star',UserCtrl.getStar);

router.delete('/api/star',UserCtrl.unStar);

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
router.post('/api/login',UserCtrl.getLogin);

router.post('/api/signout',function(req,res,next){
    if(req.session.destroy()) {
        res.json({meta : '退出登陆成功',code : 200});
    } else {
        res.json({meta : '退出不登陆不成功',code : 400});
    }
});

// 上传
router.post('/api/upload',UploaderCtrl.upload);

export default router;