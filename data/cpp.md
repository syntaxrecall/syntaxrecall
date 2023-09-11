---
id: 4c547e15-2531-4fe3-86ff-8d4c4b703947
title: C++
description: A cheatsheet for C++
---

Table of contents
[[toc]]

# Basic Syntax

- C++ is a compiled language, which means the source code must be converted into an executable file by a compiler before it can be run.
- C++ uses semicolons `;` to end statements and curly braces `{}` to enclose blocks of code.
- C++ is case-sensitive, which means `int` and `INT` are different identifiers.
- C++ supports single-line comments `//` and multi-line comments `/* ... */`.
- C++ programs usually have a main function that serves as the entry point for the program. The main function must return an `int` value, which indicates the exit status of the program.

```cpp
// This is a single-line comment
/* This is a multi-line comment */
#include <iostream> // Include a header file

// Define the main function
int main() {
  std::cout << "Hello, world!" << std::endl; // Print a message to the standard output
  return 0; // Return 0 to indicate success
}
```

# Data Types and Variables

- C++ has several built-in data types, such as `int`, `double`, `char`, `bool`, etc. Each data type has a specific size and range of values it can store.
- C++ also supports user-defined data types, such as classes, structs, enums, etc. These data types can be composed of other data types and have their own methods and attributes.
- C++ variables are containers that store values of a certain data type. Variables must be declared before they can be used, and they must have a unique name within their scope.
- C++ variables can be initialized with a value at the time of declaration, or assigned a value later. The assignment operator `=` is used to assign a value to a variable.

```cpp
// Declare an int variable named x
int x;

// Initialize an int variable named y with the value 10
int y = 10;

// Assign the value 20 to x
x = 20;

// Declare and initialize a double variable named z with the value 3.14
double z = 3.14;

// Declare a char variable named c and assign it the value 'A'
char c;
c = 'A';

// Declare a bool variable named b and assign it the value true
bool b;
b = true;
```

# Operators and Expressions

- C++ has various operators that perform different operations on values and variables. Some common operators are arithmetic operators `+ - * / %`, relational operators `< > <= >= == !=`, logical operators `&& || !`, bitwise operators `& | ^ ~ << >>`, and assignment operators `= += -= *= /= %= &= |= ^= <<= >>=`.
- C++ expressions are combinations of values, variables, and operators that produce a result. Expressions can be used in assignments, conditions, loops, etc.

```cpp
// Declare and initialize some variables
int x = 10;
int y = 5;
double z = 3.14;

// Use arithmetic operators to perform calculations
int sum = x + y; // sum is 15
int diff = x - y; // diff is 5
int prod = x * y; // prod is 50
int quot = x / y; // quot is 2
int rem = x % y; // rem is 0

// Use relational operators to compare values
bool lt = x < y; // lt is false
bool gt = x > y; // gt is true
bool le = x <= y; // le is false
bool ge = x >= y; // ge is true
bool eq = x == y; // eq is false
bool ne = x != y; // ne is true

// Use logical operators to combine boolean values
bool and = lt && gt; // and is false
bool or = lt || gt; // or is true
bool not = !lt; // not is true

// Use bitwise operators to manipulate bits
int bit_and = x & y; // bit_and is 0 (00001010 & 00000101 = 00000000)
int bit_or = x | y; // bit_or is 15 (00001010 | 00000101 = 00001111)
int bit_xor = x ^ y; // bit_xor is 15 (00001010 ^ 00000101 = 00001111)
int bit_not = ~x; // bit_not is -11 (~00001010 = 11110101)
int bit_left = x << 1; // bit_left is 20 (00001010 << 1 = 00010100)
int bit_right = x >> 1; // bit_right is 5 (00001010 >> 1 = 00000101)

// Use assignment operators to assign values with operations
x += y; // x is 15 (x = x + y)
x -= y; // x is 10 (x = x - y)
x *= y; // x is 50 (x = x * y)
x /= y; // x is 10 (x = x / y)
x %= y; // x is 0 (x = x % y)
x &= y; // x is 0 (x = x & y)
x |= y; // x is 5 (x = x | y)
x ^= y; // x is 5 (x = x ^ y)
x <<= 1; // x is 10 (x = x << 1)
x >>= 1; // x is 5 (x = x >> 1)
```

# Control Structures

- C++ has various control structures that alter the flow of execution based on certain conditions. Some common control structures are `if`, `else`, `switch`, `for`, `while`, `do-while`, `break`, `continue`, and `return`.
- The `if` statement executes a block of code if a condition is true. The `else` statement executes a block of code if the condition is false. The `else if` statement executes a block of code if another condition is true.
- The `switch` statement executes a block of code based on the value of an expression. The `case` statement specifies a value and a block of code to execute if the expression matches the value. The `default` statement specifies a block of code to execute if the expression does not match any case value. The `break` statement exits the switch statement.
- The `for` loop executes a block of code repeatedly until a condition is false. The loop has three parts: an initialization, a condition, and an update. The initialization is executed once before the loop starts. The condition is checked before each iteration of the loop. The update is executed after each iteration of the loop.
- The `while` loop executes a block of code repeatedly while a condition is true. The condition is checked before each iteration of the loop.
- The `do-while` loop executes a block of code repeatedly while a condition is true. The condition is checked after each iteration of the loop.
- The `break` statement exits the current loop or switch statement.
- The `continue` statement skips the rest of the current iteration of the loop and continues with the next iteration.
- The `return` statement exits the current function and returns a value to the caller.

```cpp
// Declare and initialize some variables
int x = 10;
int y = 5;
int z = 0;

// Use an if statement to check a condition
if (x > y) {
  std::cout << "x is greater than y" << std::endl;
}

// Use an else statement to execute another block of code
else {
  std::cout << "x is not greater than y" << std::endl;
}

// Use an else if statement to check another condition
else if (x == y) {
  std::cout << "x is equal to y" << std::endl;
}

// Use a switch statement to execute different blocks of code based on a value
switch (z) {
  case 0: // If z is 0, execute this block
    std::cout << "z is zero" << std::endl;
    break; // Exit the switch statement
  case 1: // If z is 1, execute this block
    std::cout << "z is one" << std::endl;
    break; // Exit the switch statement
  default: // If z is neither 0 nor 1, execute this block
    std::cout << "z is something else" << std::endl;
    break; // Exit the switch statement
}

// Use a for loop to iterate over a range of values
for (int i = 0; i < 10; i++) {
  std::cout << "i is " << i << std::endl;
}

// Use a while loop to iterate while a condition is true
while (x > 0) {
  std::cout << "x is " << x << std::endl;
  x--; // Decrement x by one
}

// Use a do-while loop to iterate at least once while a condition is true
do {
  std::cout << "y is " << y << std::endl;
  y++; // Increment y by one
} while (y < 10);

// Use a break statement to exit a loop or switch statement
for (int j = 0; j < 10; j++) {
  if (j == 5) {
    break; // Exit the for loop
  }
}

// Use a continue
```
