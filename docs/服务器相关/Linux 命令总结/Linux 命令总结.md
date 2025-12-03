# Linux 命令总结

### 系统基础操作

```bash
# 查看当前目录下的所有文件，包括隐藏文件
ls -a

# 切换目录
cd 目录路径

# 查看当前路径
pwd

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

### 文件传输

```bash
# 从服务器复制文件夹到本地
# -r：递归复制目录
# user@host:/remote/path：服务器路径
# /local/path：本地保存路径
scp -r ubuntu@服务器IP:/home/ubuntu/psl_web ./  

# 从本地上传文件到服务器
scp C:\Users\Jawon\Desktop\js\test-express\index.js ubuntu@服务器IP:/home/ubuntu/test01/
```

### 文件读写

```bash
# 读取文件
cat filename

# 修改文件，ctrl+o, enter 保存修改, ctrl+x 退出编辑
nano filename
```

### Node.js / npm

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

### Ubuntu apt 锁定问题

```bash
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

## MySQL 命令总结

### 基本命令

```sql
-- 注意：sql 语句末尾要加分号

-- 查看当前有哪些数据库
SHOW DATABASES;

-- 创建数据库
CREATE DATABASE database001;

-- 使用某个数据库
USE databaseName;
 
-- 查看当前数据库中有哪些表
SHOW TABLES;

-- 创建表(名为 players)
CREATE TABLE players(
  id INT PRIMARY KEY AUTO_INCREMENT,  -- PRIMARY KEY 表示唯一索引, AUTO_INCREMENT 表示自动递增
  name VARCHARACTER(100),
  pw VARCHARACTER(100),
  data TEXT
);

-- 删除表
DROP TABLE players;

-- 修改表
-- 将表 players 中的 name 列的字符串长度改成 200
ALTER TABLE players MODIFY COLUMN name VARCHARACTER(200);
-- 将表 players 中的列名 name 改成 name_1
ALTER TABLE players RENAME COLUMN name to name_1;
-- 为表 players 添加 time 列
ALTER TABLE players ADD COLUMN time TIMESTAMP;
-- 从表 players 中删除 time 列
ALTER TABLE players DROP COLUMN time;

-- 查看表结构
DESC players

-- 插入数据
-- 在 players 中插入一行数据
INSERT INTO players (id, name, pw, data) VALUES (0, "Jawon", "123456", "hi");
-- 一次插入多条数据
INSERT INTO players (id, name, pw, data) VALUES 
(2, "jine", "123456", "hi"), (2, "kally", "123456", "hi"), (2, "lily", "123456", "hi");

-- 删除数据
-- 从 players 表中删除 name 为 "lily" 的数据
DELETE FROM players WHERE name = "lily"

-- 修改数据
-- 将 players 表中 name 为 Jawon 的数据中的 data 改为 "hello"
UPDATE players set data="hello" WHERE name = "Jawon";
-- 注意，删除和修改数据时不加 where 条件非常危险，会修改所有数据

-- 查询数据
SELECT * FROM players;  -- 查询此表中的所有数据
SELECT * FROM players WHERE name = "Jawon";  -- 查询 name 等于 Jawon 的数据

-- 退出 mysql
exit

```

### 数据库权限转移

```sql
-- 将创建数据库权限交给已有用户，之后刷新权限
GRANT ALL PRIVILEGES ON feeder.* TO 'psl'@'%';
FLUSH PRIVILEGES;

-- 查看用户权限
SHOW GRANTS FOR 'psl'@'%';
```


创建时间：2025年12月3日

更新时间：2025年12月3日
