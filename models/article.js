/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    approve : {type : Number, default : 0},  //　赞的个数
    disapprove : {type : Number,default : 0},  //　踩的个数
    content : {type : String},　// 内容
    title : {type : String},　　// 标题
    summary : {type : String},　// 简介
    abbreviations : {type : String},　//　缩略图
    stars : {type : Number,default : 0},　// 被收藏的次数
    tags : [String],　　　　　　　// 标签
    browser_count : {type : Number,default :0},　// 浏览的次数
    create_user_id : {type : String},　　　　　　　// 创建的用户id
    create_time : {type : Number},              // 创建的时间
});

export default mongoose.model('Article',ArticleSchema);