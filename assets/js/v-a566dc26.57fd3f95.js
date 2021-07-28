(self.webpackChunk=self.webpackChunk||[]).push([[7249],{6403:(s,l,n)=>{"use strict";n.r(l),n.d(l,{data:()=>a});const a={key:"v-a566dc26",path:"/zh/reference/default-theme/frontmatter.html",title:"Frontmatter",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"所有页面",slug:"所有页面",children:[{level:3,title:"navbar",slug:"navbar",children:[]},{level:3,title:"pageClass",slug:"pageclass",children:[]}]},{level:2,title:"首页",slug:"首页",children:[{level:3,title:"home",slug:"home",children:[]},{level:3,title:"heroImage",slug:"heroimage",children:[]},{level:3,title:"heroAlt",slug:"heroalt",children:[]},{level:3,title:"heroText",slug:"herotext",children:[]},{level:3,title:"tagline",slug:"tagline",children:[]},{level:3,title:"actions",slug:"actions",children:[]},{level:3,title:"features",slug:"features",children:[]},{level:3,title:"footer",slug:"footer",children:[]},{level:3,title:"footerHtml",slug:"footerhtml",children:[]}]},{level:2,title:"普通页面",slug:"普通页面",children:[{level:3,title:"editLink",slug:"editlink",children:[]},{level:3,title:"lastUpdated",slug:"lastupdated",children:[]},{level:3,title:"contributors",slug:"contributors",children:[]},{level:3,title:"sidebar",slug:"sidebar",children:[]},{level:3,title:"sidebarDepth",slug:"sidebardepth",children:[]},{level:3,title:"prev",slug:"prev",children:[]},{level:3,title:"next",slug:"next",children:[]}]}],filePathRelative:"zh/reference/default-theme/frontmatter.md",git:{}}},7288:(s,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>ts});var a=n(6252);const e=(0,a.Wm)("h1",{id:"frontmatter",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),(0,a.Uk)(" Frontmatter")],-1),p=(0,a.Wm)("h2",{id:"所有页面",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#所有页面","aria-hidden":"true"},"#"),(0,a.Uk)(" 所有页面")],-1),r=(0,a.Wm)("p",null,"本章节中的 Frontmatter 会在所有类型的页面中生效。",-1),t=(0,a.Wm)("h3",{id:"navbar",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#"),(0,a.Uk)(" navbar")],-1),i=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"boolean")])],-1),o=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"详情："),(0,a.Wm)("p",null,"是否在当前页面展示导航栏。"),(0,a.Wm)("p",null,"如果你在主题配置中禁用了导航栏，那么该 Frontmatter 将不会生效。")],-1),c=(0,a.Wm)("p",null,"参考：",-1),u=(0,a.Uk)("默认主题 > 配置 > navbar"),d=(0,a.uE)('<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass" aria-hidden="true">#</a> pageClass</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>为当前页面添加额外的类名。</p></li><li><p>示例：</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">pageClass</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">custom-page-class</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>然后你可以在 <code>.vuepress/styles/index.scss</code> 文件中为这个页面添加自定义样式：</p><div class="language-scss ext-scss line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">.theme-container.custom-page-class</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* 页面样式 */</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',5),m=(0,a.Uk)("参考： "),D=(0,a.Uk)("默认主题 > 样式 > Style 文件"),h=(0,a.uE)('<h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2><p>本章节中的 Frontmatter 只会在首页中生效。</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>设定该页面是首页还是普通页面。</p><p>如果你不设置该 Frontmatter 或将其设为 <code>false</code> ，则该页面会是一个 <a href="#%E6%99%AE%E9%80%9A%E9%A1%B5%E9%9D%A2">普通页面</a></p></li><li><p>示例：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">home</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h3>',5),b=(0,a.uE)('<li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页图片的 URL 。</p></li><li><p>示例：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#6A9955;"># Public 文件路径</span></span>\n<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/images/hero.png</span></span>\n<span class="line"><span style="color:#6A9955;"># URL</span></span>\n<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://vuejs.org/images/logo.png</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>',3),y=(0,a.Wm)("p",null,"参考：",-1),W=(0,a.Uk)("指南 > 静态资源 > Public 文件"),g=(0,a.uE)('<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页图片的 <code>alt</code> 属性。</p><p>如果不设置，则默认使用 <a href="#heroText">heroText</a> 。</p></li></ul><h3 id="herotext" tabindex="-1"><a class="header-anchor" href="#herotext" aria-hidden="true">#</a> heroText</h3>',3),f=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"string | null")])],-1),k=(0,a.Wm)("p",null,"详情：",-1),v=(0,a.Wm)("p",null,"首页的大标题。",-1),E=(0,a.Uk)("如果不设置，则默认使用站点 "),C=(0,a.Uk)("title"),x=(0,a.Uk)(" 。"),U=(0,a.Wm)("p",null,[(0,a.Uk)("设置为 "),(0,a.Wm)("code",null,"null"),(0,a.Uk)(" 来禁用首页大标题。")],-1),w=(0,a.Wm)("h3",{id:"tagline",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#tagline","aria-hidden":"true"},"#"),(0,a.Uk)(" tagline")],-1),A=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"string | null")])],-1),L=(0,a.Wm)("p",null,"详情：",-1),B=(0,a.Wm)("p",null,"首页的标语。",-1),F=(0,a.Uk)("如果不设置，则默认使用站点 "),z=(0,a.Uk)("description"),_=(0,a.Uk)(" 。"),N=(0,a.Wm)("p",null,[(0,a.Uk)("设置为 "),(0,a.Wm)("code",null,"null"),(0,a.Uk)(" 来禁用首页标语。")],-1),H=(0,a.uE)('<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li>类型：</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">?: </span><span style="color:#CE9178;">&#39;primary&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;secondary&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><p>详情：</p><p>配置首页按钮。</p></li><li><p>示例：</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">actions</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">快速上手</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/zh/guide/getting-started.html</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">primary</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">项目简介</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">secondary</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h3><ul><li>类型：</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#4EC9B0;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>\n<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>详情：</p><p>配置首页特性列表。</p></li><li><p>示例：</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#569CD6;">features</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">简洁至上</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Vue 驱动</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">高性能</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页的页脚。</p></li></ul><h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml" aria-hidden="true">#</a> footerHtml</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>是否允许页脚中使用 HTML 。</p><p>如果设置为 <code>true</code> ，那么 <a href="#footer">footer</a> 会被作为 HTML 代码处理。</p></li></ul><h2 id="普通页面" tabindex="-1"><a class="header-anchor" href="#普通页面" aria-hidden="true">#</a> 普通页面</h2><p>本章节中的 Frontmatter 只会在普通页面中生效。</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3>',17),T=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"boolean")])],-1),M=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"详情："),(0,a.Wm)("p",null,[(0,a.Uk)("是否在本页面中启用 "),(0,a.Wm)("em",null,"编辑此页"),(0,a.Uk)(" 链接。")])],-1),P=(0,a.Wm)("p",null,"参考：",-1),R=(0,a.Uk)("默认主题 > 配置 > editLink"),S=(0,a.Wm)("h3",{id:"lastupdated",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#lastupdated","aria-hidden":"true"},"#"),(0,a.Uk)(" lastUpdated")],-1),V=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"boolean")])],-1),I=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"详情："),(0,a.Wm)("p",null,[(0,a.Uk)("是否在本页面中启用 "),(0,a.Wm)("em",null,"最近更新时间戳"),(0,a.Uk)(" 。")])],-1),j=(0,a.Wm)("p",null,"参考：",-1),G=(0,a.Uk)("默认主题 > 配置 > lastUpdated"),O=(0,a.Wm)("h3",{id:"contributors",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),(0,a.Uk)(" contributors")],-1),Y=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"boolean")])],-1),q=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"详情："),(0,a.Wm)("p",null,[(0,a.Uk)("是否在本页面中启用 "),(0,a.Wm)("em",null,"贡献者列表"),(0,a.Uk)(" 。")])],-1),J=(0,a.Wm)("p",null,"参考：",-1),K=(0,a.Uk)("默认主题 > 配置 > contributors"),Q=(0,a.Wm)("h3",{id:"sidebar",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),(0,a.Uk)(" sidebar")],-1),X=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),Z=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"详情："),(0,a.Wm)("p",null,"配置本页面的侧边栏。")],-1),$=(0,a.Wm)("p",null,"参考：",-1),ss=(0,a.Uk)("默认主题 > 配置 > sidebar"),ls=(0,a.Wm)("h3",{id:"sidebardepth",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#sidebardepth","aria-hidden":"true"},"#"),(0,a.Uk)(" sidebarDepth")],-1),ns=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("类型： "),(0,a.Wm)("code",null,"number")])],-1),as=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"详情："),(0,a.Wm)("p",null,"配置本页面的侧边栏深度。")],-1),es=(0,a.Wm)("p",null,"参考：",-1),ps=(0,a.Uk)("默认主题 > 配置 > sidebarDepth"),rs=(0,a.uE)('<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h3><ul><li><p>类型： <code>NavLink | string</code></p></li><li><p>详情：</p><p>上一个页面的链接。</p><p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p><p>为了手动配置上一页面的链接，你可以将其设置为一个 <code>NavLink</code> 对象或者一个字符串：</p><ul><li><code>NavLink</code> 对象应该有一个 <code>text</code> 字段和一个 <code>link</code> 字段。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>NavLink</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> 。</li></ul></li><li><p>示例：</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"><span style="color:#6A9955;"># NavLink</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Get Started</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.html</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># NavLink - 外部 URL</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">GitHub</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://github.com</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 字符串 - 页面文件路径</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.md</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 字符串 - 页面文件相对路径</span></span>\n<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">../../guide/getting-started.md</span></span>\n<span class="line"><span style="color:#D4D4D4;">---</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h3><ul><li><p>类型： <code>NavLink | string</code></p></li><li><p>详情：</p><p>下一个页面的链接。</p><p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p><p>类型和 <a href="#prev">prev</a> Frontmatter 相同。</p></li></ul>',5),ts={render:function(s,l){const n=(0,a.up)("NpmBadge"),ts=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[e,(0,a.Wm)(n,{package:"@vuepress/theme-default"}),p,r,t,(0,a.Wm)("ul",null,[i,o,(0,a.Wm)("li",null,[c,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/reference/default-theme/config.html#navbar"},{default:(0,a.w5)((()=>[u])),_:1})])])])]),d,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[m,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/reference/default-theme/styles.html#style-%E6%96%87%E4%BB%B6"},{default:(0,a.w5)((()=>[D])),_:1})])])])]),h,(0,a.Wm)("ul",null,[b,(0,a.Wm)("li",null,[y,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:(0,a.w5)((()=>[W])),_:1})])])])]),g,(0,a.Wm)("ul",null,[f,(0,a.Wm)("li",null,[k,v,(0,a.Wm)("p",null,[E,(0,a.Wm)(ts,{to:"/zh/reference/config.html#title"},{default:(0,a.w5)((()=>[C])),_:1}),x]),U])]),w,(0,a.Wm)("ul",null,[A,(0,a.Wm)("li",null,[L,B,(0,a.Wm)("p",null,[F,(0,a.Wm)(ts,{to:"/zh/reference/config.html#description"},{default:(0,a.w5)((()=>[z])),_:1}),_]),N])]),H,(0,a.Wm)("ul",null,[T,M,(0,a.Wm)("li",null,[P,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/reference/default-theme/config.html#editlink"},{default:(0,a.w5)((()=>[R])),_:1})])])])]),S,(0,a.Wm)("ul",null,[V,I,(0,a.Wm)("li",null,[j,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/reference/default-theme/config.html#lastupdated"},{default:(0,a.w5)((()=>[G])),_:1})])])])]),O,(0,a.Wm)("ul",null,[Y,q,(0,a.Wm)("li",null,[J,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/reference/default-theme/config.html#contributors"},{default:(0,a.w5)((()=>[K])),_:1})])])])]),Q,(0,a.Wm)("ul",null,[X,Z,(0,a.Wm)("li",null,[$,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/reference/default-theme/config.html#sidebar"},{default:(0,a.w5)((()=>[ss])),_:1})])])])]),ls,(0,a.Wm)("ul",null,[ns,as,(0,a.Wm)("li",null,[es,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(ts,{to:"/zh/reference/default-theme/config.html#sidebardepth"},{default:(0,a.w5)((()=>[ps])),_:1})])])])]),rs],64)}}}}]);