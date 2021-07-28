(self.webpackChunk=self.webpackChunk||[]).push([[3439],{6760:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>l});const l={key:"v-4a7b6bf9",path:"/zh/guide/deployment.html",title:"部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"GitHub Pages",slug:"github-pages",children:[]},{level:2,title:"GitLab Pages",slug:"gitlab-pages",children:[]},{level:2,title:"Google Firebase",slug:"google-firebase",children:[]},{level:2,title:"Heroku",slug:"heroku",children:[]},{level:2,title:"Netlify",slug:"netlify",children:[]},{level:2,title:"Vercel",slug:"vercel",children:[]},{level:2,title:"云开发 CloudBase",slug:"云开发-cloudbase",children:[]},{level:2,title:"21 云盒子",slug:"_21-云盒子",children:[]}],filePathRelative:"zh/guide/deployment.md",git:{}}},5705:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>cn});var l=a(6252);const e=(0,l.Wm)("h1",{id:"部署",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#部署","aria-hidden":"true"},"#"),(0,l.Uk)(" 部署")],-1),p=(0,l.Wm)("p",null,"下述的指南基于以下条件：",-1),o=(0,l.Wm)("li",null,[(0,l.Uk)("Markdown 源文件放置在你项目的 "),(0,l.Wm)("code",null,"docs"),(0,l.Uk)(" 目录；")],-1),r=(0,l.Wm)("li",null,[(0,l.Uk)("使用的是默认的构建输出目录 ("),(0,l.Wm)("code",null,".vuepress/dist"),(0,l.Uk)(") ；")],-1),c=(0,l.Uk)("使用 "),t={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("Yarn classic"),D=(0,l.Uk)(" 作为包管理器，当然也可以使用 NPM 。"),u=(0,l.Wm)("li",null,[(0,l.Uk)("VuePress 作为项目依赖安装，并在 "),(0,l.Wm)("code",null,"package.json"),(0,l.Uk)(" 中配置了如下脚本：")],-1),b=(0,l.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>',2),m=(0,l.Uk)("设置正确的 "),d=(0,l.Uk)("base"),y=(0,l.Uk)(" 选项。"),h=(0,l.uE)("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),k=(0,l.Uk)("选择你想要使用的 CI 工具。这里我们以 "),g={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("GitHub Actions"),C=(0,l.Uk)(" 为例。"),E=(0,l.Wm)("p",null,[(0,l.Uk)("创建 "),(0,l.Wm)("code",null,".github/workflows/docs.yml"),(0,l.Uk)(" 文件来配置工作流。")],-1),f=(0,l.uE)('<details class="custom-container details"><summary>点击展开配置样例</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 每当 push 到 main 分支时触发部署</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">main</span><span style="color:#D4D4D4;">]</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 手动触发部署</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">workflow_dispatch</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">docs</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">fetch-depth</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup Node.js</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/setup-node@v1</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 选择要使用的 node 版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">node-version</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;14&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 缓存 node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Cache dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/cache@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">id</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn-cache</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            **/node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ runner.os }}-yarn-${{ hashFiles(&#39;**/yarn.lock&#39;) }}</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">restore-keys</span><span style="color:#D4D4D4;">: </span><span style="color:#C586C0;">|</span></span>\n<span class="line"><span style="color:#CE9178;">            ${{ runner.os }}-yarn-</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 如果缓存没有命中，安装依赖</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Install dependencies</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">if</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">steps.yarn-cache.outputs.cache-hit != &#39;true&#39;</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 运行构建脚本</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build VuePress site</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yarn docs:build</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># 查看 workflow 的文档来获取更多信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 部署到 gh-pages 分支</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># 部署目录为 VuePress 的默认输出目录</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>\n<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">GITHUB_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">${{ secrets.GITHUB_TOKEN }}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div></details>',1),U={class:"custom-container tip"},v=(0,l.Wm)("p",{class:"custom-container-title"},"提示",-1),_=(0,l.Uk)("请参考 "),q={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},w=(0,l.Uk)("GitHub Pages 官方指南"),A=(0,l.Uk)(" 来获取更多信息。"),P=(0,l.Wm)("h2",{id:"gitlab-pages",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),(0,l.Uk)(" GitLab Pages")],-1),x=(0,l.Uk)("设置正确的 "),j=(0,l.Uk)("base"),B=(0,l.Uk)(" 选项。"),N=(0,l.uE)("<p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p>",2),H=(0,l.Uk)("创建 "),R=(0,l.Wm)("code",null,".gitlab-ci.yml",-1),G=(0,l.Uk)(" 文件来配置 "),F={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},I=(0,l.Uk)("GitLab CI"),O=(0,l.Uk)(" 工作流。"),S=(0,l.uE)('<details class="custom-container details"><summary>点击展开配置样例</summary><div class="language-yaml ext-yml line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 选择你要使用的 docker 镜像</span></span>\n<span class="line"><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">node:14-buster</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#569CD6;">pages</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 每当 push 到 main 分支时触发部署</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">only</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">main</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 缓存 node_modules</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">node_modules/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 安装依赖并运行构建脚本</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn --frozen-lockfile</span></span>\n<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#CE9178;">yarn docs:build --dest public</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">artifacts</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>\n<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">public</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details>',1),V={class:"custom-container tip"},L=(0,l.Wm)("p",{class:"custom-container-title"},"提示",-1),z=(0,l.Uk)("请参考 "),M={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},T=(0,l.Uk)("GitLab Pages 官方指南"),$=(0,l.Uk)(" 来获取更多信息。"),Y=(0,l.Wm)("h2",{id:"google-firebase",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),(0,l.Uk)(" Google Firebase")],-1),K=(0,l.Uk)("请确保你已经安装了 "),J={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},Q=(0,l.Uk)("firebase-tools"),X=(0,l.Uk)("。"),Z=(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Uk)("在你项目的根目录下创建 "),(0,l.Wm)("code",null,"firebase.json"),(0,l.Uk)(" 和 "),(0,l.Wm)("code",null,".firebaserc"),(0,l.Uk)("，并包含以下内容：")])],-1),ss=(0,l.uE)('<p><code>firebase.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;hosting&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;public&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;ignore&quot;</span><span style="color:#D4D4D4;">: []</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>.firebaserc</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;projects&quot;</span><span style="color:#D4D4D4;">: {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;default&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">  }</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>在执行了 <code>yarn docs:build</code> 或 <code>npm run docs:build</code> 后, 使用 <code>firebase deploy</code> 指令来部署。</li></ol>',5),ns={class:"custom-container tip"},as=(0,l.Wm)("p",{class:"custom-container-title"},"提示",-1),ls=(0,l.Uk)("请参考 "),es={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},ps=(0,l.Uk)("Firebase CLI 官方指南"),os=(0,l.Uk)(" 来获取更多信息。"),rs=(0,l.Wm)("h2",{id:"heroku",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),(0,l.Uk)(" Heroku")],-1),cs=(0,l.Uk)("首先安装 "),ts={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},is=(0,l.Uk)("Heroku CLI"),Ds=(0,l.Uk)("；"),us={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},bs=(0,l.Uk)("在这里"),ms=(0,l.Uk)(" 注册一个 Heroku 账号；"),ds=(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Uk)("运行 "),(0,l.Wm)("code",null,"heroku login"),(0,l.Uk)(" 并填写你的 Heroku 认证信息：")])],-1),ys=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">heroku login</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>在你的项目根目录中，创建一个名为 <code>static.json</code> 的文件，并包含下述内容：</li></ol><p><code>static.json</code>:</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;root&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',4),hs=(0,l.Uk)("这里是你项目的配置，请参考 "),ks={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},gs=(0,l.Uk)("heroku-buildpack-static"),Ws=(0,l.Uk)(" 来获取更多信息。"),Cs=(0,l.Wm)("h2",{id:"netlify",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),(0,l.Uk)(" Netlify")],-1),Es=(0,l.Uk)("前往 "),fs={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},Us=(0,l.Uk)("Netlify"),vs=(0,l.Uk)(" ，从 GitHub 创建一个新项目，并进行如下配置："),_s=(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("strong",null,"Build Command:"),(0,l.Uk)(),(0,l.Wm)("code",null,"yarn docs:build")]),(0,l.Wm)("li",null,[(0,l.Wm)("strong",null,"Publish directory:"),(0,l.Uk)(),(0,l.Wm)("code",null,"docs/.vuepress/dist")])],-1),qs=(0,l.Uk)("设置 "),ws={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},As=(0,l.Uk)("Environment variables"),Ps=(0,l.Uk)(" 来选择 Node 版本："),xs=(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("code",null,"NODE_VERSION"),(0,l.Uk)(": 14")])],-1),js=(0,l.Wm)("li",null,[(0,l.Wm)("p",null,"点击 deploy 按钮。")],-1),Bs=(0,l.Wm)("h2",{id:"vercel",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),(0,l.Uk)(" Vercel")],-1),Ns=(0,l.Uk)("请查看 "),Hs={href:"https://vercel.com/guides/deploying-vuepress-to-vercel",target:"_blank",rel:"noopener noreferrer"},Rs=(0,l.Uk)("Creating and Deploying a VuePress App with Vercel"),Gs=(0,l.Uk)("."),Fs=(0,l.Wm)("h2",{id:"云开发-cloudbase",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#云开发-cloudbase","aria-hidden":"true"},"#"),(0,l.Uk)(" 云开发 CloudBase")],-1),Is={href:"https://cloudbase.net/?site=vuepress",target:"_blank",rel:"noopener noreferrer"},Os=(0,l.Uk)("云开发 CloudBase"),Ss=(0,l.Uk)(" 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 "),Vs={href:"https://cloudbase.net/framework.html?site=vuepress",target:"_blank",rel:"noopener noreferrer"},Ls=(0,l.Uk)("CloudBase Framework"),zs=(0,l.Uk)(" 来一键部署应用。"),Ms=(0,l.uE)('<ol><li>全局安装 CloudBase CLI ：</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm install -g @cloudbase/cli</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),Ts={start:"2"},$s=(0,l.Uk)("在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 "),Ys={href:"https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&tdl_site=vuejs",target:"_blank",rel:"noopener noreferrer"},Ks=(0,l.Uk)("开通环境"),Js=(0,l.Uk)("："),Qs=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">cloudbase init --without-template</span></span>\n<span class="line"><span style="color:#D4D4D4;">cloudbase framework:deploy</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。</p><p>确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。</p><p>也可以使用 <code>cloudbase init --template vuepress</code> 快速创建和部署一个新的 VuePress 应用。</p>',4),Xs={class:"custom-container tip"},Zs=(0,l.Wm)("p",{class:"custom-container-title"},"提示",-1),sn=(0,l.Uk)("更多详细信息请查看 CloudBase Framework 的"),nn={href:"https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress#%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B",target:"_blank",rel:"noopener noreferrer"},an=(0,l.Uk)("部署项目示例"),ln=(0,l.Wm)("h2",{id:"_21-云盒子",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#_21-云盒子","aria-hidden":"true"},"#"),(0,l.Uk)(" 21 云盒子")],-1),en=(0,l.Uk)("请查看 "),pn={href:"https://www.21yunbox.com/docs/#/deploy-vuepress",target:"_blank",rel:"noopener noreferrer"},on=(0,l.Uk)("21 云盒子 - 部署一个 VuePress 静态网页"),rn=(0,l.Uk)("。"),cn={render:function(s,n){const a=(0,l.up)("OutboundLink"),cn=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[e,p,(0,l.Wm)("ul",null,[o,r,(0,l.Wm)("li",null,[c,(0,l.Wm)("a",t,[i,(0,l.Wm)(a)]),D]),u]),b,(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[m,(0,l.Wm)(cn,{to:"/zh/reference/config.html#base"},{default:(0,l.w5)((()=>[d])),_:1}),y]),h]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[k,(0,l.Wm)("a",g,[W,(0,l.Wm)(a)]),C]),E])]),f,(0,l.Wm)("div",U,[v,(0,l.Wm)("p",null,[_,(0,l.Wm)("a",q,[w,(0,l.Wm)(a)]),A])]),P,(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[x,(0,l.Wm)(cn,{to:"/zh/reference/config.html#base"},{default:(0,l.w5)((()=>[j])),_:1}),B]),N]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[H,R,G,(0,l.Wm)("a",F,[I,(0,l.Wm)(a)]),O])])]),S,(0,l.Wm)("div",V,[L,(0,l.Wm)("p",null,[z,(0,l.Wm)("a",M,[T,(0,l.Wm)(a)]),$])]),Y,(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[K,(0,l.Wm)("a",J,[Q,(0,l.Wm)(a)]),X])]),Z]),ss,(0,l.Wm)("div",ns,[as,(0,l.Wm)("p",null,[ls,(0,l.Wm)("a",es,[ps,(0,l.Wm)(a)]),os])]),rs,(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[cs,(0,l.Wm)("a",ts,[is,(0,l.Wm)(a)]),Ds])]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[(0,l.Wm)("a",us,[bs,(0,l.Wm)(a)]),ms])]),ds]),ys,(0,l.Wm)("p",null,[hs,(0,l.Wm)("a",ks,[gs,(0,l.Wm)(a)]),Ws]),Cs,(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[Es,(0,l.Wm)("a",fs,[Us,(0,l.Wm)(a)]),vs]),_s]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[qs,(0,l.Wm)("a",ws,[As,(0,l.Wm)(a)]),Ps]),xs]),js]),Bs,(0,l.Wm)("p",null,[Ns,(0,l.Wm)("a",Hs,[Rs,(0,l.Wm)(a)]),Gs]),Fs,(0,l.Wm)("p",null,[(0,l.Wm)("a",Is,[Os,(0,l.Wm)(a)]),Ss,(0,l.Wm)("a",Vs,[Ls,(0,l.Wm)(a)]),zs]),Ms,(0,l.Wm)("ol",Ts,[(0,l.Wm)("li",null,[$s,(0,l.Wm)("a",Ys,[Ks,(0,l.Wm)(a)]),Js])]),Qs,(0,l.Wm)("div",Xs,[Zs,(0,l.Wm)("p",null,[sn,(0,l.Wm)("a",nn,[an,(0,l.Wm)(a)])])]),ln,(0,l.Wm)("p",null,[en,(0,l.Wm)("a",pn,[on,(0,l.Wm)(a)]),rn])],64)}}}}]);