# node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境



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



## 官方文档

本笔记只记录基础，详细请查看：

<http://nodejs.cn/api/>



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



## 常用的模块

- fs模块 - 文件读写
- events模块 - 事件触发器
- crypto模块 - 加密
- path模块 - 路径
- URL模块/HTTP模块



