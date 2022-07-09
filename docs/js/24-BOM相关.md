# BOM相关

BOM是(Browser Object Model)的简称,中文名叫浏览器对象模型.

在浏览器环境中抽象浏览器的语言是JavaScript, 所以JS中的原型链以及继承的性质将在BOM中实现.

其中最根部的就是window.对应的DOM中的document.



## window对象

一个浏览器窗口(网页)就是一个window对象.    
里面包含了各种方法与参数, 这些东西可以帮助我们使用操作浏览器.    
比如浏览器的尺寸, 浏览器绑定的事件, 视图动画相关的方法, css单位系统.     
   
但是在(非新建页面)跳转页面的时候, 会有一个window.name的属性保留下来.就是当前窗口的名字

```js
window.name = "bilibili"
//跳转或者输入网址回车
console.log(window.name)//"bilibili"
```

在全局中不要尝试修改window.name或者var name

* 浏览器的尺寸数据和方法

浏览器和document不同,不具有那么多的尺寸数据, 常用的有:     
innerWidth, innerHeight 浏览器内部尺寸, 包含滚动条但是不包含书签栏的尺寸,也不包含控制台    
screenLeft, screenTop(screenX, screenY兼容等价) 浏览器距离屏幕左上角的距离    
outerHeight, outWidth 浏览器整体尺寸,包含外部的书签栏等    
scrollX, scrollY 表示浏览器的滚动的位置


## location对象

location是一个对象，描述的是当前文档的相关位置信息。他是window对象下面的属性

```js
console.dir(window.location)
```

* host： 主机名加端口
* hostname: 主机名不加端口
* port：`:`之后的 表示端口， http默认是80端口
* pathname： `/`之后的，表示路由，网站分区选择
* protocol： 协议，如http和https等
* search： `?`之后的 表示请求，通常是get请求发送给后台的信息
* href： 整体路径
* hash：`#`之后的 表示锚点

获取到的以上属性都在字符串，如果对其直接赋值，会导致浏览器重新解析地址栏，达到跳转的效果。

```js
location.reload() //刷新页面
location.reload(true) //绕过缓存刷新页面
```

### hash路由

```js
//页面路由：会跳转到另外一个页面当中；
window.location.href = "http://baidu.com"
//hash路由，不会使页面跳转，可以实现页面无刷的效果；
window.location.hash = '#/home'
//hashichange事件，监听hash路由的变化
window.onhashchange = function(){...}
```



## history对象

你访问过的网站都会在浏览器内留下历史记录（滑稽脸）。并且我们可以通过JS代码进行跳转。它也是window对象下面的属性

```js
window.history.length//该整数表示会话历史中元素的数目，包括当前加载的页面
history.back()// 跳转到上个页面
history.forward()//跳转到下个页面
history.go()// 传入一个数值，0表示当前页面，1表示下个页面，-1表示上个，-2表示上上个。。。
```



## navigator对象

有关浏览器的信息。也是window对象下面的属性。

```js
navigator.appVersion//只读：返回浏览器的平台和版本信息
navigator.appCodeName// 声明了浏览器的代码版本， 一般都是Mozilla
navigator.userAgent //用户本地的信息组合
//这些信息会在前后端请求的时候编排在请求头文件中发送给后台方便后台识别
//...
```



## console对象

window对象下面也有一个console对象，也有很多方法（比node.js的console方法多）

```js
console.log()//输出当前作用域的值
console.assert(bool, msg) //当为false就弹出msg，当为true就是不返回。
console.clear()//清屏。。。
console.count(str)//传入字符串并计数
console.countReset(str)//清除计数
console.warn(str) //警告
console.error(str) //打印报错信息
console.dir()// 输出可作为对象展开的内容
console.group()//小组内容输出。
console.groupEnd()//小组内容输出关闭。
console.time()//计时
console.timeEnd()//计时结束

console.table()//以表格输出对象
```


## 存储对象

