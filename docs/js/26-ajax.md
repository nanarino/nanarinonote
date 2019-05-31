# 前后交互：AJAX

## AJAX

通常我们写的网页路径URL写在地址中, 每一个URL对应了一个完整的页面.我们请求的就是这个完整的页面.a标签里面的跳转页也是获取页面信息(html)的一种方式.

html是我们获取的信息的一种, 相对应的也有xml

XML: 是具有结构性的标记语言, 在JavaScript中等价于JSON对象

* ajax(Asynchronous JavaScript and XML)

ajax是: 用**异步**javascript请求JSON数据, 并**动态渲染**到页面的一种行为.

为什么要用异步的方式请求数据呢?

这个和页面的渲染有关系, 这个也是ajax所解决的问题

当我们向后台发送请求, 相对应的后台会给我们返回数据, 在早期的时候返回的数据仅仅只有html字符串.

浏览器解析html字符串的时候会重新生成一个完整的页面. 也就相当于后台要整体整理一个完整的页面,并且也要发送到前端.. 整个过程包括向本地host查询服务器ip地址, 没有就向DNS服务器请求获取服务器ip地址, 然后根据tcp传输协议( 三次握手四次挥手), 发送请求, 客户端接收到请求之后, 整理数据进行发送, 然后也是同样的操作(三,四).

浏览器拿到传输来的数据渲染出来. 这就是一个完整的过程.

那么问题就来了, 如果有一个类似于淘宝一样非常大的页面, 并且这个页面中拥有一个购买人数的数据,每秒变动, 我们在浏览页面的时候每秒定时向后台发送请求, 那么我们可能会遇到的问题是什么.

普通请求的问题:

* 页面局部需求数据的时候会让整体页面刷新, 整体页面有一万个图片等信息, 等于又多了一万次请求...
* 前后台发送的重复的数据过多, 带宽压力过大,这里主要指服务器带宽..
* 服务器还要重新整理一份完整的页面, 服务器cpu允许压力过大, 高并发容易GG

针对这个问题,ajax可以很好解决这些问题.

当页面需要局部获取数据或者局部更新状态的时候, 只需要请求核心变动信息, 后台接受此请求, 将此信息整理打包好返回, 此时前端接受到的数据是一段JSON对象, 通过DOM操作动态的渲染上去, 就可以实现局部刷新并且解决了上述问题.

AJAX的优点:

* 页面局部刷新, 不会整体刷新, 单独的几个请求,请求的是核心数据,减少了请求数的压力
* 带宽无压力
* 服务器不用做太多操作,数据库查一下整理一个JSON返回就ok了

### AJAX 对象的使用

对后台发送ajax请求是需要一个封装好的对象控制的.原生的JavaScript封装了一个方法。XMLHttpRequest构造函数， 他会实例化一个对象， 用这个对象可以进行ajax请求

在IE老版本得浏览器中是ActiveXObject构造函数

```js
let xhr = new XMLHttpRequest() //创建xhr对象，通过对对象得控制
xhr.open("GET", "localhost:8000", true) //设置请求方法和请求得地址
xhr.send(null) //设置请求发送得数据以及发送数据

xhr.onreadstatechange = function(){// 监听后台请求得状态变化
    if(xhr.readState == 4 && xhr.status == 200){ // 整个过程没问题
        console.log(xhr.response) // 打印数据获得data， 在xhr.response中
    }
}
```

* xhr.open方法 ，接受三个参数：

​	method: 请求方式， 常见得有GET请求或者POST请求，还有PUT DELETE OPTIONS CONNECT 这些都不常用，本质上也可以用GET和POST替代

​	url： 发送请求得位置，后台接受地址得地方

​	async: 是否异步，true为异步 ， false为非异步(ajax的存在请使用异步)

* xhr.send：发送请求所携带得数据，在get请求中不填或者填null

  在post请求中填写发送得数据内容，后台会接收到数据。从而做相应得处理

* xhr.onreadstatechange 是xhr对象状态改变得监听函数，当页面向后台发送请求得时候xhr得状态会改变，不同得状态表示不同得效果，只有在正确状态下才表示发送请求成功，后台接受成功并且后台返回成功。这个时候才可以处理数据。

  这里用ajax状态码和http状态码来判断。

AJAX 状态码

​	AJAX得运行是需要经过几个状态的转变的, 比如发送请求前的设置, 发送请求中, 等待服务器响应, 解析响应内容, 解析完成可以使用数据等多个阶段.

​	只有当经过多个阶段服务器响应成功返回并接受解析数据之后才可以对数据进行操作,我们用xhr对象的readyState来判断AJAX的运行状态.

​	在AJAX中, xhr一共有五个状态, 分别对应的是xhr.readyState的值0 1 2 3 4

​	0 - (未初始化的时候) 任何xhr对象新构造出来的时候readyState就为0

```js
const xhr = new XMLHttpRequest()
console.log(xhr.readyState) // 0 
```

