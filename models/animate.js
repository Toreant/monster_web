/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var AnimateSchema = new Schema({
    con_id : {type : Number},
    name : {type : String},
    thumbnails : {type : String},
    avatar_url : {type : String},
    stars : {type : Number,default : 0},
    browser_count : {type : Number,default :0},
    create_user_id : {type : Number},
    create_user_name : {type : String},
    comment : [Number]
});

AnimateSchema.index({con_id , 1},{uniqure : true});

export default mongoose.model('Animate',AnimateSchema);