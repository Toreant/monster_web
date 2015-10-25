/**
 * Created by apache on 15-10-25.
 */
import mongoose from 'mongoose';
import config from '../config';
import colors from 'colors';

mongoose.connect(config.db,{server : {pollSize : 20}},(err) => {
    if(err) {
        console.log(colors.warning("数据库链接错误:"+err.message));
        process.exit(1); //离开数据库
    } else {
        console.log(colors.green("数据库链接成功"));
    }
});

import User from './user';
