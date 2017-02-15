/**
 * Created by apache on 15-10-27.
 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AnimateSchema = new Schema({
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

module.exports = mongoose.model('Animate',AnimateSchema);