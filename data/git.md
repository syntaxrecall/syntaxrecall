---
id: a34c8de2-5bb2-4d52-bfbc-b84bda1ab24b
title: Git
description: A cheatsheet for git
---

# Setup
- git config --global user.name "[firstname lastname]"
- git config --global user.email "[valid-email]"
- git config --global color.ui auto

# Initialize & Clone
- git init [project name]
- git clone [repository-url]

# Stage & Snapshot
- git status
- git add [file]
- git reset [file]
- git diff
- git diff --staged
- git commit -m "[descriptive message]"

# Branch & Merge
- git branch
- git branch [branch-name]
- git checkout [branch-name]
- git merge [branch-name]
- git branch -d [branch-name]

# Remote Repositories
- git remote
- git remote add [remote-name] [repository-url]
- git fetch [remote-name]
- git pull [remote-name] [branch-name]
- git push [remote-name] [branch-name]

# Undo Changes
- git revert [commit-id]
- git reset [commit-id]
- git checkout -- [file]

# History & Inspection
- git log
- git log --oneline
- git log --graph
- git blame [file]
- git show [commit-id]

# Stash
- git stash
- git stash list
- git stash apply
- git stash drop
- git stash pop
