/**
 * Created by apache on 16-4-1.
 */
var should = require('should');
var requestAgent = require('supertest');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = requestAgent(app);
app.post('/api/articles', bodyParser.json(), function(req, res) {
    res.send(req.body);
});

describe('articles',function() {
    describe('#getArticles',function() {
        it('it should be response json',function() {
           request
            .post('/api/articles')
            .type('application/json;charset=utf-8')
            .send(JSON.stringify({
                option : {skip : (1-1)*6,limit : 6,sort : {create_time : -1}},
                token : ''
            }))
            .expect(400,{})
            .end(function(err) {
                done(err);
            })
        });
    });
});