---
id: 45624403-d849-4988-97b9-11ddff751166
title: Zig
description: A cheatsheet for Zig
---

Table of contents
[[toc]]

# Variables

- Declare a variable with `var` keyword and assign a value with `=` operator.
- Use `const` keyword for immutable variables.
- Use `:` to specify the type of a variable, or let the compiler infer it from the value.
- Use `?` to indicate an optional type that can be null.

```zig
var x = 42; // x is inferred to be i32
const y: u8 = 255; // y is a constant of type u8
var z: ?f64 = null; // z is an optional f64 that can be null
```

# Control Flow

- Use `if` and `else` for conditional branching.
- Use `while` and `for` for looping.
- Use `break` and `continue` to control the loop execution.
- Use `switch` for multi-way branching based on an expression.

```zig
// if and else
if (x > 0) {
    std.debug.print("x is positive\n", .{});
} else if (x < 0) {
    std.debug.print("x is negative\n", .{});
} else {
    std.debug.print("x is zero\n", .{});
}

// while loop
var i = 0;
while (i < 10) : (i += 1) {
    std.debug.print("i = {}\n", .{i});
}

// for loop
const array = [_]u8{1, 2, 3, 4, 5};
for (array) |elem, index| {
    std.debug.print("array[{}] = {}\n", .{ index, elem });
}

// switch
switch (x) {
    0 => std.debug.print("x is zero\n", .{}),
    1...4 => std.debug.print("x is between one and four\n", .{}),
    else => std.debug.print("x is something else\n", .{}),
}
```

# Functions

- Define a function with `fn` keyword and use `->` to specify the return type.
- Call a function with `()` and pass arguments by value or by reference with `&`.
- Use `try` to call a function that may return an error and propagate it if it occurs.
- Use `catch` to handle the error returned by a function.

```zig
// Define a function that takes two i32 arguments and returns their sum as i32
fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Call the function and print the result
const result = add(2, 3);
std.debug.print("2 + 3 = {}\n", .{result});

// Define a function that takes a pointer to an i32 and increments it by one
fn increment(p: *i32) void {
    p.* += 1;
}

// Call the function and print the result
var x: i32 = 10;
increment(&x);
std.debug.print("x = {}\n", .{x});

// Define a function that may return an error
fn divide(a: i32, b: i32) !i32 {
    if (b == 0) return error.DivisionByZero;
    return a / b;
}

// Call the function with try and propagate the error
fn tryDivide(a: i32, b: i32) !void {
    const result = try divide(a, b);
    std.debug.print("{} / {} = {}\n", .{ a, b, result });
}

// Call the function with catch and handle the error
fn catchDivide(a: i32, b: i32) void {
    const result = divide(a, b) catch |err| switch (err) {
        error.DivisionByZero => -1,
    };
    std.debug.print("{} / {} = {}\n", .{ a, b, result });
}
```

# Types

- Zig has basic types such as integers (`u8`, `i16`, etc.), floats (`f32`, `f64`), booleans (`bool`), characters (`u8`, `u21`, etc.) and void (`void`).
- Zig also has compound types such as arrays (`[N]T`), slices (`[]T`), pointers (`*T`, `*const T`, etc.), structs (`struct { ... }`), unions (`union { ... }`), enums (`enum { ... }`) and optionals (`?T`).
- Zig supports user-defined types with `type` keyword.

```zig
// Array type
const array: [5]u8 = [_]u8{1, 2, 3, 4, 5};

// Slice type
const slice: []u8 = array[0..3];

// Pointer type
const ptr: *u8 = &array[0];

// Struct type
const Point = struct {
    x: i32,
    y: i32,
};

// Union type
const IntOrFloat = union {
    i: i32,
    f: f64,
};

// Enum type
const Color = enum {
    red,
    green,
    blue,
};

// Optional type
const maybe_number: ?i32 = null;

// User-defined type
const MyInt = type(i32);
```

# Comptime

- Zig has a powerful metaprogramming feature called comptime, which allows executing code at compile time.
- Use `comptime` keyword to mark an expression, a variable, a parameter, or a function as compile-time only.
- Use `@import` to import a file as a namespace.
- Use `@compileLog` to print a value to the compiler's output.

```zig
// Comptime expression
comptime {
    var x = 1;
    x += 2;
    @compileLog(x); // prints 3
}

// Comptime variable
comptime var y = x * 2; // y is 6

// Comptime parameter
fn square(comptime n: i32) i32 {
    return n * n;
}

comptime {
    @compileLog(square(4)); // prints 16
}

// Comptime function
comptime fn cube(n: i32) i32 {
    return n * n * n;
}

comptime {
    @compileLog(cube(3)); // prints 27
}

// Import a file
const std = @import("std");

// Print to stdout
std.debug.print("Hello, world!\n", .{});
```
