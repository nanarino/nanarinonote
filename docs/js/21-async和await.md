# async 和 await

async function 叫异步函数。是 ES2017 新出的，这让异步操作变得更简单了，几乎看起来是同步代码

本质上还是操作 promise 对象观察状态

## 创建异步函数

### 普通方式

使用 await 之前（node 环境，nodejs 见之后笔记）先定义返回 Promise 的函数

```js
const fs = require("fs");
//读取文件的操作
const ReadFile = (filePath) =>
  new Promise((res, rej) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) rej(err);
      res(data);
    });
  });
```

.then 运行

```js
ReadFile("./data.txt").then((data) => {
  console.log(data);
});
```

用 await 代替.then

```js
console.log(await ReadFile("./data.txt", "utf-8"));
```

.catch 直接用普通 try...catch...就可以捕获异常。抛出异常可以在 asycnFunction 中使用 Promise.reject 方法

### async 关键字方式

在函数声明或表达式前加上 async 关键字即可

```js
async function ReadFile() {
  return new Promise((res, rej) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) rej(err);
      res(data);
    });
  });
}
```

- async 关键字放在函数声明之前，函数需要返回一个 Promise 对象

  如果不是，将会**自动帮你包装成`Promise.resolve(value)`**

- await 关键字放在 promise 对象前，阻塞其执行并得到结果

  await 关键字**只能在 async 函数内使用**

### promisify 包装

可以使用 node 的`require("util").promisify()`可以让特定参数的函数封装为异步函数

```js
const fs = require("fs");
const readFile = require("util").promisify(fs.readFile);
//await readFile(...)
```

如果需要自己实现 promisify：

```js
function promisify(fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments); //[...arguments]
    return new Promise(function (resolve) {
      args.push(function (result) {
        resolve(result);
      });
      fn.apply(null, args); //fn(...args)
    });
  };
}
```

## 并发运行

并发运行多个 asyncFunction，只需要先全部运行，需要获取结果的时候再 await

```js
const asyuncfun1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1);
    }, 2000);
  });
const asyuncfun2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2);
    }, 2000);
  });
void (async function main() {
  task1 = asyuncfun1();
  task2 = asyuncfun2();
  console.log(await task1);
  console.log(await task2);
})();
```

除此之外 await promise.all()

```js
void (async function main() {
  console.log(await Promise.all([asyuncfun1(), asyuncfun2()]));
})();
```

使用 for await of 可以保证顺序

```js
void (async function main() {
  for await (let item of [asyuncfun2(), asyuncfun1()]) {
    console.log(item);
  }
})();
```

甚至 Array.forEach 也是一种选择 （但是普通 for 循环会被 await 阻塞）

```js
void (async function main() {
  [asyuncfun1, asyuncfun2].forEach(async (cb) => {
    console.log(await cb());
  });
})();
```

## 继发运行

继发运行只需要执行 async 函数后立即 await 即可逐个阻塞

相比连续 promise.then()，await 就像是同步代码

```js
void (async function main() {
  await asyuncfun1();
  await asyuncfun2();
})();
```

例如：等待用户输入文件名然后读取文件的内容：

获取用户的输入使用`readline.createInterface`，

它不符合`require("util").promisify()`规定的特定格式所以需要自己封装

```js
const fs = require("fs");
const readFile = require("util").promisify(fs.readFile);

const { createInterface } = require("readline");

const input = (question) => {
  return new Promise((resolve, reject) => {
    const readline = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(question, (ipt) => {
      ipt ? resolve(ipt) : reject("");
      readline.close();
    });
  });
};

void (async function main() {
  let filename;
  try {
    filename = await input(`请输入文件名：./`);
  } catch (err) {
    console.log(`无输入`);
    return;
  }
  try {
    console.log(await readFile(`./${filename}`, "utf-8"));
  } catch (err) {
    console.log(`读取失败：${err}`);
  }
})();
```

## **与 Generator 的区别**:

### 表面区别

- async 内置执行器：直接执行就可以，不需要 next 等其他方法
- async 良好的语义。async 表示异步函数，await 需要等待后面的表达式结果结束。
- Generator 返回的是 Iterator 对象，async 返回的是 promise 对象,可以后续 then 继续操作。

### 内在联系

两者都能解救回调地狱的问题，对于开发者，两者都是黑匣子。

Generator 功能更强大，async 的语义更好，各有优点。

在 node.js 的执行过程可以发现：async 会预编译为 Generator 和 Promise 的组合语法，而 await 关键字则会编译为为 yield 关键字

也就是说 async 是对 Generator 的再次封装

yiled promiseObject --> await asyncFunction()

## 异步生成器

可以用`async function* asyncGenerator()`定义

也可以实现`Symbol.asyncIterator`接口

```js
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function () {
  for await (num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

yield 的如果不是 Promise 对象会被自动 yield Promise.resolve(value)
