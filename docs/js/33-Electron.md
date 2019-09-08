# Electron

一个跨平台桌面应用开发平台

优点：

- 开发周期短
- 跨平台
- 学习成本低
- 维护成本低

缺点：

- 打包后体积大

::: tip 关于框架
本笔记只记录基础，详细的框架用法请左转其官方文档。
:::

## 全局环境

 基于：`node.js`

```bash
npm install -g electron
```

可以选择快速搭建或者脚手架搭建：



## 快速搭建

```bash
#克隆demo
git clone https://github.com/electron/electron-quick-start

#cd electron-quick-start
#安装依赖和运行
npm install && npm start

#不使用脚手架时，打包需要安装依赖electron-packager
npm install -g electron-packager
#打包命令为electron-packager <location of project> <name of project> <platform> <architecture> <electron version> <optional options>
electron-packager . 'HelloWorld' --platform=win32 --arch=x64 --icon=./src/icon.ico --out=./dist --asar --app-version=0.0.1
```





## 脚手架搭建

安装

```bash
npm install -g electron-forge
```

创建

```bash
electron-forge init project
```

运行

```bash
#cd project
npm start
```

编译打包

```bash
npm run make
```

