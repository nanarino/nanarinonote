# DOM方法

## DOM对象

DOM(Document Object Model)文档对象模型：

* 文档对象模型是一个树形结构，类似于家谱树

  html标签里面包裹了所有的文档内容，是**根节点**，整个html表示整个文档。

  html节点内部通常有两个同级节点head和body，

  它们都是html的**子节点**。html是它们的**父亲节点（parent）**，它们互为**兄弟节点**。

  这样一层一层的关系就是**节点树**。各个标签在页面中都是**元素节点（element node）**

* 节点（node）的种类

  * 元素节点（element node）

    文档对象模型中的标签就是最基本的元素节点。它们层层嵌套形成整个页面。

  * 文本节点（text node）

    DOM内的文本为文本节点。文本节点有的被包含在元素节点中的，比如p标签内部的文字。

  * 属性节点（attribute node）

    属性节点从属于元素。

    比如`<input type='radio'>`其中type='radio'是元素节点p的属性节点。




## 获取元素的方法

```js
document.getElementById //通过ID获取某个元素
document.getElementsByClassName //通过class类名获取,获取是一组,不支持IE8及以下
document.getElementsByTagName //通过标签名获取,获取是一组
document.getElementsByName //通过name获取,获取是一组
querySelector,querySelectorAll//静态获取元素
```

其中getElementById和querySelector获取的是元素单个节点。

而其余的方法都是获取若干个元素节点，那么会以类数组的形式存储

```js
let arr1 = document.getElementsByClassName("item")
let arr2 = document.querySelectorAll(".item")
//arr1 HTMLCollection
//arr2 NodeList
```

#### HTMLCollection和NodeList的异同:

- 都是**DOM节点的集合**，两者都属于Collections范畴，但是NodeList的范围要更广泛一点，它可以包含节点对象和文本对象。HTMLCollection比NodeList多了一个namedItem方法，其他方法保持一致

- `HTMLCollection`是以节点为元素的列表，可以凭借索引、节点名称、节点属性来对独立的节点进行访问。HTML DOM中的Collections是实时变动的，当原始文件变化，Collections也会随之发生变化。

- `NodeList`返回节点的有序集合，DOM中的`NodeList`也是实时变动的

- Node是一个基础类型，document, element, text, comment, documentFragment等都继承于Node. 在这篇文章最开始的测试中`NodeList`结果中有非常多的`text`，其实element, text, comment都是Node的子类，可以将它们视为：**elementNode**, **textNode**以及**commentNode**.平时在DOM中最常用的Element对象，其本质就是elementNode.


```html
<ul class="box">
   <li class="item"></li>
   <li class="item"></li>
   <li class="item"></li>
</ul>
```

```js
let box = document.querySelector(".box")
let qli = document.querySelectorAll(".item")
let cli = document.getElementsByClassName("item")
let nli = document.getElementsByTagName("li")
box.innerHTML+=`<li class="item"></li>`//添加元素
qli.length//3	NodeList  不会动态改变
cli.length//4	HTMLCollection  会动态改变(相当于记录了一个获取方式)
nli.length//4	HTMLCollection  会动态改变
```



## DOM中的增删改查

### 增加：

```js
box.innerHTML += "BLABLA"
```

将box内部的DOM节点转换成字符串，然后字符串添加内容，然后浏览器重新渲染。重新生成DOM结构。等价于重绘和重排。缺点：

1. 增加浏览器渲染不必要的开销 

   ```js
   for(let i = 0; i < 100; i++){
       box.innerHTML+=`<li class="item">${i}</li>`
   }
   //此时浏览器重写了100次box的内部结构，
   //每次重写都会重新渲染一次，等价于加载了100次页面
   let str =""
   for(let i = 0; i < 100; i++){
       str+=`<li class="item">${i}</li>`
   }
   box.innerHTML+=str//两段代码效率完全不同
   ```

2. 原先的节点绑定的事件将会消失。

   无论是不是动态获取元素。

---

**正确的方式**： 

DOM的生成节点的方式和添加元素的方法：

```js
let li = document.createElement("li")//生成一个li的标签节点。
let text1 = document.createTextNode("哈哈哈")//生成一个文本节点
let text2 = document.createTextNode("哇")

li.appendChild(text1)//往li盒子中添加一个文本节点，默认添加到最后
li.insertBefore(text2, text1)//在li标签里面text1前面添加text2

document.body.appendChild(li)//放置
```

