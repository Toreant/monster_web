/**
 * Created by apache on 15-10-27.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new Schema({
    con_id : {type : String},
    type : {type : String},
    create_user_id : {type : String},
    create_time : {type : Number},
    content : {type : String}
});

module.exports = mongoose.model('Comment',CommentSchema);