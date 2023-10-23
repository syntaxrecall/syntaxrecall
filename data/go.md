---
id: 0c18092c-ca29-4929-b31f-14db34317df3
title: Go
description: A cheatsheet for Go
keywords: ["go", "golang"]
---

Table of Contents
[[toc]]

# Hello world

hello.go
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```

# Variables and Constants

```go
// Declare a variable with var name type or name := value
var x int
x = 10
y := 20

// Declare a constant with const name = value
const pi = 3.14

// Print the value and type of a variable or constant
fmt.Println(x) // 10
fmt.Printf("%T\n", x) // int
fmt.Println(pi) // 3.14
fmt.Printf("%T\n", pi) // float64
```

# Data Types

```go
// Basic types: bool, string, int, float64, etc.
var b bool = true
var s string = "Hello"
var i int = 42
var f float64 = 3.14

// Composite types: array, slice, map, struct, etc.
var a [5]int = [5]int{1, 2, 3, 4, 5} // array of 5 integers
var sl []int = []int{1, 2, 3} // slice of integers
var m map[string]int = map[string]int{"one": 1, "two": 2} // map of string to integer
type person struct { // struct type
    name string
    age int
}
var p person = person{"Alice", 25} // struct value

// Get the length and capacity of a string, array, slice or map
fmt.Println(len(s)) // 5
fmt.Println(len(a)) // 5
fmt.Println(len(sl)) // 3
fmt.Println(cap(sl)) // 3
fmt.Println(len(m)) // 2

// Create a slice with a given length and capacity
sl2 := make([]int, 2, 4) // slice of length 2 and capacity 4

// Add an element to a slice
sl2 = append(sl2, 10) // sl2 is now [0, 0, 10]

// Remove an element from a map
delete(m, "one") // m is now {"two": 2}

// Access an element from a map or slice
fmt.Println(m["two"]) // 2
fmt.Println(sl[0]) // 1

// Access a field from a struct
fmt.Println(p.name) // Alice

// Get the address of a variable
fmt.Println(&x) // some memory address

// Dereference a pointer
var px *int = &x // px is a pointer to x
fmt.Println(*px) // 10 (the value of x)
```

# Control Structures

```go
// Conditional statements with if else if else
if x > y {
    fmt.Println("x is greater than y")
} else if x < y {
    fmt.Println("x is less than y")
} else {
    fmt.Println("x is equal to y")
}

// Counting loops with for i := 0; i < n; i++
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// Conditional loops with for condition
j := 0
for j < 5 {
    fmt.Println(j)
    j++
}

// Iterating over arrays, slices, maps or strings with for key, value := range name 
for index, value := range a {
    fmt.Println(index, value)
}
for index, value := range sl {
    fmt.Println(index, value)
}
for key, value := range m {
    fmt.Println(key, value)
}
for index, char := range s {
    fmt.Println(index, char)
}

// Exit a loop with break 
for {
    fmt.Println("infinite loop")
    break // exit the loop
}

// Skip an iteration of a loop with continue 
for i := 0; i < 10; i++ {
    if i % 2 == 0 {
        continue // skip even numbers
    }
    fmt.Println(i) // print odd numbers
}

// Multiple choice statements with switch expression { case value: ... default: ... }
switch x {
case 10:
    fmt.Println("x is ten")
case 20:
    fmt.Println("x is twenty")
default:
    fmt.Println("x is something else")
}

// Execute a function at the end of the current function with defer name()
func hello() {
    defer fmt.Println("world") // this will be executed after the function returns
    fmt.Println("hello")
}
hello() // prints hello world 
```

# Functions

```go
// Declare a function with func name(parameters) return_type { ... }
func add(x int, y int) int {
    return x + y
}

// Call a function with name(arguments)
z := add(10, 20) // z is 30

// Return multiple values from a function with return value1, value2, ...
func swap(x int, y int) (int, int) {
    return y, x
}

// Assign multiple values from a function with value1, value2, ... := name(arguments)
a, b := swap(10, 20) // a is 20 and b is 10

// Use (parameters) return_type as a function type
type adder func(int, int) int // adder is a function type that takes two ints and returns an int

// Use func(parameters) return_type { ... } as an anonymous function or lambda expression
square := func(x int) int { // square is an anonymous function that takes an int and returns its square
    return x * x
}

// Pass a function as an argument with name(function)
func apply(f func(int, int) int, x int, y int) int { // apply is a function that takes another function and two ints and returns the result of applying the function to the ints
    return f(x, y)
}
result := apply(add, 10, 20) // result is 30
result = apply(square, 10, 0) // result is 100

// Return a function from a function with return function
func makeAdder(x int) func(int) int { // makeAdder is a function that takes an int and returns another function that adds the int to its argument
    return func(y int) int {
        return x + y
    }
}
add10 := makeAdder(10) // add10 is a function that adds 10 to its argument
result = add10(20) // result is 30
```

# Packages and Modules

```go
// Declare the package name at the top of a file with package name
package main // this file belongs to the main package

// Import a package from the standard library or the current module with import "path"
import "fmt" // import the fmt package from the standard library

// Import a package with an alias with import name "path"
import f "fmt" // import the fmt package as f

// Import all the identifiers from a package without qualification with import . "path"
import . "fmt" // import all the identifiers from fmt without prefixing them with fmt.

// Import a package for its side effects only with import _ "path"
import _ "math" // import the math package but do not use any of its identifiers

// Create a module with the given name with go mod init name
go mod init example.com/hello // create a module named example.com/hello

// Update the module dependencies with go mod tidy
go mod tidy // update the go.mod and go.sum files with the required dependencies

// Compile the module into an executable file with go build
go build // create an executable file named hello (or hello.exe on Windows)
```
