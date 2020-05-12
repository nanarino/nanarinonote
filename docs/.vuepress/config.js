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
                    { text: 'Twitter', link: 'https://twitter.com/kogawananari' }
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
                    title: '杂项方法',
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
                    title: 'WEB相关',
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
                        '3-异常处理',
                    ]
                },
                {
                    title: '数据类型',
                    children: [
                        '4-数字和字符串',
                        '5-列表和元组',
                        '6-字典和集合',
                        '7-字符串格式化',
                        '8-三目和推导式',
                        '9-数据类型拓展',
                        
                    ]
                },
                {
                    title: '函数',
                    children: [
                        '10-文件处理',
                        '11-日志处理',
                        '12-函数和作用域',
                        '13-闭包和装饰器',
                        '14-递归和深拷贝',
                        '15-迭代器和生成器',
                    ]
                },
                {
                    title: '面向对象',
                    children: [
                        '16-类和对象',
                        '17-面向对象特性',
                        '18-魔术方法',
                        '19-模块和包',
                    ]
                },
                {
                    title: '常用模块',
                    children: [
                        '20-加密有关模块',
                        '21-序列化有关模块',                    
                        '22-正则有关模块',
                        '23-时间有关模块',
                        '24-数学有关模块',
                    ]
                },
                {
                    title: '并发编程',
                    children: [
                        '25-系统有关模块',
                        '26-套接字socket',
                        '27-进程',
                        '28-线程',
                        '29-协程',
                    ]
                },
                {
                    title: 'WEB相关',
                    children: [
                        '30-SQL语句',
                        '31-pymssql模块',
                        '32-Django',
                        '33-Tornado',
                    ]
                },
                {
                    title: '杂项模块',
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