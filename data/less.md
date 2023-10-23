---
id: 162f0a28-6f69-4581-88ae-55f24aef51fd
title: Less
description: A cheatsheet for Less CSS
keywords: ["less", "css"]
---

Table of Contents
[[toc]]

# Variables

```less
@primary-color: #ff0000;
h1 {
  color: @primary-color;
}
```

# Mixins

```less
.border-radius(@radius) {
  border-radius: @radius;
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
}
.button {
  .border-radius(5px);
}
```

# Nesting

```less
.nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: blue;
    }
  }
}
```

# Functions

```less
width: percentage(1/3); // built-in function
@function double(@number) {
  return @number * 2;
}
height: double(50px); // custom function
```

# Imports

```less
@import "variables.less";
body {
  background-color: @bg-color;
}
```

# Operators

- Operators let you perform arithmetic operations on values in your stylesheet. You can use the `+`, `-`, `*`, `/`, and `%` operators with numbers, colors, or variables.

```less
// Operators
@base: 5%;
@filler: @base * 2; // returns 10%
@other: @base + @filler; // returns 15%

color: #888 / 4; // returns #222
background-color: #222 + #111; // returns #333
```

# Loops

- Loops let you generate repetitive styles with a simple syntax. You can use the `each` function to loop over a list of values and assign them to a variable.

```less
// Loops
@colors: red, green, blue;

.each(@colors, {
  .color-@{value} {
    color: @value;
  }
});

// The above code generates the following CSS:

.color-red {
  color: red;
}
.color-green {
  color: green;
}
.color-blue {
  color: blue;
}
```

# Conditionals

- Conditionals let you apply styles based on certain conditions. You can use the `when` keyword to create a conditional statement, and the `and`, `or`, and `not` keywords to combine multiple conditions.

```less
// Conditionals
@width: 600px;

.box {
  width: @width;
  .when (@width > 500px) {
    background-color: green;
  }
  .when (@width < 500px) {
    background-color: red;
  }
  .when (@width = 500px) {
    background-color: yellow;
  }
}

// The above code generates the following CSS:

.box {
  width: 600px;
  background-color: green;
}
```
