---
id: ebba0ba5-d058-4c6c-9c48-e5a622aed203
title: Markdown
description: A cheatsheet for Markdown
keywords: ["markdown"]
---

Table of Contents
[[toc]]

# Headers

- To create a heading, add one to six `#` symbols before your heading text. The number of `#` you use will determine the size of the heading.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

# Emphasis

## Bold

```markdown
**This is bold text**
__This is bold text__
This is **bold** text
```

## Italics

```markdown
*This is italic text*
_This is italic text_
This is *italic* text
```

# Lists

## Unordered List

```markdown
- Item 1
- Item 2
- Item 3
```

## Ordered List

```markdown
1. Item 1
2. Item 2
3. Item 3
```

## Nested List

- You can create nested lists by indenting lines by four spaces.

```markdown
1. Item 1
    - Subitem 1
    - Subitem 2
2. Item 2
    - Subitem 1
    - Subitem 2
```

# Links

## Inline Link

```markdown
[Visit Syntaxrecall](https://www.syntaxrecall.dev)
```

## Reference Link

- You can also use reference-style links, where you create a reference to the URL at the bottom of the document.

```markdown
[Visit Syntaxrecall][syntaxrecall]

[Syntaxrecall]: https://www.syntaxrecall.dev
```

# Images

## Inline Image

```markdown
![Syntaxrecall logo](https://syntaxrecall.dev/logo.png)
```

## Reference Image

- You can also use reference-style images, where you create a reference to the image at the bottom of the document.

```markdown
![Syntaxrecall logo][logo]

[logo]: https://syntaxrecall.dev/logo.png
```

# Code

## Inline Code

```markdown
This is an example of `inline code`.
```

## Block Code

- You can also specify the language of the code block for syntax highlighting by adding the name of the language after the first three backticks.

```markdown
\```python
def hello():
    print("Hello, world!")
\```
```


# Tables

- You can create tables by using hyphens `-` to create the first row, and then using pipes `|` to separate each column. You can optionally add pipes on either end of the table.

```markdown
| Name | Age | Occupation |
| ---- | --- | ---------- |
| Alice | 25 | Engineer |
| Bob | 32 | Teacher |
| Charlie | 28 | Writer |
```

# Blockquotes

- You can create a blockquote by adding a `>` before a paragraph.

```markdown
> This is a blockquote.
```

- You can also nest blockquotes by adding more `>` symbols.

```markdown
> This is a blockquote.
>> This is a nested blockquote.
```

# Horizontal Rules

- You can create a horizontal rule by using three or more hyphens `---`, asterisks `***`, or underscores `___` on a line by themselves.

```markdown
---
***
___
```

# Escaping Characters

- You can escape certain characters that have special meaning in markdown by using a backslash `\` before them. For example, if you want to use an asterisk as a literal character instead of for emphasis, you can write `\*`.

```markdown
\*This is not italic text\*
```
