# Django框架

> Python下有许多款不同的 Web 框架。Django是重量级选手中最有代表性的一位。许多成功的网站和APP都基于Django。

东西有点多 所以这里外链2个博客 博主是老男孩教育的两位老师



## django

推荐版本

```bash
Django==1.11.20
```

<https://www.cnblogs.com/liwenzhou/p/9959979.html>



## django rest framework

推荐版本

```bash
django==1.11.20
django-cors-headers==3.0.2
djangorestframework==3.9.4
```

<https://www.cnblogs.com/GGGG-XXXX/p/9564651.html>



### 常用指令

迁移数据库

```bash
python manage.py makemigrations
python manage.py migrate  
```

生成超级管理员

```bash
python manage.py createsuperuser
```

启动服务到80端口

```bash
python manage.py runserver 0.0.0.0:80
```



## 与mysql连接

`settings.py`中：

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        "HOST":"127.0.0.1",
        "PORT":3306,
        'NAME':"cdbproject",
        "USER":"root",
        "PASSWORD":"**********"
    }
}
```

`__init__.py`中：

```python
import pymysql
pymysql.install_as_MySQLdb()
```



## 注意事项

### 版本问题

在django小于1.11.6且python大于3.7.0的时候，会报出一个错误

解决办法有3种，我个人推荐升级django到1.11.20

- python重新安装3.6.x及其以下
- django升级1.11.6及以上
- 修改django源码 ：

源码在`Python\\Lib\\site-packages\\django\\contrib\\admin\\widgets.py`中

第151行

```python
	'%s=%s' % (k, v) for k, v in params.items(),
```

去掉末尾的逗号即可



### 时区问题

不作修改，时间将为格林尼治时间

`settings.py`中做出如下修改：

```python
#TIME_ZONE = 'UTC'
TIME_ZONE = 'Asia/Shanghai'
```

