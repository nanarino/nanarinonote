# 初识javascript

> 背景： 互联网发展初期，不存在客户端处理程序，但是网页变得更加复杂功能更加丰富，需要处理的事情越来越多，如果任何处理逻辑都放到后端，效率低下（带宽，服务器负担）。Netscape(网景)的Brendan Eich(布兰登·艾奇)在1995年5月被公司要求做一个“看上去和Java相似，但是比java简单的网页脚本语言”，他本身对Java不感兴趣，花了10天设计了JavaScript满足了公司要求。
>



## javascript特点

基于原型，动态类型，解释型，弱类型脚本语言

- 基于原型:万物皆对象

- 动态类型:变量声明不需要规定类型,和python一样

- 解释型:没有编译过程,和python一样
- 弱类型:运算时经常进行隐式类型转换,和php一样

在浏览器环境中由 ECMAScript  DOM  BOM 三部分组成

- ECMAScript 语法约束 es5 es6版本

- BOM	BrowserObjectModel 浏览器对象模型

- DOM	DocumentObjectModel 文档对象模型

java 同 javascript 之间没关系



## script标签引入

```html
<script type='text/javascript'>
    //你的JavaScript代码   这是单行注释
</script>
```

```html
<script type='text/javascript' src='...'></script>
```

和css一样，script标签可以在页面任意位置  从上到下执行

刚开始学的时候最好把标签放在紧贴body的结束标签之前。



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

这属于DOM方法，获取标签的方法还有很多

```js
document.getElementsByClassName("box");//返回类名叫box的元素的集合
document.getElementsByTagName("li");//返回标签名叫li的元素的集合
document.getElementsByName("box");//返回name名叫box的元素的集合
```

一些特殊标签:

```js
document.documentElement;//返回html元素
document.title；//返回页面标题
document.body;//返回body元素
```

以上都是动态获取，静态获取:

```js
document.querySelector(".box");//用CSS的选择器选择方式返回满足条件的第一个元素
document.querySelectorAll(".box li");//用CSS的选择器选择方式返回满足条件的所有的元素集合
```

动态获取同静态获取的区别在讲DOM方法的时候说明



## 变量和常量

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

- 回避关键字和保留字(依靠编辑器判断)



## 事件绑定

为了解决javascript执行的时候可能页面的标签还没有加载的问题：

```js
window.onload = function(){console.log("页面已经加载完了")}；
```

页面获取到的元素可以绑定点击事件。

```js
let box = document.getElementById("box");
box.onclick = function(){
    console.log("box正在被点击");
}
```

此外，将`script`标签紧贴`body`结束标签也是一种解决未加载问题的办法。



## 修改标签内的内容

 `.innerHTML`： 支持标签

 `.innerText`： 不支持标签

```js
let box = document.getElementById("box");
console.log(box.innerHTML);//读取
box.innerHTML = box.innerHTML + 1;//修改
```



## 修改样式

获取标签节点后，可以通过 `.cssText`修改样式

也可以通过`.style.color`来修改

还可以通过`.style.setProperty(属性名,属性值,可选的important优先级)`来修改

```js
let box = document.getElementById("box");

//通过.style.color
box.style.color = "blue";

//通过.cssText
box.style.cssText = "background-color: red;color: blue";

/*    通过.style.setProperty可以方便给css3中自定义变量赋值：
 *    div{
 *        --x:0;
 *        background: hsl(var(--x), 50%, 50%);
 *     }
 */
h = 150
box.style.setProperty("--x",h)
```

上述方法都是添加的行内的样式。相当于在`<div id='box' style='这里添加' >`。

::: warning 注意
上文中的CSS自定义变量功能不属于Sass等预处理语言，你可能需要了解CSS3的拓展知识

以下内容并不适合符合本节的初识JS标题，只是为了方便查阅所以归档在这里
:::



如果想要在style标签中添加如字体颜色（color）的样式：

- 可以用document对象的`CSSStyleDeclaration`例如：

  `document.styleSheets[0].cssRules[0].style`

  它和标签节点的使用方法一样有`setProperty()`和`cssText`

- `(ele.currentStyle || getComputedStyle(ele)).color`

  ele是获取的标签节点，这里使用了兼容的写法，逻辑或运算

  当`.currentStyle`属性不存在（说明不是IE浏览器）时使用`getComputedStyle()`