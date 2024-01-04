import { defineConfig } from "vitepress";
import mathjax3 from 'markdown-it-mathjax3';

const simple = (path: string, text: string) => ({ text, link: path + text });

export default defineConfig({
  //base: '/',
  base: '/nanarinonote/',
  lang: 'zh-CN',
  title: 'nanarinote',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nanarino' },
      { icon: 'twitter', link: 'https://twitter.com/kogawananari' }
    ],
    nav: [
      { text: 'JavaScript', link: '/js/', activeMatch: '/js/' },
      { text: 'Python', link: '/py/', activeMatch: '/py/' },
    ],
    sidebar: {
      '/js/': [
        {
          text: '起步',
          items: [
            { text: '0-准备环境', link: '/js/' },
            simple('/js/', '1-初识javascript'),
            simple('/js/', '2-数据类型伊始'),
            simple('/js/', '3-函数和对象属性'),
            simple('/js/', '4-流程控制'),
            simple('/js/', '5-运算符和类型转换')
          ]
        },
        {
          text: '函数和作用域',
          items: [
            '6-作用域和闭包',
            '7-js变量提升',
            '8-函数的基本用法',
            '9-定时器与异步',
            '10-函数的高级用法'
          ].map(text => simple('/js/', text))
        },
        {
          text: '对象和方法',
          items: [
            '11-字符串和数组',
            '12-解构赋值和序列化',
            '13-数学和日期对象',
            '14-对象方法扩展',
            '15-正则对象',
            '16-面向对象'
          ].map(text => simple('/js/', text))
        },
        {
          text: '新增语法规范',
          items: [
            '17-新增数据类型',
            '18-描述符和代理类',
            '19-TS以及实验性语法',
            '20-惰性函数和Promise',
            '21-async和await'
          ].map(text => simple('/js/', text))
        },
        {
          text: '作为浏览器脚本',
          items: [
            '22-DOM对象',
            '23-DOM事件',
            '24-BOM相关',
            '25-常用WebAPI',
            '26-前后端交互'
          ].map(text => simple('/js/', text))
        },
        {
          text: '作为服务端脚本',
          items: [
            '27-nodejs',
            '28-mongodb',
            '29-Koa2',
            '30-构建工具',
            '31-客户端构建'
          ].map(text => simple('/js/', text))
        },
      ],
      '/py/': [
        {
          text: '起步',
          items: [
            { text: '0-准备环境', link: '/py/' },
            simple('/py/', '1-初识python'),
            simple('/py/', '2-流程控制'),
            simple('/py/', '3-异常处理')
          ]
        },
        {
          text: '数据类型',
          items: [
            '4-数字和字符串',
            '5-列表和元组',
            '6-字典和集合',
            '7-字符串格式化',
            '8-三目和推导式',
            '9-数据类型拓展',

          ].map(text => simple('/py/', text))
        },
        {
          text: '函数',
          items: [
            '10-文件处理',
            '11-日志处理',
            '12-内置函数',
            '13-闭包和装饰器',
            '14-递归和深拷贝',
            '15-迭代器和生成器',
          ].map(text => simple('/py/', text))
        },
        {
          text: '面向对象',
          items: [
            '16-类和对象',
            '17-封装和继承',
            '18-魔术方法',
            '19-多态和泛型',
            '20-模块和包',
          ].map(text => simple('/py/', text))
        },
        {
          text: '常用模块',
          items: [
            '21-加密有关模块',
            '22-序列化有关模块',
            '23-正则有关模块',
            '24-时间有关模块',
            '25-数学有关模块',
          ].map(text => simple('/py/', text))
        },
        {
          text: '并发编程',
          items: [
            '26-系统有关模块',
            '27-套接字socket',
            '28-进程',
            '29-线程',
            '30-协程',
          ].map(text => simple('/py/', text))
        },
        {
          text: 'WEB相关',
          items: [
            '31-SQL和ORM',
            '32-FastAPI'
          ].map(text => simple('/py/', text))
        },
      ]
    }
  },
  markdown: {
    config: md => md.use(mathjax3),
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => [
          'math',
          'maction',
          'maligngroup',
          'malignmark',
          'menclose',
          'merror',
          'mfenced',
          'mfrac',
          'mi',
          'mlongdiv',
          'mmultiscripts',
          'mn',
          'mo',
          'mover',
          'mpadded',
          'mphantom',
          'mroot',
          'mrow',
          'ms',
          'mscarries',
          'mscarry',
          'mscarries',
          'msgroup',
          'mstack',
          'mlongdiv',
          'msline',
          'mstack',
          'mspace',
          'msqrt',
          'msrow',
          'mstack',
          'mstack',
          'mstyle',
          'msub',
          'msup',
          'msubsup',
          'mtable',
          'mtd',
          'mtext',
          'mtr',
          'munder',
          'munderover',
          'semantics',
          'math',
          'mi',
          'mn',
          'mo',
          'ms',
          'mspace',
          'mtext',
          'menclose',
          'merror',
          'mfenced',
          'mfrac',
          'mpadded',
          'mphantom',
          'mroot',
          'mrow',
          'msqrt',
          'mstyle',
          'mmultiscripts',
          'mover',
          'mprescripts',
          'msub',
          'msubsup',
          'msup',
          'munder',
          'munderover',
          'none',
          'maligngroup',
          'malignmark',
          'mtable',
          'mtd',
          'mtr',
          'mlongdiv',
          'mscarries',
          'mscarry',
          'msgroup',
          'msline',
          'msrow',
          'mstack',
          'maction',
          'semantics',
          'annotation',
          'annotation-xml',
          'mjx-container',
          'mjx-assistive-mml',
        ].includes(tag),
      },
    },
  },
})
