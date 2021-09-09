# Vue框架

写这个的时候是2019年

## 前端框架Vue

掌握了css，js基础知识后就可以开始学习框架了。

vue是其中最容易上手、对中文支持最好的一个，

本页面就是采用vue生态中的`vuepress`生成。

::: tip 关于框架
本笔记只记录基础，详细的框架用法请左转其官方文档。
:::

除了看[官方文档](https://cn.vuejs.org/)外，这里推荐群里的aq同学的[vue笔记](https://aqingcyan.github.io/vue.js-learn/)



## vue-cli脚手架

环境：node > v8.9

::: warning 包管理
可以使用npm或者yarn安装，但请不要使用cnpm
:::

这里用npm为例，若要加速请修改源：

```bash
npm config set registry https://registry.npm.taobao.org --global
```

如果没安装webpack：

```bash
npm i webpack webpack-cli -g
```

### vue-cli 2.x

```bash
#安装
npm i vue-cli -g
#初始化
vue init webpack project
```

### vue-cli 3.x

```bash
#安装
npm i -g @vue/cli
#初始化
vue create project
#可视化初始化
vue ui
```

### 共存

如果已经安装cli2.x，想安装cli3.x同时让cli2.x不被覆盖，需要安装桥接：

```bash
#安装桥接
npm i -g @vue/cli-init
#cli2.x的初始化命令依然是：
vue init webpack project
```

桥接安装完毕后，再安装3.x

