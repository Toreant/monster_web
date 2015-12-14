# monster_web

## 介绍

- 这是一个充满monster的世界，在这里，你必须分享动漫，音乐，文章，才可以避免被monster攻击。

- 本应用基于nodeJs，mongo,react,作为后台，数据库，前端框架,使用bootstrap作为基本的样式框架，前端自动化工具用到gulp.

- 首先npm install，安装必要的node模块

- 接着，bower install安装前端组件。

- 然后，运行gulp。

### 2015年12月15日更新　　
由于browserify有点不太适合（因为前面我改用了启动的方法，.bablerc文件对browserify有冲突）,所以，我改用了webpack进行打包。　
- 安装webpack ````npm install --save-dev webpack```  
- 在根目录中新建webpack.config.js  
- 在里面添加一下内容　　
```[javascript]
var webpack = require('webpack');
var path  = require('path');
var commonsPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        bundle: [path.resolve(__dirname, 'app/main.js')],
        common: ['alt','react','react-router','react-dom','underscore']
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool: false,
    plugins: [
        new commonsPlugin({
            name : 'common',
            filename : 'common.js',
            minChunks : 3
        })
    ]
};
```  
####　解析　　
- entry 实体的入口文件，common 公共模块的名字　　

#### 问题　　
webpack打包后的文件有点大。即使是进行了uglify，也还是有４～500k左右的大小，还是太大了。这时，我知道了，需要进行传输的压缩。
需要对nginx开启[gzip](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)服务。在nginx的配置文件中，添加以下内容　
```
  gzip on; 
	gzip_http_version 1.1;
	gzip_comp_level 4; 
	gzip_vary on; 
	gzip_min_length 1k; 
	gzip_proxied any; 
	gzip_types text/plain text/html text/css application/json application/x-javascript application/javascript text/xml application/xml application/xml+rss image/png image/jpeg image/gif image/jpg application/octet-stream; 
	gzip_buffers 16 8k;
```  
看一下，浏览器中传输的文件大小大约少了70%,文件大小只有4~50k左右，还可以，不过还应该对代码进行优化。　　


### 2015年12月12日更新.  

在之前，我一直用着```babel-node server.js```来执行启动应用，但是，这样太好内存了，所以，我用了另一个更好的方法。　　

- 首先，安装babel.```npm install --save babel```  

- 接着，安装babel-core,babel-preset-es2015  

- 然后，在根目录中新建一个.bashrc文件，里面写上  

```[javascript] 
{
  "presets": ['es2015']
}
```  

- 然后，在根目录文件夹中，新建一个启动文件```app.js```  
```[javascript]
require('babel-core/register');
require('./server');
```  

- 启动应用，node app.js。　

结果，出现react中的文件出现错误。原来，还需要对react进行编译。　　

- 安装```babel-preset-react```,在```.bashrc```中添加react，修改后的```.bashrc```文件为
```[javascript]
{
  "presets": ['es2015','react']
}
```  

- 启动应用```node app.js```成功了，睡觉。
