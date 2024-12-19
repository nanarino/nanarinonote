# 初识 python

## 计算机基础

内存：储存数据。最早 128MB 内存条，发展到 8G,16G,32G，成本高，断电即消失。\
硬盘：储存数据。固态硬盘/机械硬盘，长久保持数据。\
操作系统：纯命令行发展为图形界面，\
应用程序：操作系统也是应用程序。

## python 历史

宏观上：python2 与 python3 区别：

- python2 源码不标准，混乱，重复代码太多，
- python3 统一 标准，去除重复代码。

## python 的特点

强类型，动态解释型，脚本语言

### python 的发展

...

## python 种类

### 从实现:

我们用的都是`CPython`就是用 C 语言实现的 Python 及其解释器（JIT 编译器）\
速度最快的是`pypy`是 python 自己实现的自己\
其他版本:C++(`Pyston`) \\ Java(`Jython`) \\ C#(`IronPython`)

### 从版本:

- python2
- python3

区别：python2 默认编码方式是 ascii 码，python3 是 Unicode\
解决编码问题：在文件的首行：`#-*- encoding:utf-8 -*-`

::: danger SyntaxError: Non-UTF-8 code starting with ...
在 python3 中的中文也有小概率遇到这种情况\
也是通过 `#-*- encoding:utf-8 -*-` 来解决
:::

## 变量

变量：就是将一些运算的中间结果暂存到内存中，以便后续代码调用。

- 必须由数字，字母，下划线任意组合，且不能数字开头。

- 不能是 python 中的关键字 以下:

  ```python
  [
      "and",
      "as",
      "assert",
      "break",
      "class",
      "continue",
      "def",
      "del",
      "elif",
      "else",
      "except",
      "exec",
      "finally",
      "for",
      "from",
      "global",
      "if",
      "import",
      "in",
      "is",
      "lambda",
      "not",
      "or",
      "pass",
      "print",
      "raise",
      "return",
      "try",
      "while",
      "with",
      "yield",
  ]
  ```

- 变量具有可描述性。

- 不能是汉字等字符。

## 常量

客观不变的量 或者程序员不希望它被修改的量。如:

- 圆周率`π=3.14`
- 自然对数底数`e=2.71`
- `BIR_OF_CHINA :typing.Final[int] = 1949`

## 注释

方便自己方便他人理解代码。

- 单行注释：`#`

- 多行注释：`'''`被注释内容`'''`

  ```python
  """

  被注释内容:代码千万行,注释第一行,注释不规范,亲人两行泪

  """
  ```

它不仅是注释，也是带换行的字符串块

## 用户交互`input`

```python
a = input("请输入")
```

1，等待输入。
2，将输入的内容赋值给了前面变量。
3，`input`接受的数据类型全部是`str`类型（字符串类型）

## 基础数据类型初始

基础数据类型有：数字，字符串，列表，元组，字典\
内置函数`type()`返回变量的类型

- 整型：`int`，十进制的整数类型\
  数字类型还有浮点型和复数类型，可以相互转换。\
  数字类型可以参与一些算数运算符：加减乘除\
  字符串转化成数字：`int(str)` 条件：str 必须是数字组成的。\
  数字转化成字符串：`str(int)`

- 布尔值：`bool`\
  True False 表示真假 是逻辑运算表达式的结果\
  布尔类型并不是基础数据类型 是**继承**的整型的`1`和`0`

- 字符串：`str`\
  python 当中凡是用引号引起来的都是字符串。\
  可相加：str + str 拼接\
  可相乘：str * int 复读

- 列表：`list`\
  一个具有顺序的容器，可以在里面放置其他类型\
  用花括号包裹，各个成员之间用逗号隔开：\
  `[ 2019, "春节"]`

- ...
