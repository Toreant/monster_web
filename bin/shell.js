/**
 * Created by toreant on 2017/7/3.
 */
const fs = require('fs');
const path = require('path');

fs.appendFile(path.resolve(__dirname, '../logs/shell.txt'), `[shell]${new Date().toLocaleString()}\n`);