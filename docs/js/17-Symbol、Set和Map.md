# Symbol、Set和Map

## `Symbol`

它是ES6新引入的一种**原始**数据类型。使用`Symbol()`可以直接生成一个新的值。

ES5里面的对象的属性名是字符串，当我们**使用别人的对象**的时候，我不知道别人的对象有哪些属性，但是我又想添加一些新属性。如果直接写就有可能存在重名的情况，于是我们借助`Symbol`来生成一个独一无二的值，这样就可以防止属性名的冲突了。

```js
let symbol = Symbol()
console.log(Symbol())//Symbol()
typeof symbol//"symbol"
```

它不是一个构造函数，不能用`new`操作符。所以`Symbol`的值也不是一个对象，不能添加属性，可以理解为一个字符串的数据类型

* `Symbol`的参数

  **字符串做参数**，用于描述生成的`Symbol`方便自己区分生成的`Symbol`

```js
let name = Symbol("name"),
    age1 = Symbol("age")
console.log(name, age1)//Symbol("name") Symbol("age")
name === age1//false
let age2 = Symbol("age")
age1 === age2//false
```

1. 打印的时候可以区分你用的是哪个值

2. 打印只是打印当前的`Symbol`的值的标识符，然而相同的标识符的`Symbol`是不一样的

   **对象做参数** 

   虽然可以使用，但是`Symbol`本质内部对参数对象做了`toString`方法，还是字符串。
* `Symbol`的计算问题

  不能计算。除了`toString`和转布尔类型，因为本质上`Symbol`也是一个对象

  ```js
  let symbol = Symbol("1")
  symbol.toString()//"Symbol(1)"
  Boolean(symbol)//true
  Number(symbol)//报错
  ```

* `Symbol`作属性名

它的存在就是做一个属性名的

```js
let obj = {},
    s1 = Symbol()
obj[s1] = "value of Symbol"
//或者
obj{
    [s1]: "value of Symbol"
}
//Object.defineProperty
Object.defineProperty(obj,s1,{value: "value of Symbol"})
obj.s1//等价于obj["s1"] undefined
obj[s1]//value of Symbol
obj[s1] = 123
```

```js
var toString = Symbol("toString")
Object.prototype[toString] = function(){
    return 1
}
var a = {a:1}
a.toString()//"[Object object]"
a[toString]() // 1
```



在对象内部定义`Symbol`属性的时候必须加方括号，不然解析会被认为是字符串。

* `Symbol`的作为属性名的遍历

`for...in`和`for...of`都无法遍历到`Symbol`值的属性，`Symbol`值作为对象的属性也无法被`Object.keys()`和`Object.getOwnPropertyNames()`来获取。

可以使用`Object.getOwnPropertySymbols()`来获取。

```js
let s1 = Symbol("s1"),
    s2 = Symbol("s2")
let o = {}
o[s1] = "symbol s1"
o[s2] = "symbol s2"
o["s3"] = "s3"
for(let i in o){
    console.log(i)//"s3"
}
Object.keys(o)//["s3"]
Object.getOwnPropertySymbols(o)//[Symbol(s1), Symbol(s2)]
```

* `Symbol.for()`和`Symbol.keyFor()`

  `Symbol.for`接受一个字符串参数，查询有没有这个参数的`Symbol`值，有的话就直接返回这个`Symbol`值，没有就返回一个这个参数的`Symbol()`

  ES5里面的对象的属性名是字符串，当我们**使用别人的对象**的时候，我不知道别人的对象有哪些属性，但是我又想添加一些新属性。如果直接写就有可能存在重名的情况，于是我们借助Symbol来生成一个独一无二的值，这样就可以防止属性名的冲突了。

```js
let s1 = Symbol("s1")
let s2 = Symbol.for("s2");//Symbol("s2")
s2 === Symbol.for("s2");//true
```

​	`Symbol.keyFor`函数是用来查询`Symbol`的登记状态的，如果没有就返回`undefined`，而`Symbol.for`会将生成的Symbol值登记到全局环境中，`Symbol.keyFor`会查询到`Symbol.for`函数生成的`Symbol`值

