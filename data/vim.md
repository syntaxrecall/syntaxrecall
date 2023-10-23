---
id: 3bd43789-d1da-4d90-b1fd-7fda5f0336e7
title: Vim
keywords: ['vim']
description: A cheatsheet for Vim
---

Table of contents
[[toc]]

# Vim Cheatsheet

Vim is a powerful text editor that can be used to edit, create, and manipulate files. Vim has many commands and modes that can help you work efficiently and productively. Here are some of the most common and useful ones:

## Modes

Vim has two main modes: **normal mode** and **insert mode**. Normal mode is the default mode, where you can use various commands to move around, search, copy, paste, delete, and perform other operations on the text. Insert mode is where you can type and edit the text as in any other editor.

To enter insert mode from normal mode, press `i`. To exit insert mode and return to normal mode, press `Esc`.

## Moving around

In normal mode, you can use the following keys to move the cursor around:

| Key      | Action                            |
| -------- | --------------------------------- |
| `h`      | move left                         |
| `j`      | move down                         |
| `k`      | move up                           |
| `l`      | move right                        |
| `w`      | move to the next word             |
| `b`      | move to the previous word         |
| `0`      | move to the beginning of the line |
| `$`      | move to the end of the line       |
| `G`      | move to the end of the file       |
| `gg`     | move to the beginning of the file |
| `Ctrl+f` | move forward one page             |
| `Ctrl+b` | move backward one page            |

## Searching

In normal mode, you can use the following commands to search for a pattern in the file:

| Command    | Action                                           |
| ---------- | ------------------------------------------------ |
| `/pattern` | search forward for `pattern`                     |
| `?pattern` | search backward for `pattern`                    |
| `n`        | repeat the last search in the same direction     |
| `N`        | repeat the last search in the opposite direction |

## Editing

In normal mode, you can use the following commands to edit the text:

| Command                  | Action                                                   |
| ------------------------ | -------------------------------------------------------- |
| `x`                      | delete the character under the cursor                    |
| `dd`                     | delete the current line                                  |
| `dw`                     | delete from the cursor to the end of the word            |
| `db`                     | delete from the cursor to the beginning of the word      |
| `d0`                     | delete from the cursor to the beginning of the line      |
| `d$`                     | delete from the cursor to the end of the line            |
| `dG`                     | delete from the cursor to the end of the file            |
| `dgg`                    | delete from the cursor to the beginning of the file      |
| `u`                      | undo the last change                                     |
| `Ctrl+r`                 | redo the last change                                     |
| `y`                      | copy (yank) the text under the cursor                    |
| `yy`                     | copy (yank) the current line                             |
| `yw`                     | copy (yank) from the cursor to the end of the word       |
| `yb`                     | copy (yank) from the cursor to the beginning of the word |
| `y0`                     | copy (yank) from the cursor to the beginning of the line |
| `y$`                     | copy (yank) from the cursor to the end of the line       |
| `yG`                     | copy (yank) from the cursor to the end of the file       |
| `ygg`                    | copy (yank) from the cursor to the beginning of the file |
| `p`                      | paste (put) after the cursor                             |
| `P` : paste (put) before |

## Saving and quitting

In normal mode, you can use these commands to save and quit:

| Command       | Action                  |
| ------------- | ----------------------- |
| `:w`          | save (write) file       |
| `:q`          | quit (quit) vim         |
| `:wq` or `:x` | save and quit vim       |
| `:q!`         | quit vim without saving |
