---
title: Git
date: February 8, 2021
keywords: ['git']
---

# Git

## Table of Contents

## Archive

| Command                                               | Description                       |
| ----------------------------------------------------- | --------------------------------- |
| git archive --format zip --output filename.zip master | Create a zip-archive              |
| git log --author=sven --all > log.txt                 | Export/write custom log to a file |

## Branch

| Command                                             | Description                                             |
| --------------------------------------------------- | ------------------------------------------------------- |
| git branch                                          | Show branches                                           |
| git branch branchname                               | Create branch                                           |
| git checkout branchname                             | Change to branch                                        |
| git checkout -b branchname                          | Create and change to new branch                         |
| git branch (-m or --move) branchname new_branchname | Rename branch                                           |
| git branch --merged                                 | Show all completely merged branches with current branch |
| git branch (-d or --delete) branchname              | Delete merged branch (only possible if not HEAD)        |
| git branch -D branch_to_delete                      | Delete not merged branch                                |

## Collaborate

| Command                                                                                                   | Description                                                      |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| git remote                                                                                                | Show remote                                                      |
| git remote -v                                                                                             | Show remote details                                              |
| git remote add upstream https://github.com/user/project.git                                               | Add remote upstream from GitHub project                          |
| git remote add upstream ssh://root@123.123.123.123/path/to/repository/.git                                | Add remote upstream from existing empty project on server        |
| git fetch upstream                                                                                        | Fetch                                                            |
| git fetch upstream branchname:local_branchname                                                            | Fetch a custom branch                                            |
| git merge upstream/master                                                                                 | Merge fetched commits                                            |
| git remote rm origin                                                                                      | Remove origin                                                    |
| git branch -r                                                                                             | Show remote branches                                             |
| git branch -a                                                                                             | Show all branches (remote and local)                             |
| git checkout -b local_branchname upstream/remote_branchname                                               | Create and checkout branch from a remote branch                  |
| git diff origin/master..master                                                                            | Compare                                                          |
| git push -u origin master                                                                                 | Push (set default with `-u`)                                     |
| git push origin master                                                                                    | Push                                                             |
| git push origin master --force                                                                            | Force-Push                                                       |
| git pull                                                                                                  | Pull                                                             |
| git pull origin branchname                                                                                | Pull specific branch                                             |
| git fetch upstream pull/ID/head:new-pr-branch                                                             | Fetch a pull request on GitHub by its ID and create a new branch |
| git clone https://github.com/user/project.git <br /> or <br /> git clone ssh://user@domain.com/~/dir/.git | Clone to localhost                                               |
| git clone https://github.com/user/project.git ~/dir/folder                                                | Clone to localhost folder                                        |
| git clone -b branchname https://github.com/user/project.git                                               | Clone specific branch to localhost                               |
| git clone https://oauth2:<token>@gitlab.com/username/repo.git                                             | Clone with token authentication (in CI environment)              |
| git push origin :branchname <br /> or <br /> git push origin --delete branchname                          | Delete remote branch (push nothing)                              |

## Compare

| Command                                                                                 | Description                                       |
| --------------------------------------------------------------------------------------- | ------------------------------------------------- |
| git diff                                                                                | Compare modified files                            |
| git diff --color-words index.html                                                       | Compare modified files and highlight changes only |
| git diff --staged                                                                       | Compare modified files within the staging area    |
| git diff master..branchname                                                             | Compare branches                                  |
| git diff --color-words master..branchname^                                              | Compare branches like above                       |
| git diff 6eb715d <br /> git diff 6eb715d..HEAD <br /> git diff 6eb715d..537a09f         | Compare commits                                   |
| git diff 6eb715d index.html <br /> git diff 6eb715d..537a09f index.html                 | Compare commits of file                           |
| git diff -b 6eb715d..HEAD <br /> or <br /> git diff --ignore-space-change 6eb715d..HEAD | Compare without caring about spaces               |
| git diff -w 6eb715d..HEAD <br /> or <br /> git diff --ignore-all-space 6eb715d..HEAD    | Compare without caring about all spaces           |
| git diff --stat --summary 6eb715d..HEAD                                                 | Useful comparings                                 |
| git blame -L10,+1 index.html                                                            | Blame                                             |

## General

| Command                                   | Description                                                     |
| ----------------------------------------- | --------------------------------------------------------------- |
| git init                                  | Initialize Git                                                  |
| git add .                                 | Get everything ready to commit                                  |
| git add index.html                        | Get custom file ready to commit                                 |
| git commit -m "Message"                   | Commit changes                                                  |
| git commit -m "Title" -m "Description..." | Commit changes with title and description                       |
| git commit -am "Message"                  | Add and commit in one step                                      |
| git rm index.html                         | Remove files from Git                                           |
| git add -u                                | Update all changes                                              |
| git rm --cached index.html                | Remove file but do not track anymore                            |
| git mv index.html dir/index_new.html      | Move or rename files                                            |
| git checkout -- index.html                | Undo modifications (restore files from latest commited version) |
| git checkout 6eb715d -- index.html        | Restore file from a custom commit (in current branch)           |

## Gitignore

