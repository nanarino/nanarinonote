# configparser模块 

该模块适用于配置文件的格式与windows ini文件类似，可以包含一个或多个节（section），每个节可以有多个参数（键=值）。 

常见文档格式如下：

```ini
[DEFAULT]
ServerAliveInterval = 45
Compression = yes
CompressionLevel = 9
ForwardX11 = yes
  
[bitbucket.org]
User = hg
  
[topsecret.server.com]
Port = 50022
ForwardX11 = no
```

如果想用python生成一个这样的文档怎么做呢？ 

```python
import configparser

config = configparser.ConfigParser()

config["DEFAULT"] = {'ServerAliveInterval': '45',
                      'Compression': 'yes',
                     'CompressionLevel': '9',
                     'ForwardX11':'yes'
                     }

config['bitbucket.org'] = {'User':'hg'}

config['topsecret.server.com'] = {'Host Port':'50022','ForwardX11':'no'}

with open('example.ini', 'w') as configfile:

   config.write(configfile)
```

## 读取

```python
import configparser

config = configparser.ConfigParser()

#---------------------------查找文件内容,基于字典的形式

print(config.sections())        #  []

config.read('example.ini')

print(config.sections())        #   ['bitbucket.org', 'topsecret.server.com']

print('bytebong.com' in config) # False
print('bitbucket.org' in config) # True


print(config['bitbucket.org']["user"])  # hg

print(config['DEFAULT']['Compression']) #yes

print(config['topsecret.server.com']['ForwardX11'])  #no


print(config['bitbucket.org'])          #<Section: bitbucket.org>

for key in config['bitbucket.org']:     # 注意,有default会默认default的键
    print(key)

print(config.options('bitbucket.org'))  # 同for循环,找到'bitbucket.org'下所有键

print(config.items('bitbucket.org'))    #找到'bitbucket.org'下所有键值对

print(config.get('bitbucket.org','compression')) # yes       get方法Section下的key对应的value
```

## 修改

```python
import configparser

config = configparser.ConfigParser()
#读取
config.read('example.ini')

#增加
config.add_section('yuan')

#删除
config.remove_section('bitbucket.org')  
config.remove_option('topsecret.server.com',"forwardx11")

#修改
config.set('topsecret.server.com','k1','11111')
config.set('yuan','k2','22222')

#写入
with open('new2.ini', 'w') as configfile:
    config.write(configfile)
```
