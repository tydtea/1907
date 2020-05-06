## git 操作文档

- 编写人员：邬岳辉

- tips:
  - xxx 代表远程 ssh 克隆地址
  - branchName 代表分支名

### 克隆分支

- git clone xxx
  - 直接克隆整个仓库，默认只显示 master 分支，可以使用 git switch branchName 切换到对应分支
- git clone -b branchName xxx
  - 只克隆其中一个分支

### 查看分支

- git branch -l
  - 查看本地分支
- git branch -r
  - 查看远程分支
- git branch -a
  - 查看全部分支（远程的和本地）

### 创建分支

- git branch brachName

### 切换分支

> 切换分支使用 git checkout branchName，而撤销修改是 git checkout -- <file>，同一个命令，有两种作用，有点令人迷惑。

> 实际上，切换分支这个动作，用 switch 更科学。所以本文中的切换分支，都修改为了 switch 方式

- git switch brachName

### 创建并切换分支

> 只是结合了创建分支和切换分支命令，写起来更加简单而已

- git switch -c brachName

### 追踪远程分支

> 新创新的分支第一次都需要追踪远程分支，之后可以直接 git push

- git push -u origin branchName

### 获取远程最新的分支

> 假如我本地有个 git 仓库，别人推送了一个新分支到远程仓库，我要获取这个分支到本地，该怎么办？

1. 首先使用 git fetch 将某个远程主机的更新，全部取回本地

2. 然后查看远程分支：git branch -a 发现远程的分支已经可以看见了。

3. 然后拉取远程分支到本地（只需要切换）：git switch brachName

### 删除分支

> 假如我在本地想要删除某个分支，我也想把远程仓库的这个分支也要删掉怎么办？

1. 删除本地分支 git branch -d <branchName>

2. 使用 git branch -a 查看所有分支,如果本地分支不存在了，则本地分支删除成功。

3. 删除远程分支 git push origin -d <branchName>

4. 使用 git branch -a 查看所有分支,如果远程分支不存在了，则远程分支删除成功。

### 查看提交历史

- git log 可以显示所有提交过的版本信息，不包括已经被删除的 commit 记录和 reset 的操作

- git log --graph --oneline 图形化显示当前分支的提交日志

- git reflog 是显示所有的操作记录，包括提交，回退的操作。一般用来找出操作记录中的版本号，进行回退。

- git reflog 常用于恢复本地的错误操作。

### git fetch 和 git pull

- git fetch
  - 从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后你需要自己合并(merge)。
- git pull

  - 它的含义是一个 git fetch 紧接着一个 git merge 命令。 如果已经设置好跟踪分支，git pull 会查找当前分支所跟踪的服务器与分支， 从服务器上抓取数据并尝试合并(merge)那个远程分支。

### 合并分支

> 假如我在本地开发完自己的分支，我想把本地的分支合并到 dev 分支，并且远程仓库的这个分支也要合并怎么办？

- 举例：将 test 分支合并到 dev 分支

1. 切换到 dev 分支:git switch dev(如果当前分支有代码未 commit，则不能切换),切换过去以后，你写的代码不见的，这是正常的，因为 dev 分支上没有你写的代码，你是在 test 分支上写的

2. 确认当前分支是不是 dev(防止失误):git branch

3. 在 dev 分支将 test 分支合并:git merge test，合并完以后，dev 分支和 test 分支的最新提交是完全一样的，如果遇到冲突的话，手动解决冲突

4. 合并完以后将 dev，推送到 github，git push dev

5. 然后切换回自己的分支，继续开发 git switch test

### 在远程存储库中列出引用(不常用)

- git ls-remote

### git reset 撤销提交操作的三种模式

> git reset 的作用是修改 HEAD 的位置，即将 HEAD 指向的位置改变为之前存在的某个版本

> 适用场景： 如果想恢复到之前某个提交的版本，且那个版本之后提交的版本我们都不要了，就可以用这种方法。

- --hard commit_id：重置位置的同时，直接将 working Tree 工作目录、 index 暂存区及 repository 都重置成目标 Reset 节点的內容,效果看起来等同于清空暂存区和工作区。

- --soft commit_id：重置位置的同时，保留 working Tree 工作目录和 index 暂存区的内容，只让 repository 中的内容和 reset 目标节点保持一致，因此原节点和 reset 节点之间的【差异变更集】会放入 index 暂存区中(Staged files)。所以效果看起来就是工作目录的内容不变，暂存区原有的内容也不变，只是原节点和 Reset 节点之间的所有差异都会放到暂存区中。

- --mixed(默认) commit_id：重置位置的同时，只保留 Working Tree 工作目录的內容，但会将 Index 暂存区 和 Repository 中的內容更改和 reset 目标节点一致，因此原节点和 Reset 节点之间的【差异变更集】会放入 Working Tree 工作目录中。所以效果看起来就是原节点和 Reset 节点之间的所有差异都会放到工作目录中。

### git revert

> git revert 是用于“反做”某一个版本，以达到撤销该版本的修改的目的。但是会生成一次新的提交，需要填写提交注释

> 适用场景： 如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法。

> 如果有冲突，解决冲突，然后重新 commit，push 到远程分支，这时远程仓库会多了一个 commit，而原来想要撤销的那条 commit 记录还在，但是最终代码，也就是最新的 commit，已经把不要的代码移除了，此时达到了我们的目的。

- git revert commit_id
- git revert -m commit_id(如果这次提交是别的分支合并过来的，需要加参数-m)

### git rebase

> rebase 操作可以把本地未 push 的分叉提交历史整理成直线；

> rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

- [git rebase 详解](https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648)
