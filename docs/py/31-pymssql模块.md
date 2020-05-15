# pymssql模块

连接`mysql`需要用到`pymysql`模块    
而连接`Microsoft SQL server` 需要用到`pymssql`模块

## 安装依赖

直接`pip install pymssql`安装。    
可能会报错：    
可以到https://www.lfd.uci.edu/~gohlke/pythonlibs/上寻找对应版本下载`.whl`文件    
然后使用如`pip install pymssql-2.1.4-cp38-cp38-win_amd64`来安装



## 连接数据库

### 指定用户名密码连接

注意：host:计算机名\实例名，在python代码斜线需要转义，数据库的连接工具里不要转义。

```python
import pymssql

DATABASES = {
    "host": '192.168.10.1\\nnr',
    "user": "sa",
    "database": "demo_project",
    "password": "114514"
}

conn = pymssql.connect(**DATABASES)
cur = conn.cursor()
if not cur:
    raise Exception("数据库连接失败")
else:
    print("数据库连接成功")

#查询并打印结果
cur.execute('select * from sys.tables')
query_set = cur.fetchall()
print(query_set, width=60, compact=True)

#记得关闭以释放资源
conn.close()
```

### Windows账户连接

登录自己电脑上的数据库时，可以使用Windows身份认证的方式登陆是个很好用的方法。

```python
DATABASES = {
    "host": '127.0.0.1',
    "database": "demo_project"
}
```

只要不填账号密码，就会自动用Windows身份认证的方式来登录了。

### connect的其他常用参数

- `as_dict`(bool) ：如果设置为True，则后面的查询结果返回的是字典，关键字为查询结果的列名；否则(默认)返回的为list。
- `autocommit`(bool)：默认为False，这样如果对数据表进行更改，则需要手动调用commit来提交操作。
- `port`(str)：指定服务器的TCP端口，如果你没有改过的话使用默认的就好。



## 执行SQL语句

### execute

它类似于一个生成器函数，使用之后游标对象cursor会变成一个结果集迭代器

```python
cur.execute('select top 5 * from t1')

#获取所有查询结果返回列表,见下
querylist = list(cur)

#标准库中的pprint模块，更美观的打印数据
from pprint import pprint
pprint(querylist, width=60, compact=True)
#fetchall()返回出列表嵌套元组的结构，每个数据行是一个元组。

conn.close()
```

第二个参数可以用对SQL语句格式化

```python
curs.execute('SELECT * FROM t1 WHERE username=%s', 'John Doe')
```

### executemany

可以执行多条语句

```python
# 插入三条测试数据
cursor.executemany(
    "INSERT INTO t1 VALUES (%d, %s, %s)",
    [(1, 'John Smith', 'John Doe'),
     (2, 'Jane Doe', 'Joe Dog'),
     (3, 'Mike T.', 'Sarah H.')])
# 提交修改，见下
conn.commit()
```

### commit

如果对数据进行了修改，且在连接时没有设置`autocommit`为True，则需要手动调用commit进行提交修改:

```python
conn.commit() #修改数据后提交事务
```



## 查询结果获取

### 直接遍历Cursor对象

游标对象cursor在execute之后返回结果集，类似于一个迭代器

```python
cur.execute('select top 5 * from t1')
for row in cur:
    print('row = %r' % (row,))
```

如果连接时指定了`as_dict`为True，则返回结果变为字典类型，就能列名来访问

```python
cur.execute('select top 5 * from t1')
for row in cur:
    print("ID=%d, Name=%s" % (row['id'], row['username']))
```

### fetch系列方法

fetch系列方法，类似`cur.next()`

`fetchone()`会**弹出**第一条（下一条）数据。

```python
cur.execute('select top 5 * from nnr_t1')
row = cur.fetchone()
while row:
    print("ID=%d, Name=%s" % (row[0], row[1]))
    row = cur.fetchone()
```

另外，还可以使用`fetchmany`和`fetchall`来一次性获取指定数量或者所有（剩下的）的结果。

::: danger 关于游标对象Cursor
与pymysql一样，任何时候只会有一个Cursor对象处于查询状态，即使实例化多个Cursor对象。    
建议将前一个查询`fetchall()`之后,再来进行另外一个查询,否则永远是最后一个查询的结果。
:::


## 存储过程

如果要调用存储过程，则使用Cursor对象的`callproc`方法

```python
# 创建一个存储过程
cur.execute("""
CREATE PROCEDURE FindPerson
     @username VARCHAR(100)
 AS BEGIN
     SELECT * FROM nnr_t1 WHERE username = @username
END
""")
# 调用上面的存储过程
cur.callproc('FindPerson', ('Jane Doe',))
```

执行存储过程也可以直接用语句

```python
cur.execute("exec SP_NAME 参数1, 参数2")
```



## 关闭链接

操作完成后应该调用close方法来关闭链接并释放资源：

```python
conn.close()
```

### 上下文管理

可以使用with语句来处理Connection和cursor对象，这样就不需要手动关闭他们了：

```python
with pymssql.connect(**DATABASES) as conn:
    with conn.cursor() as cur:
        cur.execute('SELECT * FROM t1')
        for row in cur:
            print(row)
```



## 例：将电子表格写入数据库

这里使用`openpyxl`模块只读电子表格（.xlsx）

### 读取电子表格

读取电子表格的时候可以通过各种方法处理使其和数据库查询结果的格式一致。

```python
from openpyxl import load_workbook
wb = load_workbook('./xls.xlsx', read_only=True)
table = wb[wb.sheetnames[0]]
#最大行
rows = table.max_row
#最大列
cols = table.max_column 
#单元格读取
#print(table.cell(row = 1, column = 1).value)

#逐行读取，参数min_row开始 min_row=2可以直接跳过表头 max_col和max_row限制最大的行列数
data_list = map(lambda row: tuple(map(lambda col: str(col.value).strip(), row)),table.iter_rows(min_row=1, max_col=cols, max_row=rows))

#如果要得到表头（去除表头）
header = next(data_list)

#这里的data_list也是列表嵌套元组的结构，每一行是一个元组。
pprint(list(data_list), width=60, compact=True)
```

### 写入数据库

创建表的过程省略，表名t2

```python
for i in data_list:
    cur.execute('INSERT INTO t2 VALUES '+ i.__repr__())
conn.commit() #若使用executemany更优雅
conn.close()
```
