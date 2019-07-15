# markdown-note
这是我的语言基础知识的学习笔记，包含

- JavaScript（es5/6+）
- Python（3.6.8）

也包含了一些数据库指令，web框架的简单知识

写着写着就变成了一个教程差不多的东西了



## page-build

<https://nanarino.github.io/markdown-note/>



### 学习路线

1. DIV→CSS3
2. JavaScript→Node→Koa2→MongoDB
3. Python→MySQL→django→drf→Redis
4. JavaScript→Vue→React



### 参考

老男孩教育的一些老师的博客园

基础：<https://www.cnblogs.com/Eva-J/p/7277026.html>

django：<https://www.cnblogs.com/liwenzhou/p/9959979.html>

django rest framework：<https://www.cnblogs.com/GGGG-XXXX/p/9564651.html>

设计模式：<https://www.cnblogs.com/alex3714/articles/5760582.html>



## page-cli-setup

在使用npm安装package.json中的依赖后无法启动服务时，请尝试使用yarn安装同名依赖。

由于同级目录下的yarn.lock文件和不一定正确，请使用如下命令：

```bash
yarn add vuepress -D
#无法启动再尝试下面的
yarn add webpack-dev-middleware@3.6.0 -D
```

安装依赖完成后，使用如下命令使用脚手架：

```bash
# serve with hot reload at localhost:8080
npm run docs:dev

# build for production with minification
npm run docs:build
```

For a detailed explanation on how things work, check out [docs for vue-loader](https://github.com/vuejs/vuepress).