```js
let s1 = Symbol.for("s1"),
    s2 = Symbol.for("s2"),
	s3 = Symbol("s3"),
	s4 = Symbol("s4")

console.log(Symbol.keyFor(s1))//"s1"
console.log(Symbol.keyFor(s2))//"s2"
console.log(Symbol.keyFor(s3))//undefined
```
* **内置的`Symbol`的值**

  ES6提供了11个内置的属性，分别是

  * `Symbol.hasInstance`

    * 使用`instanceOf`方法时调用此属性，判断某一对象是否是某构造函数的实例

    ```js
    class OneEnd{ // 判断末尾是否为0 
        static [Symbol.hasInstance](num){
            return Number(num)%10==1
        }
    }
    "123" instanceof ZeroEnd//false
    "1230" instanceof ZeroEnd//true
    ```

  * `Symbol.isConcatSpreadable`

    * 作为数组连接的时候是否允许展开，默认可以

    ```js
    let arr1 = [1, 2],
        arr2 = [3, 4]
    arr2[Symbol.isConcatSreadable]//undefined
    arr1.concat(arr2, 5)//[1, 2, 3, 4, 5]
    arr2[Symbol.isConcatSpreadable] = false
    arr1.concat(arr2, 5)//[1, 2, [3, 4], 5]
    arr2[Symbol.isConcatSpreadable] = true
    arr1.concat(arr2, 5)//[1, 2, 3, 4, 5]
    ```

  * `Symbol.species` 

  * `Symbol.match`

  * `Symbol.replace`

  * `Symbol.search`

  * `Symbol.split`

  * **`Symbol.iterator`**

    * 指向默认遍历方法，使用迭代器函数来遍历

    ```js
    let obj = {0:"a", 1:"b", 2:"c", length:3}
    obj[Symbol.iterator] = function* (){
        let i = 0
        while(i<this.length){
            yield this[i++]
        }
    }
    for(let i of obj){
        console.log(i)//"a" "b" "c"
    }
    ```

  * `Symbol.toPrimitive`

  * `Symbol.toStringTag`

  * `Symbol.unscopables`



## 集合Set

Set是一个构造函数，用来生成Set的数据结构，类似数组，但是成员值都是唯一的，没有重复

```js
const s1 = new Set()
[1, 1, 1, 3, 2, 565, 76].forEach(i=>s1.add(i))

for(let i of s1){
    console.log(i)
}
//1, 3, 2, 565, 76
//解构
console.log([...s1])//[1, 3, 2, 565, 76]
//接受数组参数新生成set
const s2 = new Set([1, 2, 3, 5])
```

数据去重简单做法

```js
[...new Set(arr)]// 
```

实例方法： 

* `add` 添加元素，返回`Set`本身
* `size` 返回实例成员长度
* `delete` 删除某个具体的值，返回`true`或者`false`表示成败
* `clear` 清空，无返回
* `has` 查询参数是否是`set`的成员

`Array.from()`方法可以传入`set`实例对象转数组。

遍历方法：

* Set数据类型有四个遍历方法，用于遍历成员。

  * `keys`: 返回遍历的键名，等价于键值
  * `values`: 返回遍历的键值
  * `entries`: 返回键值对的遍历器。
  * `forEach`: 使用回调函数遍历每一个成员

  ```js
  let set = new Set([1, 2, 3, 4])
  
  for(let i of set.keys()) console.log(i)//1 2 3 4
  
  for(let i of set.values()) console.log(i)//1 2 3 4
  
  for(let i of set.entries()) console.log(i)//[1, 1] [2, 2] [3, 3] [4, 4]
  
  set.forEach(i=>console.log(i))//1 2 3 4
  ```



## 映射Map

原生JavaScript的对象的本质就是一个由键与值的映射，值可以是任意数据类型，但是键只能是字符串。

es6为了拓展键名的范围，使用了Map，让键名成为复杂对象

```js
let el = document.querySelector(".box"),
    map = new Map(),
    content = {description: "这是主要演示区域", belongTo: "page1", coder:"Gin"}
map.set(el, content)//返回Map对象
map.has(el)//true
map.has(content)//false
map.get(el)===content//true
```

Map的方法

* `size` 返回长度
* `set` 设置映射关系，键名第一个参数，键值是第二个参数，返回本身
* `has` 查询键名，返回布尔值
* `get` 传入键名，返回键值，没有就是返回undefined
* `delete` 传入键名，返回布尔类型，失败是false
* `clear` 清空`map`

遍历方法和set方法一样，遍历顺序就是set顺序

- `keys`: 返回遍历的键名
- `values`: 返回遍历的键值
- `entries`: 返回键值对的遍历器。
- `forEach`: 使用回调函数遍历每一个成员

