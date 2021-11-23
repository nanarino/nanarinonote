module.exports = {
    //base: '/',
    base: '/nanarinonote/',
    evergreen: true,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '7rinote',
            description: '今年的冬天很长吧？然后我最喜欢的赏樱推迟又推……终于，以为到了春天，樱花却突然很快的开了，又很快地凋谢了……这么悔恨的年份根本就没有吧？'
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', href: `./favicon.ico` }]
    ],
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
                        '3-函数和对象属性',
                        '4-流程控制',
                        '5-运算符和类型转换'
                    ]
                },
                {
                    title: '函数和作用域',
                    children: [
                        '6-作用域和闭包',
                        '7-js变量提升',
                        '8-函数的基本用法',
                        '9-定时器与异步',
                        '10-函数的高级用法'
                    ]
                },
                {
                    title: '对象和方法',
                    children: [
                        '11-字符串和数组',
                        '12-解构赋值和序列化',
                        '13-数学和日期对象',
                        '14-对象方法扩展',
                        '15-正则对象',
                        '16-面向对象'
                    ]
                },
                {
                    title: '新增语法规范',
                    children: [
                        '17-新增数据类型',
                        '18-描述符和代理类',
                        '19-TS以及实验性语法',
                        '20-惰性函数和Promise',
                        '21-async和await'
                    ]
                },
                {
                    title: '作为浏览器脚本',
                    children: [
                        '22-DOM对象',
                        '23-DOM事件',
                        '24-BOM相关',
                        '25-常用WebAPI',
                        '26-前后端交互'
                    ]
                },
                {
                    title: '作为服务端脚本',
                    children: [
                        '27-nodejs',
                        '28-mongodb',
                        '29-Koa2',
                        '30-构建工具',
                        '31-Vue',
                        '32-Electron'
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
                        '12-内置函数',
                        '13-闭包和装饰器',
                        '14-递归和深拷贝',
                        '15-迭代器和生成器',
                    ]
                },
                {
                    title: '面向对象',
                    children: [
                        '16-类和对象',
                        '17-封装和继承',
                        '18-魔术方法',
                        '19-多态和泛型',
                        '20-模块和包',
                    ]
                },
                {
                    title: '常用模块',
                    children: [
                        '21-加密有关模块',
                        '22-序列化有关模块',
                        '23-正则有关模块',
                        '24-时间有关模块',
                        '25-数学有关模块',
                    ]
                },
                {
                    title: '并发编程',
                    children: [
                        '26-系统有关模块',
                        '27-套接字socket',
                        '28-进程',
                        '29-线程',
                        '30-协程',
                    ]
                },
                {
                    title: 'WEB相关',
                    children: [
                        '31-SQL和ORM',
                        '32-Django',
                        '33-FastAPI',
                    ]
                },
            ],
        },
    },
    plugins: [
        [
            'vuepress-plugin-mathjax',
            {
                macros: {
                    '*': '\\times',
                },
            },
        ],
    ],
}