BOM提供了 `sessionStorage` （会话存储） 和 `localStorage`（本地存储）两个对象来对网页数据进行增删改查操作。前者的数据会在关闭窗口或标签页之后将会删除。

| 方法                        | 描述                                               |
| :-------------------------- | :------------------------------------------------- |
| key(*n*)                    | 返回存储对象中第 *n* 个键的名称                    |
| getItem(*keyname*)          | 返回指定键的值                                     |
| setItem(*keyname*, *value*) | 添加键和值，如果对应的值存在，则更新该键对应的值。 |
| removeItem(*keyname*)       | 移除键                                             |
| clear()                     | 清除存储对象中所有的键                             |

注意，早在低版本IE中就已经支持存储对象，但是需要由http(s)协议打开的网页才能使用。



## 编码方式API

```js
encodeURI()//编码 str→uri
encodeURIComponent()//额外编码;,/?:@&=+$#
decodeURI()//解码 uri→str
decodeURIComponent()//解码;,/?:@&=+$#
atob()//解码 base64→str
btoa()//编码 str→base64
```

注意，`atob`和`btoa`是BOM方法，即`window.atob`和`window.btoa`，

在`Node.js`环境中应该使用`Buffer`类型

```js
//编码 str→base64
//旧方法 new Buffer(str).toString('base64')
Buffer.from(str).toString('base64')
//解码 base64→str
new Buffer(base64str, 'base64')).toString()
```



## dataset对象

`data-`是自定义属性新规范

```html
<div id='box' data-pf='f' pd='d' data-x='h' data-hans='hanS'/>

<script>
    /*
        dataset : 数据集
            主要用于传输数据；
            拿取属性不区分大小写。
    */ 
    const box = document.getElementById('box');
    console.log( box.dataset.pf )
    console.log( box.dataset.hans )
    console.log( box.dataset["hans"] )
    console.log( box.dataset["x"] )
    // delete box.pd;
    // console.log( box )
    // box.removeAttribute('pd');
    // box.removeAttribute('data-pf');
    // console.log( box )
    delete box.dataset['data-xiaohuihui']  //错误写法
    // delete box.dataset['xiaohuihui']     //正确写法；
</script>
```



## classList对象

classList是一个DOM属性,它是一个记录类名以及相关方法的对象,类数组对象

| 方法                          | 描述                                                         |
| :---------------------------- | :----------------------------------------------------------- |
| add(*class1, class2, ...*)    | 在元素中添加一个或多个类名。  如果指定的类名已存在，则不会添加 |
| contains(*class*)             | 返回布尔值，判断指定的类名是否存在。                         |
| item(*index*)                 | 返回元素中索引值对应的类名。索引值从 0 开始。  如果索引值在区间范围外则返回 *null* |
| remove(*class1, class2, ...*) | 移除元素中一个或多个类名。移除不存在的类名，不会报错。       |
| toggle(*class,* true\|false)  | 在元素中切换类名。  第一个参数为要在元素中移除的类名，并返回 false。  如果该类名不存在则会在元素中添加类名，并返回 true。 第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。 |


### 获取电量状态

```js
// 想要使用获取手机  window.navigator
window.navigator.getBattery().then( data => {
    // 1.是否正在充电
    // 2.剩余电量 的半分比
    // 3.充满电所需时间
    // 4.当前电量可使用时间
    const {charging, level, chargingTime, dischargingTime} = data;
})
```

### 监听网络状态

```js
window.addEventListener('online', function () {
    console.log("有网");
});
window.addEventListener('offline', function () {
    console.log("没有网");
});
```

### 监听标签页状态

```js
window.addEventListener('visibilitychange', function () {
    console.log(document.visibilityState);
    if(document.visibilityState === 'hidden') {
        document.title = '崩溃了'
    }
    if(document.visibilityState === 'visible') {
        document.title = '又好了'
    }
    // 1.hidden 当前网页的内容不可见
    // 2.visible 当前网页可见
    // 3.prerender 网页预渲染, 单内容不可见
    // 4.unloaded 文档被卸载
})
```
