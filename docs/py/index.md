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

推荐python3.7.0和python3.6.8

勾选好`环境变量`和`pip`

在Windows的cmd中

```bash
Python 3.7.0 (v3.7.0:1bf9cc5093, Jun 27 2018, 04:59:51) [MSC v.1914 64 bit (AMD64)] on win32
Type "copyright", "credits" or "license()" for more information.
>>>
```

那么已经成功了一半

::: tip >>>print("Hello World!")
Hello World!
:::

输入如上字符 回车



## 推荐资源

哔哩哔哩搜索关键字：老男孩教育

[第14期完整（顺序稍乱）](https://space.bilibili.com/385868518)

[第9期（发现尾部不完整）](https://www.bilibili.com/video/av24702867)





## 常见问题

- windows下安装后:

::: danger C:\Users\Administrator>python -V
'python' 不是内部或外部命令，也不是可运行的程序或批处理文件。
:::

可能是在使用安装包安装的时候未勾选add to path，可以手动添加环境变量

- windows下安装后:

::: danger C:\Users\Administrator>pip -V
'pip' 不是内部或外部命令，也不是可运行的程序或批处理文件。
:::

可能是没设置好环境变量,或者pip压根没装  可以通过重新安装来解决

::: warning C:\Users\Administrator>pip -V
You are using pip version 10.0.3, however version 19.1.1 is available.

You should consider upgrading via the 'python -m pip install --upgrade pip' command.
:::

按照上述命令进行升级pip

- windows下安装后: ` .py`文件 鼠标右键中没有  `edit with IDLE`


解决方法 修改注册表 有3个文件夹(新建)的默认值要修改 具体谷歌

- pip下载模块速度过慢

可以使用清华大学镜像

```bash
pip install pymysql -i https://pypi.tuna.tsinghua.edu.cn/simple
```

