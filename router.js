/**
 * Created by apache on 15-10-24.
 */
import express from 'express';
let router = express.Router();
import UserCtrl from './controllers/User';

router.post('/api/login',UserCtrl.getLogin);

router.post('/api/user',UserCtrl.getSign);

router.put('/api/user',UserCtrl.getUpdate);

router.post('/api/getUser',UserCtrl.getUserByDomain);

router.post('/api/users',UserCtrl.getUserById);

router.post('/api/follow',UserCtrl.addFollow);

router.post('/api/session',function(req,res,next){
    if((req.session.passport !== undefined || req.session.user !== undefined)) {
        let data = req.session.passport === undefined? req.session.user:req.session.passport.user;
        res.json({meta : '账户已经登陆',code : 200,raw : data});
    } else {
        res.json({meta : '你还没登陆',code : 400});
    }
});

router.post('/api/signout',function(req,res,next){
    if(req.session.destroy()) {
        res.json({meta : '退出登陆成功',code : 200});
    } else {
        res.json({meta : '退出不登陆不成功',code : 400});
    }
});

export default router;