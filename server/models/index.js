/**
 * Created by apache on 15-10-25.
 */
const mongoose = require('mongoose');
const colors = require('colors');
const config = require('../../config/config');

mongoose.connect(config.db,{server : {pollSize : 20}},(err) => {
    if(err) {
        console.log(("数据库链接错误:"+err.message).red);
        process.exit(1); //离开数据库
    } else {
        console.log("数据库链接成功".green);
    }
});
