/**
 * Created by apache on 15-12-5.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var NoticeSchema = new Schema({
    create_user_id : {type : String},
    receiver : {type : String},
    content : {type : String},
    create_time : {type : Number},
    type : {type : Number} // 0--系统通知　１--用户私信
});

export default mongoose.model('Notice',NoticeSchema)