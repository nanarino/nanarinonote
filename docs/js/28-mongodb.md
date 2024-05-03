# mongodb 数据库

是一种非关系型数据库，内置了一个简单的 JavaScript 的交互式环境

::: tip 关于数据库
本笔记只记录基础命令，详细的数据库用法请左转其官方文档。
:::

## 命令行操作

mongodb 是非关系型数据库中最像关系型数据库的数据库，有很多命令也和 sql 有相似之处

### 开启服务

```bash
#cmd窗口中
mongod --dbpath 路径
```

默认端口号 27017

### 进入服务端

另起一个 cmd 窗口

```powershell
mongo
```

显示所有数据库

```powershell
>show dbs
```

删除数据库

```powershell
>db.dropDatabase(数据库名字)
```

进入数据库(不存在则新建)

```powershell
>use 数据库名
```

显示当前数据库中所有集合

```powershell
>show collections
```

新建集合

```powershell
>db.createCollection("集合名")
```

删除集合

```powershell
>db.集合名.drop()
```

查数据

```powershell
>db.集合名.find({键值对})
```

查数据并格式化输出

```powershell
>db.集合名.find({键值对}).pretty()
```

增数据（直接向一个不存在的集合中插入数据也能创建集合）

```powershell
>db.集合名.insert({键值对})
```

增/改数据

```powershell
>db.集合名.update({键值对},{$add/$set:{键值对}}{是否全局})
```

删数据

```powershell
>db.集合名.remove(obj)

>db.集合名.deleteOne(obj)

>db.集合名.deleteMany(obj)
```

## 使用 mongoose

使用 node.js 上的第三方模块 mongoose 连接 MongoDB 数据库

```js
const mongoose = require("mongoose");
const db = mongoose.createConnection("mongodb://localhost:27017/project", {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

db.on("error", () => {
  console.log("数据库连接失败");
});
db.on("open", () => {
  console.log("project 数据库连接成功");
});

module.exports = {
  db,
  Schema,
};
```
