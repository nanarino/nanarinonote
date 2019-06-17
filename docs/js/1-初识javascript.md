# 初识javascript

**javascript历史**

> 背景： 互联网发展初期，不存在客户端处理程序，但是网页变得更加复杂功能更加丰富，需要处理的事情越来越多，如果任何处理逻辑都放到后端，效率低下（带宽，服务器负担）。Netscape(网景)的Brendan Eich(布兰登·艾奇)在1995年5月被公司要求做一个“看上去和Java相似，但是比java简单的网页脚本语言”，他本身对Java不感兴趣，花了10天设计了JavaScript满足了公司要求。其设计思想：
>
> 1.C语言语法；
>
> 2.Java数据类型于内存管理 
>
> 3.函数第一等公民 4.基于原型(`prototype`).



## javascript特点

1.**基于原型，动态类型，解释型，弱类型 脚本语言** 

- ​    基于原型:万物皆对象

- ​    动态类型:变量声明不需要规定类型,和python一样

- ​    解释型:没有编译过程,和python一样
- ​    弱类型:运算时经常进行隐式类型转换,和php一样

2.**在浏览器环境中由 ECMAScript  DOM  BOM 三部分组成**

- ​    ECMAScript 语法约束 我们平时讲的es5 es6

- ​    BOM	BrowserObjectModel 浏览器对象模型

- ​    DOM	DocumentObjectModel 文档对象模型

3.**java 同 javascript 之间没关系**



## script标签引入

```html
<script type='text/javascript'>
    //你的JavaScript代码   这是单行注释
</script>
```

```html
<script type='text/javascript' src='...'></script>
```

script标签可以在页面任意位置  从上到下执行

初学者最好把标签放在紧贴body的结束标签之前



## 注释和打印

```js
//单行注释

/*
 *   多行注释
 */

console.log("打印日志")
//打印的其他内容甚至打印图片等花里胡哨的操作可以百度
```



## 获取标签节点

JS对页面元素进行操作，需要获取元素，类似于CSS选择器去匹配

```js
document.getElementById("box");//返回ID名叫做box的元素
```

获取标签的方法有很多

```js
document.getElementsByClassName("box");//返回类名叫box的元素的集合
document.getElementsByTagName("li");//返回标签名叫li的元素的集合
document.getElementsByName("box");//返回name名叫box的元素的集合
```

类名获取元素 ie浏览器貌似不支持

一些特殊标签:

```js
document.documentElement;//返回html元素
document.title；//返回页面标题
document.body;//返回body元素
```

以上都是动态获取

静态获取:

```js
document.querySelector(".box");//用CSS的选择器选择方式返回满足条件的第一个元素
document.querySelectorAll(".box li");//用CSS的选择器选择方式返回满足条件的所有的元素集合
```

动态获取同静态获取的区别在讲DOM方法的时候说明



### 变量和常量

```js
var a;   //es5 变量
let b;   //es6 变量
const c;   //es6 常量 不希望被修改时使用

var x,y,z;//一次性声明多个变量，用英文逗号分隔

let box = document.getElementById("box");//声明和赋值一起写
```

命名规范

- 变量名要有意义 代码可读性

- 变量采用驼峰命名法

- 常量采用全字母大写加下划线拼接

- 回避关键字和保留字(依靠编辑器的语法高亮判断)



## 事件绑定

为了解决javascript执行的时候可能页面的标签还没有加载的问题，

(这个问题在`script`标签紧贴`body`结束标签时是不存在的)

我们有如下操作:

```js
window.onload = function(){console.log("页面已经加载完了")}；
```

页面获取到的元素可以绑定点击事件。

```js
let box = document.getElementById("box");
box.onclick = function(){
    console.log("box正在被点击中");
}
```



## 修改样式

通过 `.style`的方式访问css样式表

可以通过 `.cssText`修改原本的样式，也可以通过`.style.color`这种来修改

```js
let box = document.getElementById("box");
box.style.cssText = "background-color: red;color: blue";
//或者
box.style.backgroundColor = "red";
box.style.color = "blue";
```



## 修改标签内的内容

通过 `.innerHTML`或者`.innerText`

 `.innerHTML`： 支持标签

 `.innerText`： 不支持标签

```js
let box = document.getElementById("box");
console.log(box.innerHTML);//读取
box.innerHTML = box.innerHTML + 1;//修改
```



请自己练习点击改变样式和文字的操作

