# ajax网络请求 

## 原生浏览器ajax

ajax（Asynchronous JavaScript and XML）：

是用**异步**javascript请求JSON数据并**动态渲染**到页面的一种行为。

XML

是具有结构性的标记语言，用途于JSON字符串相同，其与JSON格式的优劣这里不讨论。

使用ajax的优点：

* 相比于默认的form标签的onsubmit提交，ajax不会刷新页面。
* 单独的几个请求,请求的是核心数据,减少了请求数的压力

ajax的请求类型和form.enctype一样需要注意

除了`application/x-www-form-urlencoded`

`multipart/form-data`外 ajax可以使用`application/json`



### 创建ajax对象

原生的JavaScript封装了一个方法。XMLHttpRequest构造函数， 

它会实例化一个对象， 用这个对象可以进行ajax请求。

在IE老版本的浏览器中是ActiveXObject构造函数。

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

  * ​	method: 请求方式， 常见的有GET请求或者POST请求
  * ​	url： 发送请求的后台地址
  * ​	async: 是否异步，true为异步 ， false为非异步(ajax的存在请使用异步)

* xhr.send：发送请求所携带得数据，在get请求中不填或者填null

  在post请求中填写发送得数据内容，后台会接收到数据。从而做相应得处理

* xhr.onreadstatechange：监听xhr对象状态改变的函数

  这里用ajax状态码和http状态码来判断。



### ajax状态码

AJAX得运行是需要经过几个状态的转变的, 比如发送请求前的设置, 发送请求中, 等待服务器响应, 解析响应内容, 解析完成可以使用数据等多个阶段.

只有当经过多个阶段服务器响应成功返回并接受解析数据之后才可以对数据进行操作,我们用xhr对象的readyState来判断AJAX的运行状态.

在AJAX中, xhr一共有五个状态, 分别对应的是xhr.readyState的值0 1 2 3 4

0 - (未初始化的时候) 任何xhr对象新构造出来的时候readyState就为0

```js
const xhr = new XMLHttpRequest()
console.log(xhr.readyState) // 0 
```

1 - (设置初始状态, 并没有发送请求) xhr对象调用open方法readyState就变成了1

```js
const xhr = new XMLHttpRequest()
xhr.open("POST","localhost:8000",true)
console.log(xhr.readyState) // 1 
```

2 - (发送完成) send方法执行完成的时候, 这个方法是异步方法,所以不能直接活的状态.需要监听事件, 事件名称为readstatechange

```js
const xhr = new XMLHttpRequest()
xhr.open("POST","localhost:8000/?name=1&value=2",true)
xhr.send(null)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState) // 这里会打印出2 3 4 
}
```

3 - (等待解析状态的完成)  也是一个异步事件, 此时是在后台去处理

4 - (解析处理完成) 后台接受数据并返回成功

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



### http状态码

常见的状态码可以帮助我们对当前请求的状态进行判断。常见的http状态码有:

| 状态码 | 含义                                                         |
| ------ | ------------------------------------------------------------ |
| 200    | 请求已成功，请求所希望的响应头或数据体将随此响应返回。       |
| 304    | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 404    | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面 |
| 408    | (请求超时)  服务器等候请求时发生超时。                       |
| 500    | 服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器的程序码出错时出现。 |



### 请求方式

HTTP 定义了与服务器交互的不同方法，最基本的方法是 GET 和 POST。 GET 适用于多数请求，而保留 POST 仅用于更新站点。GET操作用于获取信息而非修改信息，一般不应产生副作用。

参照RESTful规范：

- **GET** - 用于获取数据。
- **PUT** - 用于更新或添加数据。
- **DELETE** - 用于删除数据。
- **POST** - 用于添加数据。

GET和POST发送数据的方式：

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



### GET缓存

**什么是缓存？**

​	每次客户端发送请求得时候都需要经过多个服务器。比如cdn服务器，运营商，路由器，这些代理服务器或者客户端本地磁盘保存**资源得副本**。在访问得过程中会向服务器发送请求，如果服务器本地得资源是没有更改得，就会向代理服务器返回304，代理服务器接受指令一层一层传递，向用户发送对应得信息。

​	客户端在接收到服务器得信息之后会首先在本地硬盘查询是否有已缓存过得资源信息。如果有就直接加载。如果没有，就在路由（这里指不同区域架设得局域网，比如岳麓区，长沙）上或者供应商服务器上查询，然后是cdn缓存。最后是服务器获取资源。服务器自己本机上返回资源或者返回静态资源得地址。

**缓存存在的问题：**

​	因为缓存是一层一层由近到远返回资源得过程。这样可以减小资源传输所消耗得带宽，但是当服务器得资源等文件发生更新之后，缓存得更新不是主动进行得。只有当我们访问之后，各级缓存才会跟新，这样就会导致很多资源得不到跟新的原因。



## CORS跨域问题

浏览器为了保护用户， 保证用户安全，使用**同源策略** 来针对请求做出响应。

同源：

* 协议相同：protocol（ftp file http https 等协议）不同得协议被服务器认为不同源
* 域名相同：domain网站得域名必须一致。
* 端口相同：port默认80（443）端口，但是不同端口也被认为跨域

以上任何不相同都被认为是跨域。

JavaScript只能访问和操作自己域下的资源，不能访问和操作其他域下的资源。跨域问题是针对JS和ajax的，html本身没有跨域问题，比如a标签、script标签、甚至form标签（可以直接跨域发送数据并接收数据）等。这是为了保证用户得安全。

跨域的解决方案：

* JSONP方式

  * script标签src允许跨域，我们利用script标签得src来访问资源，然后使用callback来承接返回得数据，处理。

  ```js
  //这里以哔哩哔哩的内容搜索框为例
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
  * 一般在前后端分离的开发过程中会让使用CORS，上线后会关闭CORS。

* 第三方（也就是代理服务器，在前端模块化开发时，脚手架中会使用到）



## 封装的ajax方法

### jQuery

```js
$.ajax({
    type: "POST",
    url: location.pathname,
    data: $("form").serialize(),
    async: false,
    error: function (err) {
        alert('error',err)
    },
    success: function (data){
        alert('success',data)
    }
})
```

### fetch

fetch是es6基于Promise的ajax请求的二度封装

```js
fetch(...).then(fun2)
          .then(fun3) //各依赖有序执行
          .....
          .catch(fun)
```

从上边的代码可以看出，fetch用起来像`jQuery.ajax()`一样简单，虽然还是有Callback的影子，但是看起来舒服多了

### axios

[Axios](https://www.axios-http.cn/)是基于async和await对ajax的第三方封装   需要下载引入

```js
try{
	console.log(await axios.post(url, data, {headers, params}))
} catch (err) {
    console.log(`请求失败：${err}`)
}
```





