---
id: eef2c03d-5df0-4565-86f3-a2390370115d
title: ZSH
keywords: ["zsh", "shell"]
description: A cheatsheet for the ZSH shell
---

Table of contents
[[toc]]

Zsh is a powerful shell that offers many features and customization options. Here are some code examples to help you get started with zsh.

## Basic Commands

- To print a message to the standard output, use the `echo` command:

```zsh
echo "Hello, world!"
```

- To execute a command and store its output in a variable, use the `$(command)` syntax:

```zsh
output=$(date)
echo "The current date and time is $output"
```

- To create an alias for a command, use the `alias` command:

```zsh
alias ll="ls -l"
```

- To list the files and directories in the current directory, use the `ls` command:

```zsh
ls
```

- To change the current directory, use the `cd` command:

```zsh
cd /path/to/directory
```

- To display the current directory, use the `pwd` command:

```zsh
pwd
```

- To create a new directory, use the `mkdir` command:

```zsh
mkdir new_directory
```

- To remove a file or directory, use the `rm` command:

```zsh
rm file.txt # remove a file
rm -r directory # remove a directory and its contents
```

- To copy a file or directory, use the `cp` command:

```zsh
cp source destination # copy a file
cp -r source destination # copy a directory and its contents
```

- To move or rename a file or directory, use the `mv` command:

```zsh
mv source destination # move or rename a file or directory
```

## Wildcards and Globbing

- To match any single character, use the `?` wildcard:

```zsh
ls ?.txt # list files with one character name and .txt extension
```

- To match any sequence of characters, use the `*` wildcard:

```zsh
ls *.txt # list files with any name and .txt extension
```

- To match a range of characters, use the `[...]` syntax:

```zsh
ls [a-c]*.txt # list files that start with a, b, or c and have .txt extension
```

- To match files that do not match a pattern, use the `^` operator:

```zsh
ls ^*.txt # list files that do not have .txt extension
```

- To match files that have one of several extensions, use the `(ext1|ext2|...)` syntax:

```zsh
ls *.(jpg|png|gif) # list files that have jpg, png, or gif extension
```

## Variables and Parameters

- To assign a value to a variable, use the `=` operator:

```zsh
name="Alice"
```

- To access the value of a variable, use the `$` prefix:

```zsh
echo "Hello, $name!"
```

- To access the value of a variable without expanding it, use the `${...}` syntax:

```zsh
echo "The length of name is ${#name}"
```

- To access the value of a positional parameter (the arguments passed to a script or function), use the `$n` syntax, where n is the position number:

```zsh
echo "The first argument is $1"
echo "The second argument is $2"
echo "The number of arguments is $#"
echo "All the arguments are $@"
```

- To access special parameters that provide information about the shell or the script, use the `$?`, `$!`, `$0`, etc. syntax:

```zsh
echo "The exit status of the last command is $?"
echo "The process ID of the last background command is $!"
echo "The name of this script is $0"
```

## Conditionals and Loops

- To execute a block of commands based on a condition, use the `if...then...else...fi` syntax:

```zsh
if [ condition ]; then
  # commands to execute if condition is true
else
  # commands to execute if condition is false
fi
```

- To execute a block of commands repeatedly while a condition is true, use the `while...do...done` syntax:

```zsh
while [ condition ]; do
  # commands to execute while condition is true
done
```

- To execute a block of commands repeatedly until a condition is true, use the `until...do...done` syntax:

```zsh
until [ condition ]; do
  # commands to execute until condition is true
done 
```

- To execute a block of commands for each element in a list, use the `for...in...do...done` syntax:

```zsh
for element in list; do
  # commands to execute for each element
done
```

## Functions and Scripts

- To define a function that can be called later, use the `function name { ... }` or `name () { ... }` syntax:

```zsh
function greet {
  echo "Hello, $1!"
}

greet Alice # call the function with an argument
```

- To create a script that can be executed as a command, use the `#!/bin/zsh` shebang line at the beginning of the file and make it executable with the `chmod` command:

```zsh
#!/bin/zsh
# This is a script that prints a message

echo "This is a zsh script"
```

```zsh
chmod +x script.zsh # make the script executable
./script.zsh # run the script
```
