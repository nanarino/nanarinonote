# 生成器和Promise

## 回调地狱（Callback Hell）

写代码的时候需要控制代码的执行顺序。A加载完成之后做B，B搜集好了之后做C...或者C，D，E都要完成才可以继续执行F，这种代码该如何实现？

```js
work(function chuanyifu(err, data, shuaya){
    //blabla...穿衣服
    shuaya&&shuaya(function chifan(food ,goOut){
        //blabla...吃饭
        goOut&&goOut(function drive(daka){
            //blabla...开车
            daka&&daka(function coding(){
                //blabla...写代码
            })
        })
    })
})
```

后面不停是})一层一层嵌套的回调的，就是 **回调地狱**，看多了头晕，但是不得不这么写，因为代码逻辑是这样做的。这种**屎一样**的代码怎么重构怎么优化？



## 生成器（Generator）

也叫作**惰性函数**

但是和普通的函数不同，他封装了一个可以存储状态的状态机。

Generator函数执行返回一个迭代器对象（Iterator）。迭代器对象可以遍历Generator的每一个状态。



### 与Iterator接口的关系

Iterator是Symbol类型下的一个属性：Symbol.iterator，这是一个接口。由于Generator的状态叠加的性质，可以将对象添加可以枚举的性质。每次调用都返回它值

```js
for(i of obj){console.log(obj)}
//obj is not iterable
Object.prototype[Symbol.iterator] = function* (){
    for(let i in this){
        yield this[i]
    }
}//所有的对象的原型上都添加上了可枚举的接口
let obj = {a:1, b:2, c:3}
for(i of obj){console.log(obj)}；//1 2 3
```



### yield关键字的使用

惰性函数的function后面添加* 号，内部用yield返回状态，类似于return

执行generator后返回的对象的next方法来执行代码：

1. 当函数执行到yield得时候函数会暂停后续得操作，并返回得后续的表达式得值。在返回对象得value里面
2. 下次调用next得时候从上次结束得地方继续执行，并且有储存当时得状态。
3. 如果没有遇到yield语句会一只执行到语句结束。直到return语句并且将return后面的表达式的值，作为返回的对象的value属性值，如果没有return就是undefined

无限遍历的情况

```js
function* foo(){
    let num = 0;
    while(true){
        yield num++//运行到yield返回，但是函数不消失，等待下次继续从这执行，直到遇到下一个yield或者函数执行完成
    }
}
let o = foo()
o.next().value//0
o.next().value//1
o.next().value//2
o.next().value//3
o.next().value//4
o.next().value//5
//....
```

此时o就是一个**迭代器对象（Iterator）**。

迭代器对象实现了next方法：根据叠加情况返回对应的值和完成情况形成的对象。

```js
function* foo(){
    let num = 0;
    let c = 0;
    while(true){
        num++ 
        c = yield num
        //运行到yield返回，但是函数不消失，等待下次继续从这执行，直到遇到下一个yield或者函数执行完成
        num += c
        c = 0
    }
}
let o = foo()
o.next().value;//1   0+1+0
o.next(3).value;//5  1+1+3
o.next(5).value;//11 5+1+5
```



### 与for...of...配合使用

与闭包不同的是，Generator与for配合的时候不需要用其他变量保存其生成的Iterator也能进行迭代

```js
function* a(){
    yield 1
    yield 2
    yield 3
}
c = a()
for(i of a()){console.log(i)}//1，2，3
for(i of c){console.log(i)}//1,2,3
c.next().value//undefined
```



### throw抛出错误

可以在遍历器外部抛出错误，在函数得内部捕获错误。内部处理

```js
function* foo(){
    let t =0;
    try{
        while(t<5){
	        yield 123
            t++;
        }
    }catch(err){
        console.log("Error!",err)
    }
}
let f = foo();
f.next().value//123
f.throw("你这个答案有问题")//Error! 你这个答案有问题
```

抛出错误内部接受之后就停止了。不会再叠加

- Generator使用的方法

  状态函数等待外部状态或者函数得出数据，再在此方法中传入参数继续执行迭代。

  比如发送请求，返回多段数据，内部传入迭代函数，每次都整理数据，添加完成之后再抛出。一般是结合async使用



## Promise

