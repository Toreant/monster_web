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
    img : {type : String}
});

export default mongoose.model('User',UserSchema);