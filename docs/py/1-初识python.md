# 初识python

## 计算机基础

内存:储存数据。最早128MB内存条 发展到8G,16G,32G, 成本高，断电即消失。

硬盘:储存数据。固态硬盘/机械硬盘，长久保持数据, 。

操作系统：纯命令行发展为图形界面 ,

应用程序：操作系统也是应用程序。



## python历史

宏观上：python2 与 python3 区别：

- python2 源码不标准，混乱，重复代码太多，

- python3 统一 标准，去除重复代码。




## python的特点

强类型 动态解释型 脚本语言

### python的发展

...

## python种类

### 从实现: 

我们用的都是CPython 就是用C语言实现的Python及其解释器（JIT编译器） 

速度最快的是pypy    是python自己实现的自己

其他版本:C++(Pyston)    \    Java(Jython)    \    C#(IronPython) 

### 从版本:

- python2
- python3 

区别：

python2默认编码方式是ascii码

解决方式：在文件的首行：`#-*- encoding:utf-8 -*-` 



## 变量

变量：就是将一些运算的中间结果暂存到内存中，以便后续代码调用。

- 必须由数字，字母，下划线任意组合，且不能数字开头。

- 不能是python中的关键字 以下:

  ```python
  ['and', 'as', 'assert', 'break', 'class', 'continue',
  	'def', 'del', 'elif', 'else', 'except', 'exec',
  	'finally', 'for', 'from', 'global', 'if', 'import', 
  	'in', 'is', 'lambda', 'not', 'or', 'pass', 'print', 
  	'raise', 'return', 'try', 'while', 'with', 'yield']
  ```

- 变量具有可描述性。

- 不能是中文。




## 常量

客观不变的量 或者程序员不希望它被修改的量。

如:

- 圆周率π=3.14
- 自然对数底数e=2.71
- BIR_OF_CHINA = 1949



## 注释

方便自己方便他人理解代码。

- 单行注释：#

- 多行注释：'''被注释内容'''


```python
"""

被注释内容:代码千万行,注释第一行,注释不规范,亲人两行泪

"""
```



## 用户交互`input`

1，等待输入，

2，将你输入的内容赋值给了前面变量。

3，input出来的数据类型全部是字符串类型



## 基础数据类型初始

- 数字：int，十进制的整数类型

  一些算数运算符：加减乘除+ - * /

  这里的除是精确除法 c语言那种除法是 //

  指数运算** 

  取余数%

  `type()`返回变量的类型

  字符串转化成数字：int(str) 条件：str必须是数字组成的。

  数字转化成字符串：str(int)

- 字符串：str，

  python当中凡是用引号引起来的都是字符串。

  可相加  : str + str  拼接

  可相乘 : str * int  复读

- 布尔值 :bool

  True   False  表示真假  是逻辑运算表达式的结果

  不是基础数据类型 是继承的整型的1和0