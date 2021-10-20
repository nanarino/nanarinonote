# BOM相关

BOM是(Browser Object Model)的简称,中文名叫浏览器对象模型.

在浏览器环境中抽象浏览器的语言是JavaScript, 所以JS中的原型链以及继承的性质将在BOM中实现.

其中最根部的就是window.对应的DOM中的document.



## window对象

一个浏览器窗口(网页)就是一个window对象.    
里面包含了各种方法与参数, 这些东西可以帮助我们使用操作浏览器.    
比如浏览器的尺寸, 浏览器绑定的事件, 视图动画相关的方法, css单位系统.     
因为是一个普通对象所以有原型链, 在原型链上有**事件对象构造函数的原型(EventTarget)**,     
这个是和DOM对象原型链上的(EventTarget)一致,    
所以window对象和document对象都是可以访问EventTarget构造函数的原型的方法...

换句话说都可以绑定事件.并且也继承Object原型的方法.    
每当新打开一个页面的时候. 此页面都会新建一个window对象.    
属性各不相同内容也不近相同(几乎都会初始化).甚至是跳转页面的时候都会使得window变化.     
但是在(非新建页面)跳转页面的时候, 会有一个window.name的属性保留下来.就是当前窗口的名字

```js
window.name = "bilibili"
//跳转或者输入网址回车
console.log(window.name)//"bilibili"
```

window.name 具有如此性质可以做到跨网站交互信息.所以在全局中请不要尝试修改window.name或者var name

* 浏览器的尺寸数据和方法

浏览器和document不同,不具有那么多的尺寸数据, 常用的有:     
innerWidth, innerHeight 浏览器内部尺寸, 包含滚动条但是不包含书签栏的尺寸,也不包含控制台    
screenLeft, screenTop(screenX, screenY兼容等价) 浏览器距离屏幕左上角的距离    
outerHeight, outWidth 浏览器整体尺寸,包含外部的书签栏等    
scrollX, scrollY 表示浏览器的滚动的位置

* 名词解释

    - **screen**：屏幕。这一类取到的是关于屏幕的宽度和距离，与浏览器无关，获取window对象的属性。
    - **client**：当前选中区域元素，这里是指浏览器区域。
    - **offset**：偏移。指的是目标甲相对目标乙的距离。
    - **scroll**：卷轴、卷动。指的是包含滚动条的的属性。
    - **inner**：内部。指的是内部部分，不含滚动条。
* 方法等:
    * alert(str) 警告 
        * confirm(str) 确认返回true取消返回false
        * prompt(message, placeholder) 提示用户输入, 返回用户输入的内容, message是描述, placehoder是占用默认文本  
    * close 关闭
    * blur 获取焦点
    * scrollBy(x, y)偏移多少像素
    * scrollTo(x, y)偏移到多少的位值
    * confirm() 确认
    * prompt() 输入信息并返回
    * atob / btoa 字符串二进制处理



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

