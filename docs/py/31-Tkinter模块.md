# Tkinter模块

Python3自带的GUI模块



## 框体生成

```python
#引入模块，起别名
import tkinter as tk

#给窗口（tk实例）起一个名字 这里叫root 也可以叫window什么的
root = tk.Tk()

#给窗口设置标题
root.title("app")

#窗口设置最小宽高像素值，可调大，不可调小
root.minsize(280,500)
#窗口设置默认宽高像素值，可调
root.geometry('280x500')

#框体大小可调性像素值，为（0,0）时无法改变宽高和点击最大化
root.resizable(0,0)

#进入消息循环（必需组件）
root.mainloop()

#刷新窗口
root.update()
#关闭窗口
root.quit()  

```

## 控件注册

```python
#生成label控件
label=tkinter.Label(root,text='Hello,GUI')
#将其添加到主窗口
label.pack()

#生成button控件
button1=tkinter.Button(root,text='Button1')
#将其添加到主窗口
button1.pack(side=tkinter.LEFT)
button2=tkinter.Button(root,text='Button2')
button2.pack(side=tkinter.RIGHT)

#最后一行务必加上这个
root.mainloop()  
```

#### 核心控件列举

```
    Button        　　按钮；
    Canvas        　　绘图形组件，可以在其中绘制图形；
    Radiobutton      单选框；
    Checkbutton      复选框；
    Entry        　　 文本框（单行）；
    Text             文本框（多行）；
    Frame         　　框架，将几个组件组成一组
    Label        　　 标签，可以显示文字或图片；
    Listbox      　　 列表框；
    Menu     　　     菜单；
    Menubutton       它的功能完全可以使用Menu替代；
    Message          与Label组件类似，但是可以根据自身大小将文本换行；
    Scale      　　   滑块；允许通过滑块来设置一数字值
    Scrollbar        滚动条；配合使用canvas,entry,listbox,和text窗口部件的标准滚动条；
    Toplevel         用来创建子窗口窗口组件。
（在Tkinter中窗口部件类没有分级；所有的窗口部件类在树中都是兄弟。）
```

#### 控件的常见参数和方法

##### Button控件：

```
    anchor:      　　　　  指定按钮上文本的位置；
    background(bg)    　  指定按钮的背景色；
    bitmap:       　　　　 指定按钮上显示的位图；
    borderwidth(bd)　　　　指定按钮边框的宽度；
    command:   　　　　　  指定按钮消息的回调函数；
    cursor:        　　　　指定鼠标移动到按钮上的指针样式；
    font:           　　  指定按钮上文本的字体；
    foreground(fg)　　　　 指定按钮的前景色；
    height:        　　　　指定按钮的高度；
    image:        　　　　 指定按钮上显示的图片；
    state:          　　　 指定按钮的状态（disabled）；
    text:           　　　 指定按钮上显示的文本；
    width:       　　　　  指定按钮的宽度
    padx          　　　　 设置文本与按钮边框x的距离，还有pady;
    activeforeground　　　 按下时前景色
    textvariable    　　  可变文本，与StringVar等配合着用
```

##### Entry控件和Text控件：

```
    background(bg)   　　 文本框背景色；
    foreground(fg)        前景色；
    selectbackground　　  选定文本背景色；
    selectforeground　　  选定文本前景色；
    borderwidth(bd)    　 文本框边框宽度；
    font                　字体；
    show          　　    文本框显示的字符，若为'*'，表示文本框为密码框；
    state            　　 状态；
    width        　　　　  文本框宽度
    textvariable    　　  可变文本，与StringVar等配合着用
```

##### Label控件：

```
    Anchor        　　　　标签中文本的位置；
    background(bg)　　　　背景色；
    foreground(fg)　　    前景色；
    borderwidth(bd)　　   边框宽度；
    width        　　　　 标签宽度；
    height        　　　　标签高度；
    bitmap        　　　  标签中的位图；
    font            　　　字体；
    image        　　 　　标签中的图片；
    justify        　　　 多行文本的对齐方式；
    text    　　　　　　   标签中的文本，可以使用'\n'表示换行
    textvariable  　　　  显示文本自动更新，与StringVar等配合着用
```

