---
title: Yarn
date: February 6, 2021
keywords: ['npm', 'yarn']
---

# Yarn

## Table of Contents

## Commands

### yarn add

| Command                                                  | Description                                                                       |
| -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| yarn add <package>                                       | This will install one or more packages in your dependencies                       |
| yarn add <package> [--dev/-D]                            | Installs a package and any packages that it depends on                            |
| yarn add <package> [--peer/-P]                           | Installs one or more packages in your peerDependencies                            |
| yarn add <package> [--optional/-O]                       | Installs one or more packages in your optionalDependencies                        |
| yarn add <package> [--exact/-E]                          | Installs the packages as exact versions                                           |
| yarn add <package...> [--tilde/-T]                       | Installs the most recent release of the packages that have the same minor version |
| yarn add <package...> [--ignore-workspace-root-check/-W] | Allows a package to be installed at the workspaces root                           |
| yarn add <alias-package>@npm:<package>                   | Installs a package under a custom alias                                           |
| yarn add <package> --audit                               | Checks for known security issues with the installed packages                      |

### yarn install

| Command                                 | Description                                                                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| yarn install                            | Install the project dependencies                                                                                              |
| yarn install --check-files              | Verifies that already installed files in node_modules did not get removed                                                     |
| yarn install --force                    | This refetches all packages, even ones that were previously installed                                                         |
| yarn install --flat                     | Install all the dependencies, but only allow one version for each package                                                     |
| yarn install --har                      | Outputs an [HTTP archive](https://en.wikipedia.org/wiki/.har) from all the network requests performed during the installation |
| yarn install --ignore-scripts           | Do not execute any scripts defined in the project package.json and its dependencies                                           |
| yarn install --modules-folder <path>    | Specifies an alternate location for the node_modules directory, instead of the default ./node_modules                         |
| yarn install --no-lockfile              | Don’t read or generate a yarn.lock lockfile                                                                                   |
| yarn install --production[=true\|false] | Yarn will not install any package listed in devDependencies if the NODE_ENV environment variable is set to production         |
| yarn install --pure-lockfile            | Don’t generate a yarn.lock lockfile                                                                                           |
| yarn install --focus                    | Shallowly installs a package’s sibling workspace dependencies underneath its node_modules folder                              |
| yarn install --frozen-lockfile          | Don’t generate a yarn.lock lockfile and fail if an update is needed                                                           |
| yarn install --silent                   | Run without printing installation log                                                                                         |
| yarn install --ignore-engines           | Ignore engines check                                                                                                          |
| yarn install --ignore-optional          | Don’t install optional dependencies                                                                                           |
| yarn install --offline                  | Run in offline mode                                                                                                           |
| yarn install --non-interactive          | Disable interactive prompts, like when there’s an invalid version of a dependency                                             |
| yarn install --update-checksums         | Update checksums in the yarn.lock lockfile if there’s a mismatch between them and their package’s checksum                    |
| yarn install --audit                    | Checks for known security issues with the installed packages                                                                  |
| yarn install --no-bin-links             | Prevent yarn from creating symlinks for any binaries the package might contain                                                |
| yarn install --link-duplicates          | Create hardlinks to the repeated modules in node_modules                                                                      |
| yarn install --verbose                  | Show additional logs while installing dependencies                                                                            |

## Sources

[https://yarnpkg.com/](https://yarnpkg.com/)
