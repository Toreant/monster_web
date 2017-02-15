/**
 * Created by apache on 15-10-25.
 */
const mongoose = require('mongoose');
const config = require('../config');
const colors = require('colors');

mongoose.connect(config.db,{server : {pollSize : 20}},(err) => {
    if(err) {
        console.log(colors.warning("数据库链接错误:"+err.message));
        process.exit(1); //离开数据库
    } else {
        console.log(colors.green("数据库链接成功"));
    }
});
