# Linux 常用命令

### 查看系统信息

```bash
# 查看内网 ip 地址，通常在 eth0/ens33/enp0s3 等物理网卡下
ip addr

# 获取当前机器的公网 ip 地址，原理是访问第三方ip查询网站，获取返回结果，下面是三个例子
curl ipinfo.io/ip
curl icanhazip.com
curl ifconfig.me

# 查看磁盘空间使用情况（单位 GB，方便阅读）
# -h：以人类可读方式显示
df -h

# 查看当前剩余内存
free -h

# 查看进程占用 CPU 和内存
top
# 或者使用 htop（需要安装：sudo apt install htop -y）
htop

# 查看所有进程占用的内存并按大小排序
# ps aux：列出所有进程
# --sort=-rss：按物理内存占用排序
# rss: Resident Set Size，即占用内存大小（KB）
ps aux --sort=-rss

# 查看当前系统剩余多少运行内存
free -m
# -m：以 MB 显示

# 查看进程详细 CPU/内存占用
ps aux

# 杀掉进程
# PID：进程号
sudo kill -9 PID
```

### 文件操作

```bash
# ls 查看当前目录下的文件，-a 所有文件，包括隐藏文件
ls -a

# 切换目录，cd .. 上一目录
cd 目录路径

# 查看当前路径
pwd

# 读取文件，直接打印出文件内容
cat fileName

# 创建文件
touch fileName

# 创建文件夹
mkdir folderName

# 修改文件，ctrl+o, enter 保存修改, ctrl+x 退出编辑
nano filename

# 以下命令中：
# -r 递归，操作文件夹时使用
# -f 强制覆盖

# 复制文件/文件夹
cp src des

# 移动或重命名文件/文件夹
mv src des
```

### 文件传输

```bash
# 从服务器下载文件夹到本地
# -r：递归复制目录
# 格式：username@host:/remote/path
# /local/path：本地保存路径
scp -r ubuntu@nnn.nnn.nnn.nnn:/home/ubuntu/psl_web ./

# 从本地上传文件到服务器
scp C:\Users\xxx\test.txt ubuntu@serverhost:/home/xxx/xxx

# 从本地递归上传文件夹到服务器,例如上传本地的 nnn 到服务器的 sss，若 sss 文件夹不存在则会自动创建，若存在则不会覆盖内部文件
scp -r C:\Users\xxx\nnn ubuntu@serverhost:/home/xxx/sss
```

### 会话管理

```bash
# 使用 tmux 管理会话窗口

# 创建会话窗口 s001
tmux new -s s001

# 退出并终止会话窗口
exit

# 退出但保留会话窗口
ctrl + b, d

# 恢复会话窗口
tmux attach -t s001

# 查看所有会话窗口
tmux ls

# 将当前会话的日志输出到文件（先进入会话，在会话内执行）
tmux pipe-pane -o 'sed -u "s/\x1B\[[0-9;?]*[A-Za-z]//g" >> log.txt'
# 停止输出到文件（也要在会话内执行）
tmux pipe-pane
```

### Node.js / npm 的安装问题

```bash
# 卸载 apt 安装的旧版 Node.js 和 npm
sudo apt remove --purge nodejs npm -y
sudo apt autoremove -y

# 安装 curl（如果没有）
sudo apt update
sudo apt install curl -y

# 使用 NodeSource 安装 Node.js 最新 LTS
# Node.js 官方 PPA，20.x 为最新 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### apt 软件管理

#### apt 常用命令

```bash
# 以软件 tmux 为例
# 更新软件源
sudo apt update
# 安装/升级软件
sudo apt install tmux -y

# 卸载软件，但不删除配置文件
sudo apt remove tmux

# 卸载并删除配置文件
sudo apt purge tmux

# 卸载后清理无用依赖
sudo apt autoremove

# 升级所有软件
sudo apt update && sudo apt upgrade

# 查看所有已安装的软件
apt list --installed

# 查看单个软件的安装状态, 例如查看 tmux 是否已安装
apt list --installed | grep tmux
```

#### apt 包锁定问题

```bash
# 在删除或升级软件时，如果该软件正在运行则无法对其进行修改 
# 查看正在运行的 apt 进程
ps -ef | grep apt

# 安全终止正在运行的 apt 进程（根据实际 PID 替换）
sudo kill -9 进程号
```

### Docker

```bash
# 查看正在运行的容器
docker ps

# 进入一个带 docker-compose.yaml 文件的目录，重启当前 docker 容器
docker compose down && docker compose up -d

# docker 数据库操作，之后输入密码，输入过程不可见
docker exec -it name_database mysql -uroot -p

```
