(self.webpackChunk=self.webpackChunk||[]).push([[649],{8544:(e,n,l)=>{"use strict";l.r(n),l.d(n,{data:()=>s});const s={key:"v-5ca60897",path:"/zh/reference/components.html",title:"内置组件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"ClientOnly",slug:"clientonly",children:[]},{level:2,title:"Content",slug:"content",children:[]},{level:2,title:"OutboundLink",slug:"outboundlink",children:[]}],filePathRelative:"zh/reference/components.md",git:{}}},1212:(e,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>k});var s=l(6252);const a=(0,s.Wm)("h1",{id:"内置组件",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#内置组件","aria-hidden":"true"},"#"),(0,s.Uk)(" 内置组件")],-1),i=(0,s.uE)('<h2 id="clientonly" tabindex="-1"><a class="header-anchor" href="#clientonly" aria-hidden="true">#</a> ClientOnly</h2><ul><li>使用：</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;ClientOnly&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  &lt;NonSsrFriendlyComponent /&gt;</span></span>\n<span class="line"><span style="color:#D4D4D4;">&lt;/ClientOnly&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>详情：</p><p>该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。</p><p>如果一个组件在 <code>setup()</code> 中直接使用 浏览器 / DOM API ，它会导致构建过程报错，因为这些 API 在 Node.js 的环境中是无法使用的。在这种情况下，你可以选择一种方式：</p><ul><li>修改这个组件，只在 <code>onBeforeMount()</code> 或 <code>onMounted()</code> Hook 中使用 浏览器 / DOM API 。</li><li>使用 <code>&lt;ClientOnly&gt;</code> 包裹这个组件。</li></ul></li></ul><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><ul><li><p>Props:</p><ul><li>pageKey <ul><li>类型： <code>string</code></li><li>是否必须： <code>false</code></li></ul></li></ul></li><li><p>使用：</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;Content page-key=&quot;v-xxxxxx&quot; /&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',7),t=(0,s.Wm)("p",null,"详情：",-1),o=(0,s.Wm)("p",null,"该组件会渲染页面的 Markdown 内容。",-1),r=(0,s.Uk)("页面 Key 是页面路由的 "),c={href:"https://next.router.vuejs.org/zh/api/#name-2",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("name"),p=(0,s.Uk)(" 。如果没有传入 "),u=(0,s.Wm)("code",null,"pageKey",-1),h=(0,s.Uk)(" Prop ，它会渲染当前路由下的页面。"),m=(0,s.Wm)("p",null,"该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。",-1),b=(0,s.uE)('<h2 id="outboundlink" tabindex="-1"><a class="header-anchor" href="#outboundlink" aria-hidden="true">#</a> OutboundLink</h2><ul><li>使用：</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;OutboundLink /&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>详情：</p><p>该组件会渲染一个标识外部 URL 链接的图标。</p><p>该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。</p></li></ul>',4),k={render:function(e,n){const l=(0,s.up)("NpmBadge"),k=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[a,(0,s.Wm)(l,{package:"@vuepress/client"}),i,(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[t,o,(0,s.Wm)("p",null,[r,(0,s.Wm)("a",c,[d,(0,s.Wm)(k)]),p,u,h]),m])]),b],64)}}}}]);