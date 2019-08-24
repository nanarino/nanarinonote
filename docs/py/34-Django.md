# Django框架

> Python下有许多款不同的 Web 框架。Django是重量级选手中最有代表性的一位。许多成功的网站和APP都基于Django。

::: tip 关于框架
本笔记只记录基础，详细的框架用法请左转其官方文档。
:::

东西有点多 除了官方文档以外，这里外链2个博客，博主是老男孩教育的两位老师



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



### 时区/语言问题

时间默认为格林尼治时间

admin中的语言默认为英文

可以在`settings.py`中做出如下修改：

```python
#LANGUAGE_CODE = 'en-us'
LANGUAGE_CODE = 'zh-Hans'

#TIME_ZONE = 'UTC'
TIME_ZONE = 'Asia/Shanghai'
```



### 部署问题

一般用`nginx`+`uwsgi`来部署django项目到生产环境。

通过配置，`nginx`与`uwsgi`之间进行socket通信，

nginx提供static目录的静态文件访问。

具体可以参考我在[cdb仓库](https://github.com/nanarino/cdb)中的配置文件示例。

开发之前`settings.py`中就应该做出如下设置：

```python
STATICFILES_DIRS = [
    os.path.join(BASE_DIR,"static")
]
```

在部署之后，如admin的静态资源会出现404的情况，解决办法：

默认安装的python，admin的静态资源一般在

`C:\Users\Administrator\AppData\Local\Programs\Python\Python37\Lib\site-packages\django\contrib\admin\static\admin`目录中，

将其拷贝到项目的static目录，以便被nginx访问。