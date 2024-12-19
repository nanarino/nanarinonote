import{_ as i,c as a,a0 as n,o as p}from"./chunks/framework.CxXbVT5p.js";const g=JSON.parse('{"title":"模块和包","description":"","frontmatter":{},"headers":[],"relativePath":"python/20-模块和包.md","filePath":"python/20-模块和包.md","lastUpdated":1734618217000}'),l={name:"python/20-模块和包.md"};function h(t,s,e,k,d,r){return p(),a("div",null,s[0]||(s[0]=[n(`<h1 id="模块和包" tabindex="-1">模块和包 <a class="header-anchor" href="#模块和包" aria-label="Permalink to &quot;模块和包&quot;">​</a></h1><blockquote><p>python 的模块都是天然的单例</p></blockquote><h2 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块&quot;">​</a></h2><p>import 加载的模块分为四个通用类别：</p><ul><li>使用 python 编写的代码（.py 文件）</li><li>已被编译为共享库或 DLL 的 C 或 C++扩展</li><li>包好一组模块的包</li><li>使用 C 编写并链接到 python 解释器的内置模块</li></ul><p>我们可以从<code>sys.modules</code>中找到当前已经加载的模块，<br><code>sys.modules</code>是一个字典，内部包含模块名与模块对象的映射，<br> 该字典决定了导入模块时是否需要重新导入。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>自定义模块文件名<code>my_module.py</code>,模块名<code>my_module</code></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># my_module.py</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;from the my_module.py&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">money </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> read1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my_module-&gt;read1-&gt;money&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, money)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> read2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my_module-&gt;read2 calling read1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    read1()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> money</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    money </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div><p>每个模块都是一个独立的名称空间，定义在这个模块中的函数，把这个模块的名称空间当做全局名称空间，<br> 这样我们在编写自己的模块时，就不用担心我们定义在自己模块中全局变量会在被导入时，与使用者的全局变量冲突<br> 同时模块也是单例类，多次导入，&#39;from the my_module.py&#39;也只被 print 一次。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 测试：执行my_module.change()操作的全局变量money仍然是my_module中的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># demo.py</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_module</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">money </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_module.change()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 改变的是my_module.money</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(money)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">执行结果：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">from the my_module.py</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><h3 id="在一行导入多个模块" tabindex="-1">在一行导入多个模块 <a class="header-anchor" href="#在一行导入多个模块" aria-label="Permalink to &quot;在一行导入多个模块&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sys, os, re</span></span></code></pre></div><h3 id="别名" tabindex="-1">别名 <a class="header-anchor" href="#别名" aria-label="Permalink to &quot;别名&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_module </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sm</span></span></code></pre></div><h3 id="from-import" tabindex="-1">from ... import... <a class="header-anchor" href="#from-import" aria-label="Permalink to &quot;from ... import...&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_module </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> read1, read2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">my_module.read1()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">read1()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可用</span></span></code></pre></div><p>如果当前命名空间有重名 read1 或者 read2，那么会有覆盖效果。</p><h4 id="别名-1" tabindex="-1">别名 <a class="header-anchor" href="#别名-1" aria-label="Permalink to &quot;别名&quot;">​</a></h4><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_module </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> read1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> read</span></span></code></pre></div><h4 id="全部导入" tabindex="-1">全部导入 <a class="header-anchor" href="#全部导入" aria-label="Permalink to &quot;全部导入&quot;">​</a></h4><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_module </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 将模块my_module中所有的名字都导入到当前名称空间</span></span></code></pre></div><p>此时需要在在<code>my_module.py</code>中新增一行</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__all__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;money&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;read1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>这样在另外一个文件中用<code>from my_module import *</code>就这能导入列表中规定的两个名字</p><h3 id="模块的加载与修改" tabindex="-1">模块的加载与修改 <a class="header-anchor" href="#模块的加载与修改" aria-label="Permalink to &quot;模块的加载与修改&quot;">​</a></h3><p>每个模块相当于单例类，导入一次立被实例化，放入字典<code>sys.modules</code>中了。<br> python 不支持重新加载或卸载之前导入的模块<br> 如果只是你想交互测试的一个模块，使用<code>importlib.reload(modulename)</code>，<br> 而且这只能用于测试环境。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># aa.py</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> func1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;func1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> time, importlib</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aa</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time.sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># importlib.reload(aa)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aa.func1()</span></span></code></pre></div><p>在 20 秒的等待时间里，修改 aa.py 中 func1 的内容，等待 test.py 的结果。<br> 打开 importlib 注释，重新测试</p><h3 id="把模块当做脚本执行" tabindex="-1">把模块当做脚本执行 <a class="header-anchor" href="#把模块当做脚本执行" aria-label="Permalink to &quot;把模块当做脚本执行&quot;">​</a></h3><p>我们可以通过模块的全局变量<code>__name__</code>来查看模块名：<br> 当做脚本运行：<br><code>__name__ </code>等于<code>&#39;__main__&#39;</code><br> 当做模块导入：<br><code>__name__</code>= 模块名<br> 作用：用来控制.py 文件在不同的应用场景下执行不同的逻辑</p><p><code>if __name__ == &#39;__main__&#39;:</code></p><h3 id="模块搜索路径" tabindex="-1">模块搜索路径 <a class="header-anchor" href="#模块搜索路径" aria-label="Permalink to &quot;模块搜索路径&quot;">​</a></h3><p>python 解释器在启动时会自动加载一些模块，可以使用<code>sys.modules</code>查看<br> 模块的查找顺序是：内存中已经加载的模块-&gt;内置模块-&gt;sys.path 路径中包含的模块<br> 在初始化后，python 程序可以修改<code>sys.path</code>,路径放到前面的优先于标准库被加载</p><h3 id="编译-python-文件" tabindex="-1">编译 python 文件 <a class="header-anchor" href="#编译-python-文件" aria-label="Permalink to &quot;编译 python 文件&quot;">​</a></h3><p>为了提高加载模块的速度，强调强调强调：提高的是加载速度而绝非运行速度。<br> python 解释器会在<code>__pycache__</code>目录中下缓存每个模块编译后的版本，<br> 格式为：module.version.pyc。<br> 通常会包含 python 的版本号。</p><p>例如，在 CPython3.3 版本下，<br><code>my_module.py</code>模块会被缓存成<code>__pycache__/my_module.cpython-33.pyc</code>。<br> 这种命名规范保证了编译后的结果多版本共存。</p><h3 id="dir-函数" tabindex="-1"><code>dir()</code>函数 <a class="header-anchor" href="#dir-函数" aria-label="Permalink to &quot;\`dir()\`函数&quot;">​</a></h3><p>内置函数<code>dir()</code>可以用来查找模块中定义的名字，返回一个有序字符串列表</p><h2 id="包" tabindex="-1">包 <a class="header-anchor" href="#包" aria-label="Permalink to &quot;包&quot;">​</a></h2><p>包是一种通过使用<code>.模块名</code>来组织 python 模块名称空间的方式。</p><ul><li>无论是 import 形式还是 from...import 形式，凡是在导入语句中（而不是在使用时）遇到带点的，都是关于包独有的导入语法，如<code>from moviepy.editor import *</code></li><li>包是目录级的（文件夹级），包的本质就是一个包含<code>__init__.py</code>文件的目录</li><li><ul><li>import 导入文件时，产生名称空间中的名字来源于文件，</li><li>import 包时，产生的名称空间的名字同样来源于文件，即包下的<code>__init__.py</code>，导入包本质就是在导入该文件</li></ul></li></ul><p><strong>强调：</strong></p><ol><li>而在 python2 中，包下没有<code>__init__.py</code>文件，import 包会报错 2. 创建包的目的不是为了运行，而是被导入使用，记住，包只是模块的一种形式而已，包即模块</li></ol><h3 id="绝对导入和相对导入" tabindex="-1">绝对导入和相对导入 <a class="header-anchor" href="#绝对导入和相对导入" aria-label="Permalink to &quot;绝对导入和相对导入&quot;">​</a></h3><h4 id="内部互调" tabindex="-1">内部互调 <a class="header-anchor" href="#内部互调" aria-label="Permalink to &quot;内部互调&quot;">​</a></h4><p>我们的最顶级包 glance 是写给别人用的，(结构图见最下)<br> 然后在 glance 包内部也会有彼此之间互相导入的需求，这时候就有绝对导入和相对导入两种方式：</p><ul><li>绝对导入：以 glance 作为起始</li><li>相对导入：用<code>.</code>或者<code>..</code>的方式为起始（只能在一个包中使用，不能用于不同目录内）</li></ul><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 绝对导入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glance.cmd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manage.main()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 相对导入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ..cmd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">manage.main()</span></span></code></pre></div><p>外部测试结果：注意一定要在于 glance 同级的文件中测试</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glance.api </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> versions</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意：</p><p>在使用 pycharm 时，有的情况会为你多做一些事情<br> 因而在测试时，一定要回到命令行去执行</p></div><p><strong><code>__init__.py</code>决定的外部用例</strong></p><p>单独导入包名称时，不会导入包中所有包含的所有子模块，<br> 即不会自动导入同级所有目录和 python 文件(子模块)。<br> 模块内方法的调用方式取决于各级的<code>__init__.py</code>文件。</p><h4 id="默认的" tabindex="-1">默认的 <a class="header-anchor" href="#默认的" aria-label="Permalink to &quot;默认的&quot;">​</a></h4><p>很多第三方模块的各级<code>__init__.py</code>文件是如下书写的</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># glance/__init__.py</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cmd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># glance/cmd/__init__.py</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> manage</span></span></code></pre></div><p>此时外部可以这样调用：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glance</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">glance.cmd.manage.main()</span></span></code></pre></div><h4 id="惯例的" tabindex="-1">惯例的 <a class="header-anchor" href="#惯例的" aria-label="Permalink to &quot;惯例的&quot;">​</a></h4><p>也可以这样书写使无论什么方式都可以调用：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .api</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   __version__</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   __all__</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cmd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;db&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   __all__</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;policy&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;versions&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .versions</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> policy.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> versions.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  def</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get_now_version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      __all__</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;manage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   │</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   __all__</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;models&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    │</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> models.py</span></span></code></pre></div><p>此时外部怎样调用都行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance.api.versions.get_now_version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance.versions.get_now_version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance.get_now_version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;1.0.0&quot;</span></span></code></pre></div><p>也就是说，这里的<code>__init__.py</code>里写了<br><code>from .api import *</code> 它的效果是含有 <code>from . import api</code> 的<br> 当多重调用方式有重名的时候，<strong>深度优先</strong>：<br> 如果<code>get_now_version</code>函数就叫<code>versions</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glance</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance.api.versions.versions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AttributeError:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;function&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> object</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;versions&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance.versions.versions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AttributeError:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;function&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> object</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attribute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;versions&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance.api.versions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glance.versions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;1.0.0&quot;</span></span></code></pre></div><h2 id="虚拟环境" tabindex="-1">虚拟环境 <a class="header-anchor" href="#虚拟环境" aria-label="Permalink to &quot;虚拟环境&quot;">​</a></h2><p>创建虚拟环境并进入虚拟环境需要使用 Python 自带的<code>venv</code>模块。首先，确保安装了 Python 3.3 版本及以上，然后打开终端（MacOS/Linux）或命令行（Windows），执行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建一个名为my_env的虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MacOS/Linux</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_env/bin/activate</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Windows</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">my_env\\Scripts\\activate</span></span></code></pre></div><p>在进入虚拟环境后，可以使用<code>pip</code>安装各种包，这些包都会安装到当前虚拟环境中，不会影响全局环境。要退出虚拟环境，可以在终端或命令行中执行<code>deactivate</code>命令。可以使用<code>conda env list</code>查看已创建的虚拟环境列表。<code>pip freeze</code>来查看当前环境已安装的包的版本</p>`,71)]))}const c=i(l,[["render",h]]);export{g as __pageData,c as default};
