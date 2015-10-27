/**
 * Created by apache on 15-10-27.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    con_id : {type : Number},
    create_user_id : {type : Number},
    create_user_name : {type : String},
    create_time : {type : Number},
    content : {type : String}
});

CommentSchema.index({con_id : 1},{unique : true});

export default mongoose.model('Comment',CommentSchema);