# js变量提升

## `var`的变量提升

```js
console.log(a);
var a = 3;
//打印undefined而不是报错
```

通常的，JS代码是从上往下一行一行执行的，但是在这之前还有一个编译阶段，编译阶段会会构建出词法作用域。    
当前作用域里面的声明的变量有什么。执行的过程中再依赖作用域执行。    
所以以上代码，其真正的代码顺序是：

```js
var a;
//编译阶段词法作用域
console.log(a);
a = 3;//赋值操作是在代码执行阶段进行。
```

这就叫变量提升。`function`也具有变量提升。

var还会穿透块级作用域：

```js
console.log(a);//undefined,这里不会报错
if(true){
    console.log(a);//undefined,这里不会报错
}else{
    var a = 3;
}
```

## `let`  `const` 的TDZ

TDZ是“暂时性死区”，`let`和`var`非常类似，都是在作用域中声明一个变量。    
但是`let`和`var`有明显不同。

`let`声明的变量

* 是块级作用域，会强行绑定在这个区域

```js
var a = 10;
if(true){
    let a = 1;
    console.log(a);//1
}
console.log(a);//10
```

在`if`里的块级作用域里面申明了一个变量a，a在块级作用域生效，不会对外界产生影响

* 不存在变量提升，拥有一个暂时性死区。

```js
a = 2;//Uncaught ReferenceError: a is not defined
console.log(a);//Uncaught ReferenceError: a is not defined
let a;
console.log(a);//Uncaught ReferenceError: a is not defined
a = 3;
```

请在声明之后，使用之前赋值!

* 不能重复声明

```js
let a;
var a;//Uncaught SyntaxError: Identifier 'a' has already been declared
let a;//Uncaught SyntaxError: Identifier 'a' has already been declared
```

for循环推荐使用`let`，可以少写闭包的代码（参考前一章节末尾处）

```js
for(let i = 0;i < 10; i++){
    console.log(i);//0到9打印
}
```

此时每个i的作用域在其中的`{}`中间

`const`声明的常量：

和`let`非常类似，唯一区别就是`const`不允许修改变量值，并且初始化的时候就要赋值。常量变量名通常是大写。

```js
const MAX = 99;
MAX = 100;//Uncaught TypeError: Assignment to constant variable.
```

* 不存在变量提升，拥有一个暂时性死区
* 不能重复申明
* 是块级作用域，会强行绑定在这个区域

## `function`的变量提升

函数也是用关键字声明的，只不过是`function`关键词。    
函数是一种特殊的变量，也拥有作用域，变量名，变量提升，穿透块级作用域。

```js
foo();
function foo(){//foo变量提升，先声明再执行
    console.log("foo执行！");
}
```

与`var`的区别：

函数是`JavaScript`的第一等公民，所以优先级很高(最高)    
`function`声明的函数可以在声明之前调用。（真正的变量提升）    
`var`声明的变量在声明之前使用虽不会报错但会是`undefined`.（虚假的变量提升）

```js
console.log(foo);//ƒ foo(){console.log(1)}
function foo(){
    console.log(1);
}
var foo = 2;
console.log(foo);//代码执行顺序被强行修改成了数值类型
```

`var`和`function`同为变量声明，同有变量提升，    
但是`function`优先级高，通过`var`和`function`声明的变量只有`function`的生效。

```js
if(true){
    console.log(foo);//undefined，此时foo变量声明了但是没有赋值。
}else{
    function foo(){
        console.log(1);
    }
}
```

```js
console.log(foo);//foo is not a function
{
    function foo(){}
}
```

函数提升只能在代码块里面提升，不能在函数作用域提升，相当于函数表达式。    
所以前面章节说推荐用`let` + 表达式定义函数，**避免在代码块里面声明函数**    
函数表达式，相当于将匿名函数赋值给变量a：不存在变量提升

```js
console.log(a);//undefined
var a = function(){};
console.log(a);//ƒ foo(){}
```

注意代码的书写顺序

## 严格模式

函数开头可以加一`use strict;`让函数变成严格模式

- 不允许用`with`
- 所有变量必须声明，赋值给未声明的变量报错，而不是隐匿创建全局变量。
- `eval`中的代码不能创建`eval`所在作用域下的变量、函数。而是为`eval`单独创建一个作用域，并在`eval`返回时丢弃。
- 函数中的特殊对象`arguments`是静态副本，而不像非严格模式那样，修改`arguments`或修改参数变量会相互影响。
- 删除`configurable=false`的属性时报错，而不是忽略。
- 对象字面量重复属性名报错。
- 禁止八进制字面量，如`010`（八进制的8）。
- 严格模式下`eval`、`arguments`变为关键字，不能用作变量名。
- 一般函数调用时（不是对象的方法调用，也不使用`apply/call/bind`等修改`this`）`this`指向`null`，而不是全局变量。
- 试图修改不可写属性（`writable=false`），在不可扩展的对象上添加属性时报`TypeError`，而不是忽略。
- `arguments.caller`,`arguements.callee`被禁用
