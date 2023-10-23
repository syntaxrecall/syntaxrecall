---
id: 38fefc9d-a886-40a1-b251-5da0d4f05696
title: Pnpm
description: A cheatsheet for pnpm
keywords: ["pnpm"]
---

Table of Contents
[[toc]]

# Commands

| pnpm command | Description |
| ------------ | ----------- |
| pnpm install | Install package.json dependencies |
| pnpm add <pkg> | Install a package |
| pnpm list -g --depth=0 | List globally installed packages |
| pnpm -g uninstall <name> | Uninstall global package |
| pnpm install -g npm@latest | Update npm |
| pnpm run <cmd> | Run a script defined in the package.json |
| pnpm exec <cmd> | Execute a command using the project dependencies |
| pnpm setup | Create a home directory for the pnpm CLI and update the shell configuration file |
| pnpm audit | Check for known security issues with the installed packages |
| pnpm bin | Print the folder where executables are installed |
| pnpm config | Manage the pnpm configuration files |
| pnpm dedupe | Find and remove duplicated packages from node_modules |
| pnpm env | Run a command with environment variables set by pnpm |
| pnpm fetch | Fetch packages from a registry to the store |
| pnpm help | Get help on a specific command |
| pnpm hook | Manage registry hooks |
| pnpm import | Generate a package-lock.yaml from an npm package-lock.json or a yarn.lock file |
| pnpm init | Initialize a new project or create new files in an existing project |
| pnpm install-test | Install project dependencies and run tests |
| pnpm link | Symlink a package folder to node_modules or vice versa |
| pnpm list | List installed packages and their dependencies |
| pnpm login | Log in to a registry |
| pnpm logout | Log out of a registry |
| pnpm outdated | Check for outdated packages |
| pnpm pack | Create a tarball from a package |
| pnpm prune | Remove extraneous packages from node_modules |
| pnpm publish | Publish a package to the registry |
| pnpm rebuild | Rebuild native modules in node_modules or in the store |
| pnpm recursive | Run commands on multiple packages in a monorepo or in every package found in subdirectories of the current working directory  |
| pnpm root | Print the effective node_modules folder |
| pnpm server | Manage a content-addressable store server  |
| pnpm store | Perform tasks on the global store or on the current project's store  |
| pnpm test | Run tests using the test script defined in package.json  |
| pnpm uninstall <pkg> | Remove a package from node_modules and from the project's package.json  |
| pnpm update <pkg> | Update one or more packages to their latest version |
