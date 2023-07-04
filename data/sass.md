---
id: 09f55193-1d16-4f81-b1cb-6d6833553339
title: Sass
description: A cheatsheet for Sass
---

# Variables

- Variables are declared with a `$` sign and can store values like colors, fonts, numbers, etc.

```scss
$primary-color: #f0f0f0;
$secondary-color: #333333;
$font-family: Arial, sans-serif;

body {
  background-color: $primary-color;
  color: $secondary-color;
  font-family: $font-family;
}
```

# Nesting

- Nesting allows you to write selectors inside other selectors, which reduces repetition and makes the code more readable.

```scss
.navbar {
  height: 50px;
  background-color: $primary-color;

  .logo {
    float: left;
    width: 100px;
    height: 50px;
  }

  .menu {
    float: right;
    list-style: none;

    li {
      display: inline-block;
      margin: 0 10px;

      a {
        color: $secondary-color;
        text-decoration: none;

        &:hover {
          color: darken($secondary-color, 10%);
        }
      }
    }
  }
}
```

# Mixins

- Mixins are reusable blocks of code that can accept arguments and return values. They are defined with the `@mixin` directive and included with the `@include` directive.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
          border-radius: $radius;
}

@mixin box-shadow($x, $y, $blur, $color) {
  -webkit-box-shadow: $x $y $blur $color;
     -moz-box-shadow: $x $y $blur $color;
          box-shadow: $x $y $blur $color;
}

.button {
  @include border-radius(5px);
  @include box-shadow(0, 2px, 4px, rgba(0,0,0,0.1));
}
```

# Functions

- Functions are similar to mixins, but they return a single value instead of a block of code. They are defined with the `@function` directive and called like regular CSS functions.

```scss
@function sum($a, $b) {
  @return $a + $b;
}

@function percentage($n) {
  @return $n * 100%;
}

.width {
  width: sum(10px, 20px); // 30px
}

.height {
  height: percentage(0.5); // 50%
}
```

# Operators

- Operators allow you to perform arithmetic operations on numbers, colors, strings, and lists.

```scss
// Numbers
width: 10px + 20px; // 30px
height: 50px - 10px; // 40px
font-size: 16px * 1.5; // 24px
margin: 30px / 2; // 15px

// Colors
background-color: #f0f0f0 + #111111; // #f1f1f1
border-color: #333333 - #111111; // #222222
box-shadow-color: #000000 * 0.5; // #808080
text-color: #ffffff / 2; // #7f7f7f

// Strings
content: "Hello" + " " + "World"; // "Hello World"
font-family: "Open" + "-Sans"; // "Open-Sans"

// Lists
$list-1: (a, b, c);
$list-2: (d, e, f);
$list-3: join($list-1, $list-2); // (a b c d e f)
$list-4: append($list-1, d); // (a b c d)
$list-5: zip($list-1, $list-2); // ((a d) (b e) (c f))
```

# Control Directives

- Control directives allow you to add logic and conditions to your code. They include `@if`, `@else`, `@else if`, `@for`, `@each`, and `@while`.

```scss
// @if / @else / @else if
@mixin text-style($type) {
  @if ($type == bold) {
    font-weight: bold;
    text-transform: uppercase;
  } @else if ($type == italic) {
    font-style: italic;
    text-transform: lowercase;
  } @else {
    font-weight: normal;
    text-transform: none;
  }
}

.title {
  @include text-style(bold);
}

.subtitle {
  @include text-style(italic);
}

.paragraph {
  @include text-style(normal);
}

// @for
@for $i from 1 through 5 {
  .col-#{$i} {
    width: percentage($i / 5);
  }
}

// @each
$colors: (red, green, blue);

@each $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}

// @while
$i: 1;

@while $i < 10 {
  .item-#{$i} {
    width: percentage($i / 10);
  }
  $i: $i + 1;
}
```

# References
- [Sass: Syntax](https://sass-lang.com/documentation/syntax/)
