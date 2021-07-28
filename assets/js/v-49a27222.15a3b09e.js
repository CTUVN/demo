(self.webpackChunk=self.webpackChunk||[]).push([[2673],{4460:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>l});const l={key:"v-49a27222",path:"/zh/reference/theme-api.html",title:"主题 API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基础配置项",slug:"基础配置项",children:[{level:3,title:"name",slug:"name",children:[]},{level:3,title:"multiple",slug:"multiple",children:[]}]},{level:2,title:"主题特定配置项",slug:"主题特定配置项",children:[{level:3,title:"layouts",slug:"layouts",children:[]},{level:3,title:"plugins",slug:"plugins",children:[]},{level:3,title:"extends",slug:"extends",children:[]}]}],filePathRelative:"zh/reference/theme-api.md",git:{}}},2391:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>d});var l=a(6252);const e=(0,l.Wm)("h1",{id:"主题-api",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#主题-api","aria-hidden":"true"},"#"),(0,l.Uk)(" 主题 API")],-1),p=(0,l.Uk)("VuePress 主题同样是一个插件，因此主题 API 可以接收 "),o=(0,l.Uk)("插件 API"),r=(0,l.Uk)(" 的所有选项，但存在以下差别："),c=(0,l.uE)('<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项" aria-hidden="true">#</a> 基础配置项</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>主题的名称。</p><p>它应遵从如下命名约定：</p><ul><li>非 Scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple" aria-hidden="true">#</a> multiple</h3><ul><li><p>详情：</p><p>主题永远不能被多次使用，因此不应设置该配置项。</p></li></ul><h2 id="主题特定配置项" tabindex="-1"><a class="header-anchor" href="#主题特定配置项" aria-hidden="true">#</a> 主题特定配置项</h2><h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h3><ul><li><p>类型： <code>string | Record&lt;string, string&gt;</code></p></li><li><p>详情：</p><p>指定主题的布局组件。</p><p>它可以接收布局目录的绝对路径。该目录下的所有 <code>.vue,.ts,.js</code> 文件都会被注册为布局组件。</p><p>它还可以接收一个普通对象，其键是布局名称，值是布局文件的绝对路径。</p><p>一个主题必须至少有两个布局： <code>Layout</code> 和 <code>404</code> 。</p></li><li><p>示例：</p></li></ul><p>布局目录：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">layouts</span></span>\n<span class="line"><span style="color:#D4D4D4;">├─ Layout.vue</span></span>\n<span class="line"><span style="color:#D4D4D4;">├─ 404.vue</span></span>\n<span class="line"><span style="color:#D4D4D4;">└─ FooBar.vue</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>使用布局目录的绝对路径：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> { </span><span style="color:#4FC1FF;">path</span><span style="color:#D4D4D4;"> } = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;path/to/layouts&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用普通对象是等效的：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> { </span><span style="color:#4FC1FF;">path</span><span style="color:#D4D4D4;"> } = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">Layout:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;path/to/layouts/Layout.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#B5CEA8;">404</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;path/to/layouts/404.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">FooBar:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;path/to/layouts/FooBar.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3>',15),t=(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Uk)("类型： "),(0,l.Wm)("code",null,"PluginConfig[]")])],-1),D=(0,l.Wm)("li",null,[(0,l.Wm)("p",null,"详情："),(0,l.Wm)("p",null,"主题中要使用的插件。")],-1),i=(0,l.Wm)("p",null,"参考：",-1),u=(0,l.Uk)("配置 > plugins"),y=(0,l.uE)('<h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>要继承的主题名称。</p><p>父主题的所有主题 API 都会被继承，但是子主题不会覆盖父主题。</p><p>当在子主题和父主题中注册了具有相同名称的布局时，则子主题的布局将具有更高的优先级。</p><p>当同一个插件在子主题和父主题中都被使用时，如果该插件不支持被多次使用，那么只有在子主题中使用的插件会生效。</p><p>支持多级继承。</p></li><li><p>示例：</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> { </span><span style="color:#4FC1FF;">path</span><span style="color:#D4D4D4;"> } = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 继承默认主题</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">extends:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/theme-default&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// 覆盖 `404` 布局</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#B5CEA8;">404</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;path/to/404.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',3),d={render:function(s,n){const a=(0,l.up)("NpmBadge"),d=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[e,(0,l.Wm)(a,{package:"@vuepress/core"}),(0,l.Wm)("p",null,[p,(0,l.Wm)(d,{to:"/zh/reference/plugin-api.html"},{default:(0,l.w5)((()=>[o])),_:1}),r]),c,(0,l.Wm)("ul",null,[t,D,(0,l.Wm)("li",null,[i,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)(d,{to:"/zh/reference/config.html#plugins"},{default:(0,l.w5)((()=>[u])),_:1})])])])]),y],64)}}}}]);