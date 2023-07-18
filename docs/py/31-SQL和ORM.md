# SQL和ORM

## 关系型数据库

 关系型数据库（SQL）指的是使用关系模型（二维表格模型）来组织数据的数据库。

常见的关系型数据库

- Oracle
- MySql
- Microsoft SQL Server
- SQLite
- PostgreSQL

关系型数据库提供对事务的支持，能保证系统中事务的正确执行，同时提供事务的恢复、回滚、并发控制和死锁问题的解决。

### 事务

事务（transaction）的四个特性

- A(Atomicity)原子性:事务是原子工作单元，要么同时执行，要么同时不执行。
- C(Consistency)一致性:符合约束规则；执行之前的整体状态和执行后数据一致。
- I(Isolation)隔离性:并发事务之间相互不影响。
- D(Durability)持久性:事务完成之后，对数据库的影响是永久的。

## SQL语句

关系型数据库一般都支持通用的SQL（结构化查询语言）语句。

不同的数据库支持不同的sql语句方言。

### 连接数据库

以mysql为例， 先启动mysqld再用客户端连接

```bash
mysql -u root -p ******
```

显示数据库

```sql
> show databases; 
```

创建数据库的DDL语句

```sql
# utf-8
> CREATE DATABASE 数据库名称 DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
# gbk
> CREATE DATABASE 数据库名称 DEFAULT CHARACTER SET gbk COLLATE gbk_chinese_ci;
```

使用数据库

```sql
> use 数据库名称;
> show tables;
```

用户授权管理等略去
基本增删改查略去

### 连表查询

- `inner join`: 无对应关系则不显示
  
  ```sql
  select A.num, A.name, B.name
  from A inner join B on A.nid = B.nid
  ```

- `left join`:  A表所有显示，如果B中无对应关系，则值为null

- `right join` : B表所有显示，如果B中无对应关系，则值为null

- `... union ...`  :  两个查询的结果集组合

- 某些连表可以用子查询替代
  
  `where exists()`   子查询结果集至少有一行
  
  `where in ()`    筛选符合子查询结果集中的一行满足

### 函数

sql函数分为 聚合函数 标量函数 排名函数 分析函数 等

聚合函数用的最多，它与 GROUP BY 子句结合使用

内置的聚合函数有AVG SUM COUNT等

### 存储过程

存储过程（Store Procedure）是类似自定义函数的一组sql语句，可以有效防止**sql注入**攻击。

在MySQL 中，单个存储过程不是原子操作，而Oracle则是原子的。

故而前者需要指定事务，捕获其错误来决定是回滚（ROLLBACK）还是提交（COMMIT），就拥有了原子性。

### 触发器

创建的数据表或者数据列对删改查的捆绑行为。不同方言大不相同

### 作业

创建的数据库定时任务。不同方言大不相同

## DB-ABI

