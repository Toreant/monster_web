/**
 * Created by apache on 15-10-25.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email : {type : String},　　// 邮箱
    password : {type : String},　//　密码
    username : {type : String},　//　用户名
    avatar_url : {type : String,default : '/img/default.png'},　// 用户头像
    domain : {type : String},　// 个性域名
    introduce : {type : String,default : '这家伙很懒，什么也没留下'},　// 个人简介
    followers :[String],　　// 我关注的人
    following : [String],　// 关注我的人
    star : [String],　　　　// 我收藏的对象
    star_article : [String],
    star_music : [String],
    star_animate : [String],
    contribute : [String],　// 我的共享
    article : [String],
    animate : [String],
    music : [String],
    notice : [String], // 未读通知
    approve : [String] // 点赞或踩过的对象
});

UserSchema.index({email: 1}, {unique: true});
UserSchema.index({domain : 1},{unique : true});

export default mongoose.model('User',UserSchema);