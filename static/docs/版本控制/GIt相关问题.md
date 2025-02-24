# GIt相关问题

### git pull 拉取冲突

拉取代码前有未提交的更改，提示冲突，拉取失败。

```bash
# 执行 git pull origin master 前有未提交的更改，出现报错
From https://gitee.com/... * branch master -> FETCH_HEAD 
...
Please commit your changes or stash them before you merge.

# 解决方法1：提交更改
git add .
git commit -m "message"

# 解决方法2：暂存未提交的更改，之后可以选择恢复或清除暂存区
git stash
# 恢复暂存的更改
git stash pop
# 清空暂存区
git stash clear

# 解决方法3：放弃未提交的更改
git reset --hard
```

### git clone 提示无法访问

运行环境：win10

网络状态：已开启 v2ray 代理，能正常访问google

问题：执行 git clone 或 git push 失败，提示无法访问（fatal: unable to access）。

#### 解决方法：

```bash
# 配置 git 代理（配置成代理工具的地址和端口）
git config --global http.proxy 127.0.0.1:10809
git config --global https.proxy 127.0.0.1:10809

# 取消 git 代理
git config --global --unset-all http.proxy
git config --global --unset-all https.proxy
```

### gitignore 没反应

有时候想要让 git 忽略某个目录或文件，例如在 .gitignore 文件中添加 build/ ，但是添加后，build 目录仍然没有被忽略，这是因为该目录在添加到 .gitignore 之前就已经被 git 记录了。

#### 解决方法：

```bash
# 删除 git 记录，但会保留本地文件
git rm -r --cached [path]
```
