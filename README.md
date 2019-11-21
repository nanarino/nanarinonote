# markdown-note: docs

本仓库的docs目录是我的语言基础知识的学习笔记，包含

- JavaScript（es5/6+）
- Python（3.6.8）

也包含了一些数据库指令，web框架的简单知识

写着写着就变成了一个教程差不多的东西了。



## page-build

本仓库的docs目录中的笔记内容被部署在了仓库的页面中方便访问：

<https://nanarino.github.io/markdown-note/>

部署的脚本在根目录的`deploy.sh`。



## 学习路线

1. 〖DIV〗→〖CSS3〗→〖less〗/〖sass〗/〖stylus〗
2. 【JavaScript】→【Node】→【Koa2】→【MongoDB】
3. 【Python】→【MySQL】→【django】→【drf】→〖Redis〗
4. 【JavaScript】→【Vue】→〖React〗→〖Nuxt〗

本笔记只记录【基础语法知识】，〖详细的框架用法〗请左转其官方文档。



## page-cli-setup

本文档采用vuepress展示，版本为"vuepress": "^1.2.0"。

其安装依赖和本地运行的命令如下：

```bash
npm install
```

若在使用npm安装依赖后无法启动服务，请尝试使用yarn安装依赖。

由于yarn.lock文件不一定正确，届时请使用如下命令：

```bash
yarn add vuepress -D
```

安装依赖完成后使用如下命令使用脚手架，（不必，已写好.cmd脚本）：

```bash
# serve with hot reload at localhost:8080
npm run docs:dev

# build for production with minification
npm run docs:build
```

For a detailed explanation on how things work, check out [docs for vuepress](https://github.com/vuejs/vuepress).



## 笔记参考

老男孩教育的一些老师的博客园

[Python基础](https://www.cnblogs.com/Eva-J/p/7277026.html)

[django：Python的web框架](https://www.cnblogs.com/liwenzhou/p/9959979.html)

[django rest framework：Python编写API接口](https://www.cnblogs.com/GGGG-XXXX/p/9564651.html)

[Python中的设计模式](https://www.cnblogs.com/alex3714/articles/5760582.html)