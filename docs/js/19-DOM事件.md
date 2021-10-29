# DOM事件

> "IE8是最后一个还在使用自己的事件系统的浏览器。"

在浏览器发生的事情统称为事件, 比如点击事件, 鼠标移动事件, 键盘事件, 点击事件, 请求事件,加载完成事件。

事件对象（`event`）存储了事件触发的各种状态包括事件触发的主体对象,事件类型,事件触发的位置等等。

`event`在现代浏览器中即事件函数的第一个形参。其type属性, 是当前事件的名字。

```js
window.onclick = function(e){
    console.log(e.type)//"click"
}
```

触发事件

```js
event = new Event('click')
window.dispatchEvent(event)//"click"
```



## 事件绑定

绑定点击事件可以用（对象.`on`+事件名）的方式绑定事件，然后挂载上处理函数接受事件对象来进行处理。

- 事件绑定同一个对象只能给同一个事件绑定唯一一个事件处理函数.如果绑定第二个,第一个会被清除掉.因为本质上只是给对象的on事件属性上添加了一个函数。
- 事件绑定函数的this指向当前调用(触发)事件的主体对象。
- 在绑定事件之前, 事件属性的处理函数默认是null。
- 清除事件的方式只需要讲此事件的触发函数改成null。

我们称`on`这种方式绑定的事件是**DOM0级事件**。

- 优点: 兼容所有的浏览器，因为它是最原始的事件，浏览器设计出来的那一天事件都是这么绑定的。

- 缺点: 这种绑定事件的方法，一个对象只能绑定一个事件，不能绑定多个事件，否则会覆盖。

在很久之前事件直接写在标签内，现在的原生语法已不推荐这样做：

```html
<span onclick="foo()">1111</span>
<script>
	function foo(){
        console.log(this)
    }
</script>
```




## 事件监听

不直接写明处理的函数来响应事件，只需要做事件监听`addEventListener`。事件监听在节点对象的原型上。

```js
document.addEventListener("click", function(e){
    console.log(e)
})
```

生成的事件对象和事件绑定生成的对象是同一个。

```js
window.onclick = function(e){window._a = e}
window.addEventListener("click", function(e){window._b = e})
//点击触发一次事件
_a === _b //true
```

- 事件监听接受两个参数( **三个** ) 第一个是需要监听的事件类型, 第二个是事件的触发的回调函数, 第三个是是否事件冒泡.

- 事件类型不需要加on+事件类型,直接事件类型即可.

- 一次可以绑定多个事件, 相互之间不影响.并且触发顺序就是绑定顺序

  ```js
  window.addEventListener("click", function(){console.log(1)})
  window.addEventListener("click", function(){console.log(2)})
  //点击 打印1 2
  ```

- 事件监听处理函数的this指向当前调用(触发)事件的主体对象
- 取消事件监听用对应的方式,`removeEventListener`,传入的参数要和添加的参数**完全一致**

我们称这种事件的监听方式是**DOM2级事件**

```js
function handle(e){
    if(e.target.tagName.toLowerCase()==="li"){
        console.log(1)
    }
}
let li = document.querySelector("li")
li.addEventListener("click", handle)
// 点击li 触发
li.removeEventListener("click", handle)
// 点击就没有反应了
```

特殊的: 匿名事件处理函数是没法取消绑定事件的

```js
li.addEventListener("click", function(){console.log(1)})
// 点击触发
li.removeEventListener("click", function(){console.log(1)})
// 关闭不了 因为此function不是彼function
```

其中`addEventListener`不兼容低版本的IE浏览器

在低版本的IE浏览器中使用: `attachEvent`和`detachEvent` 



## 事件委托

如果有大量dom对象需要绑定事件,并且事件的处理函数是同一个的时候，可以通过监听公共父元素的形式监听事件。

```js
let list = document.querySelector(".list")
let ali = document.querySelectorAll(".list>li")
function fn(e){
    console.log(e.target)// 这是事件源（事件对象的触发主体对象）
}
list.addEventListener("click", fn)
```

在事件处理函数fn中，可以通过判断事件源`e.target`，从而达到事件处理的目的.。

实际运用中还可以结合事件冒泡使用。设计模式中称为代理模式



## 冒泡和捕获

当我们触发一个事件的时候：

