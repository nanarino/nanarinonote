# Django框架



东西有点多 所以这里外链2个博客



## django

推荐版本

```
Django==1.11.20
```

<https://www.cnblogs.com/liwenzhou/p/9959979.html>



## django rest framework

推荐版本

```
django==1.11.20
django-cors-headers==3.0.2
djangorestframework==3.9.4
```

<https://www.cnblogs.com/GGGG-XXXX/p/9564651.html>



### 常用指令

迁移数据库

```
python manage.py makemigrations
python manage.py migrate  
```

生成超级管理员

```
python manage.py createsuperuser
```

启动服务到80端口

```
python manage.py runserver 0.0.0.0:80
```



## 与mysql连接

`settings.py`中：

```
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

```
import pymysql
pymysql.install_as_MySQLdb()
```

