---
id: fdb9f42c-4f6d-491b-954e-1fcad2a5c9ed
title: GDScript
description: A cheatsheet for GDScript
---

Table of contents
[[toc]]

GDScript is a scripting language designed for the Godot game engine. It is similar to Python, but has some differences and features that make it suitable for game development.

# Variables

Variables are containers that store values of different types. You can declare a variable using the `var` keyword, followed by the variable name and an optional assignment.

```gdscript
var x # declare a variable without assigning a value
var y = 10 # declare a variable and assign it to 10
```

You can also use type hints to specify the type of the variable. This can help with code completion and error checking.

```gdscript
var z: int # declare an integer variable
var name: String = "Alice" # declare a string variable and assign it to "Alice"
```

# Constants

Constants are variables that cannot be changed once assigned. You can declare a constant using the `const` keyword, followed by the name and the value.

```gdscript
const PI = 3.14159 # declare a constant with the value of pi
const GREETING = "Hello, world!" # declare a constant with a string value
```

# Operators

Operators are symbols that perform operations on one or more values. GDScript supports the following types of operators:

- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`
- Comparison operators: `==`, `!=`, `<`, `>`, `<=`, `>=`
- Logical operators: `and`, `or`, `not`
- Bitwise operators: `&`, `|`, `^`, `~`, `<<`, `>>`
- Assignment operators: `=`, `+=`, `-=` etc.
- Membership operators: `in`, `not in`
- Identity operators: `is`, `is not`

Here are some examples of using operators:

```gdscript
var a = 5
var b = 2

print(a + b) # prints 7
print(a - b) # prints 3
print(a * b) # prints 10
print(a / b) # prints 2.5
print(a % b) # prints 1 (remainder of division)
print(a ** b) # prints 25 (power)

print(a == b) # prints false
print(a != b) # prints true
print(a < b) # prints false
print(a > b) # prints true
print(a <= b) # prints false
print(a >= b) # prints true

print(not a) # prints false (negation)
print(a and b) # prints 2 (logical and)
print(a or b) # prints 5 (logical or)

print(a & b) # prints 0 (bitwise and)
print(a | b) # prints 7 (bitwise or)
print(a ^ b) # prints 7 (bitwise xor)
print(~a) # prints -6 (bitwise not)
print(a << b) # prints 20 (bitwise left shift)
print(a >> b) # prints 1 (bitwise right shift)

a += b # equivalent to a = a + b
a -= b # equivalent to a = a - b
# and so on for other arithmetic operators

var c = [1, 2, 3]
var d = 2

print(d in c) # prints true (membership)
print(d not in c) # prints false (non-membership)

var e = Vector2(1, 2)
var f = Vector2(1, 2)

print(e is f) # prints false (identity)
print(e is not f) # prints true (non-identity)
```

# Functions

Functions are blocks of code that perform a specific task. You can define a function using the `func` keyword, followed by the name and the parameters.

```gdscript
func add(x, y): # define a function that takes two parameters
    return x + y # return the sum of the parameters

func say_hello(): # define a function that takes no parameters
    print("Hello!") # print a message

func main(): # define the main function
    var result = add(3, 4) # call the add function and store the result
    print(result) # print the result
    say_hello() # call the say_hello function

main() # call the main function
```

You can also use default values for parameters, which will be used if no argument is passed.

```gdscript
func greet(name = "stranger"): # define a function with a default parameter value
    print("Hello, " + name + "!") # print a greeting message

greet() # prints "Hello, stranger!"
greet("Bob") # prints "Hello, Bob!"
```

# Conditional Statements

Conditional statements are used to execute different blocks of code based on some conditions. GDScript supports the following conditional statements:

- `if` statement: executes a block of code if a condition is true
- `elif` statement: executes a block of code if the previous condition was false and another condition is true
- `else` statement: executes a block of code if all the previous conditions were false

```gdscript
var age = 18

if age < 18: # check if age is less than 18
    print("You are a minor.") # print a message
elif age == 18: # check if age is equal to 18
    print("You are 18 years old.") # print a message
else: # otherwise
    print("You are an adult.") # print a message
```

# Looping

Looping is used to repeat a block of code multiple times. GDScript supports the following types of loops:

- `while` loop: repeats a block of code while a condition is true
- `for` loop: repeats a block of code for each element in a collection or a range
- `break` statement: exits the loop
- `continue` statement: skips the current iteration of the loop

```gdscript
var i = 0

while i < 10: # repeat while i is less than 10
    print(i) # print i
    i += 1 # increment i by 1

for j in [1, 2, 3]: # repeat for each element in the list
    print(j) # print the element

for k in range(5): # repeat for each number in the range from 0 to 4
    print(k) # print the number

for l in range(10): # repeat for each number in the range from 0 to 9
    if l == 5: # check if l is equal to 5
        break # exit the loop
    print(l) # print l

