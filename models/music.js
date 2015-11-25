/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
    name : {type : String},
    album : {type : String},
    avatar_url : {type : String},
    stars : {type : Number,default : 0},
    browser_count : {type : Number,default :0},
    create_user_id : {type : Number},
    create_user_name : {type : String},
    lyric : {String},
    comment : [Number]
});

export default mongoose.model('Music',MusicSchema);