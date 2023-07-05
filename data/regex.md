---
id: 44a142eb-838d-4fd7-9a1a-73bbabec4d04
title: Regex
description: A cheatsheet for Regex
---

# Basics

| REGEX BASICS | DESCRIPTION |
| --- | --- |
| ^ | The start of a string |
| $ | The end of a string |
| . | Wildcard which matches any character, except newline (\n). |
| \| | Matches a specific character or group of characters on either side (e.g. a\|b corresponds to a or b) |
| \\ | Used to escape a special character |
| a | The character "a" |
| ab | The string "ab" |

# Quantifiers

| QUANTIFIERS | DESCRIPTION |
| --- | --- |
| * | Used to match 0 or more of the previous (e.g. xy*z could correspond to "xz", "xyz", "xyyz", etc.) |
| ? | Matches 0 or 1 of the previous |
| + | Matches 1 or more of the previous |
| {5} | Matches exactly 5 |
| {5,} | Matches 5 or more occurrences of the preceding character or group |
| {5, 10} | Matches everything between 5-10 |

# Character classes

| CHARACTER CLASSES | DESCRIPTION |
| --- | --- |
| \s | Matches a whitespace character |
| \S | Matches a non-whitespace character |
| \w | Matches a word character |
| \W | Matches a non-word character |
| \d | Matches one digit |
| \D | Matches one non-digit |
| [\b] | A backspace character |
| \c | A control character |

# Special Characters

| SPECIAL CHARACTERS | DESCRIPTION |
| --- | --- |
| \n | Matches a newline |
| \t | Matches a tab |
| \r | Matches a carriage return |
| \ZZZ | Matches octal character ZZZ |
| \xZZ | Matches hex character ZZ |
| \0 | A null character |
| \v | A vertical tab |

# Groups

| GROUPS | DESCRIPTION |
| --- | --- |
| (xyz) | Grouping of characters |
| (?:xyz) | Non-capturing group of characters |
| [xyz] | Matches a range of characters (e.g. x or y or z) |
| [^xyz] | Matches a character other than x or y or z |
| [a-q] | Matches a character from within a specified range |
| [0-7] | Matches a digit from within a specified range |

# String replacements

| STRING REPLACEMENTS | DESCRIPTION |
| --- | --- |
| $` | Insert before matched string |
| $' | Insert after matched string |
| $+ | Insert last matched |
| $& | Insert entire match |
| $n | Insert nth captured group |

# Assertions

| ASSERTIONS | DESCRIPTION |
| --- | --- |
| (?=xyz) | Positive lookahead |
| (?!xyz) | Negative lookahead |
| ?!= or ?<! | Negative lookbehind |
| \b | Word Boundary (usually a position between /w and /W) |
| ?# | Comment |

# Tools
- [Regexr](https://regexr.com/)

# References
- [Keycdn](https://www.keycdn.com/support/regex-cheat-sheet)
