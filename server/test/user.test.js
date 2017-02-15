/**
 * Created by apache on 16-4-1.
 */
var should = require('should');
var requestAgent = require('supertest');
var express = require('express');
var app = express();
var request = requestAgent(app);

describe('articles',function() {
    describe('#getUsers',function() {
        it('it should be response json',function() {
            request
                .post('/api/users')
                .type('application/json;charset=utf-8')
                .send(JSON.stringify({
                    option : {},
                    token : '',
                    arrayId : []
                }))
                .expect(400,{})
                .end(function(err) {
                    done(err);
                })
        });
    });
});