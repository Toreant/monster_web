/**
 * Created by apache on 15-11-25.
 */

import Music from '../models/music';
import User from '../models/user';
import async from 'async';
import CommonProxy from './CommonProxy';
import _ from 'underscore';

class md {

    constructor() {
        this.commonProxy = new CommonProxy('music');
    }

    /**
     * 通过id号找到
     * @param id
     * @param u 访客
     */
    getMusicById(id,visitor,callback) {
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return callback(null);
        }

        async.waterfall([

            // 获取音乐
            function(_callback) {
                Music.findById(id,(err,music) => {
                    if(err) {
                        return callback(500);
                    } else if(music === null) {
                        return callback(null);
                    } else {
                        _callback(null,music);
                    }
                });
            },

            // 访客
            function(music,_callback) {
                if(visitor === undefined) {
                    _callback(null,music);
                } else {
                    music.vistor.push(visitor._id.toString());
                    music.save((err,product) => {
                        if(err) {
                            return callback(500);
                        } else {
                            _callback(null,product);
                        }
                    });
                }
            }

        ],(err,result) => {
            if(err) {
                return callback(500);
            } else {
                return callback(result);
            }
        });
    }


    /**
     * 通过一组id找到音乐
     * @param ids
     * @param callback
     */
    getMusicByIds(ids,callback) {
        Music.find({_id : {$in : ids}},(err,docs) => {
            if(err) {
                return callback(500);
            } else {
                return callback(docs);
            }
        });
    }

    /**
     * 获取音乐列表
     * @param option　查询的选项
     * @param params 查询的条件
     * @param callback
     */
    getMusics(option,params,callback) {

        this.commonProxy.gets(params,option,callback);
    }

    /**
     * 上传音乐资料
     * @param params
     * @param u
     * @param callback
     */
    saveMusic(params,u,callback) {

        this.commonProxy.create(params,u,callback);
    }

    /**
     * 删除音乐
     * @param _id
     * @param u
     * @param callback
     */
    deleteMusic(_id,u,callback) {
        this.commonProxy.delete(_id,u,callback);
    }
}

export default new md();