```html
<ul class='list'>
    <li>1</li>
</ul>
<script>
	let list = document.querySelector(".list")
    let li = document.querySelector(".list li")
    li.addEventListener("click", function(){console.log("li触发")})
    list.addEventListener("click", function(){console.log("list触发")})
</script>
```

如上代码在点击li的时候，无论绑定事件监听的添加先后顺序，事件的触发都是有先后顺序的。

这里的触发顺序是**默认是由里到外**的。

当这个事件发生的时候：

1. 电脑然后将点击事件告知浏览器window
2. 浏览器window接受到点击事件，它会判断点击的是浏览器的工具按钮还是document中。
3. document点击，是否在html中
4. 是不是在html里面的body中
5. 。。。
6. 点击到父级元素并点击到目标元素

以上是第一部分：**事件捕获（capturing）**，现在还没完。浏览器会从目标元素出发，进行第二轮事件触发

1. 目标元素被点击，事件触发。通知父级元素
2. 父级元素触发点击，通知到父级的父级
3. 。。。
4. 到body
5. 到html
6. 到document
7. 浏览器window接受到触发事件

这是第二部分： **事件冒泡（bubbling）**。至此，一次点击事件完成。

**`addEventListener`方法一共可以接受三个参数：**

 第一个是事件类型，第二个是事件回调函数，第三个是事件在（捕获/冒泡）阶段触发。



## 默认行为

默认行为： 指的是浏览器的默认行为。

有时候我们需要阻止默认行为，使用`e.preventDefault()`，这句不兼容，IE8以下的浏览器会不生效。在IE678的浏览器阻止默认行为的方法：`e.returnValue = false`

### 阻止默认行为

阻止右键菜单事件：

```js
document.oncontextmenu = function(e){// 打开右键菜单的行为
    console.log("右键点击触发")
    e.preventDefault()// 这句阻止了打开右键菜单的行为。
    // e.returnValue = false //IE678的浏览器的操作
}
```

当我们使用DOM0级事件的时候，可以使用`return false`来实现阻止默认行为，并且结束后续代码的执行。

注意：

- `onmousedown`点击事件阻止不了鼠标右键显示浏览器菜单， `onmousedown`能触发右键的事件，但是右键的事件是`oncontextmenu`
- `onmousemove`鼠标移动触发后的默认会使得`onmousedown` `onmouseup`在很短一段时间内无法触发。

### 阻止事件冒泡

```js
if(e.stopPropagation){
    e.stopPropagation()
}else{
    e.cancelBubbse = true
}
```



## 事件对象

不管是DOM0级事件还是DOM2级事件都会传入一个`event`对象.

这个对象包含了事件的相关信息. 包括触发事件的元素,事件类型等.

所有浏览器都有事件对象但是支持方式不同,存在兼容性问题.

```js
window.event//低版本ie
```

| 属性名                   | 值       | 含义                                             |
| ------------------------ | -------- | ------------------------------------------------ |
| bubbles                  | 布尔型   | true表示冒泡，false表示不冒泡                    |
| cancelable               | 布尔型   | 是否可以取消事件的默认行为                       |
| currentTarget            | 元素对象 | 其事件处理程序当前正在处理事件的那个元素         |
| eventPhase               | 数值     | 1表示捕获阶段；2表示“目标阶段”；3：冒泡阶段      |
| preventDefault           | 函数     | 执行，就取消事件默认行为，当cancelable为true才行 |
| stopImmediatePropagation | 函数     | 取消后续捕获或冒泡。阻止任何事件处理程序         |
| stopPropagation          | 函数     | 取消后续捕获或冒泡。                             |
| taget                    | 元素对象 | 事件的目标                                       |
| trusted                  | 布尔型   | 是否是浏览器生成的事件                           |
| type                     | 字符串   | 被触发的事件的类型                               |

在事件回调中，this等同于currentTarget，而target只是包含事件的实际目标。如果事件处理函数正好在点击事件触发的对象中，这几个东西是同一个。

在IE事件对象中如果是DOM0级绑定的事件。在window对象下可以访问这个属性

```js
let btn = document.querySelelctor(".btn")
btn.onclick = function(){
    let event = window.event
    console.log(event.type)
}
```

如果是`attachEvent`添加的，会有event参数传入函数。和`addeventLlistener`一致

```js
let btn = document.querySelelctor(".btn")
btn.addEventListener("click", function(e){
    console.log(e.type)
})
```

额外或者不同的属性如下： 

