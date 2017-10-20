# Git工作流简介

标签（空格分隔）： Git工作流

## 1.0 什么是git工作流？

git工作流是在工作中团队成员遵守的一种**代码管理方案**
在git中有以下几种工作流方案： 
集中式工作流，功能开发工作流，   （基础工作流）
Gitflow工作流，Forking工作流。   （高级工作流）

首先简略介绍一下两个基础工作流，高级工作流将会在最后介绍。

### 1.1 集中式工作流
集中式工作流只有一个master分支，开发者会先把远程的仓库**clone**到本地，之后的修改和提交都在本地操作，直到在某个合适的时间点将本地的代码合入到远程master。
这种工作流比较适合小团队。  

![](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/jizhongshi.png)
### 1.2 功能开发工作流
功能开发工作流不直接往master提交代码，而是从master拉取**feature分支**进行功能开发，团队成员根据分工拉取不同的功能分支来进行不同的功能开发，这样就可以完全隔离开每个人的工作。
当功能开发完成后，成员可向master分支发起**Pull Request**，只有审核通过的代码才真正允许合入master，这就是我们常说的**Code Review**。  

![](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gongneng.png)

## 2.0 为什么需要git工作流？


在工作中，一个项目往往是由团队合作完成的，不同成员负责自己的一部分工作。当成员们从master分支中clone了项目后，在本地完成自己的工作部分功能的实现，当该开发者准备将自己的完成的部分push到master中时，这时候可能会出现一些问题，将在下文列举：

### 2.1 conflict

另一个开发成员已将自己完成的部分先于你push到了master分支（即中央仓库）。中央仓库代表了正式项目，所以提交历史应该被尊重且是稳定不变的。**如果开发者本地的提交历史和中央仓库有分歧，Git会拒绝你的push提交。**

### 2.2 rebase

那么如何解决conflict呢？在开发者提交自己功能修改到中央库前，**需要先fetch在中央库的新增提交，rebase自己的提交到中央库提交历史之上。**
如果解决冲突时遇到麻烦，Git可以很简单中止整个rebase操作。

### 2.3 pull request

在之前介绍功能开发工作流时就提到了pull request，工作流使团队讨论成为可能。 
一旦某个开发完成一个功能，不是直接提交到master分支，而是push到中央仓库的功能分支上并发起一个Pull Request请求去合并修改到master。  
一个开发者开发功能需要帮助时，要做的就是发起一个Pull Request，相关的人就会自动收到通知，在相关的提交旁边能看到需要帮助解决的问题。

## 3.0 如何使用git工作流？
下文将以高级工作流gitflow为例具体解释工作流的使用过程。  

![](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gitflow.png)  

Gitflow工作流为不同的分支分配一个很明确的角色，并定义分支之间如何和什么时候进行交互。
Gitflow工作流仍然用中央仓库作为所有开发者的交互中心。和其它的工作流一样，开发者在本地工作并push分支到要中央仓库中。
### 3.1 develop分支
相对使用仅有的一个master分支，Gitflow工作流使用2个分支来记录项目的历史。**master分支存储了正式发布的历史，而develop分支作为功能的集成分支。**
这样也方便master分支上的所有提交分配一个**版本号**。  

![](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gitflow_develop.png)

    git branch develop
    git push -u origin develop
    //创建
    git clone ssh://user@host/path/to/repo.git  //clone
    git checkout -b develop origin/develop  //跟踪


### 3.2 feature分支
feature分支使用develop分支作为父分支，当新功能完成时，合并回develop分支。
新功能提交时feature分支不直接与master分支交互。  

![创建feature分支](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gitflow_function.png)  （创建feature分支）

    git checkout -b some-feature develop
    //创建
    git status
    git add <some-file>
    git commit
    //暂存
  
![feature分支合并回develop分支](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gitflow_function_finish.png)（feature分支合并回develop分支）

    git pull origin develop
    git checkout develop
    git merge some-feature
    git push
    git branch -d some-feature
### 3.3 release分支
一旦develop分支上有了做一次发布的足够功能，就从develop分支上fork一个发布分支。
新建的分支用于开始发布循环，所以从这个时间点开始之后新的功能不能再加到这个分支上。
这个分支只应该做**Bug修复、文档生成和其它面向发布任务**。
一旦对外发布的工作都完成了，发布分支合并到master分支并分配一个版本号打好Tag。
另外，这些从新建发布分支以来的做的**修改要合并回develop分支**。  

![创建release分支](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gitflow_release.png)  (创建release分支）  

    git checkout -b release-0.1 develop

![与master和develop分别合并](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gitflow_master.png)  (与master和develop分别合并)

    git checkout master
    git merge release-0.1
    git push
    //与master合并
    git checkout develop
    git merge release-0.1
    git push
    //与develop合并
    git branch -d release-0.1  //删除release分支
    git tag -a 0.1 -m "Initial public release" master
    git push --tags 
    //加tag


### 3.4 维护分支
维护分支或说是**热修复（hotfix）分支**用于生成快速给产品发布版本（production releases）打补丁，这是唯一可以直接从master分支fork出来的分支。
修复完成，修改应该马上**合并回master分支和develop分支**，master分支应该用新的版本号打好Tag。

![](https://raw.githubusercontent.com/myuaggie/myuaggie1/master/git%20workflow/picture/gitflow_bug.png)

    git checkout -b issue-#001 master //创建
    # Fix the bug
    git checkout master
    git merge issue-#001
    git push
    //与master合并
    git checkout develop
    git merge issue-#001
    git push
    //与develop合并
    git branch -d issue-#001 //删除维护分支
