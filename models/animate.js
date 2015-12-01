/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var AnimateSchema = new Schema({
    con_id : {type : String},
    title : {type : String},
    thumbnails : {type : String},
    avatar_url : {type : String},
    aniamte_url : {type : String},
    stars : {type : Number,default : 0},
    browser_count : {type : Number,default :0},
    create_user_id : {type : Number},
    create_time : {type : Number},
    tags : [String],
    comment : [Number]
});

export default mongoose.model('Animate',AnimateSchema);