##### Radiobutton控件和Checkbutton控件：

```
    anchor         　　文本位置；
    background(bg) 　　背景色；
    foreground(fg)    前景色；
    borderwidth       边框宽度；
    width        　　  组件的宽度；
    height     　　    组件高度；
    bitmap    　　     组件中的位图；
    image    　　      组件中的图片；
    font       　　    字体；
    justify       　　 组件中多行文本的对齐方式；
    text         　　  指定组件的文本；
    variable     　    指定组件所关联的变量；
    value      　　    指定组件被选中时，关联变量会被赋值为的值；
    indicatoron        特殊控制参数，当为0时，组件会被绘制成按钮形式;
    textvariable       可变文本显示，与StringVar等配合着用
```

##### Canvas控件：

```
    background(bg)  　　  背景色;
    foreground(fg)       前景色;
    borderwidth   　　　　组件边框宽度；
    width     　　　　    组件宽度；
    height     　　      高度;
    bitmap 　　          位图;
    image 　　　　        图片;
    绘图的方法主要以下几种：
        create_arc          圆弧;
        create_bitmap  　　  绘制位图，支持XBM;
        create_image    　　 绘制图片，支持GIF(x,y,image,anchor);
        create_line         绘制支线；
        create_oval;        绘制椭圆；
        create_polygon   　　绘制多边形(坐标依次罗列，不用加括号，还有参数，fill,outline)；
        create_rectangle　　 绘制矩形((a,b,c,d),值为左上角和右下角的坐标)；
        create_text         绘制文字(字体参数font,)；
        create_window    　　绘制窗口；
        delete            　 删除绘制的图形；
        itemconfig          修改图形属性，第一个参数为图形的ID，后边为想修改的参数；
        move          　　   移动图像（1，4，0），1为图像对象，4为横移4像素，0为纵移像素，然后用root.update()刷新即可看到图像的移动，为了使多次移动变得可视，最好加上time.sleep()函数；
        只要用create_方法画了一个图形，就会自动返回一个ID,创建一个图形时将它赋值给一个变量，需要ID时就可以使用这个变量名。
        coords(ID)          返回对象的位置的两个坐标（4个数字元组）；

对于按钮组件、菜单组件等可以在创建组件时通过command参数指定其事件处理函数。方法为bind;或者用bind_class方法进行类绑定，bind_all方法将所有组件事件绑定到事件响应函数上。
```

##### Menu控件

```
    tearoff      　   分窗，0为在原窗，1为点击分为两个窗口
    bg,fg       　　  背景，前景
    borderwidth    　 边框宽度
    font              字体
    activebackgound   点击时背景，同样有activeforeground，activeborderwidth，disabledforeground
    cursor
    postcommand
    selectcolor    　 选中时背景
    takefocus
    title       
    type
    relief

	方法：
    	menu.add_cascade      添加子选项
    	menu.add_command      添加命令（label参数为显示内容）
    	menu.add_separator    添加分隔线
    	menu.add_checkbutton  添加确认按钮
    	delete                删除
```

##### Listbox控件

```
    listvariable          StringVar等配合着用set一个元组或列表
    方法：
        lb.get(lb.curselection())    获取listbox的被选中的那一列的值
```

##### 通用方法

```python
#重新给控件配置参数，所有种类控件通用
.config(args)
#获取输入的值，主要是Entry控件和Text控件使用
.get()
#插入/删除值 第一个参数 'insert'/'end'，Listbox控件，Entry控件和Text控件使用
.insert('str',var)
.delete()
#插入/删除值 第一个参数是Listbox控件的index
.insert(index,var)
.delete(index)
```



## 控件的放置和排版

