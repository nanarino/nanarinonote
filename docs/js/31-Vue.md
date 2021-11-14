# Vue框架

笔记更新时间是2021年  vue3已更新

::: tip 关于框架
本笔记只记录基础用法，详细的框架用法请左转其官方文档。
:::

vue3必须使用typescript开发，而vue2不适合使用typescript



## 脚手架

环境：node > v12

::: warning 包管理
可以使用npm或者yarn安装，但请不要使用cnpm
推荐不用-g安装，但需要在脚手架命令前面加npx（即npx vue create project等）
:::

### vue-cli 2

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

vue-cli利用webpack构建，你也可以完全抛弃webpack，使用vite构建。

它更快，但只能构建vue3。

```bash
npm init vite@latest my-vue-app -- --template vue
```



## 本体

### vscode插件

- vue2 使用vetur
- vue3 使用volar三件套
