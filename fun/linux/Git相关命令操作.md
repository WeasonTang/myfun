# Git相关命令操作

## 0.常用命令
```zsh
# 设置用户名：
git config --global user.name "你的用户名"
# 设置邮箱地址：
git config --global user.email "你的邮箱地址"
# 查询配置信息
git config --global --list


```
## 1.提交流程
```zsh
#1.把更改的代码暂存起来
# 此命令会把所有更改的文件全部暂存起来。
git add . 
# 如果要单个来，只需要 . 替换成对应的文件名即可。
git add temp.txt

#2.把暂存的改动提交到本地的版本库
# -m 参数表示可以直接输入后面的 message，简要说明这次改动。
git commit -m "xxx"

#3.将本地的分支版本上传到远程并合并
# git push 的命令格式一般是
git push <远程主机名> <本地分支名>：<远程分支名>
# eg：git push origin master:master
# 当然，一般情况下，我们都不用写后面的，直接 git push 即可。


```


## 2.更新 .gitignore
```zsh
git rm -r --cached .    # 从已跟踪文件清单中移除所有文件
    
git add .    # 重新添加所有文件（在这一步中 .gitignore 的配置将会生效）
git commit -m "chore: update .gitignore"    # 提交更改
git push    # 推送提交

```



