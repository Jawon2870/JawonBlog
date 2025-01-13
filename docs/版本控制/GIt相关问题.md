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

网络状态：已开启v2ray代理，能正常访问google

问题：git clone \<github仓库> 提示无法访问。

解决方法：

配置 git 代理（指向代理工具的地址和端口）

git config --global http.proxy 127.0.0.1:10809

git config --global https.proxy 127.0.0.1:10809

取消 git 代理

git config --global --unset-all http.proxy

git config --global --unset-all https.proxy
