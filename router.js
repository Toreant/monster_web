/**
 * Created by apache on 15-10-24.
 */
import express from 'express';
let router = express.Router();
import UserCtrl from './controllers/User';

router.post('/api/login',UserCtrl.getLogin);

router.post('/api/user',UserCtrl.getSign);

router.put('/api/user',UserCtrl.getUpdate);

router.post('/api/session',function(req,res,next){
    console.log(req.session);
    if((req.session.passport !== undefined)) {
        let data = req.session.passport.user;
        res.json({meta : '账户已经登陆',code : 200,raw : data});
    } else {
        res.json({meta : '你还没登陆',code : 400});
    }
});

export default router;