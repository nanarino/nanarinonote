## PyAutoGUI模块

PyAutoGUI是一个纯Python的GUI自动化工具，其目的是可以用程序自动控制鼠标和键盘操作，多平台支持（Windows，OS X，Linux）。可以使用`pip`安装，Github上有[源代码](https://github.com/asweigart/pyautogui)。

::: tip 关于本模块
本笔记只记录基础，详细的API用法请左转其官方文档。
:::



## 参考中文文档

<https://muxuezi.github.io/categories/pyautogui.html>



## 安装以及依赖

这里只说明在Windows系统下使用：

安装

```bash
pip install pyautogui
```

下载完成后 包括：

- pyautogui
- pygetwindow
- pymsgbox
- pyrect
- pyscreeze
- pytweening

...等目录

如果只使用github下载pyautogui目录 将会导致某些功能无法使用



## 常用函数

### 先引入

```python
import pyautogui
```

弹窗

```python
pyautogui.alert('弹窗文字+OK按钮+Cancel按钮')
pyautogui.prompt('弹窗文字+输入文字+OK按钮')
pyautogui.confirm('弹窗文字+输入文字+OK按钮+Cancel按钮')
```

获取当前鼠标的坐标

```python
pyautogui.position()
```

获取当前屏幕的宽高，并让鼠标移到屏幕中央

```python
w,h = pyautogui.size()
pyautogui.moveTo(w / 2, h / 2)
```

让鼠标相对位移

```python
pyautogui.moveRel(0, 50) 
```

判断(x,y)是否在屏幕上

```python
x, y = 122, 244
pyautogui.onScreen(x, y)
```

用num_seconds秒的时间把光标移动到(x, y)位置

```python
pyautogui.moveTo(x, y, duration=num_seconds)
```

鼠标点击（不传参数鼠标会原地点击）

```python
pyautogui.click(x=moveToX, y=moveToY, clicks=num_of_clicks, interval=secs_between_clicks, button='left')
```

鼠标按下和松开

```python
pyautogui.mouseDown(x=moveToX, y=moveToY, button='left')
pyautogui.mouseUp(x=moveToX, y=moveToY, button='left')
```

键盘按下和松开

```python
pyautogui.keyDown(key_name)
pyautogui.keyUp(key_name)
```

键盘输入

```python
pyautogui.typewrite(['a', 'b', 'c', 'left', 'backspace', 'enter', 'f1'], interval=secs_between_keys)
```

热键

```python
pyautogui.hotkey('ctrl', 'a') # 全选
pyautogui.hotkey('ctrl', 'c') # 复制
pyautogui.hotkey('ctrl', 'v') # 粘贴
```

想要输入中文，需要使用读写粘贴板的第三方库`pyperclip`

```python
import pyperclip
#读取
print(pyperclip.paste())
#写入
pyperclip.copy('需要复制的文字')
```

其他函数如 拖拽 滚轮等 比较少用 这里省略



## 保护措施

为了能够及时中断，PyAutoGUI提供了一个保护措施。    
当`pyautogui.FAILSAFE = True`时，如果把鼠标光标在屏幕左上角，    
PyAutoGUI函数就会产生`pyautogui.FailSafeException`异常。    
如果失控了，需要中断PyAutoGUI函数，就把鼠标光标在屏幕左上角。    
要禁用这个特性，就把`FAILSAFE`设置成`False`：

```python
pyautogui.FAILSAFE = False
```



## 截屏识别

寻找所有相似图片，返回一个生成器

```python
pyautogui.locateAllOnScreen('foo.png')
```

识别屏幕，返回图片在屏幕上的中心XY轴坐标值    
（只能识别一个，貌似上比左优先，找不到会抛出错误）

```python
pyautogui.locateCenterOnScreen('looks.png')
```



## 其他注意事项

测试某些游戏的时候，由于保护机制，鼠标无法在里面点击。