for m in range(10): # repeat for each number in the range from 0 to 9
    if m % 2 == 0: # check if m is even
        continue # skip the current iteration
    print(m) # print m
```

# Arrays

Arrays are collections of values that can be accessed by index. You can create an array using square brackets and comma-separated values.

```gdscript
var arr = [1, 2, 3, 4, 5] # create an array with five elements
print(arr[0]) # prints 1 (the first element)
print(arr[4]) # prints 5 (the last element)
print(arr[-1]) # prints 5 (the last element using negative index)
print(arr.size()) # prints 5 (the size of the array)
```

You can also use various methods to manipulate arrays, such as:

- `append(value)`: adds a value to the end of the array
- `insert(index, value)`: inserts a value at a given index in the array
- `remove(index)`: removes the value at a given index from the array
- `pop_back()`: removes and returns the last value from the array
- `pop_front()`: removes and returns the first value from the array
- `clear()`: clears the array of all values

```gdscript
var arr = [1, 2, 3]
arr.append(4) # add 4 to the end of the array
print(arr) # prints [1, 2, 3, 4]
arr.insert(1, -1) # insert -1 at index 1 in the array
print(arr) # prints [1, -1, 2, 3, 4]
arr.remove(2) # remove the value at index 2 from the array
print(arr) # prints [1, -1, 3, 4]
var x = arr.pop_back() # remove and return the last value from the array
print(x) # prints 4
print(arr) # prints [1, -1, 3]
var y = arr.pop_front() # remove and return the first value from the array
print(y) # prints 1
print(arr) # prints [-1, 3]
arr.clear() # clear the array of all values
print(arr) # prints []
```

# Dictionaries

Dictionaries are collections of key-value pairs that can be accessed by key. You can create a dictionary using curly braces and colon-separated key-value pairs.

```gdscript
var dict = {"name": "Alice", "age": 20, "gender": "female"} # create a dictionary with three key-value pairs
print(dict["name"]) # prints Alice (the value associated with the key "
```

# Classes

Classes are templates that define the properties and behaviors of objects. You can define a class using the `class` keyword, followed by the name and an optional inheritance.

```gdscript
class Animal: # define a class named Animal
    var name # declare a variable for the name
    var sound # declare a variable for the sound

    func _init(name, sound): # define a constructor that takes two parameters
        self.name = name # assign the name parameter to the name variable
        self.sound = sound # assign the sound parameter to the sound variable

    func make_sound(): # define a method that makes a sound
        print(self.name + " says " + self.sound) # print a message

class Dog extends Animal: # define a class named Dog that inherits from Animal
    func _init(name): # define a constructor that takes one parameter
        super._init(name, "woof") # call the parent constructor with the name and "woof"

class Cat extends Animal: # define a class named Cat that inherits from Animal
    func _init(name): # define a constructor that takes one parameter
        super._init(name, "meow") # call the parent constructor with the name and "meow"

var dog = Dog.new("Spot") # create an instance of Dog with the name "Spot"
var cat = Cat.new("Fluffy") # create an instance of Cat with the name "Fluffy"

dog.make_sound() # prints "Spot says woof"
cat.make_sound() # prints "Fluffy says meow"
```

# Signals

Signals are events that can be emitted and connected to other objects. You can define a signal using the `signal` keyword, followed by the name and optional parameters.

```gdscript
class Button: # define a class named Button
    signal clicked(x, y) # define a signal named clicked that takes two parameters

    func _input(event): # define a method that handles input events
        if event is InputEventMouseButton and event.pressed: # check if the event is a mouse button press
            emit_signal("clicked", event.position.x, event.position.y) # emit the clicked signal with the mouse position

class Label: # define a class named Label
    func _on_Button_clicked(x, y): # define a method that handles the clicked signal from Button
        print("Button clicked at (" + str(x) + ", " + str(y) + ")") # print a message

var button = Button.new() # create an instance of Button
var label = Label.new() # create an instance of Label

button.connect("clicked", label, "_on_Button_clicked") # connect the clicked signal from button to the label method

button._input(InputEventMouseButton.new()) # simulate an input event on button
# prints "Button clicked at (0, 0)"
```

# Coroutines

Coroutines are functions that can be paused and resumed. You can create a coroutine using the `yield` keyword, which takes two parameters: an object and a signal.

```gdscript
func countdown(seconds): # define a function that counts down from seconds
    while seconds > 0: # repeat while seconds is positive
        print(seconds) # print seconds
        seconds -= 1 # decrement seconds by 1
        yield(get_tree().create_timer(1), "timeout") # pause the function for 1 second and wait for the timeout signal

func main(): # define the main function
    print("Starting countdown...") # print a message
    yield(countdown(5), "completed") # call the countdown function as a coroutine and wait for it to complete
    print("Countdown finished!") # print a message

main() # call the main function
# prints:
# Starting countdown...
# 5
# 4
# 3
# 2
# 1
# Countdown finished!
```
