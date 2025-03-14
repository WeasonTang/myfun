# archlinux app

## 1.steam++

>安装版本 Steam++_linux_x64_v2.8.6.tar.zst
解压到相应文件夹运行脚本即可



```zsh
# 后台使用
nohup ~/app/steam/Steam++ &

# 程序无法监听 443 端口，请执行下方命令允许程序监听 1024 以下端口( 以上 2.6.9 可用)
sudo setcap cap_net_bind_service=+eip $HOME/app/steam/Steam++

#（避免每次启动关闭加速需要输入密码）请打开终端执行以下命令
sudo chmod a+w /etc/hosts
#（如输入上面命令还提示无法hosts错误请尝试执行下面命令）
sudo chmod a+r /etc/hosts
```

## 2.code-server

设置code-server服务保持后台在线
但是到这里还有一个问题，当前这种运行是在前台运行的，不是在后台运行的，如果运行这个code-server的话，就需要保持code-server一直在前台运行，我们的服务器就不能做其他操作了，这时我们需要使用systemctl管理来运行code-server，把code-server变成一个系统服务，可以在后台运行。操作如下：

a、使用cd命令进入 /etc/systemd/system/ 目录下
```zsh
cd /etc/systemd/system/
```
b、使用touch命令新建一个code-server.service文件
```zsh
sudo touch code-server.service
```
c、使用vim编辑code-server.service为如下内容
```zsh
[Unit]
Description=code-server
After=network.target
 
[Service]
Type=exec
ExecStart=/home/weason/app/code-server/bin/code-server
Restart=always
User=weason
 
[Install]
WantedBy=default.target
```

ExecStart是code-server指令所在的地址，咱们的刚刚运行code-server的时输入的linux指令code-server后所执行的就是/home/vscode/code-server-4.9.1-linux-amd64/bin/code-server这个可执行文件

以后就可以以下命令启动、重启、停止或卸载code-server服务了：

启动code-server：
```zsh
sudo systemctl start code-server
```
重启code-server：
```zsh
sudo systemctl status code-server
```

停止code-server：
```zsh
sudo systemctl stop code-server
```
卸载code-server(卸载之前先停止code-server)
```zsh
rm -rf /home/code-server
rm -rf ~/.local/share/code-server
rm -rf ~/.config/code-server
rm -rf /etc/systemd/system/code-server.service
```

## 3.kasm
> 下载和安装Kasm
将最新版本的Kasm Workspaces下载到/tmp，提取软件包并运行安装脚本，默认情况下Kasm Workspaces使用443端口，可以通过-L指定自己想用的端口。

```bash
cd /tmp
curl -O https://kasm-static-content.s3.amazonaws.com/kasm_release_1.12.0.d4fd8a.tar.gz
tar -xf kasm_release*.tar.gz
sudo bash kasm_release/install.sh -L 8443

```
> 报错
kasm_release/install.sh: line 479: hostname: command not found
这个错误提示表明系统中缺少 hostname 命令。你可以通过安装 inetutils 包来解决这个问题，因为它包含了 hostname 命令。

在 Arch Linux 上安装 inetutils 包的步骤如下：

```bash
sudo pacman -S inetutils
```

安装完成后，再次运行 Kasm Workspaces 的安装脚本：

```bash
sudo bash kasm_release/install.sh -L 8443
```

```zsh
# 开始所有容器
docker start $(docker ps -aqf "name=kasm_*")
# 停止所有容器
docker stop $(docker ps -aqf "name=kasm_*")
# 更改启动方式
docker update --restart=unless-stopped v2raya
```
