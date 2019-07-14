# js执行顺序

## `var`的变量提升

```js
console.log(a);
var a = 3;
//打印undefined而不是报错
```

通常的，JS代码是从上往下一行一行执行的，但是在这之前还有一个编译阶段，编译阶段会会构建出词法作用域。

当前作用域里面的声明的变量有什么。执行的过程种再依赖作用域执行。

所以以上代码，其真正的代码顺序是：

```js
var a;
//编译阶段词法作用域
console.log(a);
a = 3;//赋值操是在代码执行阶段进行。
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

TDZ是“暂时性死区”，`let`和`var`非常类似，都是在作用域中声明一个变量。但是`let`和`var`有明显不同。

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

for循环的`let`

```js
for(let i = 0;i < 10; i++){
    console.log(i);//0到9打印
}
```

此时每个i的作用域在其中的`{}`中间

`const`声明的常量：

和`let`非常类似，唯一区别就是`const`不允许修改变量值，并且初始化的时候就要赋值。常量变量名请大写。

```js
const MAX = 99;
MAX = 100;//Uncaught TypeError: Assignment to constant variable.
```

* 不存在变量提升，拥有一个暂时性死区
* 不能重复申明
* 是块级作用域，会强行绑定在这个区域



## 函数声明和函数表达式

函数也是用关键字声明的，只不过是`function`关键词。

函数是一种特殊的变量，也拥有作用域，变量名，变量提升。

```js
foo();
function foo(){//foo变量提升，先声明再执行
    console.log("foo执行！");
}
```

与`var`的关系：函数是`JavaScript`的第一等公民，所以优先级很高(最高)

```js
console.log(foo);//ƒ foo(){console.log(1)}
function foo(){
    console.log(1);
}
var foo = 2;
console.log(foo);//代码执行顺序被强行修改成了数值类型
```

`var`和`function`同为变量声明，同有变量提升，但是`function`是第一等公民，优先级高，所以通过`var`和`function`声明的变量只有`function`的生效。

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

函数提升只能在代码块里面提升，不能在函数作用域提升，相当于函数表达式。**请避免在代码块里面声明函数**

函数表达式，相当于将匿名函数赋值给变量a：不存在变量提升

```js
console.log(a);//undefined
var a = function(){};
console.log(a);//ƒ foo(){}
```

注意代码的书写顺序
