# GIt常用命令

## Git账户配置

```bash
# 配置用户名、邮箱和密码(或token)
git config --global user.name "yourName"
git config --global user.email "123@qq.com"
git config --global user.password "密码或token"
 
# 查看配置信息，有时需要点击 q 退出
git config --list
```

## .gitignore

通过仓库根目录下的 .gitignore 文件来让 git 忽略上传指定的文件或目录。

```bash
#注释
*.txt		忽略所有 .txt 后缀的文件
!src.a          忽略除 src.a 外的其他文件
dist		忽略所有名为 dist 的文件和目录
/dist           仅忽略根目录下的 dist 目录
build/          忽略所有 build 目录下的所有文件，过滤整个build文件夹
doc/*.txt       忽略 doc 目录下所有 .txt 后缀的文件，但不包括 doc 子目录的 .txt 的文件
 
bin/:           忽略当前路径下的 bin 文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
/bin:           忽略根目录下的 bin 文件
/*.c:           忽略 cat.c，不忽略 build/cat.c
debug/*.obj:    忽略debug/io.obj，不忽略 debug/common/io.obj和tools/debug/io.obj
**/foo:         忽略/foo, a/foo, a/b/foo等
a/**/b:         忽略a/b, a/x/b, a/x/y/b等
!/bin/run.sh    不忽略bin目录下的run.sh文件
*.log:          忽略所有 .log 文件
config.js:      忽略当前路径的 config.js 文件
 
/mtk/           忽略整个文件夹
*.zip           忽略所有.zip文件
/mtk/do.c       忽略某个具体文件
```

## 创建仓库

```bash
# 在当前目录创建本地仓库
git init

# 克隆一个仓库到当前目录
git clone <url>
# 例如 git clone https://github.com/test/test.git
# 如果未登录且未配置令牌，git 会提示登录或配置令牌
```

## 远程仓库

```bash
# 添加远程仓库引用(别名)
git remote add [shortname] [url]

# 删除远程仓库引用
git remote rm [shortname]

# 修改远程仓库引用
git remote set-url origin [url]

# 显示所有远程仓库
git remote -v

# 显示某个远程仓库的信息
git remote show [remote]

# 向远程仓库(remote)推送本地分支(branch)
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
git push [remote] --force

# 推送所有分支到远程仓库
git push [remote] --all

# 拉取远程仓库的变化，与本地分支合并
git pull [remote] [branch]

# 下载远程仓库的所有变动
git fetch [remote]
```

## 增加/删除文件

```bash
# 添加当前目录的所有文件到暂存区
git add .

# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
git add -p

# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]
```

## 提交

```bash
# 提交暂存区到仓库区
git commit -m [message]

# 提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
git commit -a

# 提交时显示所有diff信息
git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
git commit --amend [file1] [file2] ...

# 查看历史提交
git log

# 暂存更改
git stash
# 恢复暂存的更改
git stash pop
# 查看暂存
git stash list
# 应用暂存
git stash apply [stash{n}]
# 删除暂存
git stash drop [stash@{1}]
# 清空暂存
git stash clear

```

## 分支

```bash
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但依然停留在当前分支
git branch [branch-name]

# 新建一个分支，并切换到该分支
git checkout -b [branch]

# 新建一个分支，指向指定commit
git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch] [remote-branch]

# 强制重置当前分支，放弃更改
git reset --hard

# 强制重置当前分支到指定的提交，放弃更改
git reset --hard <commit>

# 切换到指定分支，并更新工作区
git checkout [branch-name]

# 切换到上一个分支
git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
git merge [branch]

# 选择一个commit，合并进当前分支
git cherry-pick [commit]

# 删除分支
git branch -d [branch-name]

# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```

---

创建时间：2025年1月23日

更新时间：2025年2月3日
