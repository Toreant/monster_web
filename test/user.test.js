/**
 * Created by yuhuajie on 2017/2/16.
 */
const expect = require('chai').expect;
const request = require('superagent');

describe('user', function() {
    describe('#getUserById', function() {
        it('code should be 200', function(done) {
            request('http://localhost:3000/api/member/13035829?_=1487232165644').end(function(err, res) {
                expect(res.body.code).to.be.equal(200);
                done();
            });
        });

        it('code should be 404', function(done) {
            request('http://localhost:3000/api/member/13035820?_=1487232165644').end(function(err, res) {
                expect(res.body.code).to.be.equal(404);
                done();
            });
        });
    });
});