```
pack组件设置位置属性参数：
    after:    　　　 将组件置于其他组件之后；
    before:    　　　将组件置于其他组件之前；
    anchor:    　　  组件的对齐方式，顶对齐'n',底对齐's',左'w',右'e'
    side:    　　　　组件在主窗口的位置，可以为'top','bottom','left','right'（使用时tkinter.TOP,tkinter.E）；
    fill            填充方式 (Y,垂直，X，水平）
    expand          1可扩展，0不可扩展
grid组件使用行列的方法放置组件的位置，参数有：
    column:         组件所在的列起始位置；
    columnspam:     组件的列宽；
    row：      　　　组件所在的行起始位置；
    rowspam：    　　组件的行宽；
place组件可以直接使用坐标来放置组件，参数有：
    anchor:    　　　组件对齐方式；
    x:        　　　 组件左上角的x坐标；
    y:        　　   组件右上角的y坐标；
    relx:         　组件相对于窗口的x坐标，应为0-1之间的小数；
    rely:           组件相对于窗口的y坐标，应为0-1之间的小数；
    width:          组件的宽度；
    heitht:    　   组件的高度；
    relwidth:       组件相对于窗口的宽度，0-1；
    relheight:　    组件相对于窗口的高度，0-1；
```



## 变量的关联

```python
import tkinter as tk
"""
tk.StringVar()
能自动刷新的字符串变量，可用set和get方法进行传值和取值，类似的还有IntVar,DoubleVar...
"""
result = tkinter.StringVar()

#将result变量设置为字符串'0'
result.set('0')

#label2控件关联result变量
label2 = tkinter.Label(root,font = ('微软雅黑',30),bg = '#EEE9E9',bd ='9',fg = 'black',anchor = 'se',textvariable = result)

#放置label2控件，看起来像一个计算器上的显示屏
label2.place(y = 170,width = 280,height = 60) 

result.get()#可以返回变量的值
result.set(str)#可以修改变量的值
```



## 事件的关联

```
bind(sequence,func,add)——
bind_class(className,sequence,func,add)
bind_all(sequence,func,add)
事件参数：　　
sequence      　　　　　　　　所绑定的事件；
func            　　　　　　 所绑定的事件处理函数；
add             　　　　　　 可选参数，为空字符或‘+’；
className    　　　　　　　 　所绑定的类；

鼠标键盘事件
    <Button-1>        　  　鼠标左键按下，2表示中键，3表示右键；
    <ButtonPress-1>    　   同上；
    <ButtonRelease-1>　　　 鼠标左键释放；
    <B1-Motion>  　　       按住鼠标左键移动；
    <Double-Button-1>  　　 双击左键；
    <Enter>       　　      鼠标指针进入某一组件区域；
    <Leave>    　　         鼠标指针离开某一组件区域；
    <MouseWheel>  　   　　 滚动滚轮；
    <KeyPress-A> 　　  　　  按下A键，A可用其他键替代；
    <Alt-KeyPress-A>　　　   同时按下alt和A；alt可用ctrl和shift替代；
    <Double-KeyPress-A>　　  快速按两下A；
    <Lock-KeyPress-A>　　　  大写状态下按A；
   
窗口事件
    Activate        　　　　 当组件由不可用转为可用时触发；
    Configure      　　　　  当组件大小改变时触发；
    Deactivate    　　　　　 当组件由可用转变为不可用时触发；
    Destroy        　　　　  当组件被销毁时触发；
    Expose         　　　　　当组件从被遮挡状态中暴露出来时触发；
    Unmap        　　　　　　当组件由显示状态变为隐藏状态时触发；
    Map         　　　　     当组件由隐藏状态变为显示状态时触发；
    FocusIn       　　　 　  当组件获得焦点时触发；
    FocusOut      　　　　　 当组件失去焦点时触发；
    Property     　　　　    当窗体的属性被删除或改变时触发；
    Visibility       　　　　当组件变为可视状态时触发；

响应事件
event对象（def function(event)）：
    char        　　　　　　  按键字符，仅对键盘事件有效；
    keycode   　　　　　　  　按键名，仅对键盘事件有效；
    keysym     　　　　　　　 按键编码，仅对键盘事件有效；
    num          　　　　　　鼠标按键，仅对鼠标事件有效；
    type         　　　　    所触发的事件类型；
    widget      　　　　     引起事件的组件；
    width,heigh　　　　　　  组件改变后的大小，仅Configure有效；
    x,y       　  　　　　　　鼠标当前位置，相对于窗口；
    x_root,y_root　　　　　　 鼠标当前位置，相对于整个屏幕
```



