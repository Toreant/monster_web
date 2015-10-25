/**
 * Created by apache on 15-10-24.
 */
import express from 'express';
let router = express.Router();
import UserCtrl from './controllers/User';

router.post('/api/login',UserCtrl.getLogin);

router.post('/api/user',UserCtrl.getSign);

router.put('/api/user',UserCtrl.getUpdate);

export default router;