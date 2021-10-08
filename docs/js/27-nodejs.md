# node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境



## 官方文档

本笔记只记录基础，详细请查看：

<http://nodejs.cn/api/>



## 常用的模块

- fs模块 - 文件读写
- events模块 - 事件触发器
- crypto模块 - 加密
- path模块 - 路径
- URL模块/HTTP模块



## CommonJS规范

`CommonJS`是服务器端模块的规范，`Node.js`采用了这个规范。Node.JS首先采用了js模块化的概念。

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

而ES Modules得用mjs文件后缀以做区分 它使用import from来导入。

但ES Modules无法使用__dirname，得用process.cwd()代替

::: danger   脚本所在目录问题
如果js文件使用右键*打开方式*选择解释器运行会导致process.cwd定位到C:\Windows\System32    
应该在cmd中使用命令或者选定为默认打开方式双击
:::



## 终端输入输出

终端 node.exe 空格 js文件 即可运行

终端支持带颜色的输出流，需要win10以上

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

输出蓝色helloworld

```js
console.log('\x1b[36mhelloworld\x1b[39m')
```

### 等待输入

CommonJS规范引入

```js
const { createInterface } = require("readline");

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('input:', input => {
    console.log(`你输入的是${input}`);
    readline.close();
})
```

ecma最新 JavaScript modules规范引入 文件后缀得是`.ejs`

```js
import {createInterface} from 'readline'
```



## 事件轮询机制

异步优先级：DLE观察者 > I/O观察者 > check观察者

macro-tack：`<script/>`  > `setTimeout/setInterval` > `setImmediate` > I/O    
micro-tack：`process.nextTick` > (Promise)`.then`

```js
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('1');
        resolve('2')
    })
})

p.then((m)=>{
    console.log(m)
})

setImmediate(()=>{
    console.log('3');
})

process.nextTick(()=>{
    console.log('4')
})

setTimeout(()=>{
    process.nextTick(()=>{
        console.log('5')
    })
})
```

思考：上面代码打印12345的顺序是？



