# DOM 对象

DOM(Document Object Model)文档对象模型：

- 文档对象模型是一个树形结构，类似于家谱树

  html 标签是**根节点**，整个 html 表示整个文档。

  head 和 body 是 html 的**子节点**。html 是它们的**父亲节点（parent）**，它们互为**兄弟节点**。

  这样一层一层的关系就是**节点树**。各个标签在页面中都是**元素节点（element node）**

- 节点（node）的种类

  - 元素节点（element node）
  - 文本节点（text node）
  - 属性节点（attribute node）

对于一个 DOM 对象，比如 document.getElementById 返回的对象，笼统来说它具有

- 父类*Element*
- 父父类*Node*
- 父父父类*EventTarget*

在 ts 中操作 DOM 需要明确指出它的类型比如 input 标签的类型是*HTMLInputElement*

## 获取元素

```javascript
document.getElementById //通过ID获取某个元素
document.getElementsByClassName //通过class类名获取,获取是一组,不支持IE8及以下
document.getElementsByTagName //通过标签名获取,获取是一组
document.getElementsByName //通过name获取,获取是一组
querySelector, querySelectorAll //静态获取元素
```

其中 getElementById 和 querySelector 获取的是元素单个节点。

而其余的方法都是获取若干个元素节点，那么会以类数组的形式存储

```javascript
let arr1 = document.getElementsByClassName("item")
let arr2 = document.querySelectorAll(".item")
//arr1 HTMLCollection  会动态改变(相当于记录了一个获取方式)
//arr2 NodeList  不会动态改变
```

## 增删改查

### 增

`innerHTML+=`

将内部的 DOM 节点转换成字符串，然后字符串添加内容，然后浏览器重新渲染。重新生成 DOM 结构。等价于重绘和重排。缺点：

1. 增加浏览器渲染不必要的开销

1. 原先的节点绑定的事件将会消失，无论是不是动态获取元素。

______________________________________________________________________

正确的方式

- `createElement` 生成元素
- `createTextNode` 生成文本
- `appendChild` 作为子节点放置，已在页面中的节点会在原位置消失
- `insertBefore` 移动子节点到其他子节点之前

```javascript
let li = document.createElement("li") //生成一个li的标签节点。
let text1 = document.createTextNode("哈哈哈") //生成一个文本节点
let text2 = document.createTextNode("哇")

li.appendChild(text1) //往li盒子中添加一个文本节点，默认添加到最后
li.insertBefore(text2, text1) //在li标签里面text1前面添加text2

document.body.appendChild(li) //放置
```

这种添加方式只是对 DOM 树的某一个枝叶做修改，不会重新种树。\
但是枝叶的修改也是 DOM 操作，也会有渲染重排的问题。

