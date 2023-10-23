---
id: 2c494a61-fc9b-4c76-9692-9161f4882e62
title: Linux Commands
description: A cheatsheet for Linux Commands
keywords: ["linux", "apt", "ubuntu", "debian", "commands"]
---

Table of contents
[[toc]]

# File System Navigation

| Command | Description |
| --- | --- |
| `ls` | Lists all files and directories in the current directory |
| `ls -l` | Lists all files and directories with details (owner, permissions, size, etc.) |
| `ls -a` | Lists all files and directories including hidden ones |
| `pwd` | Shows the present working directory |
| `cd [directory]` | Changes the current directory to `[directory]` |
| `cd ..` | Goes up one level in the directory tree |
| `cd ~` | Goes to the user's home directory |

# File and Directory Manipulation

| Command | Description |
| --- | --- |
| `mkdir [directory]` | Creates a new directory named `[directory]` |
| `touch [file]` | Creates a new empty file named `[file]` or updates the modified time of an existing file |
| `cat [file]` | Displays the contents of `[file]` or concatenates multiple files |
| `grep [pattern] [file]` | Searches for `[pattern]` in `[file]` and prints the matching lines |
| `nano [file]` | Opens `[file]` in nano text editor or creates a new file if it does not exist |
| `vim [file]` | Opens `[file]` in vim text editor or creates a new file if it does not exist |
| `rm [file]` | Removes (deletes) `[file]` |
| `rm -r [directory]` | Removes (deletes) `[directory]` and all its contents recursively |
| `mv [source] [destination]` | Moves (renames) `[source]` file or directory to `[destination]` |
| `cp [source] [destination]` | Copies `[source]` file or directory to `[destination]` |

# Basic Administration

| Command | Description |
| --- | --- |
| `whoami` | Shows the current user name |
| `sudo [command]` | Executes `[command]` with root (superuser) privileges |
| `sudo apt install [package]` | Installs `[package]` on Debian based systems (Ubuntu, Mint, etc.) |
| `sudo dnf install [package]` | Installs `[package]` on Red Hat based systems (Fedora, CentOS, etc.) |
| `sudo apt remove [package]` | Removes (uninstalls) `[package]` on Debian based systems |
| `sudo dnf remove [package]` | Removes (uninstalls) `[package]` on Red Hat based systems |
| `reboot` | Reboots the system |
| `poweroff` | Shuts down the system |
