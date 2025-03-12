import{_ as i,c as a,o as n,ag as h}from"./chunks/framework.CJfFYpDD.js";const l="/myfun/assets/20240722_131604.CzdMtwTS.png",t="/myfun/assets/20240722_132158.oS5Jir-K.png",p="/myfun/assets/20240722_140453.DFwNjSmn.png",k="/myfun/assets/20240710_192922.HfZItYDV.png",C=JSON.parse('{"title":"1. linux命令","description":"","frontmatter":{},"headers":[],"relativePath":"linux/linux命令.md","filePath":"linux/linux命令.md"}'),e={name:"linux/linux命令.md"};function d(r,s,F,c,g,o){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="_1-linux命令" tabindex="-1">1. linux命令 <a class="header-anchor" href="#_1-linux命令" aria-label="Permalink to &quot;1. linux命令&quot;">​</a></h1><h2 id="_1-1-1-常用命令" tabindex="-1">1.1. 1.常用命令 <a class="header-anchor" href="#_1-1-1-常用命令" aria-label="Permalink to &quot;1.1. 1.常用命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#1.打印当前目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#2.新建文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foldername</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#3.新建文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#4.删除文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#5.ss命令查看端口状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ss</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -lntu</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /some_path</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看某个文件夹下的文件与子文件夹。/ 代表根目录，是 Linux 最顶端的路径，以此开头则为绝对路径</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看当前终端所在路径</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/testuser</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换目录命令。将当前终端切换到某一个路径下</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./a.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./b.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 复制命令。将当前路径下的 a.py 复制一份并命名为 b.py。./ 代表当前文件夹所在路径，以此开头则为相对路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./b</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 复制整体文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 删除命令。删除 b.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 移动（重命名）命令。将 a.py 更名为 b.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_folder</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 新建名为 my_folder 的文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> some_command</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 使普通用户以 root 权限执行某些命令</span></span></code></pre></div><h2 id="_1-2-2-系统服务" tabindex="-1">1.2. 2.系统服务 <a class="header-anchor" href="#_1-2-2-系统服务" aria-label="Permalink to &quot;1.2. 2.系统服务&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 启动服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 停止服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 重启服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 重新加载服务以及它的配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 查看服务状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 设置开机启动服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 设置服务为开机启动并立即启动这个单元</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 取消开机自动启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dhcpcd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 重新载入 systemd 配置。扫描新增或变更的服务单元、不会重新加载变更的配置</span></span></code></pre></div><h2 id="_1-3-3-文件压缩" tabindex="-1">1.3. 3.文件压缩 <a class="header-anchor" href="#_1-3-3-文件压缩" aria-label="Permalink to &quot;1.3. 3.文件压缩&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一般形式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -cvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./dir</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		#将 ./dir 目录打包到 xxx.tar</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 		#将 xxx.tar 解打包到当前目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./dir</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	#将 xxx.tar 解打包到 ./dir 目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -tvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		#将 xxx.tar 包中的内容列出</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .tar.gz的压缩格式只需要添加 -z参数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .tar.bz2的压缩格式只需要添加-j参数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zcvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [files]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [path]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jcvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar.bz2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [files]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxx.tar.bz2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [path]</span></span></code></pre></div><h2 id="_1-4-4-磁盘空间信息" tabindex="-1">1.4. 4.磁盘空间信息 <a class="header-anchor" href="#_1-4-4-磁盘空间信息" aria-label="Permalink to &quot;1.4. 4.磁盘空间信息&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 以人类可读格式显示</span></span></code></pre></div><h2 id="_1-5-5-文件传输" tabindex="-1">1.5. 5.文件传输 <a class="header-anchor" href="#_1-5-5-文件传输" aria-label="Permalink to &quot;1.5. 5.文件传输&quot;">​</a></h2><p>scp 命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="_1-6-6-chown-chmod" tabindex="-1">1.6. 6.chown &amp; chmod <a class="header-anchor" href="#_1-6-6-chown-chmod" aria-label="Permalink to &quot;1.6. 6.chown &amp; chmod&quot;">​</a></h2><h3 id="_1-6-1-chown" tabindex="-1">1.6.1. chown <a class="header-anchor" href="#_1-6-1-chown" aria-label="Permalink to &quot;1.6.1. chown&quot;">​</a></h3><blockquote><p>在Linux系统中，chown命令用于改变文件或目录的所有者和/或所属群组。这个命令对于系统管理员和需要管理文件权限的用户来说是非常有用的。</p></blockquote><div align="left"><img width="400" src="`+l+`"></div><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1.更改文件的所有者： </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把file.txt的所有者更改为username。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2.同时更改文件的所有者和群组：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把file.txt的所有者更改为username，并将群组更改为groupname</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username:groupname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 递归更改目录及其所有子目录和文件的所有者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/directory</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -R或--recursive选项表示递归地更改目录及其内部所有文件和子目录的所有者</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将文件 file1.txt 的拥有者设为 runoob，群体的使用者 runoobgroup :</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> runoob:runoobgroup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file1.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将目前目录下的所有文件与子目录的拥有者皆设为runoob，群体的使用者runoobgroup:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> runoob:runoobgroup</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span></code></pre></div><h3 id="_1-6-2-chmod" tabindex="-1">1.6.2. chmod <a class="header-anchor" href="#_1-6-2-chmod" aria-label="Permalink to &quot;1.6.2. chmod&quot;">​</a></h3><blockquote><p>chmod命令是Unix和Linux系统中用于改变文件或目录访问权限的命令。通过chmod，用户可以控制谁可以读取、写入或执行文件或目录。该命令有两种主要用法：数字设定法和符号设定法。</p></blockquote><div align="left"><img width="400" src="`+t+`"></div><p><strong>数字设定法</strong></p><blockquote><p>在数字设定法中，权限通过三个八进制数字来表示，分别对应文件所有者（user, u）、用户组（group, g）和其他用户（others, o）的权限。每个数字是读（r=4）、写（w=2）和执行（x=1）权限的总和。</p></blockquote><ul><li>0：表示没有任何权限。</li><li>1：表示可执行权限（x）。</li><li>2：表示可写权限（w）。</li><li>4：表示可读权限（r）。</li></ul><blockquote><p>例如，权限755表示： 文件所有者（u）有读（4）、写（2）和执行（1）权限，总和为7。 用户组（g）和其他用户（o）都有读（4）和执行（1）权限，但没有写权限，总和为5。 数字设定法的一般形式为：</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一般形式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [mode] 文件名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 目录名</span></span></code></pre></div><div align="left"><img width="400" src="`+p+`"></div><p><strong>符号设定法</strong></p><blockquote><p>符号设定法使用字母和操作符来表达权限的更改。操作符可以是+（添加权限）、-（删除权限）或=（赋予指定权限并取消其他所有权限）。</p></blockquote><ul><li>u：表示文件所有者（user）。</li><li>g：表示用户组（group）。</li><li>o：表示其他用户（others）。</li><li>a：表示所有用户（all），它是u、g和o的简写。</li><li>r：表示读权限（read）。</li><li>w：表示写权限（write）。</li><li>x：表示执行权限（execute）。</li></ul><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a+w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/hosts</span></span></code></pre></div><h2 id="_1-7-7-镜像备份" tabindex="-1">1.7. 7.镜像备份 <a class="header-anchor" href="#_1-7-7-镜像备份" aria-label="Permalink to &quot;1.7. 7.镜像备份&quot;">​</a></h2><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># by timeshift</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 备份</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> timeshift</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --btrfs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --comments</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;add flameshot&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> timeshift</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list</span></span></code></pre></div><p><img src="`+k+'" alt=""></p>',34)]))}const u=i(e,[["render",d]]);export{C as __pageData,u as default};
