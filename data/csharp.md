---
id: 31a2f261-3f8d-432f-a33a-5e3185e3cb25
title: C#
description: A cheatsheet for C#
---

# Variables and Data Types

```csharp
// Declare a variable
int x = 10; // int is a data type for integers
string name = "Alice"; // string is a data type for text
bool isHappy = true; // bool is a data type for true or false values

// Use var to let the compiler infer the data type
var y = 20; // y is an int
var greeting = "Hello"; // greeting is a string
var isSad = false; // isSad is a bool

// Use const to declare a constant value that cannot be changed
const double PI = 3.14; // double is a data type for floating-point numbers
```

# Operators and Expressions

```csharp
// Arithmetic operators: +, -, *, /, %
int sum = x + y; // sum is 30
int difference = x - y; // difference is -10
int product = x * y; // product is 200
int quotient = x / y; // quotient is 0 (integer division)
int remainder = x % y; // remainder is 10

// Assignment operators: =, +=, -=, *=, /=, %=
x += 5; // x is 15 (same as x = x + 5)
y -= 10; // y is 10 (same as y = y - 10)
x *= 2; // x is 30 (same as x = x * 2)
y /= 2; // y is 5 (same as y = y / 2)
x %= 7; // x is 2 (same as x = x % 7)

// Comparison operators: ==, !=, <, >, <=, >=
bool isEqual = x == y; // isEqual is false
bool isNotEqual = x != y; // isNotEqual is true
bool isLessThan = x < y; // isLessThan is true
bool isGreaterThan = x > y; // isGreaterThan is false
bool isLessThanOrEqual = x <= y; // isLessThanOrEqual is true
bool isGreaterThanOrEqual = x >= y; // isGreaterThanOrEqual is false

// Logical operators: &&, ||, !
bool andResult = isHappy && !isSad; // andResult is true
bool orResult = isHappy || !isSad; // orResult is true
bool notResult = !isHappy; // notResult is false
```

# Control Structures

```csharp
// If-else statement
if (x > 0) {
    Console.WriteLine("x is positive"); // Console.WriteLine prints to the standard output
} else if (x < 0) {
    Console.WriteLine("x is negative");
} else {
    Console.WriteLine("x is zero");
}

// Switch statement
switch (name) {
    case "Alice":
        Console.WriteLine("Hello Alice");
        break;
    case "Bob":
        Console.WriteLine("Hello Bob");
        break;
    default:
        Console.WriteLine("Hello stranger");
        break;
}

// While loop
while (x < 10) {
    Console.WriteLine(x);
    x++;
}

// Do-while loop
do {
    Console.WriteLine(x);
    x--;
} while (x > 0);

// For loop
for (int i = 0; i < 10; i++) {
    Console.WriteLine(i);
}

// Foreach loop (used to iterate over collections)
string[] names = {"Alice", "Bob", "Charlie"}; // string[] is an array of strings
foreach (string n in names) {
    Console.WriteLine(n);
}
```

# Methods and Parameters

```csharp
// Define a method with the syntax: [access modifier] [return type] [name] ([parameters])
public int Add(int a, int b) { // public means the method can be accessed from outside the class
    return a + b; // return the result of adding a and b
}

// Call a method with the syntax: [name] ([arguments])
int result = Add(3, 4); // result is 7

// Use ref keyword to pass a parameter by reference (the value can be changed by the method)
public void Increment(ref int n) {
    n++; // increment n by one
}

int number = 5;
Increment(ref number); // number is now 6

// Use out keyword to pass a parameter by output (the value must be assigned by the method)
public void Divide(int a, int b, out int quotient, out int remainder) {
    quotient = a / b;
    remainder = a % b;
}

int q, r;
Divide(10, 3, out q, out r); // q is 3, r is 1
```

# Classes and Objects

```csharp
// Define a class with the syntax: [access modifier] class [name] ([base class])
public class Person { // Person is a class with no base class
    // Fields are variables that belong to the class
    private string name; // private means the field can only be accessed within the class
    private int age;

    // Properties are methods that provide access to the fields
    public string Name { // public means the property can be accessed from outside the class
        get { return name; } // get returns the value of the field
        set { name = value; } // set assigns the value to the field
    }

    public int Age {
        get { return age; }
        set { age = value; }
    }

    // Constructors are methods that initialize the object
    public Person(string name, int age) { // this constructor takes two parameters
        this.name = name; // this refers to the current object
        this.age = age;
    }

    // Methods are functions that belong to the class
    public void Greet() {
        Console.WriteLine("Hello, my name is " + name + " and I am " + age + " years old.");
    }
}

// Create an object with the syntax: [class name] [object name] = new [constructor] ([arguments])
Person alice = new Person("Alice", 25); // alice is an object of type Person

// Access the fields, properties and methods of an object with the syntax: [object name].[field/property/method]
alice.Name = "Alice Smith"; // set the Name property of alice
Console.WriteLine(alice.Age); // get the Age property of alice
alice.Greet(); // call the Greet method of alice
```
