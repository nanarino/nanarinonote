# 惰性函数和 Promise

## 生成器

生成器函数（**Generator Function**）也叫作**惰性函数**，避免与生成器弄混。

惰性函数的 function 后面添加**\*** 号，内部用 yield 返回状态，类似于 return

在 js 中，惰性函数执行会创建一个生成器（**Generator**）。

```js
> function* foo(){}
undefined
> ({}).toString.call(foo)
'[object GeneratorFunction]'
> ({}).toString.call(foo())
'[object Generator]'
```

这个生成器可以借助`.next()`方法遍历惰性函数的每一个状态。

### generator.next

执行生成器的 next 方法来执行代码：

1. 当函数执行到 yield 的时候函数会暂停后续的操作，并返回的后续的表达式的值。在返回对象的 value 里面
2. 下次调用 next 的时候从上次结束的地方继续执行，并且有储存当时的状态。
3. 如果没有遇到 yield 语句会一只执行到语句结束。直到 return 语句并且将 return 后面的表达式的值，作为返回的对象的 value 属性值，如果没有 return 就是 undefined

无限遍历的情况

```js
function* generatorFunction() {
  let num = 0;
  while (true) {
    yield num++; //等待下次继续从yield这执行
  }
}
let iter = generatorFunction();
iter.next().value; //0
iter.next().value; //1
iter.next().value; //2
iter.next().value; //3
iter.next().value; //4
iter.next().value; //5
//....
```

#### next 传参

根据叠加情况返回对应的值和完成情况形成的对象。

```js
function* generatorFunction() {
  let num = 0;
  let c = 0;
  while (true) {
    num++;
    c = yield num; //等待下次继续从yield这执行
    num += c;
    c = 0;
  }
}
let iter = generatorFunction();
iter.next().value; //1   0+1+0
iter.next(3).value; //5  1+1+3
iter.next(5).value; //11 5+1+5
```

### generator.throw

可以在遍历器外部抛出异常，在函数的内部捕获，内部处理

```js
function* foo() {
  let t = 0;
  try {
    while (t < 5) {
      yield 123;
      t++;
    }
  } catch (err) {
    console.log("Error!", err);
  }
}
let f = foo();
f.next().value; //123
f.throw("你这个答案有问题"); //Error! 你这个答案有问题
```

抛出的异常在内部接受之后就停止了。不会再叠加

## 迭代器

一般的，所有实现了 next 方法的对象都叫做**迭代器（Iterator）**。生成器也是迭代器只是比普通迭代器多实现了上述方法。

### for...of...

Iterator 与 for 配合的时候类似于闭包用其他变量保存状态

Iterator.next 的值是不可枚举的，可以 for of 遍历 但不可被 Object.values，for in 等枚举

```js
function* a() {
  yield 1;
  yield 2;
  yield 3;
}
c = a();
for (i of a()) {
  console.log(i);
} //1，2，3
for (i of c) {
  console.log(i);
} //1,2,3
c.next().value; //undefined  被掏空了
```

`for let i of iterator` 相当于每轮循环执行`let  i = iterator.next().value`

#### Symbol.iterator

`for of` 并不是只能遍历 iterator 对象或实现了`.next`的 **类 iterator 对象**

非 Iterator 对象会尝试调用其 Symbol.iterator 方法去获取一个 Iterator

Array 等内置对象本身实现了 Symbol.iterator 所有可以直接使用`for of arr`

这里创建一个**类数组对象**，它不是数组但支持`for of arr`，可以被`Array.from`转为数组：

```js
let obj = { 0: "a", 1: "b", 2: "c", length: 3 };
obj[Symbol.iterator] = function* () {
  let i = 0;
  while (i < this.length) {
    yield this[i++];
  }
};
for (let i of obj) {
  console.log(i); //"a" "b" "c"
}
```

不是生成器但是实现了.next 方法也被认为是（类）生成器

不是数组但是实现了 length 和可迭代可枚举也被认为是（类）数组

这称为**鸭子类型**

## 回调地狱（Callback Hell）

写代码的时候需要控制代码的执行顺序。A 加载完成之后做 B，B 搜集好了之后做 C...或者 C，D，E 都要完成才可以继续执行 F，这种代码该如何实现？

```js
work(function chuanyifu(err, data, shuaya) {
  //blabla...穿衣服
  shuaya &&
    shuaya(function chifan(food, goOut) {
      //blabla...吃饭
      goOut &&
        goOut(function drive(daka) {
          //blabla...开车
          daka &&
            daka(function coding() {
              //blabla...写代码
            });
        });
    });
});
```

后面不停是})一层一层嵌套的回调的，就是 **回调地狱**，看多了头晕，但是不得不这么写，因为代码逻辑是这样做的。这种的代码怎么重构怎么优化？

