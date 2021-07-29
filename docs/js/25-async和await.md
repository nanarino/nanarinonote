# async和await



## async和await

async叫异步函数。是ES2017新出的，这让异步操作变得更简单了，几乎看起来是同步代码。

本质上还是操作promise对象观察状态

---

使用await之前（node环境）先定义返回Promise的函数

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

ReadFile("./data.txt").then((data)=>{
    console.log(data)
})
```

用async和await

```js
const main = async () => {
    try {
        const fr = await readFile("./data.txt", "utf-8")
        console.log(fr)
    } catch (err) {
        console.log('Error', err)
    }    
}
main()
```

可以使用node的`require("util").promisify()`可以让特定参数的函数封装为返回promise的函数

```js
const fs = require("fs")
const readFile = require("util").promisify(fs.readFile)
//await readFile(...)
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

await就像是同步代码，例如：等待用户输入文件名然后读取文件的内容：

获取用户的输入使用`readline.createInterface`，

它不符合`require("util").promisify()`规定的特定格式所以需要自己封装

```js
const fs = require("fs")
const readFile = require("util").promisify(fs.readFile)

const { createInterface } = require("readline")

const input = question => {
    return new Promise((resolve, reject) => {
        const readline = createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(question, input => {
            input ? resolve(input) : reject()
            readline.close()
        })
    })
}

void async function main(){
    let filename
    try {
        filename = await input(`请输入文件名：./`)
    } catch (err) {
        console.log(`无输入`)
        return
    }
    try {
        console.log(await readFile(`./${filename}`, "utf-8"))
    } catch (err) {
        console.log(`读取失败：${err}`)
    }
}()
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

yiled promiseObject --> await asyncFunction()