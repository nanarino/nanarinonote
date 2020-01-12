module.exports = {
    base: '/markdown-note/',
    title: 'nanarino note',
    head: [
        ['link', { rel: 'shortcut icon', href: `./favicon.ico` }]
    ],
    description: 'super best match, are you ready',
    themeConfig: {
        nav: [
            { text: 'JavaScript', link: '/js/' },
            { text: 'Python', link: '/py/' },
            {
                text: 'about',
                items: [
                    { text: 'Github', link: 'https://github.com/nanarino' },
                    { text: 'MySite', link: 'http://www.akokono.com' }
                ]
            }
        ],
        sidebar: {
            '/js/': [
                {
                    title: '起步',
                    children: [
                        '',
                        '1-初识javascript',
                        '2-数据类型伊始',
                        '3-函数和自定义属性',
                        '4-流程控制',
                        '5-运算符和类型转换'
                    ]
                },
                {
                    title: '函数和作用域',
                    children: [
                        '6-作用域和闭包',
                        '7-js执行顺序',
                        '8-函数的基本用法',
                        '9-定时器与异步',
                        '10-函数的高级用法'
                    ]
                },
                {
                    title: '对象和方法',
                    children: [
                        '11-字符串和数组',
                        '12-ES6解构赋值',
                        '13-数学对象和日期对象',
                        '14-ES6方法扩展',
                        '15-正则对象',
                        '16-面向对象',
                        '17-Symbol、Set和Map'
                    ]
                },
                {
                    title: 'BOM和DOM',
                    children: [
                        '18-DOM方法',
                        '19-事件相关',
                        '20-BOM相关',
                        '21-H5新增方法'
                    ]
                },
                {
                    title: '补充知识点',
                    children: [
                        '22-重新实现某些方法',
                        '23-排序算法的实现',
                        '24-生成器和Promise',
                        '25-async和await',
                        '26-Proxy和Reflect',
                        '27-ajax和fetch'
                    ]
                },
                {
                    title: 'WEB框架',
                    children: [
                        '28-nodejs',
                        '29-mongodb',
                        '30-Koa2',
                        '31-webpack',
                        '32-Vue',
                        '33-Electron'
                    ]
                },
            ],
            '/py/': [
                {
                    title: '起步',
                    children: [
                        '',
                        '1-初识python',
                        '2-流程控制',
                    ]
                },
                {
                    title: '数据类型',
                    children: [
                        '3-数字和字符串',
                        '4-列表和元组',
                        '5-字典和集合',
                        '6-字符串格式化',
                    ]
                },
                {
                    title: '函数',
                    children: [
                        '7-文件处理',
                        '8-函数和作用域',
                        '9-闭包和装饰器',
                        '10-递归和深拷贝',
                        '11-三目和列表解析',
                        '12-迭代器和生成器',
                    ]
                },
                {
                    title: '常用模块',
                    children: [
                        '13-正则表达式',
                        '14-collections模块',
                        '15-时间有关模块',
                        '16-random模块',
                        '17-os模块和sys模块',
                        '18-序列化有关模块',
                        '19-模块和包',
                        '20-异常抛出和捕获',
                    ]
                },
                {
                    title: '面向对象',
                    children: [
                        '21-类和对象',
                        '22-面向对象特性',
                        '23-魔术方法',
                        '24-加密有关模块',
                        '25-configparser模块',
                        '26-logging模块',
                    ]
                },
                {
                    title: '网络编程',
                    children: [
                        '27-网络编程基础',
                        '28-套接字socket',
                        '29-黏包',
                    ]
                },
                {
                    title: 'WEB框架',
                    children: [
                        '30-SQL语句',
                        '31-pymssql模块',
                        '32-Django',
                        '33-Tornado',
                    ]
                },
                {
                    title: '杂项知识点',
                    children: [
                        '34-Tkinter模块',
                        '35-PyInstaller模块',
                        '36-PyAutoGUI模块',
                    ]
                },
            ],
        },
    },
}