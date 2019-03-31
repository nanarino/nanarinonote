# random模块

```python
>>> import random
#随机小数
>>> random.random()      # 大于0且小于1之间的小数
0.7664338663654585
>>> random.uniform(1,3) #大于1小于3的小数
1.6270147180533838
#恒富：发红包

#随机整数
>>> random.randint(1,5)  # 大于等于1且小于等于5之间的整数 左闭右闭
>>> random.randrange(1,10,2) # 大于等于1且小于10之间的奇数 左闭右开


#随机选择一个返回
>>> random.choice([1,'23',[4,5]])  # #1或者23或者[4,5]
#随机选择多个返回，返回的个数为函数的第二个参数
>>> random.sample([1,'23',[4,5]],2) # #列表元素任意2个组合
[[4, 5], '23']


#打乱列表顺序
>>> item=[1,3,5,7,9]
>>> random.shuffle(item) # 打乱次序
>>> item
[5, 1, 3, 7, 9]
>>> random.shuffle(item)
>>> item
[5, 9, 7, 1, 3]
```

练习：生成随机验证码

```python
import random

def v_code():

    code = ''
    for i in range(5):

        num=random.randint(0,9)
        alf=chr(random.randint(65,90))
        add=random.choice([num,alf])
        code="".join([code,str(add)])

    return code

print(v_code())
```
