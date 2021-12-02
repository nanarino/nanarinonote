# Vue

笔记更新时间是2021年  vue3已更新

::: tip 关于框架
本笔记只记录基础用法，详细的框架用法请左转其官方文档。
:::

vue3推荐使用typescript开发，而vue2不适合使用typescript



## 脚手架

vue.js本身是客户端脚本，脚手架提供的是开发服务器。

脚手架可以将**单文件组件**(.vue以及.jsx或.tsx)编译后打包成引入vue.js的**单页应用**。

目前使用脚手架：有基于webpack的老一代，和使用Vite/snowpack的模板两种方式

环境：node > v12

### vue-cli 2

推荐不使用官网示例中的-g安装  而是原地创建

```bash
#安装
npm i vue-cli
#初始化
npx vue init webpack project
```

### vue-cli >3（推荐）

```bash
#安装
npm i @vue/cli
#初始化
npx vue create project
#可视化初始化
npx vue ui
```

生成完毕后这里就没脚手架什么事了（除非还想用可视化），项目也可以移动到任意目录

### Vite

你也可以完全抛弃webpack，使用官方同样推荐的vite构建。

它编译更快，但是编译时不做类型检查，完全依赖开发者编辑器的检查。

```bash
npm init vite@latest my-vue-app -- --template vue
```

### snowpack

snowpack与Vite差别不大，但是中文资料较少，见[Getting Started with Vue (snowpack.dev)](https://www.snowpack.dev/tutorials/vue)



## vue本体

即可以在浏览器直接script标签引入的vue.js



## vue-router

官方提供的路由插件



## vuex

官方推荐的状态集中管理插件



## 其他推荐

ajax工具

- axios（官方推荐）

UI组件库

- [Naïve UI](https://www.naiveui.com/)（vue作者推荐）
- [Element PLUS](https://element-plus.org/)

vscode插件

- vue2 使用vetur
- vue3 使用volar
