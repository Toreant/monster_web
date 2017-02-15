/**
 * Created by apache on 15-12-5.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NoticeSchema = new Schema({
    create_user_id : {type : String},
    receiver : {type : String},
    content : {type : String},
    create_time : {type : Number},
    type : {type : Number} // 0--系统通知　１--用户私信
});

module.exports = mongoose.model('Notice',NoticeSchema);