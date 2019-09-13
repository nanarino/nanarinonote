# pymssql模块

连接`mysql`需要用到`pymysql`模块

而连接`Microsoft SQL server` 需要用到`pymssql`



## 用数据库账户连接

```python
import pymssql
DATABASES = {
    'default':{
        "host": '192.168.10.1\\nnr',
        "user": "sa",
        "database": "demo_project",
        "password": "nnr114514"
    },
}
conn = pymssql.connect( **DATABASES['default'])
cursor = conn.cursor()
if not cursor:
    raise Exception("数据库连接失败")
else:
    print("*" * 32 + "数据库连接成功" + "*" * 32)
return (cursor,conn)
```



## 执行SQL语句

```python
cur.execute('select top 5 * from nnr_t1')

#querylist = cur.fetchone()
querylist = cur.fetchall()

#标准库中的pprint模块，更美观的打印数据
from pprint import pprint
pprint(querylist, width=60, compact=True)
#查询语句将返回出列表嵌套元组的结构，每个数据行是一个元组。

conn.close()
```

如果是增删改的SQL语句，则需要额外书写：

```python
conn.commit() #修改数据后提交事务
```



## 用Windows用户连接

user和password未配置时默认使用Windows用户连接数据库

```python
DATABASES = {
    'default':{
        "host": '127.0.0.1',
        "database": "demo_project",
    },
}
```



## 例：将电子表格写入数据库

这里使用`openpyxl`模块只读电子表格（.xlsx）

### 读取电子表格

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

#逐行读取，参数min_row开始 =1可能会是表头，max_col和max_row限制最大的行列数
querylist = map(lambda row: tuple(map(lambda col: str(col.value).strip(), row)),table.iter_rows(min_row=2, max_col=cols, max_row=rows))
#这里的querylist也是列表嵌套元组的结构，每一行是一个元组。
pprint(list(querylist), width=60, compact=True)
```

### 写入数据库

创建表的过程省略，表名t1

```python
import pymssql
DATABASES = {
    'default':{
        "host": '192.168.10.1\\nnr',
        "user": "sa",
        "database": "demo_project",
        "password": "nnr114514"
    },
}
conn = pymssql.connect( **DATABASES['default'])
cur = conn.cursor()

for i in querylist:
    cur.execute('INSERT INTO t1 VALUES '+ i.__repr__())
    conn.commit()

conn.close()
```

