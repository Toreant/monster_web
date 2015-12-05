/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var AnimateSchema = new Schema({
    title : {type : String},
    avatar_url : {type : String},
    animate_url : {type : String},
    stars : {type : Number,default : 0},
    browser_count : {type : Number,default :0},
    create_user_id : {type : String},
    create_time : {type : Number},
    tags : [String],
    comment : [Number],
    summary : {type : String}
});

export default mongoose.model('Animate',AnimateSchema);