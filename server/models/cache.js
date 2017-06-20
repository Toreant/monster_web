/**
 * Created by toreant on 2017/6/20.
 */
const redis = require('redis');
const bluebird = require('bluebird');
const redisConfig = require('../../config/config').redis;

let client = redis.createClient(redisConfig);
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = client;