| 属性名       | 值     | 含义                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| cancelBubble | 布尔   | 默认false，可否取消事件冒泡，等同于stopPropagation()         |
| returnValue  | 布尔   | 默认为true，设置为false就是取消事件默认行为，等同于preventDefault() |
| srcElement   | 元素   | 事件目标，等同于target                                       |
| type         | 字符串 | 被触发事件的类型                                             |

### 鼠标事件

双击会触发两次单击 单击也会继而触发按下抬起

即使是鼠标事件 它的e.shiftKey和e.ctrlKey也能判断热键

表单元素的默认行为：会自动捕获按钮的点击来触发onsubmit

### 键盘事件

如果被绑定到具体标签上，则需要聚焦到当前目标，没有聚焦的不能触发，一般写到input标签中或者document中。input标签的键盘事件推荐使用`oninput`

keypress在ie和edge浏览器中只有回车空格触发，且其他浏览器中(`alt` `ctrl` `shift`等不会输入的)是不会触发`keypress`的。

### UI事件

当页面加载完成的`load`事件，比如window，img，script的加载都会触发`load`事件

```js
window.onload = function(){
    console.log("页面加载成功")
}
```

调整页面大小滚动页面 （`resize`, `scroll`）

对于这种高频触发的事件经常需要**节流** / **防抖**。

节流：给事件设置只能触发一次，每隔一段时间重置使用次数。    
防抖：给事件设置冷却时间，冷却时间未到时触发会重置冷却时间。

### 滚轮事件

`onscroll` 滚动事件是监听浏览器的滚动条，只要滚动条的滑块发生变化，就会触发。（火狐需要另外处理）

```js
window.onscroll = function(e){//监听滚动位值发生变化
    console.log("scrolling")
    e.preventDefault() //这里是无法阻止滚动事件的
}
```

```js
window.onmousewheel = function(e){//监听鼠标中键滑轮滚动，不监听滚动条拖拽
    console.log("scrolling~")
    e.preventDefault() //这里阻止了默认的滚动事件
    //火狐用DOMMouseScroll也只支持火狐。并且只支持DOM2级事件。
}
```

### drag事件

拖拉（drag）指的是，用户在某个对象上按下鼠标键不放，拖动它到另一个位置，然后释放鼠标键，将该对象放在那里。

拖拉的对象有好几种，包括元素节点、图片、链接、选中的文字等等。在网页中，除了元素节点默认不可以拖拉，其他（图片、链接、选中的文字）都是可以直接拖拉的。为了让元素节点可拖拉，可以将该节点的`draggable`属性设为`true`。

```html
<div draggable="true">
  此区域可拖拉
</div>
```

当元素节点或选中的文本被拖拉时，就会持续触发拖拉事件，包括以下一些事件。（火狐需要另外处理）

- `drag`：拖拉过程中，在被拖拉的节点上持续触发（相隔几百毫秒）。
- `dragstart`：用户开始拖拉时，在被拖拉的节点上触发，该事件的`target`属性是被拖拉的节点。通常应该在这个事件的监听函数中，指定拖拉的数据。
- `dragend`：拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发，该事件的`target`属性是被拖拉的节点。它与`dragstart`事件，在同一个节点上触发。不管拖拉是否跨窗口，或者中途被取消，`dragend`事件总是会触发的。
- `dragenter`：拖拉进入当前节点时，在当前节点上触发一次，该事件的`target`属性是当前节点。通常应该在这个事件的监听函数中，指定是否允许在当前节点放下（drop）拖拉的数据。如果当前节点没有该事件的监听函数，或者监听函数不执行任何操作，就意味着不允许在当前节点放下数据。在视觉上显示拖拉进入当前节点，也是在这个事件的监听函数中设置。
- `dragover`：拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒），该事件的`target`属性是当前节点。该事件与`dragenter`事件的区别是，`dragenter`事件在进入该节点时触发，然后只要没有离开这个节点，`dragover`事件会持续触发。
- `dragleave`：拖拉操作离开当前节点范围时，在当前节点上触发，该事件的`target`属性是当前节点。如果要在视觉上显示拖拉离开操作当前节点，就在这个事件的监听函数中设置。
- `drop`：被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发。注意，如果当前节点不允许`drop`，即使在该节点上方松开鼠标键，也不会触发该事件。如果用户按下 ESC 键，取消这个操作，也不会触发该事件。该事件的监听函数负责取出拖拉数据，并进行相关处理。
