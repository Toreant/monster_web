/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
    title : {type : String},  // 标题
    music_url : {type : String},　// 音乐的地址
    music_name : {type : String},　// 音乐的名字
    album : {type : String},　　// 专辑
    approve : {type : Number,default: 0},　// 点赞数
    disapprove : {type : Number,default : 0},　//　踩数
    abbreviations : {type : String},　　// 缩略图
    tags : [String],　// 标签
    stars : {type : Number,default : 0},　　// 收藏的次数
    browser_count : {type : Number,default :0},　// 浏览的次数
    create_user_id : {type : String},　　// 创建的用户id
    create_time : {type: Number},　　// 创建的时间
    lyric : {type : String},　  // 歌词地址
    comment : [String],　　　// 评论的id
    summary : {type : String},  // 简介
    visitor : [String], // 访客
});

export default mongoose.model('Music',MusicSchema);