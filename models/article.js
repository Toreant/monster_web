/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    content : {type : String},
    title : {type : String},
    summary : {type : String},
    abbreviations : {type : String},
    stars : {type : Number,default : 0},
    tags : [String],
    browser_count : {type : Number,default :0},
    create_user_id : {type : String},
    create_user_name : {type : String},
    create_time : {type : Number},
    create_user_domain : {type : String},
    comment : [Number]
});

export default mongoose.model('Article',ArticleSchema);