/**
 * Created by yuhuajie on 2017/2/16.
 */
const expect = require('chai').expect;

let request = require('superagent');

describe('article', function() {
    describe('#getArticleById', function() {
        it('code应该为404', function(done) {
            request.get('http://localhost:3000/api/article/58a54f8e78bf8c43924bc47f').end(function(err, res) {
                expect(res.body.code).to.be.equal(404);
                done();
            });
        });

        it('');
    });
});