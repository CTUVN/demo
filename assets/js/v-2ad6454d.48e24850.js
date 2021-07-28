(self.webpackChunk=self.webpackChunk||[]).push([[2586],{1612:(s,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>a});const a={key:"v-2ad6454d",path:"/reference/plugin/medium-zoom.html",title:"medium-zoom",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[{level:3,title:"selector",slug:"selector",children:[]},{level:3,title:"delay",slug:"delay",children:[]},{level:3,title:"zoomOptions",slug:"zoomoptions",children:[]}]},{level:2,title:"Styles",slug:"styles",children:[]},{level:2,title:"Composition API",slug:"composition-api",children:[{level:3,title:"useMediumZoom",slug:"usemediumzoom",children:[]}]}],filePathRelative:"reference/plugin/medium-zoom.md",git:{}}},7091:(s,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>x});var a=n(6252);const l=(0,a.Wm)("h1",{id:"medium-zoom",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#medium-zoom","aria-hidden":"true"},"#"),(0,a.Uk)(" medium-zoom")],-1),o=(0,a.Uk)("Integrate "),p={href:"https://github.com/francoischalifour/medium-zoom#readme",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("medium-zoom"),t=(0,a.Uk)(" into VuePress, which can provide the ability to zoom images."),r=(0,a.uE)('<p>This plugin has been integrated into the default theme.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>Details:</p><p>Selector for zoomable images.</p><p>By default this plugin will make all images zoomable except those inside <code>&lt;a&gt;</code> tags.</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>500</code></p></li><li><p>Details:</p><p>Delay in milliseconds.</p><p>After navigating to a new page, this plugin will make images zoomable with a delay.</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions" aria-hidden="true">#</a> zoomOptions</h3>',7),c=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("Type: "),(0,a.Wm)("code",null,"Object")])],-1),m=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"Details:"),(0,a.Wm)("p",null,"Options for medium-zoom.")],-1),u=(0,a.Wm)("p",null,"Also see:",-1),d={href:"https://github.com/francoischalifour/medium-zoom#options",target:"_blank",rel:"noopener noreferrer"},D=(0,a.Uk)("medium-zoom > Options"),h=(0,a.uE)('<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize most of the zoom styles via <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides some CSS variables for additional customization:</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--medium-zoom-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--medium-zoom-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--medium-zoom-opacity</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom" aria-hidden="true">#</a> useMediumZoom</h3>',5),y=(0,a.Wm)("p",null,"Details:",-1),b=(0,a.Uk)("Returns the "),g=(0,a.Wm)("code",null,"Zoom",-1),f=(0,a.Uk)(" instance that used by this plugin, so that you can use the instance "),C={href:"https://github.com/francoischalifour/medium-zoom#methods",target:"_blank",rel:"noopener noreferrer"},z=(0,a.Uk)("methods"),k=(0,a.Uk)(" directly."),W=(0,a.Wm)("p",null,"This plugin will make images zoomable after navigating to current page. But if you are going to add new images dynamically, you may need this method to make those new images zoomable, too.",-1),v=(0,a.Wm)("p",null,[(0,a.Uk)("This plugin adds an extra "),(0,a.Wm)("code",null,"refresh"),(0,a.Uk)(" method on the "),(0,a.Wm)("code",null,"Zoom"),(0,a.Uk)(" instance, which will call "),(0,a.Wm)("code",null,"zoom.detach()"),(0,a.Uk)(" then "),(0,a.Wm)("code",null,"zoom.attach()"),(0,a.Uk)(" with the "),(0,a.Wm)("a",{href:"#selector"},"selector"),(0,a.Uk)(" as the default parameter. It will help you to refresh the zoomable images for current page.")],-1),E=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"Example:")],-1),w=(0,a.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nextTick</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useMediumZoom</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-medium-zoom/lib/client&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">zoom</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useMediumZoom</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ... do something to add new images in current page</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// then you may need to call `refresh` manually to make those new images zoomable</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">nextTick</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">zoom</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">refresh</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">    })</span></span>\n<span class="line"><span style="color:#D4D4D4;">  },</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',1),x={render:function(s,e){const n=(0,a.up)("NpmBadge"),x=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,(0,a.Wm)(n,{package:"@vuepress/plugin-medium-zoom"}),(0,a.Wm)("p",null,[o,(0,a.Wm)("a",p,[i,(0,a.Wm)(x)]),t]),r,(0,a.Wm)("ul",null,[c,m,(0,a.Wm)("li",null,[u,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",d,[D,(0,a.Wm)(x)])])])])]),h,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[y,(0,a.Wm)("p",null,[b,g,f,(0,a.Wm)("a",C,[z,(0,a.Wm)(x)]),k]),W,v]),E]),w],64)}}}}]);