这种添加方式只是对DOM树的某一个枝叶做修改，不会重新种树。

但是枝叶的修改也是DOM操作，也会有渲染重排的问题。



### 删除

同样也不要`.innerHTML`。

```html
<ul class='list'>
    <li></li>
    <li></li>
</ul>
```

```js
let ali = document.querySelectorAll(".list li")
let list = document.querySelector(".list")
list.removeChild(ali[0])// 从父元素中删除节点。必须是父子关系。
```

修改 = 增加 + 删除

```js
list.replaceChild(document.createElement("a"), ali[0])//选中儿子ali[0]替换成新建的a元素节点

list.relaceWith(document.createElement("li"))// 将自己替换成li元素节点
```



### 查询

  查询元素。可以通过绝对位值关键字符查询。也可以通过相对位值查询父节点，相邻节点，子节点查询元素。

  * 父元素

  ```js
  let li = document.querySelectorAll(".list li")[0]
  li.parentNode//返回li的父元素的节点
  li.parentElement//返回li的父元素
  li.parentNode===li.parentElement //true

  li.offsetParent //定位父级
  //两者没有本质上的区别，都可以返回父元素
  
  document.documentElement// html标签节点
  document.documentElement.parentElement// null，因为这里已经没有父元素了
  document.documentElement.parentNode// #document 文档
  document.documentElement.parentNode===document// true
  ```

  * 同级元素

  nextSibling和previousSibling选择上一个或者下一个同胞元素，如果不存在就是返回null

  ```html
  <ul>
      <li></li>
      asdasd
      <li></li>
  </ul>
  ```

  ```js
  let li = document.querySelector("li")
  li.previousSibling // null 前面一个节点
  li.nextSibling// "asdasd" 后面节点，是文本
  li.nextSibling.nextSibling// 第二个li
  ```

  如果只想要标签元素节点，可以自行封装方法

  其中节点有节点类型。1是标签，3是文本，2是属性

  ```js
  function next(ele){
      if(el.nextSibling.nodeType==1) return el.nextSibling
      return next(ele.nextSibling)
  }
  //判断nodeType如果是标签就返回，如果不是就继续找下一个
  //pre同理
  ```

相邻元素节点的获取去方式2:

```js
li.nextElementSibing //下一个元素节点
li.previousElementSibing //前一个元素节点
```

  * 子元素

  子元素可能是多个，也可能是一个。

  ```html
<ul>
    <li></li>
    asdasd
    <li></li>
</ul>
  ```

  ```js
  let ul = document.querySelector("ul")
  ul.childElementCount //子元素节点个数 2
  ul.children //	子元素节点集合HTMLCollection 2个li
  ul.childNodes// 子节点集合 NodeList 3个，其中第二个是text
  ul.hasChildNodes // 有没有子节点，有就是true没有就是false也可以用length
  ul.firstChild //第一个子节点
  ul.firstElementChild //第一个元素子节点
  ul.lastChild //第一个子节点
  ul.lastElementChild //第一个元素子节点
  ```

  * 属性节点和文本节点

  ```js
  let list = document.querySelector(".list")
  let attr = document.createAttribute("asd")
  attr.nodeType // 2
  list.setAttribute(attr)
  let text = document.createTextNode("asd")
  text.nodeType // 3
  ```

* 节点对象的继承关系。

任何一个节点都是对象，原型链的终点都是Object。那继承关系是什么呢？在chrome浏览器可以测试

```js
let temp = document.createElement("div")// div标签节点
temp.__proto__ //HTMLDivElement:div构造函数的原型，上面有div节点独有的方法
temp.__proto__.__proto__ //HTMLCollection:html元素节点构造函数的原型，节点的共有性质都在这
temp.__proto__.__proto__.__proto__ //Element:本质上和Document同级都是Node下面的一个元素
temp.__proto__.__proto__.__proto__.__proto__ //Node:所有节的构造函数的原型，存放节点基础方法
temp.__proto__.__proto__.__proto__.__proto__.__proto__ //EventTarget:事件对象的构造函数的原型
temp.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ //Object的原型
```



## 宽高属性

### 元素宽高相关的属性

