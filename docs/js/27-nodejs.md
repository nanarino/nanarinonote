# node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境

推荐下面的安装方式，非常简单，只需用几秒：

```shell
pnpm env use --global lts
```

关于 pnpm，见[https://pnpm.io/zh/](https://pnpm.io/zh/), 它可以完全代替 nvm 以及 npm。

## 官方文档

本笔记只记录基础，详细请查看：

<http://nodejs.cn/api/>

## 常用的内置模块

- fs 模块 - 文件读写
- events 模块 - 事件触发器
- crypto 模块 - 加密
- path 模块 - 路径
- URL 模块/HTTP 模块

## 依赖管理

npm 以及 npx 是 nodejs 的原始命令，使用 pnpm 安装的 nodejs 也没有理由再使用它们

### 创建项目

在空目录中，初始化 nodejs 项目

```shell
# npm init
pnpm init
```

初始化后生成 package.json 文件

### 安装第三方依赖包

安装 server 模块（例）包用于开发环境

```shell
# npm install server -D
pnpm install server -D
```

安装好之后 server 包会在 node_modules 目录中

目录内使用 server 模块和使用内置模块一样

### 命令行工具

如果要安装的 server 模块是命令行工具。如果要以脚本命令在命令行运行，可以使用 npx 或 pnpm 命令：

```shell
# npx server -p 8080
pnpm server -p 8080
```

如果是-g 全局安装过了，则不需要加 npx 且任意目录内都可以运行

除了 degit 等工具，基本不推荐-g 安装

以下命令查看在全局安装了哪些包

pnpm 命令类似，但是 pnpm 采用扁平依赖，没有 depth 选项

```shell
npm list -g --depth 0
pnpm list -g
```

### 使用包内的脚本命令

package.json 文件内添加 script 选项可以固化命令快捷运行，其中的 npx 可以省略

```json
"scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
}
```

命令就可以使用`npm start`，`npm run build`

### 自己开发包

本地安装开发中的 common 包

```shell
npm link common
```

## CJS 模块

`CommonJS`是 nodejs 模块默认使用的规范。Node.JS 首先采用了 js 模块化的概念。

根据`CommonJS`规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为`global`对象的属性。

输出模块变量的最好方法是使用`module.exports`对象。

```js
//导出
"use strict";function JQuery(){...};
module.exports.$ = JQuery;
//导入
const { $ } = require('./til.js')
new $()...
```

而 ES Modules 得用 mjs 文件后缀以做区分 它使用 import from 来导入。

但 ES Modules 无法使用`__dirname`/`__filename`/`require.resolve`/`process.env`

他们可以用`import.meta`上的属性去代替

::: danger 脚本所在目录问题
如果 js 文件使用右键*打开方式*选择解释器运行会导致 process.cwd 定位到 C:\Windows\System32  
应该在 cmd 中使用命令或者选定为默认打开方式双击
:::

## 终端输入输出

终端 node.exe 空格 js 文件 即可运行

终端支持带颜色的输出流，需要 win10 以上

```python
"""
#格式：
　　设置颜色开始 ：\033[显示方式;前景色;背景色m
　　\033 \x1b \e 等价 都是ESC键的ASCII，只是进制和其他语言支持不同
#说明：
前景色            背景色           颜色
---------------------------------------
30                40              黑色
31                41              红色
32                42              绿色
33                43              黃色
34                44              蓝色
35                45              紫红色
36                46              青蓝色
37                47              白色

显示方式           意义
-------------------------
0                终端默认设置
1                高亮显示
4                使用下划线
5                闪烁
7                反白显示
8                不可见
"""

#例子：
\033[1;31;40m    #1-高亮显示 31-前景色红色  40-背景色黑色
\033[0m          #采用终端默认设置，即取消颜色设置
```

输出蓝色 helloworld

```js
console.log("\x1b[36mhelloworld\x1b[39m");
```

### 等待输入

CommonJS 规范引入

```js
const { createInterface } = require("readline");

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("input:", (input) => {
  console.log(`你输入的是${input}`);
  readline.close();
});
```

ecma 最新 JavaScript modules 规范引入 文件后缀得是`.ejs`

```js
import { createInterface } from "readline";
```

## 事件轮询机制

异步优先级：DLE 观察者 > I/O 观察者 > check 观察者

macro-tack：`<script/>` > `setTimeout/setInterval` > `setImmediate` > I/O  
micro-tack：`process.nextTick` > (Promise)`.then`

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1");
    resolve("2");
  });
});

p.then((m) => {
  console.log(m);
});

setImmediate(() => {
  console.log("3");
});

process.nextTick(() => {
  console.log("4");
});

setTimeout(() => {
  process.nextTick(() => {
    console.log("5");
  });
});
```

思考：上面代码打印 12345 的顺序是？
