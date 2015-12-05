/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var MusicSchema = new Schema({
    title : {type : String},
    music_url : {type : String},
    music_name : {type : String},
    album : {type : String},
    abbreviations : {type : String},
    tags : [String],
    stars : {type : Number,default : 0},
    browser_count : {type : Number,default :0},
    create_user_id : {type : String},
    create_time : {type: Number},
    lyric : {type : String},
    comment : [String],
    summary : {type : String}
});

export default mongoose.model('Music',MusicSchema);