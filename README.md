# markdown-note: docs

本仓库的docs目录是我的语言基础知识的学习笔记，包含

- JavaScript（es6+）
- Python（3.9+）



## page-build

本仓库的docs目录中的笔记内容被部署在了仓库的页面中：

<https://nanarino.github.io/markdown-note/>（很久才打包一次）

打包部署的脚本在根目录的`deploy.sh`。

如果克隆后本地运行 先修改配置文件(`/docs/.vuepress/config.js`)

将`base: '/markdown-note/'`改为`base: '/'` 

```js
module.exports = {
    base: '/markdown-note/',
```

然后再按照下一段的操作打包运行👇



## page-cli-setup

本文档采用vuepress展示。它本质是一个vue2项目。

其安装依赖和本地运行的命令如下：

```bash
npm install
```


安装依赖完成后使用如下命令使用脚手架，（不必，已写好`.cmd`脚本）：

```bash
# serve with hot reload at localhost:8080
npm run docs:dev

# build for production with minification
npm run docs:build
```



## 笔记参考

[Eva-J](https://www.cnblogs.com/Eva-J/p/7277026.html)

[李文周](https://www.cnblogs.com/liwenzhou/p/9959979.html)

[GGGG-XXXX](https://www.cnblogs.com/GGGG-XXXX/p/9564651.html)

[Alex](https://www.cnblogs.com/alex3714/articles/5760582.html)