| Pattern                  | Description                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hello.\*                 | matches any file or folder whose name begins with hello (matches **hello.txt**, **hello**)                                                                                                                                      |
| /hello.\*                | restrict to the directory of this file (matches **hello.txt**, **hello.c** but not **a/hello**.java`)                                                                                                                           |
| foo/                     | matches a directory foo and paths underneath it, but will not match a regular file or a symbolic link foo                                                                                                                       |
| doc/frotz and /doc/frotz | both have the same effect, a leading slash is not relevant if there is already a middle slash in the pattern                                                                                                                    |
| foo/\*                   | matches **foo/test.json** (a regular file), **foo/bar** (a directory) <br /> does **NOT** match **foo/bar/hello.c** (a regular file). <br /> The asterisk in the pattern does not match **bar/hello.c** which has a slash in it |

## Gitkeep

| Command            | Description     |
| ------------------ | --------------- |
| touch dir/.gitkeep | Track empty dir |

## Large File Storage

Website: https://git-lfs.github.com/

Install: `brew install git-lfs`

Track `*.psd` files: `git lfs track "*.psd"` (init, add, commit and push as written above)


## Log

| Command                                                                                                                                      | Description                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| git log                                                                                                                                      | Show commits                                                           |
| git log --oneline                                                                                                                            | Show oneline-summary of commits                                        |
| git log --format=oneline                                                                                                                     | Show oneline-summary of commits with full SHA-1                        |
| git log --oneline -3                                                                                                                         | Show oneline-summary of the last three commits                         |
| git log --author="Sven" <br /> git log --grep="Message" <br /> git log --until=2013-01-01 <br /> git log --since=2013-01-01                  | Show only custom commits                                               |
| git log --format=short <br /> git log --format=full <br /> git log --format=fuller <br /> git log --format=email <br /> git log --format=raw | Show only custom data of commit:                                       |
| git log -p                                                                                                                                   | Show changes                                                           |
| git log 6eb715d.. index.html                                                                                                                 | Show every commit since special commit for custom file only            |
| git log -p 6eb715d.. index.html                                                                                                              | Show changes of every commit since special commit for custom file only |
| git log --stat --summary                                                                                                                     | Show stats and summary of commits                                      |
| git log --graph                                                                                                                              | Show history of commits as graph                                       |
| git log --oneline --graph --all --decorate                                                                                                   | Show history of commits as graph-summary                               |

## Merge

| Command                                     | Description                                       |
| ------------------------------------------- | ------------------------------------------------- |
| git merge branchname                        | True merge (fast forward)                         |
| git merge --ff-only branchname              | Merge to master (only if fast forward)            |
| git merge --no-ff branchname                | Merge to master (force a new commit)              |
| git merge --abort                           | Stop merge (in case of conflicts)                 |
| git reset --merge                           | Stop merge (in case of conflicts) prior to v1.7.4 |
| git reset --hard origin/master              | Undo local merge that hasn't been pushed yet      |
| git cherry-pick 073791e7                    | Merge only one specific commit                    |
| git checkout branchname » git rebase master | Rebase                                            |
| git rebase --abort                          | Cancel rebase                                     |
| git rebase -i HEAD~3                        | Squash multiple commits into one                  |
| git merge --squash branchname               | Squash-merge a feature branch (as one commit)     |

## Releases & Version Tags

| Command                        | Description                              |
| ------------------------------ | ---------------------------------------- |
| git tag                        | Show all released versions               |
| git tag -l -n1                 | Show all released versions with comments |
| git tag v1.0.0                 | Create release version                   |
| git tag -a v1.0.0 -m 'Message' | Create release version with comment      |
| git checkout v1.0.0            | Checkout a specific release version      |

## Reset

| Command                                                    | Description                                                                           |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| git revert 073791e7dd71b90daa853b2c5acc2c925f02dbc6        | Go back to commit                                                                     |
| git reset --soft 073791e7dd71b90daa853b2c5acc2c925f02dbc6  | Soft reset (move HEAD only; neither staging nor working dir is changed)               |
| git reset --soft HEAD~                                     | Undo latest commit                                                                    |
| git reset --mixed 073791e7dd71b90daa853b2c5acc2c925f02dbc6 | Mixed reset (move HEAD and change staging to match repo; does not affect working dir) |
| git reset --hard 073791e7dd71b90daa853b2c5acc2c925f02dbc6  | Hard reset (move HEAD and change staging dir and working dir to match repo)           |
| git checkout @ -- index.html                               | Hard reset of a single file (`@` is short for `HEAD`)                                 |

## Security

Hide Git on the web via `.htaccess`: `RedirectMatch 404 /\.git` <br />
(more info here: http://stackoverflow.com/a/17916515/1815847)

## Setup

| Command                             | Description                               |
| ----------------------------------- | ----------------------------------------- |
| which git                           | See where Git is located:                 |
| git --version                       | Get the version of Git:                   |
| git config --global alias.st status | Create an alias (shortcut) for git status |
| git help                            | Help:                                     |

## Stash

| Command                     | Description                              |
| --------------------------- | ---------------------------------------- |
| git stash save "Message"    | Put in stash                             |
| git stash list              | Show stash                               |
| git stash show stash@{0}    | Show stash stats                         |
| git stash show -p stash@{0} | Show stash changes                       |
| git stash pop stash@{0}     | Use custom stash item and drop it        |
| git stash apply stash@{0}   | Use custom stash item and do not drop it |
| git stash apply --index     | Use custom stash item and index          |
| git stash branch new_branch | Create branch from stash                 |
| git stash drop stash@{0}    | Delete custom stash item                 |
| git stash clear             | Delete complete stash                    |

## Troubleshooting

Ignore files that have already been committed to a Git repository: http://stackoverflow.com/a/1139797/1815847

## Update & Delete

| Command                             | Description                                                |
| ----------------------------------- | ---------------------------------------------------------- |
| git clean -n                        | Test-Delete untracked files                                |
| git clean -f                        | Delete untracked files (not staging)                       |
| git reset HEAD index.html           | Unstage (undo adds)                                        |
| git commit --amend -m "New Message" | Update most recent commit (also update the commit message) |

## Sources
[https://gist.github.com/hofmannsven/6814451](https://gist.github.com/hofmannsven/6814451)

