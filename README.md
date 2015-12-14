# monster_web

## 介绍

- 这是一个充满monster的世界，在这里，你必须分享动漫，音乐，文章，才可以避免被monster攻击。

- 本应用基于nodeJs，mongo,react,作为后台，数据库，前端框架,使用bootstrap作为基本的样式框架，前端自动化工具用到gulp.

- 首先npm install，安装必要的node模块

- 接着，bower install安装前端组件。

- 然后，运行gulp。

- 最后，通过babel-node server.js,运行（因为本应用大量使用Ecmascript6语法，需要进行转换，我用到了[babel](https://babeljs.io/docs/usage/cli/)） 

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