​	1 - (设置初始状态, 并没有发送请求) xhr对象调用open方法readyState就变成了1

```js
const xhr = new XMLHttpRequest()
xhr.open("POST","localhost:8000",true)
console.log(xhr.readyState) // 1 
```

​	2 - (发送完成) send方法执行完成的时候, 这个方法是异步方法,所以不能直接活的状态.需要监听事件, 事件名称为readstatechange

```js
const xhr = new XMLHttpRequest()
xhr.open("POST","localhost:8000/?name=1&value=2",true)
xhr.send(null)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState) // 这里会打印出2 3 4 
}
```

 	3 - (等待解析状态的完成)  也是一个异步事件, 此时是在后台去处理

​	4 - (解析处理完成) 后台接受数据并返回成功

```js
const xhr = new XMLHttpRequest()
xhr.open("POST","localhost:8000",true)
xhr.send({name: 1,value: 2})
xhr.onreadystatechange = function(){
    console.log(xhr.readyState) // 这里会打印出2 3 4 
    if(xhr.readyState == 4){
        console.log(xhr.response) // 接受数据的地方
    }
}
```

## http状态码

超文本传输协议的状态码, 客户端向服务端发送请求的时候, 服务端会处理请求,在处理的过程中可能会遇到请求不合法, 请求成功, 服务器错误, 超时, 密码错误, 权限问题, 重定向等各种状态, 但是这些状态都写在当前请求的头部(head中).正常情况是返回200(OK!)

常见的状态码可以帮助我们对当前请求的状态进行判断.状态码是一个三位数, 分成几种

​	1xx: 服务器收到请求, 需要继续执行操作

​	**2xx: 成功, 操作被成功接收并处理**

​	3xx: 重定向, 需要进一步操作以完成请求

​	4xx: 客户端错误, 请求语法错误或者无法完成请求

​	5xx: 服务器错误, 服务器处理过程中出错

由于http的状态码特别的多, 请参考: 

常见的http状态码有:

| 状态码 | 含义                                                         |
| ------ | ------------------------------------------------------------ |
| 200    | 请求已成功，请求所希望的响应头或数据体将随此响应返回。       |
| 304    | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 404    | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面 |
| 408    | (请求超时)  服务器等候请求时发生超时。                       |
| 500    | 服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器的程序码出错时出现。 |

## 请求的方式

HTTP 定义了与服务器交互的不同方法，最基本的方法是 GET 和 POST。 GET 适用于多数请求，而保留 POST 仅用于更新站点。GET操作用于获取信息而非修改信息，一般不应产生副作用

* **GET**

向特定的资源发出请求。 请求包含在url中，以?开始&分隔key=value得形式保存请求信息

* **POST**

向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的创建和/或已有资源的修改。

* HEAD（不常用）

向服务器索要与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以在不必传输整个响应内容的情况下，就可以获取包含在响应消息头中的元信息。

* DELETE（不常用）

请求服务器删除Request-URI所标识的资源。 

* PUT等（不常用）

从客户端向服务器传送的数据取代指定的文档的内容。 

### GET和POST发送数据的方式

* GET请求（获取信息）
  * 新建xhr对象new XMLHttpRequest()
  * 建立请求方式，构造请求得完整链接

  ```js
  const xhr = new XMLHttpRequest()
  var data = {name: "Gin", value:"18cm"}
  function joinReq(obj){
      let str = "?"
      for(let i in obj){
          str += `${i}=${obj[i]}&`
      }
      return str.replace(/.{1}$/,"")
  }
  const url = "localhost:8000" + joinReq(data)
  xhr.open("GET", url, true)
  ```

  * send发送数据，在get请求中数据为null(因为拼接到了url中)

  ```js
  xhr.send(null)
  ```

  * 接受数据，注意如果是异步接受数据得话（open第三个参数为true），需要依靠事件（onreadystatechange）监听数据得接受成功，并且有

  ```js
  const xhr = new XMLHttpRequest()
  var data = {name: "Gin", value:"18cm"}
  function joinReq(obj){
      let str = "?"
      for(let i in obj){
          str += `${i}=${obj[i]}&`
      }
      return str.replace(/.{1}$/,"")
  }
  const url = "localhost:8000" + joinReq(data)
  xhr.open("GET",url,true)//GET 请求
  xhr.send(null)
  xhr.onreadystatechange = function(){// 
      if(xhr.status==200 && xhr.readyState == 4){
          console.log(xhr.response)
      }
  }
  ```

  如果是同步接受数据（open第三个参数为false），直接后续得代码就接受到数据了，但是此时页面也好JS代码也好都会卡住（无法进行任何操作），等待数据返回。

  **注意： 不推荐使用同步代码，因为ajax就是动态请求数据，后台得处理不能做到及时响应。会导致页面卡死，所以要使用异步代码。（除非是登陆付款等重要得信息）**

  ```js
  const xhr = new XMLHttpRequest()
  var data = {name: "Gin", value:"18cm"}
  function joinReq(obj){
      let str = "?"
      for(let i in obj){
          str += `${i}=${obj[i]}&`
      }
      return str.replace(/.{1}$/,"")
  }
  const url = "localhost:8000" + joinReq(data)
  xhr.open("GET", url, false)
  xhr.send(null)
  console.log(xhr.response)//这里不需要监听状态
  ```

  **中文得转码问题：** encodeURI("银时")     decodeURI("%E9%93%B6%E6%97%B6")