python数据库引擎提供了 [PEP 249](https://www.python.org/dev/peps/pep-0249) 所描述的符合 DB-API 2.0 规范的 SQL 接口

这里以`pymssql`（Microsoft SQL Server的引擎）为例，与内置的`sqlite3`模块基本一致

先使用pip安装或者[下载whl](https://www.lfd.uci.edu/~gohlke/pythonlibs/)

### 连接

连接需要很大的开销，生产中会使用数据库连接池。

```python
import pymssql

DATABASES = {
    "host": '192.168.10.1\\nnr',
    "user": "sa",
    "database": "demo_project",
    "password": "114514"
}

'''其他配置
as_dict:bool 查询结果返回的是字典否则(默认)返回的为列表
autocommit:bool 默认False，自动提交，每一句sql都会变成事务，官网不建议开启
port 端口号 使用别名时不传
'''

conn = pymssql.connect(**DATABASES)
cur = conn.cursor()

#查询sql语句并打印结果
cur.execute('select * from sys.tables')
query_set = cur.fetchall()
print(query_set)
conn.close()
```

### 上下文

```python
with pymssql.connect(**DATABASES) as conn:
    with conn.cursor() as cur:
        cur.execute('SELECT * FROM t1')
        for row in cur:
            print(row)
```

### 查询

游标对象`.execute`方法的结果可以通过遍历游标对象来获取，通常也实现了下面的方法

- `cursor.fetchone()`    弹出一条结果 相当于`next()`
- `cursor.fetchall()`    弹出剩余结果
- `cursor.fetchmany(n)`    弹出n条结果，大部分引擎实现了

大部分引擎`.execute`会直接返回游标， 可以`.execute(...).fetchall()`连续使用

### 修改

```python
username = 'John Doe'
id = '1919'
curs.execute(f'update t1 set {username=} where {id=}')
conn.commit() #修改数据后提交事务
```

### 存储过程

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

### 异步引擎

异步对应原引擎一般都以`aio-`开头。使用方法区别不大，只需要加上await来等待结果

## ORM

对象关系映射（Object Relation Mapping）

不用关注底层的数据库访问细节，注意力关注到业务逻辑层；有效防止**sql注入**。

![](/img/orm.jpg)

python主流的 ORM 框架：

- Django-ORM
- SQLALchemy（支持异步）
- peewee
- Tortoise（异步）

这里以[SQLALchemy](https://www.osgeo.cn/sqlalchemy/)为例

sqlalchemy分为两个部分 

- sqlalchemyORM   主要是sqlalchemy.orm模块，包括会话，加载对象。
- sqlalchemyCore   sqlalchemy模块的其他子模块，包括引擎，连接，连接池。

### engine

创建引擎，依赖其他引擎，这里以pymysql连接MySQL为例。这里的引擎是一个连接池单例

```python
from sqlalchemy import create_engine
url = "mysql+pymysql://root:*****@127.0.0.1:3306/demodemo?charset=utf8"
egn = create_engine(url)
```

其他参数

- `connect_args={"check_same_thread": False}`   为sqlite开启多线程（默认不开启）

- `poolclass=sqlalchemy.pool.NullPool`   不使用连接池
  
  （默认`QueuePool`，多线程时用`SingletonThreadPool`）

- `pool_pre_ping=True`    连接池开启悲观处理（默认不开启）

- `pool_recycle=3600`    连接回收时间秒（mysql默认28800）

#### 创建异步引擎

```python
from sqlalchemy.ext.asyncio import create_async_engine
url = "mysql+aiomysql://root:*****@127.0.0.1:3306/demodemo?charset=utf8"
async_egn = create_async_engine(url)
```

### metadata

metadata对象通常在应用程序的“models”或“dbschema”类型的包中

#### 使用Table收集

metadata收集表对象**Table**，以及表的列对象Column

```python
from sqlalchemy import MetaData
metadata = MetaData()

from sqlalchemy import Table, Column, Integer, String
demo_table = Table(
    "demotable",
    metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String(30))
)
#Column的第二个参数支持很多类型，且兼容不同数据库
#可以更具体的引入：from sqlalchemy.types import Integer,String

#反射到name列:
#demo_table.columns[1]
#demo_table.columns.name
#demo_table.c.name
#demo_table.name
```

autoload，从已有的表自动加载（**不支持异步引擎**）

```python
Table('demotable', metadata, autoload=True, autoload_with=egn)
```

ForeignKey，外键约束

```python
from sqlalchemy import ForeignKey
#ForeignKey(其他表的primary_key) 即可作为外键约束的类型来创建Column
```

#### 使用类注册

##### 导出基类

```python
from sqlalchemy.orm import registry
mapper_registry = registry()
#mapper_registry.metadata即为MetaData单例
Base = mapper_registry.generate_base()
#数据源对象使用Base.metadata获取
```

使用`declarative_base`也可以生成Base

```python
from sqlalchemy.orm import declarative_base
Base = declarative_base()
```

不使用ORM也能使用`declarative_base`

```python
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()
```

映射生成（**类声明**）metadata

```python
class User(Base):
    __tablename__ = 'user_account'
    id = Column(Integer, primary_key=True)
    name = Column(String(30))

#User.__table__  可以获取到Table版的User
```

relationship，借助外键关系连带数据（等价于查询时使用join）

```python
from sqlalchemy.orm import relationship

class Father(Base):
    __tablename__ = "father"
    id = Column(Integer,primary_key=True,autoincrement=True)
    name = Column(String(40),unique=True)
    age = Column(Integer)
    son = relationship('Son',backref="Father")

class Son(Base):
    __tablename__ = 'son'
    id = Column(Integer,primary_key=True,autoincrement=True)
    name = Column(String(40),unique=True)
    age = Column(Integer)
    father_id = Column(Integer,ForeignKey('father.id'))
```

### execute

使用**text**可以支持非orm构造（即直接执行sql语句、存储过程等）

#### 从Connection对象

```python
from sqlalchemy import text
with egn.connect() as conn:
    for row in conn.execute(text("select * from demotable")):
        print(row)
    #支持使用.fetchone/.fetchall/.fetchmany/.all方法迭代
    #conn.commit() 增删改需要提交 这里未开启事务
```

##### 异步Connection

```python
async with async_egn.connect() as conn:
    result = await conn.execute(...)
    print(result.fetchall())
```

连接流（异步生成器）

```python
async with async_egn.connect() as conn:
    async_result = await conn.stream(...)
    async for row in async_result:
        print(row)
```

#### 从Session对象

```python
from sqlalchemy import text
from sqlalchemy.orm import Session#,sessionmaker
#sessionmaker(bind=engine) 可以生成Session的元类（预设配置的类工厂）
with Session(egn) as session:
    result = session.execute(text('select * from demotable'))
    print(result.all())
```

Session对象的使用 与Connection别无二致

##### 异步Session

```python
from sqlalchemy.ext.asyncio import AsyncSession
async with AsyncSession(async_egn) as session:
    result = await session.execute(text('select * from demotable'))
    print(result.all())
```

commit在异步情况下也需要await

#### 使用ORM代替text

```python
from sqlalchemy import insert,delete,update,select
# 增一条
conn.execute(insert(table).values(name="zzz"))
# 增批量
conn.execute(insert(table), [{"name": "www"},{"name": "ddd"}])
# 删
conn.execute(delete(table).where(table.columns.id == 1))
# 改
conn.execute(update(table).where(table.columns.name == "www"))
# 查  用table.columns.id， table.c.id， table.id 皆可
query = select([table]).order_by(desc(table.c.id)).offset(1).limit(2)
```

#### Table和类声明差异

Table可以直接使用table.select等。Table得到的结果Row可以转dict，即可以使用下标取

```python
table = Table(
    "demotable",
    metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String(30))
)
async with async_egn.connect() as conn:
    result = await conn.execute(select([table]))
    for row in result:
        print(dict(row)) # {'id': 1, 'name': '1'}
```

而类注册的映射查询结果集内的Row无法转dict，可以使用`结果集.scalars()`转为映射对象后用属性取

```python
class Demo(Base):
    __tablename__ = 'demotable'
    id = Column(Integer, primary_key=True)
    name = Column(String(30))

async with AsyncSession(async_egn) as session:
    result = await session.execute(select(Demo))
    for i in result.scalars():
        print(i.id, i.name) # 1 '1'
```

添加数据可以用`session.execute(insert(Demo).value(...))`也可以用`session.add(Demo(...))`

如果要拿修改后的字段值可以先开启事务自动提交再使用`await session.flush()`或手动提交

事实上，事务是自动开启的，手动开启事务`with session.begin():`结束之后会自动调用一次`session.commit()`

### DDL

DDL（数据定义语言）语句是用来配置数据库模式中的表、约束和其他永久对象的SQL的子集

`metadata.create_all(engine)`   按照预设的models生成空数据表`demotable`

```python
from sqlalchemy.schema import DDL
#DDL.execute()1.4 版后已移除
#所有语句执行都由 Connection.execute() 方法 Connection ，或在ORM中 Session.execute() 方法
```
