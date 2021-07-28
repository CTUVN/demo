(self.webpackChunk=self.webpackChunk||[]).push([[300],{1672:(s,n,l)=>{"use strict";l.r(n),l.d(n,{data:()=>e});const e={key:"v-301ab792",path:"/advanced/plugin.html",title:"Writing a Plugin",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Create a Plugin",slug:"create-a-plugin",children:[]},{level:2,title:"Publish to NPM",slug:"publish-to-npm",children:[{level:3,title:"Plugin Entry",slug:"plugin-entry",children:[]},{level:3,title:"package.json",slug:"package-json",children:[]}]}],filePathRelative:"advanced/plugin.md",git:{}}},4648:(s,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>T});var e=l(6252);const a=(0,e.Wm)("h1",{id:"writing-a-plugin",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#writing-a-plugin","aria-hidden":"true"},"#"),(0,e.Uk)(" Writing a Plugin")],-1),o={class:"custom-container tip"},p=(0,e.Wm)("p",{class:"custom-container-title"},"TIP",-1),r=(0,e.Uk)("Before reading this guide, you'd better learn the VuePress "),t=(0,e.Uk)("architecture"),i=(0,e.Uk)(" first."),c=(0,e.Wm)("h2",{id:"create-a-plugin",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#create-a-plugin","aria-hidden":"true"},"#"),(0,e.Uk)(" Create a Plugin")],-1),u=(0,e.Uk)("A VuePress plugin is a plain JavaScript object that satisfies the "),m=(0,e.Uk)("Plugin API"),D=(0,e.Uk)(", which is called a "),W=(0,e.Wm)("em",null,"Plugin Object",-1),d=(0,e.Uk)("."),b=(0,e.Wm)("p",null,[(0,e.Uk)("If a plugin wants to receive user options, it could be a function that returns a "),(0,e.Wm)("em",null,"Plugin Object"),(0,e.Uk)(", which is called a "),(0,e.Wm)("em",null,"Plugin Function"),(0,e.Uk)(".")],-1),y=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#569CD6"}},"const"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," "),(0,e.Wm)("span",{style:{color:"#4FC1FF"}},"fooPlugin"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," = {")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"  "),(0,e.Wm)("span",{style:{color:"#9CDCFE"}},"name:"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," "),(0,e.Wm)("span",{style:{color:"#CE9178"}},"'vuepress-plugin-foo'"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}},",")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"  "),(0,e.Wm)("span",{style:{color:"#6A9955"}},"// ...")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"}")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"})])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br")])],-1),g=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#569CD6"}},"const"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," "),(0,e.Wm)("span",{style:{color:"#DCDCAA"}},"fooPlugin"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," = ("),(0,e.Wm)("span",{style:{color:"#9CDCFE"}},"options"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}},", "),(0,e.Wm)("span",{style:{color:"#9CDCFE"}},"app"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}},") "),(0,e.Wm)("span",{style:{color:"#569CD6"}},"=>"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," {")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"  "),(0,e.Wm)("span",{style:{color:"#C586C0"}},"return"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," {")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"    "),(0,e.Wm)("span",{style:{color:"#9CDCFE"}},"name:"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," "),(0,e.Wm)("span",{style:{color:"#CE9178"}},"'vuepress-plugin-foo'"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}},",")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"    "),(0,e.Wm)("span",{style:{color:"#6A9955"}},"// ...")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"  }")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"}")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"})])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"2"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"3"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"4"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"5"),(0,e.Wm)("br"),(0,e.Wm)("span",{class:"line-number"},"6"),(0,e.Wm)("br")])],-1),h=(0,e.uE)('<h2 id="publish-to-npm" tabindex="-1"><a class="header-anchor" href="#publish-to-npm" aria-hidden="true">#</a> Publish to NPM</h2><p>The typical structure of a plugin package is as follow:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">vuepress-plugin-foo</span></span>\n<span class="line"><span style="color:#D4D4D4;">├─ lib</span></span>\n<span class="line"><span style="color:#D4D4D4;">│  └─ index.js</span></span>\n<span class="line"><span style="color:#D4D4D4;">└─ package.json</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="plugin-entry" tabindex="-1"><a class="header-anchor" href="#plugin-entry" aria-hidden="true">#</a> Plugin Entry</h3><p>The <code>lib/index.js</code> file is the plugin entry, which should export the plugin directly:</p>',5),k=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#4EC9B0"}},"module"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}},"."),(0,e.Wm)("span",{style:{color:"#4EC9B0"}},"exports"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," = "),(0,e.Wm)("span",{style:{color:"#9CDCFE"}},"fooPlugin")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"})])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),f=(0,e.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e.Wm)("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[(0,e.Wm)("code",null,[(0,e.Wm)("span",{class:"line"},[(0,e.Wm)("span",{style:{color:"#C586C0"}},"export"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," "),(0,e.Wm)("span",{style:{color:"#C586C0"}},"default"),(0,e.Wm)("span",{style:{color:"#D4D4D4"}}," "),(0,e.Wm)("span",{style:{color:"#9CDCFE"}},"fooPlugin")]),(0,e.Uk)("\n"),(0,e.Wm)("span",{class:"line"})])]),(0,e.Wm)("div",{class:"line-numbers"},[(0,e.Wm)("span",{class:"line-number"},"1"),(0,e.Wm)("br")])],-1),C={class:"custom-container tip"},v=(0,e.Wm)("p",{class:"custom-container-title"},"TIP",-1),E=(0,e.Wm)("p",null,"Notice that the plugin entry will be loaded in Node, so it should be in CommonJS format.",-1),U=(0,e.Uk)("If you are using ESM format, you'll need to use "),j={href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"},P=(0,e.Uk)("babel"),w=(0,e.Uk)(" or "),x={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},q=(0,e.Uk)("typescript"),F=(0,e.Uk)(" to transpile it into CommonJS."),S=(0,e.Wm)("h3",{id:"package-json",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#package-json","aria-hidden":"true"},"#"),(0,e.Uk)(" package.json")],-1),_=(0,e.Uk)("The "),A={href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},I=(0,e.Uk)("package.json"),M=(0,e.Uk)(" file is required to publish a package to NPM:"),N=(0,e.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-plugin-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;version&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;1.0.0&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;vuepress-plugin&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ],</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;main&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;lib/index.js&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;files&quot;</span><span style="color:#D4D4D4;">: [</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;lib&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>Set <code>name</code> to follow the naming convention: <code>vuepress-plugin-xxx</code> or <code>@org/vuepress-plugin-xxx</code>.</li><li>Set <code>keywords</code> to include <code>vuepress-plugin</code>, so that users can search your plugin on NPM.</li><li>Set <code>main</code> to the plugin entry file.</li><li>Set <code>files</code> to only publish those files inside <code>lib</code> directory.</li></ul>',2),T={render:function(s,n){const l=(0,e.up)("RouterLink"),T=(0,e.up)("CodeGroupItem"),J=(0,e.up)("CodeGroup"),O=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[a,(0,e.Wm)("div",o,[p,(0,e.Wm)("p",null,[r,(0,e.Wm)(l,{to:"/advanced/architecture.html"},{default:(0,e.w5)((()=>[t])),_:1}),i])]),c,(0,e.Wm)("p",null,[u,(0,e.Wm)(l,{to:"/reference/plugin-api.html"},{default:(0,e.w5)((()=>[m])),_:1}),D,W,d]),b,(0,e.Wm)(J,null,{default:(0,e.w5)((()=>[(0,e.Wm)(T,{title:"Plugin Object",active:""},{default:(0,e.w5)((()=>[y])),_:1}),(0,e.Wm)(T,{title:"Plugin Function"},{default:(0,e.w5)((()=>[g])),_:1})])),_:1}),h,(0,e.Wm)(J,null,{default:(0,e.w5)((()=>[(0,e.Wm)(T,{title:"CJS",active:""},{default:(0,e.w5)((()=>[k])),_:1}),(0,e.Wm)(T,{title:"ESM"},{default:(0,e.w5)((()=>[f])),_:1})])),_:1}),(0,e.Wm)("div",C,[v,E,(0,e.Wm)("p",null,[U,(0,e.Wm)("a",j,[P,(0,e.Wm)(O)]),w,(0,e.Wm)("a",x,[q,(0,e.Wm)(O)]),F])]),S,(0,e.Wm)("p",null,[_,(0,e.Wm)("a",A,[I,(0,e.Wm)(O)]),M]),N],64)}}}}]);