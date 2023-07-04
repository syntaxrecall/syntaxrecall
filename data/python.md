---
id: dce81984-0e9f-42ea-aa52-95eeae0f88c3
title: Python
description: A cheatsheet for Python
---

Table of contents
[[toc]]

# Hello world

```python
print("Hello, world!")
```

# Variables and Data Types

```python
# Assigning a value to a variable
x = 10 # x is an integer
y = 3.14 # y is a float
z = "Hello" # z is a string
w = True # w is a boolean

# Printing the value and type of a variable
print(x) # prints 10
print(type(x)) # prints <class 'int'>
print(z) # prints Hello
print(type(z)) # prints <class 'str'>
```

# Operators and Expressions

```python
# Arithmetic operators: +, -, *, /, **, //, %
a = 5 + 2 # addition
b = 5 - 2 # subtraction
c = 5 * 2 # multiplication
d = 5 / 2 # division
e = 5 ** 2 # exponentiation
f = 5 // 2 # floor division
g = 5 % 2 # modulo

# Comparison operators: ==, !=, <, >, <=, >=
h = (a == b) # equality
i = (a != b) # inequality
j = (a < b) # less than
k = (a > b) # greater than
l = (a <= b) # less than or equal to
m = (a >= b) # greater than or equal to

# Logical operators: and, or, not
n = (h and i) # logical and
o = (h or i) # logical or
p = not h # logical not

# Assignment operators: =, +=, -=, *=, /=, **=, //=, %=
q = 10 # assignment
q += 5 # equivalent to q = q + 5
q -= 5 # equivalent to q = q - 5
q *= 5 # equivalent to q = q * 5
q /= 5 # equivalent to q = q / 5
q **= 5 # equivalent to q = q ** 5
q //= 5 # equivalent to q = q // 5
q %= 5 # equivalent to q = q % 5

# Bitwise operators: &, |, ^, ~, <<, >>
r = 10 & 12 # bitwise and
s = 10 | 12 # bitwise or
t = 10 ^ 12 # bitwise xor
u = ~10 # bitwise not
v = 10 << 2 # bitwise left shift
w = 10 >> 2 # bitwise right shift

# Membership operators: in, not in
x = [1,2,3] # a list of integers
y = "Hello" # a string
z = "e" in y # True if z is in y, False otherwise
w = "e" not in y # False if z is in y, True otherwise

# Identity operators: is, is not
a = [1,2,3] # a list of integers
b = [1,2,3] # another list of integers with the same values as a
c = a is b # False because a and b are different objects with different identities
d = a is not b # True because a and b are different objects with different identities
```

# Control Flow Statements

```python

# If statement: executes a block of code if a condition is True

x = 10 
if x > 0:
    print("x is positive")

# If-else statement: executes one block of code if a condition is True, another block if False

x = -10 
if x > 0:
    print("x is positive")
else:
    print("x is negative")

# If-elif-else statement: executes one of several blocks of code depending on multiple conditions

x = 0 
if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is zero")

# For loop: iterates over a sequence (such as a list or a string)

fruits = ["apple", "banana", "orange"] 
for fruit in fruits:
    print(fruit)

# While loop: executes a block of code as long as a condition is True

n = 1 
while n < 10:
    print(n)
    n += 1

# Break statement: exits the loop

n = 1 
while n < 10:
    print(n)
    if n == 5:
        break 
    n += 1

# Continue statement: skips the current iteration of the loop

n = 0 
while n < 10:
    n += 1
    if n % 2 == 0:
        continue 
    print(n)

# Pass statement: does nothing, used as a placeholder

def foo():
    pass # a function that does nothing
```

# Functions

```python
# Defining a function: using the def keyword, followed by the function name and parameters

def add(x, y):
    return x + y # returns the sum of x and y

# Calling a function: using the function name and arguments

z = add(3, 4) # z is 7

# Default parameters: specifying a default value for a parameter that can be overridden by an argument

def greet(name, message="Hello"):
    print(message, name)

greet("Alice") # prints Hello Alice
greet("Bob", "Hi") # prints Hi Bob

# Keyword arguments: passing arguments by name, rather than by position

def area(length, width):
    return length * width

a = area(width=5, length=10) # a is 50

# Variable-length arguments: using *args and **kwargs to accept an arbitrary number of positional and keyword arguments

def print_args(*args, **kwargs):
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)

print_args(1, 2, 3, a=4, b=5) # prints Positional arguments: (1, 2, 3) and Keyword arguments: {'a': 4, 'b': 5}

# Lambda functions: anonymous functions that can be defined in one line

square = lambda x: x ** 2 # a function that returns the square of x
y = square(5) # y is 25
```

# Data Structures

```python
# List: an ordered collection of items that can be modified

numbers = [1, 2, 3, 4, 5] # a list of integers
numbers.append(6) # adds 6 to the end of the list
numbers.insert(0, 0) # inserts 0 at the beginning of the list
numbers.pop() # removes and returns the last item of the list
numbers.remove(3) # removes the first occurrence of 3 from the list
numbers.reverse() # reverses the order of the list
numbers.sort() # sorts the list in ascending order
len(numbers) # returns the number of items in the list
numbers[0] # returns the first item of the list
numbers[-1] # returns the last item of the list
numbers[1:3] # returns a sublist from index 1 to index 2 (exclusive)
numbers[:3] # returns a sublist from index 0 to index 2 (exclusive)
numbers[3:] # returns a sublist from index 3 to the end of the list
numbers[:] # returns a copy of the whole list
1 in numbers # returns True if 1 is in the list, False otherwise
7 not in numbers # returns True if 7 is not in the list, False otherwise

# Tuple: an ordered collection of items that cannot be modified

colors = ("red", "green", "blue") # a tuple of strings
len(colors) # returns the number of items in the tuple
colors[0] # returns the first item of the tuple
colors[-1] # returns the last item of the tuple
colors[1:3] # returns a subtuple from index 1 to index 2 (exclusive)
colors[:3] # returns a subtuple from index 0 to index 2 (exclusive)
colors[3:] # returns a subtuple from index 3 to the end of the tuple
colors[:] # returns a copy of the whole tuple
"red" in colors # returns True if "red" is in the tuple, False otherwise
"yellow" not in colors # returns True if "yellow" is not in the tuple, False otherwise

# Set: an unordered collection of unique items that can be modified

fruits = {"apple", "banana", "orange"} # a set of strings
fruits.add("pear") # adds "pear" to the set
fruits.remove("banana") # removes "banana" from the set
fruits.clear() # removes all items from the set
len(fruits) # returns the number of items in the set
"apple" in fruits # returns True if "apple" is in the set, False otherwise
"banana" not in fruits # returns True if "banana" is not in the set, False otherwise

# Dictionary: an unordered collection of key-value pairs that can be modified

person = {"name": "Alice", "age": 25, "gender": "female"} # a dictionary with string keys and values
person["name"] # returns "Alice"
person["age"] =
```
