/**
 * Created by apache on 15-10-25.
 */
import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id : {type : Number},
    email : {type : String},
    password : {type : String},
    name : {type : String},
    img : {type : String},
    auth_id : {type : Number},
    domain : {type : String}
});
UserSchema.index({email: 1}, {unique: true});
UserSchema.index({name : 1}, {unique : true});
UserSchema.index({auth_id : 1},{unique : true});
UserSchema.index({domain : 1},{unique : true});

export default mongoose.model('User',UserSchema);