## 弹窗的触发

```
messagebox._show函数的控制参数：
    default         指定消息框按钮；
    icon            指定消息框图标；
    message     　 　指定消息框所显示的消息；
    parent          指定消息框的父组件；
    title           标题；
    type            类型；

simpledialog模块参数：
    title           指定对话框的标题；
    prompt        　显示的文字；
    initialvalue    指定输入框的初始值；

　　filedialog　　　　模块参数：
    filetype   　　  指定文件类型；
    initialdir 　　  指定默认目录；
    initialfile 　　 指定默认文件；
    title    　　　  指定对话框标题

colorchooser模块参数：
    initialcolor  　 指定初始化颜色；
    title          　指定对话框标题；
```



## 示例：计算器代码

```python
import tkinter
root = tkinter.Tk()
root.geometry('280x500')
root.resizable(0,0)
root.title('计算器') 
result = tkinter.StringVar()
result.set('0')
result2 = tkinter.StringVar()
result2.set('')
label = tkinter.Label(root,font = ('微软雅黑',20),bg = '#EEE9E9',bd ='9',fg = '#828282',anchor = 'se',textvariable = result2)
label.place(width = 280,height = 170)
label2 = tkinter.Label(root,font = ('微软雅黑',30),bg = '#EEE9E9',bd ='9',fg = 'black',anchor = 'se',textvariable = result)
label2.place(y = 170,width = 280,height = 65)  
btn7 = tkinter.Button(root,text = '7',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('7'))
btn7.place(x = 0,y = 285,width = 70,height = 55)
btn8 = tkinter.Button(root,text = '8',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('8'))
btn8.place(x = 70,y = 285,width = 70,height = 55)
btn9 = tkinter.Button(root,text = '9',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('9'))
btn9.place(x = 140,y = 285,width = 70,height = 55)
btn4 = tkinter.Button(root,text = '4',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('4'))
btn4.place(x = 0,y = 340,width = 70,height = 55)
btn5 = tkinter.Button(root,text = '5',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('5'))
btn5.place(x = 70,y = 340,width = 70,height = 55)
btn6 = tkinter.Button(root,text = '6',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('6'))
btn6.place(x = 140,y = 340,width = 70,height = 55) 
btn1 = tkinter.Button(root,text = '1',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('1'))
btn1.place(x = 0,y = 395,width = 70,height = 55)
btn2 = tkinter.Button(root,text = '2',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('2'))
btn2.place(x = 70,y = 395,width = 70,height = 55)
btn3 = tkinter.Button(root,text = '3',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('3'))
btn3.place(x = 140,y = 395,width = 70,height = 55)
btn0 = tkinter.Button(root,text = '0',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda : pressBtn('0'))
btn0.place(x = 70,y = 450,width = 70,height = 55)
btnpoint = tkinter.Button(root,text = '.',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda:pressBtn('.'))
btnpoint.place(x = 140,y = 450,width = 70,height = 55)
btnac = tkinter.Button(root,text = 'AC',bd = 0.5,font = ('黑体',20),fg = 'orange',command = lambda :pressBtn('AC'))
btnac.place(x = 0,y = 230,width = 70,height = 55)
btnback = tkinter.Button(root,text = '←',font = ('微软雅黑',20),fg = '#4F4F4F',bd = 0.5,command = lambda:pressBtn('←'))
btnback.place(x = 70,y = 230,width = 70,height = 55)
btndivi = tkinter.Button(root,text = '÷',font = ('微软雅黑',20),fg = '#4F4F4F',bd = 0.5,command = lambda:pressBtn('÷'))
btndivi.place(x = 140,y = 230,width = 70,height = 55)
btnmul = tkinter.Button(root,text ='×',font = ('微软雅黑',20),fg = "#4F4F4F",bd = 0.5,command = lambda:pressBtn('×'))
btnmul.place(x = 210,y = 230,width = 70,height = 55)
btnsub = tkinter.Button(root,text = '-',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda:pressBtn('－'))
btnsub.place(x = 210,y = 285,width = 70,height = 55)
btnadd = tkinter.Button(root,text = '+',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda:pressBtn('＋'))
btnadd.place(x = 210,y = 340,width = 70,height = 55)
btnequ = tkinter.Button(root,text = '=',bg = 'orange',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda :pressEqual())
btnequ.place(x = 210,y = 395,width = 70,height = 110)
btnper = tkinter.Button(root,text = '%',font = ('微软雅黑',20),fg = ('#4F4F4F'),bd = 0.5,command = lambda:pressBtn('%'))
btnper.place(x = 0,y = 450,width = 70,height = 55)
errIndex = 1
def maNum(strNum):
    return str('{:.10g}'.format(float(strNum)))
def floatBase(numA,numB):
    aLastIndex = len(maNum(numA))- 1
    bLastIndex = len(maNum(numB))- 1
    aFloLen = 0 if maNum(numA).find('.')==-1 else aLastIndex-maNum(numA).find('.')
    bFloLen = 0 if maNum(numB).find('.')==-1 else bLastIndex-maNum(numA).find('.')
    return 10**(aFloLen if(aFloLen > bFloLen) else bFloLen)
def computed(numA,numB,sym,base):
    numA=float(numA)
    numB=float(numB)
    if sym=='＋':
        return (numA*base+numB*base)/base
    elif sym=='－':
        return (numA*base-numB*base)/base
    elif sym=='×':
        return (numA*base*(numB*base))/base**2
    elif sym=='÷':
        return numA*base/(numB*base)
def evaluation(arr):
    s=0
    e=len(arr)
    arr2=arr[s:e]
    symArr1 = list(filter((lambda z : z =='×' or z=='÷'),arr2))  
    symArr2 = list(filter((lambda z : z =='＋'or z=='－'),arr2))
    while 1:
        try:
            first = symArr1.pop(0)
        except:
            try:
                first = symArr2.pop(0)
            except:           
                break
        idx = arr2.index(first)
        sym = first
        base = floatBase(arr2[idx-1],arr2[idx+1])
        res = computed(arr2[idx-1],arr2[idx+1],sym,base)
        arr2[idx-1:idx+2]=[res]
    return arr2.pop(0)
def pressBtn(st):
    global errIndex
    if errIndex:
        if st =='←':
            result.set(str(result.get())[0:-1])
        elif st =='%':
            result2.set(str(result.get())+'×100%') 
            try:
                result.set(maNum(float(result.get())*100)+'%')
            except:
                errIndex = 0
                result.set("ERROR")
        elif st !='AC':                                
            oldst = str(result.get())           
            if st.isdecimal() and oldst =='0':    
                result.set(st)
            else:
                result.set(oldst + st)
    if st =='AC':
        result.set("0")
        result2.set("")
        errIndex = 1
def pressEqual():
    result2.set(str(result.get()))
    eq = str(result.get()).replace("＋",",＋,").replace("－",',－,').replace("×",",×,").replace("÷",',÷,')
    try:
        endNum = evaluation(arr=eq.split(','))
        endNum = maNum(endNum)
    except:
        global errIndex
        errIndex = 0
        endNum = "ERROR"
    result.set(endNum) 
root.mainloop()
```

