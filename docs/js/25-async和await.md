# async和await



## async和await

async叫异步函数。是ES2017新出的，这让异步操作变得更简单了。

本质上还是操作promise对象观察状态。



await之前（需要node环境）

```js
const fs = require("fs")
//读取文件的操作
const ReadFile = filePath =>{
    return new Promise((res,rej)=>{
        fs.readFile(filePath, "utf-8", (err, data)=>{
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
Read("./data.txt")
```

用async和await。在用的时候先把回调异步的函数改成返回Promise的函数

可以使用node的`require("util").promisify()`。

```js
const fs = require("fs")
const readFile = require("util").promisify(fs.readFile)

const Read = async filePath => {
    try {
        const fr = await readFile(filePath, "utf-8")
        console.log(fr)
    } catch (err) {
        console.log('Error', err)
    }    
}
Read("./4.c")
```

上述代码内部readFile其实也是返回了一个promise对象,所以可以await结果。

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

如果需要自己实现promisify：

```js
function promisify(fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);//=[...arguments]
        return new Promise(function (resolve) {
            args.push(function (result) {
                resolve(result);
            });
            fn.apply(null, args);//fn(...args)
        })
    }
}
```



## **async和Generator的区别**:

#### 表面区别：

- async内置执行器：直接执行就可以，不需要next等其他方法 
- async良好的语义。async表示异步函数，await需要等待后面的表达式结果结束。
- Generator返回的是Iterator对象，async返回的是promise对象,可以后续then继续操作。


#### 内在联系：

两者都能解救回调地狱的问题，对于开发者，两者都是黑匣子。

Generator功能更强大，async的语义更好，各有优点。

在node.js的执行过程可以发现：async会预编译为Generator和Promise的组合语法，而await关键字则会编译为为yield关键字

也就是说async是对Generator的再次封装