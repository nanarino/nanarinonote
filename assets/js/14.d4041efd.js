(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{210:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"迭代器和生成器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代器和生成器","aria-hidden":"true"}},[t._v("#")]),t._v(" 迭代器和生成器")]),t._v(" "),s("h4",{attrs:{id:"递归和迭代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归和迭代","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归和迭代")]),t._v(" "),s("h4",{attrs:{id:"迭代器协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迭代器协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 迭代器协议")]),t._v(" "),s("p",[t._v("​    对象必须提供next方法")]),t._v(" "),s("p",[t._v("​    "),s("code",[t._v("next()")]),t._v("要么返回下一项要么引起"),s("code",[t._v("StopIteration")]),t._v("异常以终止迭代")]),t._v(" "),s("h4",{attrs:{id:"可迭代对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可迭代对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 可迭代对象")]),t._v(" "),s("p",[t._v("​    实现了迭代器协议的对象,内部定义了"),s("code",[t._v("__iter__")]),t._v("方法")]),t._v(" "),s("p",[t._v("​    python的内部工具(for,sum函数等)使用迭代器协议访问对象")]),t._v(" "),s("h4",{attrs:{id:"for循环机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for循环机制","aria-hidden":"true"}},[t._v("#")]),t._v(" for循环机制")]),t._v(" "),s("p",[t._v("​    for循环做的事情:")]),t._v(" "),s("p",[t._v("​        需要遍历的对象(广义的可迭代对象)")]),t._v(" "),s("p",[t._v("​        "),s("code",[t._v(".__iter__()")]),t._v("转化为Iterator(可迭代对象)")]),t._v(" "),s("p",[t._v("​        此Iterator"),s("code",[t._v(".__next__()")]),t._v("访问下一个")]),t._v(" "),s("p",[t._v("​        捕获StopIteration异常")]),t._v(" "),s("p",[t._v("​    它既可以遍历有序列类型 也可遍历无序列类型")]),t._v(" "),s("h4",{attrs:{id:"内置方法next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置方法next","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置方法next()")]),t._v(" "),s("p",[t._v("​    "),s("code",[t._v("next(Obj)")]),t._v(" 相当于 "),s("code",[t._v("Obj.__next__()")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__iter__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("str_iterator "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),t._v(" at "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000000002AD6438")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h4",{attrs:{id:"生成器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成器","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成器")]),t._v(" "),s("p",[t._v("​    自己实现了迭代器协议")]),t._v(" "),s("p",[t._v("​    不需要调用"),s("code",[t._v("__iter__")]),t._v("方法")]),t._v(" "),s("p",[s("strong",[t._v("生成器就是可迭代对象")])]),t._v(" "),s("h4",{attrs:{id:"生成器函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成器函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成器函数:")]),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("yield")]),t._v("而不是return 多个")]),t._v(" "),s("p",[t._v("生成器函数执行返回一个可迭代对象")]),t._v(" "),s("p",[t._v("可迭代对象每次next返回一个,保存了函数的状态")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("generator "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("object")]),t._v(" a at "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000000002B002A0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h4",{attrs:{id:"生成器表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成器表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成器表达式:")]),t._v(" "),s("p",[t._v("​    类似上一节讲过的列表解析 但是不是使用中括号,而是使用圆括号")]),t._v(" "),s("h4",{attrs:{id:"send-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#send-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" send()方法")]),t._v(" "),s("p",[t._v("​    其参数代替上一轮的yield语句完成下一轮next")])])}],!1,null,null,null);a.default=e.exports}}]);