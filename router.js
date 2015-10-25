/**
 * Created by apache on 15-10-24.
 */
import express from 'express';
let router = express.Router();
import LoginCtrl from './controllers/login';

router.post('/api/login',LoginCtrl.getLogin);

router.post('/api/sign',LoginCtrl.getSign);

export default router;