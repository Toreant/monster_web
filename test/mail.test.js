/**
 * Created by toreant on 2017/6/20.
 */
const expect = require('chai').expect;
const mailCtrl = require('../server/controllers/Mail');

describe('mail controller test', function() {
    describe('#sendMail', function() {
        it('should return ok', function(done) {
            mailCtrl.sendMail().then(res => {
                expect(res).to.be.equal('ok');
                done();
            });
        });
    });
});