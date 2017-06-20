/**
 * Created by toreant on 2017/6/20.
 */
const nodemailer = require('nodemailer');
const uuid = require('node-uuid');
const cache = require('../models/cache');
const mailAuth = require('../../config/config').mail_auth;
const mailTo = require('../../config/config').mail_to;

class Mail {

    sendMailToServer(req, res) {
        this.sendMail().then(data => {
            if (data === 'ok') {
                res.json({
                    status: 'ok'
                });
            } else {
                res.json({
                    status: 'fail'
                });
            }
        }).catch(exp => {
            console.error(exp);
            res.json({
                status: 'error'
            });
        });
    }

    sendMail() {
        let transformer = nodemailer.createTransport(mailAuth);
        let code = uuid.v4().split('-').join('');

        let target = `http://localhost:3000/auth/login?code=${code}`;

        return cache.setAsync('code', code).then(() => {
            return cache.expireAsync('code', 60 * 2);
        }).then(() => {
            let mailOption = {
                from: mailAuth.auth.user, // 发件地址
                to: mailTo, // 收件列表
                subject: 'monster登陆地址邮件', // 标题
                //text和html两者只支持一种
                text: `点击链接，进入monster：${target}`, // 标题
                html: `<a href="${target}" style="text-decoration: none;">点击链接，进入monster</a>` // html 内容
            };

            return new Promise((resolve, reject) => {
                transformer.sendMail(mailOption, (err, res) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(res);
                        resolve('ok');
                    }
                });
            });
        });
    }
}

module.exports = new Mail();