/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    con_id : {type : String},
    type : {type : String},
    create_user_id : {type : String},
    create_time : {type : Number},
    content : {type : String}
});

export default mongoose.model('Comment',CommentSchema);