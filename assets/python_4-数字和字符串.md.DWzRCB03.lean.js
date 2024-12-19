import{_ as i,c as a,a0 as t,o as n}from"./chunks/framework.CxXbVT5p.js";const r=JSON.parse('{"title":"数字和字符串","description":"","frontmatter":{},"headers":[],"relativePath":"python/4-数字和字符串.md","filePath":"python/4-数字和字符串.md","lastUpdated":1734618217000}'),e={name:"python/4-数字和字符串.md"};function l(h,s,p,d,k,o){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="数字和字符串" tabindex="-1">数字和字符串 <a class="header-anchor" href="#数字和字符串" aria-label="Permalink to &quot;数字和字符串&quot;">​</a></h1><h2 id="数字" tabindex="-1">数字 <a class="header-anchor" href="#数字" aria-label="Permalink to &quot;数字&quot;">​</a></h2><blockquote><p>属于不可变类型(immutable)</p><p>使用字面量直接创建 包括：<br> 十进制整型<code>int</code> 浮点型<code>float</code> 复数<code>complex</code> 布尔型<code>bool</code></p></blockquote><h3 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h3><p>和其他语言一样使用算术运算符<code>+</code>, <code>-</code>, <code>*</code>  和  <code>/</code> 取模<code>%</code><br> 在整数除法中，除法  <code>/</code>  总是返回一个浮点数，<br> 如果只想得到整数的结果，丢弃可能的分数部分，可以使用运算符  <code>//</code><br> 使用  <code>**</code>  操作来进行幂运算<br> 位运算符和其他语言一样 左移右移异或等</p><blockquote><p>利用位运算将变量 a 和 b 的值交换</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span></code></pre></div></blockquote><h3 id="常见属性" tabindex="-1">常见属性 <a class="header-anchor" href="#常见属性" aria-label="Permalink to &quot;常见属性&quot;">​</a></h3><p><code>.real</code> 实部<br><code>.imag</code> 虚部（字面量的虚数单位为<code>j</code>）。<br> 整型：<code>.numerator</code> 分子 是它本身。<br> 整型：<code>.denominator</code> 分母 恒为 1。</p><h3 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h3><p><code>.bit_length()</code> 得到指定数值的二进制的长度数</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i.bit_length())</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  bit_length</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1     0000 0001       1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2     0000 0010       2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3     0000 0011       2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><h3 id="常用内置函数" tabindex="-1">常用内置函数 <a class="header-anchor" href="#常用内置函数" aria-label="Permalink to &quot;常用内置函数&quot;">​</a></h3><ul><li><code>abs()</code>求绝对值 复数求模</li><li><code>max()</code>/<code>min()</code>求最值</li><li><code>int(x)</code>  将 x 转换为一个整数</li><li><code>float(x)</code>  将 x 转换到一个浮点数</li><li><code>pow(a,b)</code> 相当于<code>a**b</code></li><li><code>pow(a,b,c)</code> 相当于<code>a**b%c</code></li><li><code>round(num)</code> 四舍五入（实际是不是真正的四舍五入，是以 5.0 为界）</li><li><code>divmod(被除数,除数)</code> 返回元组:<code>(商,余数)</code></li><li><code>complex(x, y)</code>  以 x 为实部，y 为虚部，实例化一个复数</li></ul><h3 id="有关进制" tabindex="-1">有关进制 <a class="header-anchor" href="#有关进制" aria-label="Permalink to &quot;有关进制&quot;">​</a></h3><p>其他进制的<strong>字面量</strong>可以直接转换为<code>int</code>类型，也可以相互运算</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">29A</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 666</span></span></code></pre></div><p>进制转换（字符串）</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;0b11111111&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">oct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;0o377&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;0xff&#39;</span></span></code></pre></div><p>若内置函数 <code>int()</code> 传入了两个参数，<br><code>int(x, base)</code> 则第一个参数必需是字符串类型，其第二个参数是原进制。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0xff&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 255</span></span></code></pre></div><table tabindex="0"><thead><tr><th>转换为 ↓</th><th>2 进制</th><th>8 进制</th><th>10 进制</th><th>16 进制</th></tr></thead><tbody><tr><td>2 进制</td><td><code>x</code></td><td><code>bin(int(x, 8))</code></td><td><code>bin(int(x, 10))</code></td><td><code>bin(int(x, 16))</code></td></tr><tr><td>8 进制</td><td><code>oct(int(x, 2))</code></td><td><code>x</code></td><td><code>oct(int(x, 10))</code></td><td><code>oct(int(x, 16))</code></td></tr><tr><td>10 进制</td><td><code>int(x, 2)</code></td><td><code>int(x, 8)</code></td><td><code>x</code></td><td><code>int(x, 16)</code></td></tr><tr><td>16 进制</td><td><code>hex(int(x, 2))</code></td><td><code>hex(int(x, 8))</code></td><td><code>hex(int(x, 10))</code></td><td><code>x</code></td></tr></tbody></table><h3 id="有关模块" tabindex="-1">有关模块 <a class="header-anchor" href="#有关模块" aria-label="Permalink to &quot;有关模块&quot;">​</a></h3><p><code>decimal</code>模块提供了 <code>Decimal</code> 数据类型用于浮点数计算，拥有更高的精度用来解决如下情况：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 0.30000000000000004</span></span></code></pre></div><p>但是在精度要求不高的时候可以使用字符串格式化来解决。</p><ul><li><code>math</code>模块：提供基本的三角函数指数对数等方法,数域只到实数(负数不能用它开平方)</li><li><code>cmath</code>模块：同<code>math</code>模块, 数域扩充到复数 ,还提供了转换极坐标系的方法</li><li><code>numpy</code>模块：用于复杂的数学问题:排列组合 矩阵等 这里不过多讨论</li></ul><h2 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h2><blockquote><h3 id="str" tabindex="-1">str <a class="header-anchor" href="#str" aria-label="Permalink to &quot;str&quot;">​</a></h3><p>可下标类型(subscriptable) 可迭代类型(Iterable) 不可变类型(immutable).</p><p>使用字面量引号(<code>&#39;</code>或<code>&quot;</code>)来创建字符串<br> 在 python3 中，字符串都是 Unicode 字符，相当于 python2 中字面量前面加<code>u</code></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;我想起高兴的事情!&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># python2中的中文字符最好在前面加u</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># var1 = u&#39;我想起高兴的事情!&#39;</span></span></code></pre></div></blockquote><h3 id="索引和切片" tabindex="-1">索引和切片 <a class="header-anchor" href="#索引和切片" aria-label="Permalink to &quot;索引和切片&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var1[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var1[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>对于切片：</p><ul><li>切片遵循左闭右开原则。</li><li>切片的冒号左边不写默认是 0，右边不写默认是长度-1。</li><li>切片还可以使用第二个冒号<code>[::step]</code>，代表间距，为-1 时可以倒序。</li></ul><p>切片和索引<strong>只读</strong>（只有 getitem 操作）</p><h3 id="转义字符" tabindex="-1">转义字符 <a class="header-anchor" href="#转义字符" aria-label="Permalink to &quot;转义字符&quot;">​</a></h3><p><code>\\n</code>换行、 <code>\\t</code>制表符键盘的 tab、 <code>\\\\</code>反斜线\\ 、 <code>\\/</code>斜线/</p><p><code>\\&#39;</code> <code>\\&quot;</code>引号前面的\\有时候必须有，有时候不能有，有时候是可有可无的。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第二个单引号前不能有\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\\\\\\\\\&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SyntaxError:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> while</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scanning</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> literal</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#第二个单引号前必须有\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\\\\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\\\&#39;</span></span></code></pre></div><p>用原始字符串就能解决这个问题。</p><div class="tip custom-block"><p class="custom-block-title">关于换行</p><p>换行风格有多种，转义字符组合各不相同，可以参阅有关文档</p></div><h3 id="原始字符串" tabindex="-1">原始字符串 <a class="header-anchor" href="#原始字符串" aria-label="Permalink to &quot;原始字符串&quot;">​</a></h3><p>在字符串的前面加<code>r</code>可以显示原始字符串（Raw String）<br> 原始字符串常被用来书写正则表达式</p><p>内置函数<code>repr()</code>可以查看原始字符串</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">r</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;\\n&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\\\n&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;\\n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\\n</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">repr(r</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;\\n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\\\\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">n&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">repr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;\\n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\\\n&#39;</span></span></code></pre></div><h3 id="运算符操作" tabindex="-1">运算符操作 <a class="header-anchor" href="#运算符操作" aria-label="Permalink to &quot;运算符操作&quot;">​</a></h3><ul><li><code>str+str</code> 拼接</li><li><code>str*int</code> 重复拼接</li><li><code>in</code> <code>not in</code>是否包含给定的字符</li><li><code>%</code> 格式化 后面专门讲</li></ul><h3 id="常用方法-1" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法-1" aria-label="Permalink to &quot;常用方法&quot;">​</a></h3><p>转换为字节串</p><ul><li><code>.encode()</code>编码，默认编码为 utf-8，最终返回值是 bytes 类型</li><li><code>.decode()</code>解码，<strong>已废弃</strong>，但 python2 中依然可用来转换中文等的编码</li></ul><h4 id="替换分割" tabindex="-1">替换分割 <a class="header-anchor" href="#替换分割" aria-label="Permalink to &quot;替换分割&quot;">​</a></h4><p>不会修改原字符串，只会返回预期的字符串。</p><ul><li><code>.split(str)</code>以 str 分割为 list，不能传空字符串。</li><li><code>.join(list)</code>(将可迭代对象)以字符串拼接</li><li><code>.replace()</code> 替换</li><li><code>.strip()</code> <code>.lstrip()</code> <code>.rstrip()</code>去掉两端空格/指定字符</li><li><code>.partition(str)</code>分割返回元组</li><li><code>.translate</code>(翻译表)过滤</li></ul><h4 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h4><ul><li><code>.find(str)</code>找不到返回<code>-1</code></li><li><code>.index(str)</code>找不到报错</li><li><code>.count(str)</code>返回出现次数</li></ul><h4 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板&quot;">​</a></h4><ul><li><code>.format()</code>格式化字符串 后面专门讲</li><li><code>.expandtabs(int)</code>用制表符占位分组</li><li><code>.zfill(2)</code> 不足两位开头补 0，功能与<code>&#39;%02d&#39;%num</code>一样</li><li><code>.center()</code> <code>.ljust()</code> <code>.rjust()</code> 几种填充方法</li></ul><h4 id="大小转换" tabindex="-1">大小转换 <a class="header-anchor" href="#大小转换" aria-label="Permalink to &quot;大小转换&quot;">​</a></h4><ul><li><code>.swapcase()</code>大小写翻转</li><li><code>.title()</code>首字母大写</li><li><code>.capitalize()</code>首字母大写</li><li><code>.upper()</code>全部罗马字大写</li><li><code>.lower()</code>全部罗马字小写</li><li><code>.casefold()</code>全部字符小写</li></ul><p>更多方法可以使用内置函数<code>dir(str)</code>来查看</p><p><code>isdigit()</code> 是否纯数字 <code>isascii()</code> 是否纯 ascii 字符 等。。。</p><h3 id="相关的内置函数" tabindex="-1">相关的内置函数 <a class="header-anchor" href="#相关的内置函数" aria-label="Permalink to &quot;相关的内置函数&quot;">​</a></h3><ul><li><code>repr()</code>转化为原始字符串类型（调用魔术方法<code>__repr__</code>）</li><li><code>str()</code>转化为字符串类型（调用魔术方法<code>__str__</code>，不存在则调用<code>__repr__</code>）<br> 将二进制字符串转为字符串类型：<code>str(msg,&#39;utf-8&#39;)</code></li><li><code>len(var1)</code>返回字符串长度</li><li><code>bytes(str, encoding=&#39;utf-8&#39;)</code>编码</li><li><code>print()</code>在控制台中调用<code>__str__</code>并显示</li></ul><h3 id="for-in-中使用字符串" tabindex="-1">for in 中使用字符串 <a class="header-anchor" href="#for-in-中使用字符串" aria-label="Permalink to &quot;for in 中使用字符串&quot;">​</a></h3><p>循环字符串，将会逐个字符的打印：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;你想吃桃子&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> char </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(char)</span></span></code></pre></div><p>当然，你也可以：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.join(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你想吃桃子&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><h3 id="unicode" tabindex="-1">Unicode <a class="header-anchor" href="#unicode" aria-label="Permalink to &quot;Unicode&quot;">​</a></h3><p>字符串前面加 u 变成 Unicode 字符串。</p><p>python2 的字符串本质是二进制字符串，输出的时候不支持非 ASCII，</p><p>python2 需要 Unicode 字符串如<code>u&quot;你好&quot;</code>才能被正确输出。</p><p>python3 中的字符串本质是解码为 utf8 的 Unicode 字符串</p><p>解码 unicode 的字面量：</p><ul><li>python2：<code>&#39;\\\\u98ce&#39;.decode(&#39;unicode_escape&#39;).encode(&#39;utf8&#39;)</code></li><li>python3：<code>&#39;\\\\u98ce&#39;.encode(&#39;utf8&#39;).decode(&#39;unicode_escape&#39;)</code></li></ul><h2 id="字节串" tabindex="-1">字节串 <a class="header-anchor" href="#字节串" aria-label="Permalink to &quot;字节串&quot;">​</a></h2><h3 id="与字符串的转换" tabindex="-1">与字符串的转换 <a class="header-anchor" href="#与字符串的转换" aria-label="Permalink to &quot;与字符串的转换&quot;">​</a></h3><p><code>str</code>类型转化为<code>bytes</code>类型的方法如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eJwLKs3NTNRRKC7NzgQAF/kEBw==&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 字面量 只包含ASCII字符</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># b&#39;eJwLKs3NTNRRKC7NzgQAF/kEBw==&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eJwLKs3NTNRRKC7NzgQAF/kEBw==&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># b&#39;eJwLKs3NTNRRKC7NzgQAF/kEBw==&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eJwLKs3NTNRRKC7NzgQAF/kEBw==&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.encode()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认utf-8</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># b&#39;eJwLKs3NTNRRKC7NzgQAF/kEBw==&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.encode(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eJwLKs3NTNRRKC7NzgQAF/kEBw==&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 同上，静态方法的形式调用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># b&#39;eJwLKs3NTNRRKC7NzgQAF/kEBw==&#39;</span></span></code></pre></div><p><code>bytes</code>类型转化为<code>str</code>类型的方法如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">str(b</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\xe4\\xbd\\xa0\\xe5\\xa5\\xbd&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\xe4\\xbd\\xa0\\xe5\\xa5\\xbd&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.decode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bytes.decode(b</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\xe4\\xbd\\xa0\\xe5\\xa5\\xbd&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 同上，静态方法的形式调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">静态方法的方式来调用</p><p>类上定义的对象方法以静态方法的形式调用，只需要第一个参数是实例对象（<code>self</code>）即可。<br> 这将在会在之后面向对象章节中介绍。</p></div><h3 id="for-in-中使用字节串" tabindex="-1">for in 中使用字节串 <a class="header-anchor" href="#for-in-中使用字节串" aria-label="Permalink to &quot;for in 中使用字节串&quot;">​</a></h3><p><code>bytes</code>类型的下标和循环可以得到字节数字</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.encode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;GB2312&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">b</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;\\xc4\\xe3\\xba\\xc3&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.encode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;GB2312&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[0]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">196</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.encode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;GB2312&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[1]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">227</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.encode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;GB2312&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[2]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">186</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;你好&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.encode(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;GB2312&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[3]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">195</span></span></code></pre></div><p>字节数字可以直接用于 c 语言输出中文</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%c%c%c%c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">196</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">227</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">186</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">195</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 你好!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,85)]))}const g=i(e,[["render",l]]);export{r as __pageData,g as default};
