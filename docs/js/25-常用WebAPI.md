# 常用 WebAPI

类似于`window.setTimeout`等 WebAPI，在其他 JavaScript 运行时早已兼容

`URLSearchParams`等 WebAPI 也在慢慢兼容，而不需要`qs`包

## 文件有关对象

- `Blob`
- `File`
- `FileList`
- `FileReader`

在之前的 DOM 事件中有提到进行拖拽的元素可以通过以下方法传递数据

```js
e.dataTransfer.setData("key", "value");
e.dataTransfer.getData("key");
```

对拖拽的文件对象（客户端的本地文件）的获取：

```js
//选中的多个文件组成的列表 属于fileList类数组
e.dataTransfer.files;
//单个
e.dataTransfer.files.item(0);
//或者
e.dataTransfer.files[0];
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
  f.onload = function (e) {
    const img = new Image();
    img.src = this.result;
    document.body.appendChild(img);
  };
  e.preventDefault();
  e.stopPropagation();
  return false;
};
```

类似的还有 input 文件上传也可以用`event.files`获取到`FileList`对象。

文件对象`file`类是继承的`blob`类，故而以上代码可以使用 h5 的`blob`对象读取：

```js
box.ondrop = function (e) {
  const dt = e.dataTransfer;
  const oFile = dt.files.item(0);
  //筛除非图片文件
  if (/image/.test(oFile.type)) {
    const blob = new Blob([oFile], { type: oFile.type });
    const url = window.URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;
    img.width = 200;
    img.onload = function () {
      box.appendChild(img);
    };
  }
  e.preventDefault();
  e.stopPropagation();
  return false;
};
```

文件对象的 type 只是根据文件名的猜测，应该以内容为准。

通过`blob`对象二度获取文本或者文件的 base64 形式：

```js
function base64(data, type = "text/plain") {
  const blob = new Blob([data], { type });
  const reader = new FileReader();
  reader.onload = function (e) {
    //事实上e.target.result就是一个base64编码的二进制的URL
    console.log(e.target.result.replace(`data:${type};base64,`, ""));
  };
  reader.readAsDataURL(blob);
}
```

`blob`对象的`slice`方法可以分割子 Blob 用于分片上传/下载/断点续传

## TypedArray

`TypedArray`或`DataView`是`ArrayBuffer`字节数组类型的视图形式，存储方式依然是`ArrayBuffer`

- Int8Array：8 位有符号整数，长度 1 个字节。（-128~127）
- Uint8Array：8 位无符号整数，长度 1 个字节。（0~255）
- Int16Array：16 位有符号整数，长度 2 个字节。（-32768,32767）
- Uint16Array：16 位无符号整数，长度 2 个字节。（0~65535）
- Int32Array：32 位有符号整数，长度 4 个字节。（-2147483648~2147483647）
- Uint32Array：32 位无符号整数，长度 4 个字节。（0~4294967295）
- Float32Array：32 位浮点数，长度 4 个字节。
- Float64Array：64 位浮点数，长度 8 个字节。

其中 Uint8Array 是格式化的 PNG 所用的类型，在 canvas 中使用较多。

FileReader 实例的 readAsArrayBuffer 方法可以将 Blob 转为 ArrayBuffer

## URLSearchParams

`URLSearchParams` 键值对象。拥有一些实用的方法来处理 URL 的查询字符串。nodejs 中也支持。

解析当前页面的查询参数`location.search`

```js
new URLSearchParams(location.search).get("pageSize");
```

URLSearchParams 是个允许重复的字典对象，其他常用方法：

- get(key) 获取第一个 key 的 value
- set(key,value) 设置 key 的唯一 value
- getAll(key) 获取 key 所有的 value
- append(key,value) 追加设置 key 的 value，逗号隔开
- toString 序列化为查询参数
- keys/values 键/值迭代器

值得注意的是 value 设置后会自动`encodeURIComponent`

```js
const data = new URLSearchParams()
data.set('from', "auto")
data.set('to', 'auto')
console.log(data.toString())
//from=auto&to=auto
await axios.post(url, data.toString(), ...)
```

## FormData

`FormData`键值对象。方法与 URLSearchParams 类似。  
添加的键值可以是 JavaScript 原始数据类型，也可以是`blob`对象

```js
const formData = new FormData();
formData.append("username", "KOGAWA");
formData.append("password", 123456);
```

需要注意的是：

用`FormData`对象提交需要设置请求头`'Content-Type':'multipart/form-data'`

## Headers

用来定义请求头键值对象。方法与 URLSearchParams 类似。

```js
new Headers({ "Content-Type": "application/json" });
```

它与 fetch 方法伴生出现，可以直接在原生的 fetch 中使用。fetch 方法的请求和响应对象本身的 headers 属性就是一个 Headers 实例对象。见 fetch。
