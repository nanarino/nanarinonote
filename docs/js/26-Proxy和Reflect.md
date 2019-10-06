# Proxy和Reflect

Proxy 与 Reflect 是 ES6 为了操作对象引入的 API 。

Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。

Proxy 不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。

Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。

Reflect 对象使用函数的方式实现了 Object 的命令式操作。它的方法与 Proxy 是对应的。


::: tip 提示
这里只示例最简单的组合用法，更多用法可以在MDN中查看有关文档。
:::

```js
let n = {  
    a:0,
    b:1,
}; 

let m = new Proxy(n, {
    get(target, key, value, proxy) { 
        return Reflect.get(target, key, value, proxy)
    },
    set(target, key, value, proxy) { 
        console.log("代理的对象是",target)
        console.log("被修改的键是",key)
        console.log("其值将会被修改为",value)
        return Reflect.set(target, key, value, proxy)
    },
});

m.a = 8
console.log(n.a)
```

其中 m是n的代理对象 m和n中间构成了所谓的**单向数据绑定**。

这将会是JavaScript框架`Vue3`的响应原理（在2019年10月5日0点公布了源码）。

其他写法这里也有直接`n= new Proxy(n, {...})`来覆盖的，代理对象即为它本身。