---
id: b5805db2-cedb-4c4e-a102-8ea1c082f124
title: Dart
description: A cheatsheet for Dart
keywords: ["dart"]
---

Table of Contents
[[toc]]

# Variables and Data Types

- Declare a variable with `var` keyword and assign a value with `=` operator.

```dart
var name = 'Alice';
```

- Use `final` keyword to declare a constant variable that cannot be reassigned.

```dart
final pi = 3.14;
```

- Use `dynamic` keyword to declare a variable that can change its type at runtime.

```dart
dynamic x = 10;
x = 'ten';
```

- Use type annotations to specify the type of a variable.

```dart
String greeting = 'Hello';
int age = 25;
bool isHappy = true;
double height = 1.75;
List<String> colors = ['red', 'green', 'blue'];
Map<String, int> scores = {'Alice': 90, 'Bob': 80, 'Charlie': 70};
```

# Control Flow

- Use `if`, `else if`, and `else` statements to execute different blocks of code based on conditions.

```dart
if (age >= 18) {
  print('You are an adult');
} else if (age >= 13) {
  print('You are a teenager');
} else {
  print('You are a child');
}
```

- Use `switch` and `case` statements to compare a value with multiple constants.

```dart
switch (color) {
  case 'red':
    print('Red is the color of fire');
    break;
  case 'green':
    print('Green is the color of nature');
    break;
  case 'blue':
    print('Blue is the color of sky');
    break;
  default:
    print('Unknown color');
}
```

- Use `for`, `while`, and `do-while` loops to repeat a block of code multiple times.

```dart
// for loop with a counter variable
for (int i = 0; i < 10; i++) {
  print(i);
}

// for-in loop to iterate over a collection
for (var color in colors) {
  print(color);
}

// while loop with a condition
while (x < 100) {
  x = x * 2;
}

// do-while loop that executes at least once
do {
  y = y + 1;
} while (y < 10);
```

# Functions

- Define a function with the `void` keyword if it does not return any value, or with the return type if it does.

```dart
void sayHello(String name) {
  print('Hello, $name!');
}

int add(int x, int y) {
  return x + y;
}
```

- Call a function by using its name and passing arguments inside parentheses.

```dart
sayHello('Bob');
int sum = add(3, 4);
```

- Use arrow syntax (`=>`) to write a function in one line.

```dart
void greet() => print('Greetings!');

bool isEven(int n) => n % 2 == 0;
```

- Use optional parameters (`[]`) to make some arguments optional, and provide default values (`=`) if needed.

```dart
void introduce(String name, [int age = 0, String hobby]) {
  print('My name is $name');
  if (age > 0) {
    print('I am $age years old');
  }
  if (hobby != null) {
    print('I like $hobby');
  }
}
```

- Use named parameters (`{}`) to make arguments more readable and flexible.

```dart
void drawCircle({double radius, String color = 'black', bool fill = false}) {
  print('Drawing a $color circle with radius $radius');
  if (fill) {
    print('Filling the circle');
  }
}
```

# Classes and Objects

- Define a class with the `class` keyword and use constructors (`this.`) to initialize fields.

```dart
class Person {
  String name;
  int age;

  // default constructor
  Person(this.name, this.age);

  // named constructor
  Person.fromMap(Map<String, dynamic> map) {
    this.name = map['name'];
    this.age = map['age'];
  }
}
```

- Create an object of a class by using the `new` keyword and passing arguments to the constructor.

```dart
Person alice = new Person('Alice', 25);
Person bob = new Person.fromMap({'name': 'Bob', 'age': 30});
```

- Access or modify the fields or methods of an object by using the dot operator (`.`).

```dart
print(alice.name); // Alice
alice.age = 26;
bob.sayHello(); // Hello, I am Bob
```

- Use the `extends` keyword to create a subclass that inherits from a superclass.

```dart
class Student extends Person {
  String school;

  Student(String name, int age, this.school) : super(name, age);

  void study() {
    print('$name is studying at $school');
  }
}
```

- Use the `override` keyword to redefine a method inherited from the superclass.

```dart
class Teacher extends Person {
  String subject;

  Teacher(String name, int age, this.subject) : super(name, age);

  @override
  void sayHello() {
    print('Hello, I am $name and I teach $subject');
  }
}
```

- Use the `abstract` keyword to define an abstract class that cannot be instantiated, but can have abstract methods that must be implemented by subclasses.

```dart
abstract class Shape {
  double area();

  void printArea() {
    print('The area is ${area()}');
  }
}

class Circle extends Shape {
  double radius;

  Circle(this.radius);

  @override
  double area() {
    return pi * radius * radius;
  }
}

class Rectangle extends Shape {
  double width;
  double height;

  Rectangle(this.width, this.height);

  @override
  double area() {
    return width * height;
  }
}
```

- Use the `implements` keyword to define a class that implements an interface, which is another class that defines a set of methods and fields.

```dart
class Animal {
  void eat() {
    print('Eating');
  }

  void sleep() {
    print('Sleeping');
  }
}

class Dog implements Animal {
  @override
  void eat() {
    print('Eating dog food');
  }

  @override
  void sleep() {
    print('Sleeping on the couch');
  }

  void bark() {
    print('Woof woof');
  }
}

class Cat implements Animal {
  @override
  void eat() {
    print('Eating cat food');
  }

  @override
  void sleep() {
    print('Sleeping on the bed');
  }

  void meow() {
    print('Meow meow');
  }
}
```

- Use the `mixin` keyword to define a class that can be mixed in with another class to provide additional functionality.

```dart
mixin Flyable {
  void fly() {
    print('Flying');
  }
}

class Bird with Flyable {
  void sing() {
    print('Singing');
  }
}

class Plane with Flyable {
  void transport() {
    print('Transporting passengers');
  }
}
```
