/**
 * Created by apache on 15-10-25.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id : {type : Number},
    email : {type : String},
    password : {type : String},
    username : {type : String},
    avatar_url : {type : String,default : '/img/default.png'},
    auth_id : {type : Number,default : 0},
    account : {type : Number},
    domain : {type : String},
    introduce : {type : String,default : '这家伙很懒，什么也没留下'},
    followers :[String],
    following : [String],
    star : [Number],
    contribute : [String],
    article : [String],
    animate : [String],
    music : [String]
});

UserSchema.index({email: 1}, {unique: true});
UserSchema.index({auth_id : 1},{unique : true});
UserSchema.index({domain : 1},{unique : true});

export default mongoose.model('User',UserSchema);