# HelloWorld

## 常识

熟悉 Windows 操作系统的基本使用：

- 压缩/解压文件
- 安装/卸载软件
- 添加环境变量/服务
- 修改后缀/注册表

熟悉搜索引擎的使用：

- 谷歌
- 必应
- 哔哩哔哩

## 安装环境

服务器上推荐安装兼容最好的 python3.9。\
学习时推荐激进地给 PC 安装 python 最高版本。

不要`环境变量`和`pip`，强制自己使用虚拟环境吧\
以默认位置一键安装即可\
默认位置是`C:\Users\Administrator\AppData\Local\Programs\Python\Python39`

这里以 Windows 为例，安装包安装后，在 cmd 中输入`python`或者`py`，按下回车：

```bash
Microsoft Windows [版本 10.0.17763.107]
(c) 2018 Microsoft Corporation。保留所有权利。

C:\Users\Administrator>py
Python 3.9.5 (tags/v3.9.5:0a7dcbd, May  3 2021, 17:27:52) [MSC v.1928 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

现在推荐的安装方式：[astral-sh/rye](https://github.com/astral-sh/rye)

## 虚拟环境

传统方式创建和激活虚拟环境（也是 Windows）：

```powershell
PS C:\Users\Administrator>py -m venv .venv

PS C:\Users\Administrator>.\.venv\Scripts\activate

```

在虚拟环境中 pip 和 python 可以直接使用。注意创建后的虚拟环境路径不能移动位置。

现在推荐的方式：[astral-sh/uv](https://github.com/astral-sh/uv)。

## 常见问题

- windows 下安装后:

  ::: warning C:\\Users\\Administrator>python -V
  'python' 不是内部或外部命令，也不是可运行的程序或批处理文件。
  :::

  没有设置环境变量。但你也可以使用`py`命令

  ::: warning C:\\Users\\Administrator>pip -V
  'pip' 不是内部或外部命令，也不是可运行的程序或批处理文件。
  :::

  问题同上，但你也可以使用`py -m pip`命令或进入虚拟环境

  ::: warning C:\\Users\\Administrator>pip -V
  You are using pip version 10.0.3, however version 19.1.1 is available.\
  You should consider upgrading via the 'python -m pip install --upgrade pip' command.
  :::

  按照上述命令进行升级 pip

- pip 下载非标准库/第三方模块速度过慢\
  可以使用清华大学镜像

  ```bash
  pip install 第三方模块名字 -i https://pypi.tuna.tsinghua.edu.cn/simple
  ```

______________________________________________________________________

- **多版本**问题

列出安装过的 python 以及路径：

```powershell
C:\Users\Administrator>py --list-paths
 -V:3.11 *        C:\Users\Administrator\AppData\Local\Programs\Python\Python311\python.exe
 -V:3.9           C:\Users\Administrator\AppData\Local\Programs\Python\Python39\python.exe

```

在项目中直接指定虚拟环境来解决。因为在虚拟环境中原 python 和 pip 的环境变量都无效化了。