## Promise

Promise 是一个构造函数，传入一个函数 A，在函数中接受两个参数 resolve 和 reject，这是两个参数是函数，通过在 A 中使用 resolve 或者 reject 来表示函数 A 的进行状态，resolve 表示搞定 reject 表示失败。

### 创建

promise 有三种状态： "**Pending**" "**Fulfilled**" "**Reject**" 初始状态是 Pending，一旦状态改变只能是 Resolve 或者 Reject,并且状态一旦改变，**不可修改**

- resolve 接受一个参数，表示异步事件得出的结果

- reject 接受一个参数，表示异步事件没有结果或者失败

```js
let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("数据已经算出来了");
  }, 2000);
});
```

构造函数传入的参数是支持异步操作。等待函数 A 的结果之后我们才可以进行后续的操作。

### then

then 实例方法可以在等待得出结论之后调用

```js
p.then(
  function (data) {
    //完成resolve后接受参数 data 的执行函数
  },
  function (err) {
    //未完成reject后接受参数err的执行函数
  }
);
```

此时执行顺序严格保证了 promise 里的先执行得出结果放到 then 里面执行

**then 支持返回一个新的 Promise 对象**，后续可以保证链式调用

```js
p.then(data=>{
    return new Pormise(fn(resolve, reject){resolve("data2")})
}).then(()=>{
    return new Promise(fn2(resolve, reject){resolve("data3")})
}).then(()={
    //...
})
```

请将异步操作写到 promise 里面，then 里写同步行为

### 异常处理

.catch 实例方法，接受一个参数 err，接受处理前面以及更早的失败或者错误

```js
p.then(() => {
  //...
}).catch((err) => {
  console.log(err);
});
```

.finally 实例方法，后续处理操作，无论前面的 promise 的结果是什么都会执行的内容

```js
p.then(() => {
  //...
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Mission Complate!"); //任务完成
  });
```

头部的例子

```js
function work() {
  //传入需要按顺序执行的函数
  return new Promise((res, rej) => {
    console.log("开始工作");
    res("work done");
  });
}
function chifan(data) {
  return new Promise((res, rej) => {
    //这里处理异步
    console.log(data);
    setTimeout(() => res("chifan done"), 1000);
  });
}
function coding(data) {
  return new Promise((res, rej) => {
    console.log(data);
    setTimeout(() => res("coding 完成了"), 1000);
  });
}
function xiaban(data) {
  console.log(data, "下班");
}
work().then(chifan).then(coding).then(xiaban);
```

### Promise.all

`Promise.all`静态方法，打包多个 Promise 实例，统一判断状态，返回一个新的 promise 对象，可以对多个 promise 进行统一判断

接受一个数组，数组里面存放多个 promise 对象实例。当每个 promise 对象的方法为触发 resolve 时，整体触发 then 的回调函数。接受的数组 posts 为每个 resolve 返回的结果。如果有失败了是返回第一个失败的结果。

```js
let p1 = new Promise((res, rej) => res("no"));
let p2 = new Promise((res, rej) => res("ok"));
let p3 = new Promise((res, rej) => res("ok"));
Promise.all([p1, p2, p3])
  .then((posts) => {
    //p1,p2,p3形成的数组，只有在都返回Resolve或者其中一个返回Reject才会执行后续的操作
    console.log(posts);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Promise.race

`Promise.race`静态方法，打包多个 Promise，同 all 方法类似，只要有一个完成（不论成功或者失败），就触发完成事件。

```js
let p1 = new Promise((res, rej) => rej("no"));
let p2 = new Promise((res, rej) => rej("ok"));
let p3 = new Promise((res, rej) => rej("ok"));
Promise.race([p1, p2, p3])
  .then((posts) => {
    //p1,p2,p3形成的数组，只要任意成功或者失败就会执行then后续的操作
    console.log(posts);
  })
  .catch((err) => {
    //所有都
    console.log(err);
  });
```

### 手动设置状态

`Promise.reject(reason) `手动触发失败事件，返回一个失败的 promise 并且触发后续的失败操作，并传递信息给后续的方法

```js
let p = new Promise((res, rej) => {
  setTimeout(() => {
    res("ok");
  }, 1000);
})
  .then((data) => {
    console.log(data);
    return Promise.reject("err2"); //强行返回一个reject的promise被后续catch到
  })
  .catch((err) => {
    console.log(err);
  });
```

`Promise.resolve(value)` 如果 value 是普通值（非 Promise 对象或者不带 then 方法）那么就会返回一个 Fulfilled 状态的 promise，其余情况的根据参数 value 的 Promise 的结果确定。
