---
id: 6671b7c6-f143-48d7-820a-b77bd0a6dfaa
title: C
description: A cheatsheet for the C language
keywords: ["c", "clang"]
---

Table of contents
[[toc]]

# Variables and Data Types

- A variable is a name given to a memory location that stores a value of a certain data type.
- C supports the following data types: `char`, `int`, `float`, `double`, `void`, and derived types such as `array`, `pointer`, `struct`, `union`, and `enum`.
- The size and range of each data type may vary depending on the compiler and platform.
- To declare a variable, use the syntax: `data_type variable_name;`
- To assign a value to a variable, use the syntax: `variable_name = value;`
- To declare and assign a value to a variable in one statement, use the syntax: `data_type variable_name = value;`

```c
// Example of variable declaration and assignment
int x; // declare an integer variable named x
x = 10; // assign 10 to x
float y = 3.14; // declare and assign a float variable named y
char c = 'A'; // declare and assign a char variable named c
```

# Operators

- C supports various types of operators, such as arithmetic, relational, logical, bitwise, assignment, and conditional operators.
- Operators are used to perform operations on variables and values.
- The following table shows some common operators and their meanings.

| Operator | Meaning | Example |
| -------- | ------- | ------- |
| + | Addition | x + y |
| - | Subtraction | x - y |
| * | Multiplication | x * y |
| / | Division | x / y |
| % | Modulus (remainder) | x % y |
| ++ | Increment (increase by 1) | x++ |
| -- | Decrement (decrease by 1) | x-- |
| == | Equal to | x == y |
| != | Not equal to | x != y |
| > | Greater than | x > y |
| < | Less than | x < y |
| >= | Greater than or equal to | x >= y |
| <= | Less than or equal to | x <= y |
| && | Logical AND | x && y |
| \|\| | Logical OR | x \|\| y |
| ! | Logical NOT | !x |
| & | Bitwise AND | x & y |
| \| | Bitwise OR | x \| y |
| ^ | Bitwise XOR | x ^ y |
| ~ | Bitwise NOT | ~x |
| << | Bitwise left shift | x << n |
| >> | Bitwise right shift | x >> n |
| = | Assignment | x = y |
| += | Add and assign | x += y |
| -= | Subtract and assign | x -= y |
| *= | Multiply and assign | x *= y |
| /= | Divide and assign | x /= y |
| %= | Modulus and assign | x %= y |
| &= | Bitwise AND and assign

# Control Flow

- Conditional statements: These are used to execute a block of code based on a condition. The most common conditional statements are `if`, `else if`, and `else`.

```c
// Example of conditional statements
int x = 10;
int y = 20;
if (x > y) {
  // execute this block if x is greater than y
  printf("x is greater than y\n");
} else if (x < y) {
  // execute this block if x is less than y
  printf("x is less than y\n");
} else {
  // execute this block if x is equal to y
  printf("x is equal to y\n");
}
```

- Loop statements: These are used to repeat a block of code for a certain number of times or until a condition is met. The most common loop statements are `for`, `while`, and `do-while`.

```c
// Example of loop statements
int i;
// for loop: execute this block for i from 0 to 9
for (i = 0; i < 10; i++) {
  printf("i = %d\n", i);
}
// while loop: execute this block while i is less than 20
while (i < 20) {
  printf("i = %d\n", i);
  i++; // increment i by 1
}
// do-while loop: execute this block at least once and then while i is less than 30
do {
  printf("i = %d\n", i);
  i++; // increment i by 1
} while (i < 30);
```

# Functions

- Function statements: These are used to define and call a reusable block of code that performs a specific task. A function has a name, a return type, and a list of parameters.

```c
// Example of function statements
// define a function named add that takes two int parameters and returns their sum as an int
int add(int a, int b) {
  return a + b;
}
// call the function add with arguments 10 and 20 and store the result in a variable named sum
int sum = add(10, 20);
// print the value of sum
printf("sum = %d\n", sum);
```
