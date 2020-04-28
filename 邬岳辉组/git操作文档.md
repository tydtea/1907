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

- git log(信息更完整)
  - 可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）,一次性查看不完可以按回车继续查看，按 q 退出
- git reflog(信息没有那么完整，但是看起来更方便)
  - 不能察看已经删除了的 commit 记录

### git fetch 和 git pull

- git fetch
  - 从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容。 它只会获取数据然后你需要自己合并(merge)。
- git pull

  - 它的含义是一个 git fetch 紧接着一个 git merge 命令。 如果已经设置好跟踪分支，git pull 会查找当前分支所跟踪的服务器与分支， 从服务器上抓取数据并尝试合并(merge)那个远程分支。

### 合并分支

> 假如我在本地开发完自己的分支，我想把本地的分支合并到 dev 分支，并且远程仓库的这个分支也要合并怎么办？

- 举例：将 test 分支合并到 dev 分支

1. 切换到 dev 分支:git switch dev,切换过去以后，你写的代码不见的，这是正常的，因为 dev 分支上没有你写的代码，你是在 test 分支上写的

2. 确认当前分支是不是 dev(防止失误):git branch

3. 和并 test 分支:git merge test，合并完以后，dev 分支和 test 分支的最新提交是完全一样的，如果遇到冲突的话，手动解决冲突

### 在远程存储库中列出引用(不常用)

- git ls-remote
