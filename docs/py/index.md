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

服务器上推荐安装兼容最好的python3.9。    
学习时推荐激进地给PC安装python最高版本。

勾选好`环境变量`和`pip`(不勾选也可以，强制自己使用虚拟环境吧)
以默认位置一键安装即可    
默认位置是`C:\Users\Administrator\AppData\Local\Programs\Python\Python39`

这里以Windows为例，在cmd中输入`python`或者`py`，按下回车：

```bash
Microsoft Windows [版本 10.0.17763.107]
(c) 2018 Microsoft Corporation。保留所有权利。

C:\Users\Administrator>py
Python 3.9.5 (tags/v3.9.5:0a7dcbd, May  3 2021, 17:27:52) [MSC v.1928 64 bit (AMD64)] on win32
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

## 虚拟环境

创建和激活虚拟环境：

```powershell
PS C:\Users\Administrator>py -m venv .env

PS C:\Users\Administrator>.\.env\Scripts\activate

```
在虚拟环境中pip和python可以直接使用。注意创建后的虚拟环境路径不能移动位置。

## 常见问题

- windows下安装后:
  
  ::: danger C:\Users\Administrator>python -V
  'python' 不是内部或外部命令，也不是可运行的程序或批处理文件。
  :::
  
  可能是在使用安装包安装的时候未勾选add to path，但你也可以使用`py`命令或进入虚拟环境
  
  ::: danger C:\Users\Administrator>pip -V
  'pip' 不是内部或外部命令，也不是可运行的程序或批处理文件。
  :::
  
  问题同上，但你也可以使用`py -m pip`命令或进入虚拟环境
  
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
  cmd里直接输入指令`py`打开`C:\Windows\py.exe`和为后安装的python，环境变量也同理。
  可以指定虚拟环境来解决。因为在虚拟环境中原python和pip的环境变量都无效化了。
  
  如果需要频繁切换python版本 可以一开始就用 Anaconda 来安装和管理python
