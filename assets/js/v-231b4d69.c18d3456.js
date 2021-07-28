(self.webpackChunk=self.webpackChunk||[]).push([[1253],{8082:(e,l,a)=>{"use strict";a.r(l),a.d(l,{data:()=>r});const r={key:"v-231b4d69",path:"/zh/reference/plugin/active-header-links.html",title:"active-header-links",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置项",slug:"配置项",children:[{level:3,title:"headerLinkSelector",slug:"headerlinkselector",children:[]},{level:3,title:"headerAnchorSelector",slug:"headeranchorselector",children:[]},{level:3,title:"delay",slug:"delay",children:[]},{level:3,title:"offset",slug:"offset",children:[]}]}],filePathRelative:"zh/reference/plugin/active-header-links.md",git:{}}},3414:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>w});var r=a(6252);const n=(0,r.Wm)("h1",{id:"active-header-links",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#active-header-links","aria-hidden":"true"},"#"),(0,r.Uk)(" active-header-links")],-1),i=(0,r.uE)('<p>该插件会监听页面滚动事件。当页面滚动至某个 <em>标题锚点</em> 后，如果存在对应的 <em>标题链接</em> ，那么该插件会将路由 Hash 更改为该 <em>标题锚点</em> 。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector" aria-hidden="true">#</a> headerLinkSelector</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;a.sidebar-item&#39;</code></p></li><li><p>详情：</p><p><em>标题链接</em> 的选择器。</p><p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么及时滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector" aria-hidden="true">#</a> headerAnchorSelector</h3>',6),d=(0,r.Wm)("li",null,[(0,r.Wm)("p",null,[(0,r.Uk)("类型： "),(0,r.Wm)("code",null,"string")])],-1),h=(0,r.Wm)("li",null,[(0,r.Wm)("p",null,[(0,r.Uk)("默认值： "),(0,r.Wm)("code",null,"'.header-anchor'")])],-1),t=(0,r.Wm)("p",null,"详情：",-1),c=(0,r.Wm)("p",null,[(0,r.Wm)("em",null,"标题锚点"),(0,r.Uk)(" 的选择器。")],-1),o=(0,r.Uk)("你通常不需要设置该选项，除非你通过 "),u=(0,r.Uk)("markdown.anchor"),m=(0,r.Uk)(" 修改了 "),s={href:"https://github.com/valeriangalliat/markdown-it-anchor#readme",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("markdown-it-anchor"),k=(0,r.Uk)(" 的 "),f=(0,r.Wm)("code",null,"permalinkClass",-1),W=(0,r.Uk)(" 选项。"),g=(0,r.Wm)("p",null,"参考：",-1),v=(0,r.Uk)("指南 > Markdown > 语法扩展 > 标题锚点"),b=(0,r.uE)('<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>200</code></p></li><li><p>详情：</p><p>滚动事件监听器的 Debounce 延迟。</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>即便直接点击 <em>标题锚点</em> 的链接， <code>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p></li></ul>',4),w={render:function(e,l){const a=(0,r.up)("NpmBadge"),w=(0,r.up)("RouterLink"),U=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[n,(0,r.Wm)(a,{package:"@vuepress/plugin-active-header-links"}),i,(0,r.Wm)("ul",null,[d,h,(0,r.Wm)("li",null,[t,c,(0,r.Wm)("p",null,[o,(0,r.Wm)(w,{to:"/zh/reference/config.html#markdown-anchor"},{default:(0,r.w5)((()=>[u])),_:1}),m,(0,r.Wm)("a",s,[p,(0,r.Wm)(U)]),k,f,W])]),(0,r.Wm)("li",null,[g,(0,r.Wm)("ul",null,[(0,r.Wm)("li",null,[(0,r.Wm)(w,{to:"/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"},{default:(0,r.w5)((()=>[v])),_:1})])])])]),b],64)}}}}]);