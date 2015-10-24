/**
 * Created by apache on 15-10-24.
 */
import express from 'express';
let router = express.Router();
import LoginCtrl from './controler/login';

router.post('/api/login',LoginCtrl.getLogin);

router.post('/api/app/:id',function(req,res,next) {
    res.json({id : req.params.id});
});

export default router;