* POST请求

  * 新建xhr对象new XMLHttpRequest()， 和get一样
  * 需要设置头信息

  ```js
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")//
  ```

  * 直接写入请求得地址，不需要额外操作

  ```js
  const xhr = new XMLHttpRequest()
  var data = {name: "Gin", value:"18cm"}
  xhr.open("POST","localhost:8000",true)
  ```

  * 在send里面填写你要传输得JSON对象

  ```js
  var data = {name: "Gin", value:"18cm"}
  xhr.send(data)
  ```

  * 接受数据，注意如果是异步接受数据得话（open第三个参数为true），需要依靠事件（onreadystatechange）监听数据得接受成功,此时和get一样。 

## GET缓存

**什么是缓存？**

​	当我们访问服务器得资源得时候，如果每次都是服务器向客户端发送资源。那么服务器肯定会炸。所以需要有一些个别的方式帮服务器分担压力。

​	每次客户端发送请求得时候都需要经过多个服务器。比如cdn服务器，运营商，路由器，这些代理服务器或者客户端本地磁盘保存**资源得副本**。在访问得过程中会向服务器发送请求，如果服务器本地得资源是没有更改得，就会向代理服务器返回304，代理服务器接受指令一层一层传递，向用户发送对应得信息。

​	客户端在接收到服务器得信息之后会首先在本地硬盘查询是否有已缓存过得资源信息。如果有就直接加载。如果没有，就在路由（这里指不同区域架设得局域网，比如岳麓区，长沙）上或者供应商服务器上查询，然后是cdn缓存（）。最后是服务器获取资源。服务器自己本机上返回资源或者返回静态资源得地址。

**缓存存在得问题？**

​	因为缓存是一层一层由近到远返回资源得过程。这样可以减小资源传输所消耗得带宽，但是当服务器得资源等文件发生更新之后，缓存得更新不是主动进行得。只有当我们访问之后，各级缓存才会跟新，这样就会导致很多资源得不到跟新得原因。

​	GET请求: 只能通过url的方式向后台发送数据，数据大小由url长度限制，所以向后台发送得数据很小。不同浏览器不一样，但是都很小。

字符个数： IE(2083最小) chrome(8182) safari(80000+) ...

兼容的话不要超2083 ，超出就是**错误：411**

​	POST请求理论上也是不限制大小的，真正对其大小进行限制的是服务器的处理程序能力。后台可以设置

数据安全： 

​	GET: 请求是以明文形式拼接到url中的，浏览器会记录请求的历史等，所以是不安全的。

​	POST: 请求也是不安全的，发送的数据信息也是通过

## 跨域

浏览器为了保护用户， 保证用户安全，使用**同源策略** 来针对请求做出响应。

同源：

* 协议相同：protocol（ftp file http https 等协议）不同得协议被服务器认为不同源
* 域名相同：domain网站得域名必须一致。
* 端口相同：port默认80端口，但是不同端口也被认为跨域

以上任何不相同都被认为是跨域。

JavaScript只能访问和操作自己域下的资源，不能访问和操作其他域下的资源。跨域问题是针对JS和ajax的，html本身没有跨域问题，比如a标签、script标签、甚至form标签（可以直接跨域发送数据并接收数据）等。这是为了保证用户得安全。

### 跨域的解决方案

* JSONP方式

  * script标签src允许跨域，我们利用script标签得src来访问资源，然后使用callback来承接返回得数据，处理。

  ```js
  let input = document.queryselector("input")
  
  input.oninput = function(){
      let script = document.createElement("script")
   	let url = `https://s.search.bilibili.com/main/suggest?jsoncallback=mycallback&term=${input.value}`
      script.src = url
      document.body.appendChild(script)
      script.onload = () => document.body.removeChild(script)
  }
  
  function mycallback(data){
      console.log(data)
  }
  ```

  其中url是我们需要请求得src，在src中拼接了一个完整得get请求，包括请求得参数请求时发送的数据，以及回调接口。

  将script添加到页面中的时候，script的代码会立即解析执行，执行完成之后删除。其中

  mycallback是本地的函数，这个函数接受参数用于使用参数。

* CORS 后台允许跨域

  * 在后台添加允许跨域："跨域资源共享"（Cross-origin resource sharing）。它允许浏览器向跨源(协议 + 域名 + 端口)服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

* 第三方（也就是代理服务器）





