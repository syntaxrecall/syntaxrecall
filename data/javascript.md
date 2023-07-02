---
id: e7812377-66f1-4cae-8739-bd0d608b2d46
title: JavaScript
description: A cheatsheet for JavaScript
---

Table of Contents
[[toc]]

# Loops

## For loop

```js
const array = ['foo', 'bar'];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

Output
```
foo
bar
```

## For each loop
```js
const array = ['foo', 'bar'];

// using of, value is the actual value
for (let value of array) {
  console.log(value);
}

// using "in", value is the index
for (let value in array) {
  console.log(value);
}
```

Output
```
foo
bar
0
1
```

## ForEach function
```js
array.forEach((value) => console.log(value));
```

Output
```
foo
bar
```