- `Image()`构造函数将会创建一个新的[`HTMLImageElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement)实例。

  它的功能等价于 [`document.createElement('img')`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)

```javascript
var myImage = new Image(100, 200)
myImage.src = "picture.jpg"
document.body.appendChild(myImage)
```

### 删

同样也不要`.innerHTML`。删除子使用`removeChild`

```html
<ul class="list">
 <li>
 </li>
 <li>
 </li>
</ul>
```

```javascript
let ali = document.querySelectorAll(".list li")
let list = document.querySelector(".list")
list.removeChild(ali[0]) // 从父元素中删除节点。必须是父子关系。
```

### 改

完全修改 = 删除+增加

```javascript
list.replaceChild(document.createElement("a"), ali[0]) //选中儿子ali[0]替换成新建的a元素节点
list.relaceWith(document.createElement("li")) // 将自己替换成li元素节点
```

修改顺序用`insertBefore` 移动子节点到其他子节点之前。 也可以使用`appendChild`

### 查

查询元素。可以通过绝对位值关键字符查询。也可以通过相对位值查询父节点，相邻节点，子节点查询元素。

- 父元素

  ```javascript
  let li = document.querySelectorAll(".list li")[0]
  li.parentNode //返回li的父元素的节点
  li.parentElement //返回li的父元素
  li.parentNode === li.parentElement //true

  li.offsetParent //定位父级
  //两者没有本质上的区别，都可以返回父元素

  document.documentElement // html标签节点
  document.documentElement.parentElement // null，因为这里已经没有父元素了
  document.documentElement.parentNode // #document 文档
  document.documentElement.parentNode === document // true
  ```

- 同级元素

  nextSibling 和 previousSibling 选择上一个或者下一个同胞元素，如果不存在就是返回 null

  ```html
  <ul>
   <li>
   </li>
   asdasd
   <li>
   </li>
  </ul>
  ```

  ```javascript
  let li = document.querySelector("li")
  li.previousSibling // null 前面一个节点
  li.nextSibling // "asdasd" 后面节点，是文本
  li.nextSibling.nextSibling // 第二个li
  ```

  如果只想要标签元素节点，可以自行封装方法

  其中节点有节点类型。1 是标签，3 是文本，2 是属性

  ```javascript
  function next(ele) {
      if (el.nextSibling.nodeType == 1) return el.nextSibling
      return next(ele.nextSibling)
  }
  //判断nodeType如果是标签就返回，如果不是就继续找下一个
  //pre同理
  ```

相邻元素节点的获取去方式 2:

```javascript
li.nextElementSibing //下一个元素节点
li.previousElementSibing //前一个元素节点
```

- 子元素

  子元素可能是多个，也可能是一个。

  ```html
  <ul>
   <li>
   </li>
   asdasd
   <li>
   </li>
  </ul>
  ```

  ```javascript
  let ul = document.querySelector("ul")
  ul.childElementCount //子元素节点个数 2
  ul.children //    子元素节点集合HTMLCollection 2个li
  ul.childNodes // 子节点集合 NodeList 3个，其中第二个是text
  ul.hasChildNodes // 有没有子节点，有就是true没有就是false也可以用length
  ul.firstChild //第一个子节点
  ul.firstElementChild //第一个元素子节点
  ul.lastChild //第一个子节点
  ul.lastElementChild //第一个元素子节点
  ```

- 属性节点和文本节点

  ```javascript
  let list = document.querySelector(".list")
  let attr = document.createAttribute("asd")
  attr.nodeType // 2
  list.setAttribute(attr)
  let text = document.createTextNode("asd")
  text.nodeType // 3
  ```

- 节点对象的继承关系。

```javascript
let temp = document.createElement("div") // div标签节点
temp.__proto__ //HTMLDivElement
temp.__proto__.__proto__ //HTMLCollection
temp.__proto__.__proto__.__proto__ //Element
temp.__proto__.__proto__.__proto__.__proto__ //Node
temp.__proto__.__proto__.__proto__.__proto__.__proto__ //EventTarget
temp.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ //Object
```

## 宽高属性

### client

读取元素的 content 的宽高 + padding 的宽高 , 不包括滚动条和外边距以及边框

- clientWidth: 元素的 content + padding 宽/高, **不包括滚动条**
- clientHeight
- clientLeft
- clientTop: 返回元素的 content 到边框的距离，也就是边框的厚度

注意: 只读属性，不能进行设置，window 没有这些属性

```javascript
document.documentElement.clientWidth //当前文档区域可见宽度
document.documentElement.clientHeight //当前文档区域可见高度
```

### offset

- offsetWidth: 元素的 content+padding+border
- offsetHeight:
- offsetTop 元素顶部到定位父级的顶部距离，不包括定位父级的边框部分
- offsetLeft 元素左边到定位父级元素左边距离, 不包括定位父级的边框部分

```javascript
window.innerWidth // 窗口的宽, 包括滚动条的宽度
```

如果想获取滚动条的宽度：

```javascript
window.innerWidth - document.documentElement.clientWidth
```

获取 body 页面的实际宽高

```javascript
document.body.offsetWidth
document.body.offsetHeight
```

对于文档元素，只能获取文档的可视区域宽，但是能获取实际高度

```javascript
document.documentElement.offsetWidth //当前文档的可见区域宽度
document.documentElement.offsetHeight //当前文档的实际高度
```

元素到 body 顶部的距离方法： 没有包括父级边框

```javascript
function getOffset(dom) {
    let o = {
        top: 0,
        left: 0,
    }
    while (dom !== document.body) {
        o.left += dom.offsetLeft
        o.top += dom.offsetTop
        dom = dom.offsetParent //定位父级
    }
    return o
}
//这里忽略掉了所有的边框
```

包括父级边框的，元素到 body 顶部的距离

```javascript
function getOffset(dom) {
    let o = {
        top: 0,
        left: 0,
    }
    while (dom !== document.body) {
        o.left += dom.offsetLeft + dom.offsetParent.clientLeft
        o.top += dom.offsetTop + dom.offsetParent.clientTop
        dom = dom.offsetParent //定位父级
    }
    return o
}
//包含边框，两方法可以合并
```

### scroll

**可读写**元素的 content 宽度+padding 宽度，**包含滚动条**

- scrollWidth

- scrollHeight

  子元素超出的时候， 会加上 超出的子元素的宽度/高度。当超出的时候，左 padding 或者上 padding 加上内容宽度或者高度。右 padding 或者下 padding 已经失去意义所以不会结算。

  但是当添加 overflow 属性的时候。会计算全部的 padding + 内容宽/高 + 超出的子级宽/高

获取元素的 y 轴或者 x 轴方向的被滚动挡住的那部分的宽度高度。等价于滚动过的部分

```javascript
document.documentElement.scrollTop
document.documentElement.scrollLeft
```

可以在滚动事件中监听：

```javascript
window.onscroll = function() {
    console.log(document.documentElement.scrollTop)
}
//滚动的时候返回滚动高度
```

获取页面滚动高度存在兼容性问题，需要做兼容性写法

```javascript
document.body.scrollTop || document.documentElement.scrollTop
```

### 鼠标坐标

事件对象 event

```javascript
document.body.onclick = function(e) {
    // e 是 前面onclick事件触发之后整理的那一时刻的信息对象，叫事件对象
    console.log(e.clientX, e.clientY) // 相对于窗口的左上角位值
    console.log(e.pageX, e.pageY) // 相对于文档位置的左上角的位置,包含滚动条隐藏部分
}
```

## cookie

cookie 是浏览器以 sqlite 格式存储的数据 可以由后台直接给对应的\*\*域（domain）\*\*设置

有一部分 cookie 是可以在本域里被 js 读写的

```javascript
document.cookie
```

它的格式为`cookie1=value; cookie2=value; cookie3=value;`

设置过期：时间设置为当前之前即为过期

## styleSheets

通过`document.styleSheets`可以获取页面的 CSSStyleSheet 对象构成的数组

```javascript
const _CSSStyleSheet = document.styleSheets[document.styleSheets.length - 1]
_CSSStyleSheet.insertRule(`ul{display:none}`, 0)
```

## designMod

类似于文本编辑器

```javascript
const iframe = document.createElement("iframe")
document.body.appendChild(iframe)
// iframe.document
const doc = iframe.contentDocument
doc.designMode = "on"
// 全选
// 有一些执行命令首先需要document.designMode = 'on';才可以使用
const img = new Image()
img.src = "111.gif"
doc.body.appendChild(img)
btn.onclick = function() {
    doc.execCommand("selectAll") // 不需要开designMode
    // document.execCommand('copy');  // 不需要开designMode
    // document.execCommand('cut'); // 需要开designMode
    // doc.execCommand('bold'); // 加粗 需要开designMode
    // doc.execCommand('fontSize', true, 7); // 1-7文字大小 font标签 需要开designMode
    // doc.execCommand('foreColor', true, '#963');
    // doc.execCommand('backColor', true, '#9527');
    // doc.execCommand('italic'); // 斜体
    // document.execCommand('delete')
}
```
