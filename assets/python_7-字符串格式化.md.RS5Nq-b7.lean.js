import{_ as i,c as a,a0 as t,o as n}from"./chunks/framework.CxXbVT5p.js";const c=JSON.parse('{"title":"字符串格式化","description":"","frontmatter":{},"headers":[],"relativePath":"python/7-字符串格式化.md","filePath":"python/7-字符串格式化.md","lastUpdated":1734618217000}'),e={name:"python/7-字符串格式化.md"};function h(p,s,l,k,d,o){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="字符串格式化" tabindex="-1">字符串格式化 <a class="header-anchor" href="#字符串格式化" aria-label="Permalink to &quot;字符串格式化&quot;">​</a></h1><p>Python 的字符串格式化有两种方式</p><ul><li>%格式符方式</li><li>format 方式</li></ul><p>事实上，格式化借助的是对象的魔术方法。<br> 实现了<code>__format__</code>的对象才适用于 format 方式格式化输出，<br> 实现了<code>__str__</code>，<code>__repr__</code>的对象才分别适用于格式符<code>%s</code>和<code>%r</code>输出。<br> 在面向对象章节有给对象定义魔术方法的示例。</p><h2 id="格式符" tabindex="-1"><code>%</code>格式符 <a class="header-anchor" href="#格式符" aria-label="Permalink to &quot;\`%\`格式符&quot;">​</a></h2><p>一般格式为 <code>%(name)</code> + <a href="https://docs.python.org/zh-cn/3/library/string.html#formatspec" target="_blank" rel="noreferrer">format_spec</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[[fill]align][sign][#][0][width][grouping_option][.precision][type]</span></span></code></pre></div><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>可选，用于选择指定的 key</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%(name)s——%(age)d&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;宝钟玛琳&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;宝钟玛琳——17&#39;</span></span></code></pre></div><p>s 和 d 属于 [<code>type</code>]</p><p>format_spec 规则的常用组分：</p><h3 id="sign" tabindex="-1">sign <a class="header-anchor" href="#sign" aria-label="Permalink to &quot;sign&quot;">​</a></h3><p>可选，数字和字符串可供选择的值有：</p><ul><li><code>+</code> 右对齐；正数负数前加正负号</li><li><code>-</code> 左对齐；负数前加负号</li><li>空格 右对齐；负数前加负号</li><li><code>0</code> 右对齐；正数前无符号，负数前加负号；用 0 填充空白处</li></ul><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>可选，占有宽度</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%(name)+7s——%(age)-5d&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;宝钟玛琳&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;   宝钟玛琳——17   &#39;</span></span></code></pre></div><h3 id="precision" tabindex="-1">.precision <a class="header-anchor" href="#precision" aria-label="Permalink to &quot;.precision&quot;">​</a></h3><p>可选，小数点后保留的位数 默认 6 位</p><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>类型，必选</p><p>任意对象：</p><ul><li><p><code>%s</code> 字符串 (采用<code>str()</code>的显示)</p></li><li><p><code>%r</code> 字符串 (采用<code>repr()</code>的显示)</p></li><li><p><code>%c</code> 单个字符</p></li></ul><p>字符串和整数：</p><ul><li><code>%b</code> 二进制整数</li><li><code>%%</code> 字符&quot;%&quot;转义</li></ul><p>数字：</p><ul><li><code>%d</code> 十进制整数</li><li><code>%i</code> 十进制整数</li><li><code>%o</code> 八进制整数</li><li><code>%x</code> 十六进制整数</li><li><code>%e</code> 指数 (基底写为 e)</li><li><code>%E</code> 指数 (基底写为 E)</li><li><code>%f</code> 浮点数</li><li><code>%F</code> 浮点数，与上相同</li><li><code>%g</code> 科学计数法(e)或浮点数 (根据显示长度)</li><li><code>%G</code> 科学计数法(E)或浮点数 (根据显示长度)</li><li><code>%%</code> 字符&quot;%&quot;</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;——%(p).2f&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;——0.30&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;——%(p).2g&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;p&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;——0.3&#39;</span></span></code></pre></div><h2 id="终端字体颜色" tabindex="-1">终端字体颜色 <a class="header-anchor" href="#终端字体颜色" aria-label="Permalink to &quot;终端字体颜色&quot;">​</a></h2><p>在 win10，输出流需要做**<code>os.system(&quot;&quot;)</code>**处理才可以输出带颜色的字符</p><p>可以使用第三方模块 colorama 来简化语句，它同时使低于 win10 的系统支持转义颜色：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> colorama </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> init, Fore</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">init(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">autoreset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 给True的时候print时无需+Fore.RESET</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Fore.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;helloworld&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fore.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RESET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="内置函数format" tabindex="-1">内置函数<code>format()</code> <a class="header-anchor" href="#内置函数format" aria-label="Permalink to &quot;内置函数\`format()\`&quot;">​</a></h2><p>内置函数<code>format</code>(<em>value</em>[, <em>format_spec</em>])<br> 第二个参数即 format_spec 格式规格迷你语言<br> 实现了魔术方法<code>__format__</code>的对象都可以使用</p><p>以数字对象的格式化为例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format(12,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;+.3f&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 保留3位小数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;+12.000&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format(3,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 二进制转化</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;11&#39;</span></span></code></pre></div><p>其他实现了魔术方法 <code>__format__</code> 的对象，这里以 <code>datetime.time</code> 对象为例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> datetime</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">night</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">22,30,tzinfo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=timezone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">timedelta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hours=8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;北京&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format(night,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是%Z时间%H点%M分&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是北京时间22点30分&#39;</span></span></code></pre></div><p><code>datetime</code>模块后续会介绍。</p><h2 id="str-format" tabindex="-1"><code>str.format()</code> <a class="header-anchor" href="#str-format" aria-label="Permalink to &quot;\`str.format()\`&quot;">​</a></h2><p>与内置函数 format 效果一样，只是变成了 format_spec 去调用字符串方法</p><p>涉及到对象方法以及函数的传参方式，将在后面章节介绍。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; {}  {}  {} &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(a, b, c)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; {0}  {1}  {2} &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(a, b, c)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; {0}  {1}  {2} &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[a, b, c])</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; {a}  {b}  {c} &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; {a}  {b}  {c} &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.format(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: a, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: b, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: c})</span></span></code></pre></div><p><code>{!s}</code>是默认的</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{!s}、{!a}、{!r}&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 分别表示str、ascii和repr方法。</span></span></code></pre></div><p>实现了魔术方法<code>__format__</code>的对象可以使用冒号 <code>: format_spec </code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;0x{:x}&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.format(255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;0xff&#39;</span></span></code></pre></div><p>以<code>datetime.time</code>对象为例的其他实现了魔术方法<code>__format__</code>的对象：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接上节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是{:%Z}时间{:%H}点{:%M}分&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.format(night,night,night</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是北京时间22点30分&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;{:现在是%Z时间%H点%M分}&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.format(night</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是北京时间22点30分&#39;</span></span></code></pre></div><p>转义：<code>{{</code> ,<code>}}</code> 可以不解析花括号</p><h2 id="f-字符串" tabindex="-1">f 字符串 <a class="header-anchor" href="#f-字符串" aria-label="Permalink to &quot;f 字符串&quot;">​</a></h2><p>python3.6+</p><p>与内置函数<code>format()</code>以及<code>str.format()</code>一样可以直接使用<strong>f 字符串</strong>的写法<br> 用<code>f&#39;{a}{b}{c}&#39;</code>即可代替<code>&#39;{a}{b}{c}&#39;.format(a=a,b=b,c=c)</code>。<br> f 字符串中不允许使用<code>\\</code>转义字符。</p><p>与<code>%</code>格式符的不同：<br> Sign 对齐使用<code>&lt;</code> 和 <code>&gt;</code> 而不是 <code>+</code> 和 <code>-</code>。 <code>^</code> 用来居中。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;%-6d000&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">%233</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">233</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;{233:&lt;6d}000&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">233</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   000</span></span></code></pre></div><p>以<code>datetime.time</code>对象为例的其他实现了魔术方法<code>__format__</code>的对象：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 接上节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是{night:%Z}时间{night:%H}点{night:%M}分&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是北京时间22点30分&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;{night:现在是%Z时间%H点%M分}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;现在是北京时间22点30分&#39;</span></span></code></pre></div><p>python3.8+</p><p>f 字符串中可以直接使用说明符<code>=</code>调试，</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">f</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;{python=}&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;python=3.8&#39;</span></span></code></pre></div><h2 id="内置函数str-和repr" tabindex="-1">内置函数<code>str()</code>和<code>repr()</code> <a class="header-anchor" href="#内置函数str-和repr" aria-label="Permalink to &quot;内置函数\`str()\`和\`repr()\`&quot;">​</a></h2><p><code>str()</code>不止是构造函数（<code>class</code>）实例化一个<code>str</code>对象，<br><code>str(o)</code>它也是对参数对象进行魔术方法的调用：<code>o.__str__()</code>，将参数转换为了<code>str</code>对象<br> 无论是<code>print(o)</code>，<code>f&#39;{o}&#39;</code>, <code>&quot;%s&quot;%o</code>，它们都是对魔术方法 <code>o.__str__()</code>的调用</p><hr><p>而<code>repr(o)</code>，<code>f&#39;{o!r}&#39;</code>, <code>&quot;%r&quot;%o</code>则是对魔术方法 <code>o.__repr__()</code>的调用，<br> 它会以字面量的形式呈现对象，即字符串带有引号，列表变成<code>&#39;[&#39;+ repr(成员) + &#39;,]&#39;</code><br><strong>f 字符串</strong>中<code>f&#39;{o=}&#39;</code>就相当于<code>f&#39;o={repr(o)}&#39;</code></p><h2 id="去除缩进" tabindex="-1">去除缩进 <a class="header-anchor" href="#去除缩进" aria-label="Permalink to &quot;去除缩进&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> textwrap </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dedent</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;__main__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        fun main(){</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            println(&quot;Hello, world!&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dedent(code))</span></span></code></pre></div>`,67)]))}const g=i(e,[["render",h]]);export{c as __pageData,g as default};
