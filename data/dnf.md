---
id: 22827845-23f4-445e-81b7-94a3bea7566c
title: DNF (Package Manager)
keywords: ["dnf", "fedora", "package", "manager"]
description: A command cheatsheet for the DNF package manager
---

Table of contents
[[toc]]

## Commands

| Command | Description | Example |
| --- | --- | --- |
| dnf search <package> | Search for a package by name or description | dnf search vim |
| dnf info <package> | Show detailed information about a package | dnf info vim-enhanced |
| dnf install <package> | Install a package and its dependencies | dnf install vim-enhanced |
| dnf remove <package> | Remove a package and its dependencies | dnf remove vim-enhanced |
| dnf list installed | List all installed packages | dnf list installed |
| dnf list updates | List all available updates for installed packages | dnf list updates |
| dnf upgrade | Upgrade all installed packages to the latest versions | dnf upgrade |
| dnf upgrade <package> | Upgrade a specific package to the latest version | dnf upgrade vim-enhanced |
| dnf downgrade <package> | Downgrade a package to an earlier version | dnf downgrade vim-enhanced |
| dnf autoremove | Remove all unneeded packages that were originally installed as dependencies | dnf autoremove |
| dnf group list | List all available package groups | dnf group list |
| dnf group info <group> | Show detailed information about a package group | dnf group info "Development Tools" |
| dnf group install <group> | Install a package group and its dependencies | dnf group install "Development Tools" |
| dnf group remove <group> | Remove a package group and its dependencies | dnf group remove "Development Tools" |
| dnf provides <file> | Find which package provides a given file or feature | dnf provides /usr/bin/vim |
| dnf repoquery <package> | Query information about a package from the repositories | dnf repoquery vim-enhanced |
| dnf repolist | List all enabled repositories | dnf repolist |
| dnf repoinfo <repo> | Show detailed information about a repository | dnf repoinfo fedora-updates |
| dnf config-manager --set-enabled <repo> | Enable a repository by name or ID | dnf config-manager --set-enabled fedora-updates-testing |
| dnf config-manager --set-disabled <repo> | Disable a repository by name or ID