client: 读取元素的 content的宽高 + padding 的宽高 , 不包括滚动条和外边距以及边框

获取body的宽高属性：

```js
console.log(document.body.clientWidth) //body的实际宽度，不包括滚动条
```

文档可视区域的宽高:

```JS
document.documentElement.clientWidth //当前文档区域可见宽度
document.documentElement.clientHeight //当前文档区域可见高度
```

注意: 不包括滚动条. 虽然没有兼容性问题，但是在IE不同的版本的宽度显示数值有一点差异，大概是3px的差异

注意: window下没有client属性

用在元素身上:

clientWidth: 元素的content + padding宽/高, **不包括滚动条**

clientHeight

clientLeft

clientTop: 返回元素的content到边框的距离，也就是边框的厚度

注意: 只读属性,不能进行设置

```html
<style>
    #box{
        width: 200px;
        height: 200px;
        padding: 30px;
        margin: 70px;
        border: 20px black solid;
        background-color: #f60;
    }
</style>
<div id="box"></div>
<script>
	var oBox = document.getElementById("box")
    console.log(oBox.clientWidth)
    console.log(oBox.clientHeight)
</script>
```

### 获取窗口对的内部宽度

```js
window.innerWidth; // 窗口的宽, 包括滚动条的宽度
```

如果想获取滚动条的宽度：

```js
window.innerWidth - document.documentElement.clientWidth
```

offset 获取body页面的实际宽高

```js
document.body.offsetWidth
document.body.offsetHeight
```

对于文档元素，只能获取文档的可视区域宽，但是能获取实际高度

```js
document.documentElement.offsetWidth //当前文档的可见区域宽度
document.documentElement.offsetHeight//当前文档的实际高度
```

在元素上：

offsetWidth: 元素的content+padding+border

offsetHeight: 

offsetTop 元素顶部到定位父级的顶部距离，不包括定位父级的边框部分

offsetLeft 元素左边到定位父级元素左边距离, 不包括定位父级的边框部分

元素到body顶部的距离方法： 没有包括父级边框

```js
function getOffset(dom){
    let o ={
        top: 0,
        left: 0
    } 
    while(dom!==document.body){
        o.left += dom.offsetLeft
        o.top += dom.offsetTop
        dom = dom.offsetParent //定位父级
    }
    return o
}
//这里忽略掉了所有的边框
```

包括父级边框的，元素到body顶部的距离

   ```js
   function getOffset(dom){
       let o = {
           top: 0,
           left: 0
       }
       while(dom!==document.body){
           o.left += dom.offsetLeft+dom.offsetParent.clientLeft
           o.top += dom.offsetTop+dom.offsetParent.clientTop
           dom = dom.offsetParent //定位父级
       }
       return o
   }
   //包含边框，两方法可以合并
   ```

   scroll

   读取元素的content宽度+padding宽度，**包含滚动条**

   scrollWidth

   scrollHeight

   子元素超出的时候， 会加上 超出的子元素的宽度/高度。当超出的时候，左padding或者上padding加上内容宽度或者高度。右padding或者下padding已经失去意义所以不会结算。

   但是当添加overflow属性的时候。会计算全部的padding + 内容宽/高 + 超出的子级宽/高



   ### 滚动高度：可读可写

获取元素的y轴或者x轴方向的被滚动挡住的那部分的宽度高度。等价于滚动过的部分

   ```js
   document.documentElement.scrollTop
   document.documentElement.scrollLeft
   ```

可以在滚动事件中监听： 

   ```js
   window.onscroll = function(){
       console.log(document.documentElement.scrollTop)
   }
   //滚动的时候返回滚动高度
   ```

获取页面滚动高度存在兼容性问题，需要做兼容性写法

   ```js
   document.body.scrollTop || document.documentElement.scrollTop
   ```



   ### 鼠标位值相关的坐标

事件对象event

   ```js
   document.body.onclick = function(e){
       // e 是 前面onclick事件触发之后整理的那一时刻的信息对象，叫事件对象
   	console.log(e.clientX, e.clientY) // 相对于窗口的左上角位值
       console.log(e.pageX, e.pageY) // 相对于文档位置的左上角的位置,包含滚动条隐藏部分
   }
   ```

事件对象的兼容性写法

```js
e = e || window.event
```

