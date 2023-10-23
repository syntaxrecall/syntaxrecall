---
id: c808edcc-a6f8-4b48-afba-fc0102d4def9
title: Java
description: A quick reference for Java
keywords: ["java"]
---

Table of contents
[[toc]]

# Hello world
```java
// This is a comment
public class HelloWorld {
    public static void main(String[] args) {
        // This is where the program starts
        System.out.println("Hello world!"); // This prints hello world to the console
    }
}
```

# Loops

## For loop

```java
String[] names = {"foo", "bar"};
for (int i = 0; i < array.length; i++) {
    System.out.println(names[i]);
}
```

Output
```
foo
bar
```

## For each loop
```java
String[] names = {"foo", "bar"};

for (String name : names) {
    System.out.println(name);
}
```

Output
```
foo
bar
```

# Variables and Constants

```java
// Declare a variable with type name = value;
int x = 10;
String s = "Hello";

// Declare a constant with final type name = value;
final double PI = 3.14;

// Print the value and type of a variable or constant
System.out.println(x); // 10
System.out.println(x.getClass().getName()); // int
System.out.println(s); // Hello
System.out.println(s.getClass().getName()); // java.lang.String
System.out.println(PI); // 3.14
System.out.println(((Object)PI).getClass().getName()); // double
```

# Data Types

```java
// Primitive types: boolean, char, byte, short, int, long, float, double
boolean b = true;
char c = 'A';
byte by = 127;
short sh = 32767;
int i = 42;
long l = 1000000000L;
float f = 3.14f;
double d = 3.14;

// Reference types: String, Array, ArrayList, HashMap, etc.
String str = "Hello";
int[] arr = new int[5]; // array of 5 integers
arr[0] = 1; // assign the first element to 1
ArrayList<Integer> al = new ArrayList<>(); // array list of integers
al.add(10); // add an element to the array list
HashMap<String, Integer> hm = new HashMap<>(); // hash map of string to integer
hm.put("one", 1); // put a key-value pair to the hash map

// Get the length of a string, array or array list
System.out.println(str.length()); // 5
System.out.println(arr.length); // 5
System.out.println(al.size()); // 1

// Access an element from an array, array list or hash map
System.out.println(arr[0]); // 1
System.out.println(al.get(0)); // 10
System.out.println(hm.get("one")); // 1

// Remove an element from an array list or hash map
al.remove(0); // remove the element at index 0 from the array list
hm.remove("one"); // remove the key-value pair with key "one" from the hash map
```

# Control Structures

```java
// Conditional statements with if else if else
if (x > y) {
    System.out.println("x is greater than y");
} else if (x < y) {
    System.out.println("x is less than y");
} else {
    System.out.println("x is equal to y");
}

// Counting loops with for (int i = 0; i < n; i++)
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Conditional loops with while (condition)
int j = 0;
while (j < 5) {
    System.out.println(j);
    j++;
}

// Iterating over arrays or array lists with for (type name : collection)
for (int num : arr) {
    System.out.println(num);
}
for (int num : al) {
    System.out.println(num);
}

// Exit a loop with break 
while (true) {
    System.out.println("infinite loop");
    break; // exit the loop
}

// Skip an iteration of a loop with continue 
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // skip even numbers
    }
    System.out.println(i); // print odd numbers
}

// Multiple choice statements with switch (expression) { case value: ... default: ... }
switch (x) {
case 10:
    System.out.println("x is ten");
    break;
case 20:
    System.out.println("x is twenty");
    break;
default:
    System.out.println("x is something else");
}
```

# Methods
```java
// Declare a method with modifiers return_type name(parameters) { ... }
public static int add(int x, int y) {
    return x + y;
}

// Call a method with name(arguments)
int z = add(10, 20); // z is 30

// Return multiple values from a method with an array or an object
public static int[] swap(int x, int y) {
    return new int[]{y, x};
}
int[] result = swap(10, 20); // result is [20, 10]

// Pass a method as an argument with name::method or object::method
public static void apply(Function<Integer, Integer> f, int x) {
    System.out.println(f.apply(x));
}
apply(Math::abs, -10); // prints 10
apply(Math::sqrt, 100); // prints 10.0
```

# Classes and Objects

```java
// Declare a class with class name { fields and methods }
class Person {
    // fields
    private String name;
    private int age;

    // constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // methods
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

// Create an object with new class(arguments)
Person p = new Person("Alice", 25);

// Access a field or a method from an object with object.field or object.method()
System.out.println(p.getName()); // Alice
System.out.println(p.getAge()); // 25
p.setName("Bob");
p.setAge(30);
System.out.println(p.getName()); // Bob
System.out.println(p.getAge()); // 30
```

# Packages and Modules

```java
// Declare the package name at the top of a file with package name;
package com.example.hello; // this file belongs to the com.example.hello package

// Import a class from another package with import package.class;
import java.util.ArrayList; // import the ArrayList class from the java.util package

// Create a module with the given name and dependencies with module name { requires ... }
module com.example.hello { // create a module named com.example.hello
    requires java.base; // require the java.base module
}
```

cli
```
// Compile the module into a jar file with javac --module-source-path src -d out --module name
javac --module-source-path src -d out --module com.example.hello // compile the com.example.hello module into a jar file in the out folder

// Run the module with java --module-path out --module name/class
java --module-path out --module com.example.hello/com.example.hello.Hello // run the Hello class from the com.example.hello module
```
