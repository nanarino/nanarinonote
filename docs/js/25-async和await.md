# async和await



## async和await

async叫异步函数。是ES2017新出的，这让异步操作变得更简单了。

本质上还是操作promise对象观察状态。



await之前（需要node环境）

```js
const fs = require("fs")
//读取文件得操作
const ReadFile = path =>{
    return new Promise((res,rej)=>{
        fs.readFile(path, "utf-8", (err, data)=>{//node中读取文件得方法,异步方法
            if(err) rej(err)
            res(data)
        })
    })
}
const Read = path =>{
    ReadFile(path).then((data)=>{
        console.log(data)
    })
}
Read("./data.txt")//最好是绝对路径
```

用async和await

```js
const fs = require("fs")
async function asyncReadFile = path => {
    let d = await fs.readFile(path, "utf-8")//等价于等待promise事件,代码卡住
    console.log(d)
}
asyncReadFile("./data.txt")
```

上述代码内部fs.readFile其实也是返回了一个promise对象,所以可以await结果

延时输出：

```js
async function timeout(ms){//延时执行函数
	await new Promise((res,rej)=>{
		setTimeout(res,ms)
	})
}
async function Print(ms, str){//添加延时输出功能
	await timeout(ms)
	console.log(str)
}
Print(2000,"hello")
```



## **async和Generator的区别**:

#### 表面区别：

   	1. async内置执行器：直接执行就可以，不需要next等其他方法
      	2. async良好的语义。async表示异步函数，await需要等待后面的表达式结果结束。
         	3. Generator返回的是Iterator对象，async返回的是promise对象,可以后续then继续操作。

#### 内在联系：

两者都能解救回调地狱的问题，对于开发者，两者都是黑匣子。

Generator功能更强大，async的语义更好，各有优点。

在node.js的执行过程可以发现：async会预编译为Generator和Promise的组合语法，而await关键字则会编译为为yield关键字

也就是说async是对Generator的再次封装