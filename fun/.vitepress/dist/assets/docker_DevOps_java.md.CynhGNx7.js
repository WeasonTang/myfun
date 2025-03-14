import{_ as a,c as i,o as n,ag as l}from"./chunks/framework.CJfFYpDD.js";const p="/myfun/assets/ip.BFZNZfLs.png",t="/myfun/assets/vpc.CThOx-Ht.png",e="/myfun/assets/docker%E6%9E%B6%E6%9E%84.D-VBzOpw.svg",h="/myfun/assets/docker%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.we6Ivqx8.png",C=JSON.parse('{"title":"DevOps_java","description":"","frontmatter":{},"headers":[],"relativePath":"docker/DevOps_java.md","filePath":"docker/DevOps_java.md"}'),k={name:"docker/DevOps_java.md"};function r(d,s,o,F,c,g){return n(),i("div",null,s[0]||(s[0]=[l('<h1 id="devops-java" tabindex="-1">DevOps_java <a class="header-anchor" href="#devops-java" aria-label="Permalink to &quot;DevOps_java&quot;">​</a></h1><h2 id="_1-云平台核心" tabindex="-1">1.云平台核心 <a class="header-anchor" href="#_1-云平台核心" aria-label="Permalink to &quot;1.云平台核心&quot;">​</a></h2><p>公有云、私有云</p><p><img src="'+p+'" alt=""></p><p><strong>vpc(私有网络、专有网络)</strong></p><p><img src="'+t+'" alt=""></p><h2 id="_2-docker" tabindex="-1">2.Docker <a class="header-anchor" href="#_2-docker" aria-label="Permalink to &quot;2.Docker&quot;">​</a></h2><h3 id="_1-解决的问题" tabindex="-1">1.解决的问题 <a class="header-anchor" href="#_1-解决的问题" aria-label="Permalink to &quot;1.解决的问题&quot;">​</a></h3><ol><li>统一标准 <ul><li>应用构建</li><li>应用分享</li><li>应用运行</li><li>容器化</li></ul></li><li>资源隔离 <ul><li>cpu、memory资源隔离与限制</li><li>访问设备隔离与限制</li><li>网络隔离与限制</li><li>用户、用户组隔离限制</li><li>......</li></ul></li></ol><h3 id="_2-架构" tabindex="-1">2.架构 <a class="header-anchor" href="#_2-架构" aria-label="Permalink to &quot;2.架构&quot;">​</a></h3><p><img src="'+e+`" alt=""></p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Docker_Host：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 安装Docker的主机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Daemon：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 运行在Docker主机上的Docker后台进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Client：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 操作Docker主机的客户端（命令行、UI等）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Registry：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 镜像仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hub</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Images：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 镜像，带环境打包好的程序，可以直接启动运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">●</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Containers：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ○</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 容器，由镜像启动起来正在运行中的程序</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">交互逻辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">装好Docker，然后去</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 软件市场</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 寻找镜像，下载并运行，查看容器状态日志等排错</span></span></code></pre></div><h3 id="_3-安装" tabindex="-1">3.安装 <a class="header-anchor" href="#_3-安装" aria-label="Permalink to &quot;3.安装&quot;">​</a></h3><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#按官网来 https://docs.docker.com/engine/install/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#需要改数据源</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#ubuntu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gpg证书</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> apt-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">阿里云镜像源地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add-apt-repository</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsb_release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -cs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) stable&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#centos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span></code></pre></div><h3 id="_4-命令实战-创建java应用" tabindex="-1">4.命令实战-<strong>创建java应用</strong> <a class="header-anchor" href="#_4-命令实战-创建java应用" aria-label="Permalink to &quot;4.命令实战-**创建java应用**&quot;">​</a></h3><p><img src="`+h+`" alt=""></p><p><strong>创建java应用</strong></p><ol><li><p>在IDEA工具里面搞定微服务jar包</p></li><li><p>编写Dockerfile</p></li></ol><div class="language-do vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">do</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>FROM openjdk:8-jdk-slim</span></span>
<span class="line"><span>LABEL maintainer=weason</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY *.jar /app.jar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app.jar&quot;]</span></span></code></pre></div><ol start="3"><li>构建镜像</li></ol><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java-app:1.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><ol start="4"><li>运行容器</li></ol><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行redis</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myredis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 6379:6379</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --requirepass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;jiayou666&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行java程序 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:8080</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java-app:1.0</span></span></code></pre></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>`,24)]))}const u=a(k,[["render",r]]);export{C as __pageData,u as default};
