# nanarinonote

基于vuepress1构建的零基础版学习笔记，包含

- JavaScript
- Python



## page-build

仓库的页面（很久才打包一次，建议拉到本地打包）

<https://nanarino.github.io/nanarinonote/>

打包部署的脚本    `/deploy.sh`

配置文件    `/docs/.vuepress/config.js`

本地运行可以将`base: '/nanarinonote/'`改为`base: '/'` 

```js
module.exports = {
    base: '/nanarinonote/',
```



## page-cli-setup

安装依赖

```bash
npm install
```


脚手架命令（或运行`docs_dev.cmd` `docs_build.cmd`）：

```bash
# serve with hot reload at localhost:8080
npm run docs:dev

# build for production with minification
npm run docs:build
```



## 参考

- [Eva-J](https://www.cnblogs.com/Eva-J/p/7277026.html)
- [李文周](https://www.cnblogs.com/liwenzhou/p/9959979.html)
- [GGGG-XXXX](https://www.cnblogs.com/GGGG-XXXX/p/9564651.html)
- [Alex](https://www.cnblogs.com/alex3714/articles/5760582.html)

