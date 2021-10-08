# webpack工具

本质上webpack是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。

这里只做基础配置，若有更复杂的需求请看[官方文档](https://www.webpackjs.com/)

可以用npm或者yarn安装，这里以yarn为例

写这篇文档时，webpack的版本为4.2



## 创建项目

```bash
yarn init -y
```



## 安装依赖

如果是webpack 4.0+ ，则还需要安装cli。

```bash
#基本的webpack的依赖，只能打包【js】
yarn add webpack webpack-cli webpack-dev-server -D
#打包【css/图片/字体文件】及其【热更新】所需的依赖
yarn add style-loader css-loader file-loader -D
#build管理插件
yarn add html-webpack-plugin clean-webpack-plugin -D
#【index.html】并不能【热更新】，需要安装：
yarn add raw-loader -D
```

如果想使用css预处理器，还需要安装其他的loader



## 命令设置

`package.json`中

```json
"scripts": {
    "start": "webpack-dev-server",
    "build": "webpack"
}
```



## 配置文件

在根目录下创建配置文件`webpack.config.js`：

```js
const {join} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"[hash:8]-bundle.js",
        path:join(__dirname,"dist")
    },
    devServer:{
        contentBase;"./dist",
        hot:true,
        port:8023
    },
    //加载css,图片,字体等：
    module: {
        rules: [
            {
                test: /\.css$/,
				use: ['style-loader','css-loader']
            },
            {
            	test: /\.(png|svg|jpg|gif)$/,
            	use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            //热重载html
            {
            	test: /\.(htm|html)$/,
            	use: ['raw-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: "index.html",
            template: "./src/html",
        })
    ],
}
```

使用`<%=HtmlWebpackPlugin.opiions.title%>`

可以将配置中的“Output Management”插值到网页中

::: warning 尽量不使用插值
在使用raw-loader之后，可能会出现插值不能渲染的问题
:::



## 目录结构

```bash
project/                #项目根目录
│
├── node_modules
│
├── dist
│   │
│   ├── index.html
│   │
│   ├── [hash]-bundle.js
│   │
│   └── [hash].jpg
│
├── src
│   │
│   ├── index.html
│   │
│   ├── index.js
│   │
│   ├── style.css
│   │
│   └── image.jpg
│
├── package.json
│
├── webpack.config.js
│
└── yarn.lock
```

一切都要从`src/index.js`中使用es6的import导入：

```js
import './index.html'
import './style.css'

//Other javascript code
```