Promise是一个构造函数，传入一个函数A，在函数中接受两个参数resolve和reject，这是两个参数是函数，通过在A中使用resolve或者reject来表示函数A的进行状态，resolve表示搞定reject表示失败。

promise有三种状态： "**Pending**" "**Fulfilled**" "**Reject**" 初始状态是Pending，一旦状态改变只能是Resolve或者Reject,并且状态一旦改变，**不可修改**

​	resolve接受一个参数，表示异步事件得出的结果

​	reject也是接受一个参数，表示异步事件没有结果或者失败

```js
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("数据已经算出来了")
    },2000)
})
```

* 构造函数传入的参数是支持异步操作。等待函数A的结果之后我们才可以进行后续的操作。
* then实例方法可以在等待得出结论之后调用

```js
promise.then(function(data){
    //完成resolve后接受参数 data 的执行函数
},function(err){
    //未完成reject后接受参数err的执行函数
})
```

此时执行顺序严格保证了promise里的先执行得出结果放到then里面执行

**then支持返回一个新的Promise对象**，后续可以保证链式调用

```js
promise.then(data=>
    //then做的的事情
    return new Pormise(fn(resolve, reject){resolve("data2")})
).then(()=>
    //第二段做的事情
    return new Promise(fn2(resolve, reject){resolve("data3")})
).then(()={
    //...第三段
})
```

请将异步操作写到promise里面，then里写同步行为

* catch实例方法，接受一个参数err，接受处理前面的失败或者错误

```js
promise.then(()=>{
    //
}).catch((err)=>{
    console.log(err)
})
```

* finally实例方法，后续处理操作，无论前面得promise得结果是什么都会执行得内容

```js
promise.then(()=>{
    //
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Mission Complate!")//任务完成
})
```

头部的例子

```js
function work(){//传入需要按顺序执行得函数
    return new Promise((res, rej)=>{
        console.log("开始工作")
        res("work done")
    })
}
function chifan(data){
    return new Promise((res, rej)=>{//这里处理异步
        console.log(data)
        setTimeout(()=>res("chifan done"),1000)
    })
}
function coding(data){
    return new Promise((res, rej)=>{
        console.log(data)
        setTimeout(()=>res("coding 完成了"),1000)
    })
}
function xiaban(data){
    console.log(data,"下班")
}
work().then(chifan).then(coding).then(xiaban)
```

* Promise.all方法，打包多个Promise实例，统一判断状态，返回一个新的promise对象，可以对多个promise进行统一判断

  接受一个数组，数组里面存放多个promise对象实例。当每个promise对象的方法为触发resolve时，整体触发then的回调函数。接受的数组posts为每个resolve返回的结果。如果有失败了是返回第一个失败的结果。

```js
let p1 = new Promise((res, rej)=>res("no"))
let p2 = new Promise((res, rej)=>res("ok"))
let p3 = new Promise((res, rej)=>res("ok"))
Promise.all([p1, p2, p3]).then((posts)=>{
    //p1,p2,p3形成的数组，只有在都返回Resolve或者其中一个返回Reject才会执行后续的操作
    console.log(posts)
}).catch((err)=>{
    console.log(err)
})
```

* Promise.race方法，打包多个Promise，同all方法类似，只要有一个完成（不论成功或者失败），就触发完成事件。

```js
let p1 = new Promise((res, rej)=>rej("no"))
let p2 = new Promise((res, rej)=>rej("ok"))
let p3 = new Promise((res, rej)=>rej("ok"))
Promise.race([p1, p2, p3]).then((posts)=>{
    //p1,p2,p3形成的数组，只要任意成功或者失败就会执行then后续的操作
    console.log(posts)
}).catch((err)=>{
    //所有都
    console.log(err)
})
```

* Promise.reject(reason) 手动触发失败事件，返回一个失败的promise并且触发后续的失败操作，并传递信息给后续的方法

```js
let p = new Promise((res, rej)=>{
    setTimeout(()=>{
       res("ok")
    },1000)
}).then((data)=>{
    console.log(data)
    return Promise.reject("err2") //强行返回一个reject的promise被后续catch到
}).catch((err)=>{
    console.log(err)
})
```

* Promise.resolve(value) 如果value是普通值（非Promise对象或者不带then方法）那么就会返回一个Fulfilled状态的promise，其余情况得根据参数value得Promise得结果确定。
