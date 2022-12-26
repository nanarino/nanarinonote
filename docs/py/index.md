# HelloWorld

## 常识

熟悉Windows操作系统的基本使用：

- 压缩/解压文件
- 安装/卸载软件
- 添加环境变量/服务
- 修改后缀/注册表

熟悉搜索引擎的使用：

- 谷歌
- 必应
- 哔哩哔哩

## 安装环境

服务器上推荐安装兼容最好的python3.6.8。    
学习时推荐激进地给PC安装python最高版本。

勾选好`环境变量`和`pip`    
以默认位置一键安装即可    
默认位置是`C:\Users\Administrator\AppData\Local\Programs\Python\Python36`

这里以Windows为例，在cmd中输入`python`或者`py`，按下回车：

```bash
Microsoft Windows [版本 10.0.17763.107]
(c) 2018 Microsoft Corporation。保留所有权利。

C:\Users\Administrator>py
Python 3.8.2 (tags/v3.8.2:7b3ab59, Feb 25 2020, 23:03:10) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

那么已经成功了一半

::: tip >>> print("Hello World!")
Hello World!
:::

输入如上字符 回车

---

需要在CentOS下安装Python3的可以参考[这里](https://www.cnblogs.com/pyyu/p/7402145.html),

也可以借助`宝塔Linux面板`的`Python项目管理器`一键安装。

以上就是python shell交互（行首有`>>>`），可以使用`exit()`或者`quit()`来退出    
对于`.py`文件右键的`Edit with IDLE`来运行，也可以在cmd中`py 完整路径文件名`

## 常见问题

- windows下安装后:
  
  ::: danger C:\Users\Administrator>python -V
  'python' 不是内部或外部命令，也不是可运行的程序或批处理文件。
  :::
  
  可能是在使用安装包安装的时候未勾选add to path，可以手动添加环境变量，但你也可以使用`py`命令
  
  ::: danger C:\Users\Administrator>pip -V
  'pip' 不是内部或外部命令，也不是可运行的程序或批处理文件。
  :::
  
  可能是没设置好环境变量，很可能是安装时权限不够。可以提权或使用专业版系统重新安装
  
  ::: warning C:\Users\Administrator>pip -V
  You are using pip version 10.0.3, however version 19.1.1 is available.    
  You should consider upgrading via the 'python -m pip install --upgrade pip' command.
  :::
  
  按照上述命令进行升级pip

- pip下载非标准库/第三方模块速度过慢    
  可以使用清华大学镜像
  
  ```bash
  pip install 第三方模块名字 -i https://pypi.tuna.tsinghua.edu.cn/simple
  ```

---

- **多版本**问题
  
  当Windows系统里只安装了一个版本的python时    
  cmd里直接输入指令`py`打开`C:\Windows\py.exe`和输入`python`是一致的    
  而此时`pip`其实是等效于`py -m pip`和`python -m pip`    
  而如果将python.exe文件名改成其他的如**python37.exe**：    
  `py`和`pip`指令都将失效，也无法卸载了。
  
  ```bash
  C:\Users\Administrator>py
  Can't find a default Python.
  
  C:\Users\Administrator>pip list
  Fatal error in launcher: Unable to create process using
  ```
  
  此时`python37`和`python37 -m pip`代替即可上面两个已失效命令，    
  便可再安装其他版本python即可，python和pip为最新安装的版本。
  
  如果需要频繁切换python版本 应该一开始就用 Anaconda 来安装和管理python
