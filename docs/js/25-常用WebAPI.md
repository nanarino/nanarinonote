# 常用WebAPI



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



## 编码方式

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



## 文件有关对象

这里粗略介绍
- `Blob`
- `File`
- `FileList`
- `FileReader`

在之前的DOM事件中有提到进行拖拽的元素可以通过以下方法传递数据

```js
e.dataTransfer.setData('key', 'value')
e.dataTransfer.getData('key')
```

对拖拽的文件对象（客户端的本地文件）的获取：

```js
//选中的多个文件组成的列表 属于fileList类数组
e.dataTransfer.files
//单个
e.dataTransfer.files.item(0)
//或者
e.dataTransfer.files[0]
```

拖拽的文件对象可以被`FileReader()`的实例对象以二进制读取到其`result`中

将被拖拽的文件显示在页面中的示例：

```js
div.ondrop = function (e) {
  // 1.file对象
  console.log(e.dataTransfer.files);
  const file = e.dataTransfer.files.item(0);
  // 创建文件读取对象
  const f = new FileReader();
  // 读取图片
  f.readAsDataURL(file);
  f.onload = function(e) {
    const img = new Image();
    img.src = this.result;
    document.body.appendChild(img);
  };
  e.preventDefault();
  e.stopPropagation();
  return false;
}
```

类似的还有input文件上传也可以用`event.files`获取到`fileList`。

文件对象`file`类是继承的`blob`类，故而以上代码可以使用h5的`blob`对象读取：

```js
box.ondrop = function(e){
    const dt = e.dataTransfer;
    const oFile = dt.files.item(0);
    //筛除非图片文件
    if(/image/.test(oFile.type)){
        const blob = new Blob([oFile], {type: oFile.type});
        const url = window.URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        img.width = 200;
        img.onload = function(){
            box.appendChild( img )
        }
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
}
```

通过`blob`对象二度获取文本或者文件的base64形式：

```js
function base64(data, type = "text/plain") {
    const blob = new Blob([data],{type})
    const reader = new FileReader();
    reader.onload = function(e){
        //事实上e.target.result就是一个base64编码的二进制的URL
        console.log(e.target.result.replace(`data:${type};base64,`, ''))
    }
    reader.readAsDataURL(blob);
}
```





## URLSearchParams

`URLSearchParams` 键值对象。拥有一些实用的方法来处理 URL 的查询字符串。nodejs中也支持。

解析当前页面的查询参数`location.search`

```js
new URLSearchParams(location.search).get('pageSize')
```

URLSearchParams是个允许重复的字典对象，其他常用方法：

- get(key)    获取第一个key的value
- set(key,value)    设置key的唯一value
- getAll(key)    获取key所有的value
- append(key,value)    追加设置key的value，逗号隔开
- toString    序列化为查询参数
- keys/values    键/值迭代器

值得注意的是 value设置后会自动`encodeURIComponent`

```js
const data = new URLSearchParams()
data.set('from', "auto")
data.set('to', 'auto')
console.log(data.toString())
//from=auto&to=auto
await axios.post(url, data.toString(), ...)
```



## FormData

`FormData`键值对象。方法与URLSearchParams类似。  
添加的键值可以是JavaScript原始数据类型，也可以是`blob`对象

```js
const formData = new FormData();
formData.append("username", "KOGAWA")
formData.append("password", 123456)
```

需要注意的是：

用`FormData`对象提交需要设置请求头`'Content-Type':'multipart/form-data'`



## Headers

用来定义请求头键值对象。方法与URLSearchParams类似。

```js
new Headers({'Content-Type': 'application/json'})
```

它与fetch方法伴生出现，可以直接在原生的fetch中使用。fetch方法的请求和响应对象本身的headers属性就是一个Headers实例对象。见fetch。



## H5其他事件

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



## designMod

类似于文本编辑器

```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
// iframe.document
const doc = iframe.contentDocument;
doc.designMode = 'on';
// 全选
// 有一些执行命令首先需要document.designMode = 'on';才可以使用
const img = new Image();
img.src = '111.gif';
doc.body.appendChild(img);
btn.onclick = function () {
    doc.execCommand('selectAll'); // 不需要开designMode
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

