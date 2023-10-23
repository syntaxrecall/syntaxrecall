---
id: e7812377-66f1-4cae-8739-bd0d608b2d46
title: JavaScript
description: A cheatsheet for JavaScript
keywords: ["javascript", "js"]
---

Table of Contents
[[toc]]

# Variables

- Use `let` to declare a variable that can be reassigned later.

```javascript
let name = "Alice";
name = "Bob"; // reassign the variable
```

- Use `const` to declare a constant variable that cannot be changed.

```javascript
const pi = 3.14;
pi = 4; // error: assignment to constant variable
```

- Use `var` to declare a variable with function scope (not recommended).

```javascript
var x = 10;
if (true) {
  var x = 20; // same variable as outside
}
console.log(x); // 20
```

# Data Types

- JavaScript has six primitive data types: `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`.
- JavaScript also has one complex data type: `object`.
- Use `typeof` operator to check the data type of a value.

```javascript
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof null; // "object" (a bug in JavaScript)
typeof undefined; // "undefined"
typeof Symbol("foo"); // "symbol"
typeof { name: "Alice" }; // "object"
```

# Operators

- JavaScript has many operators for arithmetic, comparison, logical, assignment, and more.
- Some common operators are:

```javascript
// arithmetic operators
1 + 2; // 3
3 - 4; // -1
5 * 6; // 30
7 / 8; // 0.875
9 % 10; // 9 (remainder of division)
2 ** 3; // 8 (exponentiation)

// comparison operators
1 == 1; // true (equality)
1 != 2; // true (inequality)
1 === 1; // true (strict equality)
1 !== 2; // true (strict inequality)
1 < 2; // true (less than)
1 > 2; // false (greater than)
1 <= 2; // true (less than or equal)
1 >= 2; // false (greater than or equal)

// logical operators
true && true; // true (and)
true || false; // true (or)
!true; // false (not)

// assignment operators
let x = 10; // assign 10 to x
x += 5; // add 5 to x and assign the result to x (same as x = x + 5)
x -= 5; // subtract 5 from x and assign the result to x (same as x = x - 5)
x *= 5; // multiply x by 5 and assign the result to x (same as x = x * 5)
x /= 5; // divide x by 5 and assign the result to x (same as x = x / 5)
x %= 5; // get the remainder of x divided by 5 and assign the result to x (same as x = x % 5)
x **= 5; // raise x to the power of 5 and assign the result to x (same as x = x ** 5)
```

# Strings

- Strings are sequences of characters enclosed in quotes.
- You can use single quotes (`'`), double quotes (`"`), or backticks (\`) to create strings.
- Backticks allow you to use template literals, which can interpolate expressions and span multiple lines.

```javascript
let name = "Alice";
let greeting = 'Hello, ' + name + '!'; // concatenation with +
greeting = `Hello, ${name}!`; // interpolation with ${}
greeting = `Hello,
${name}!`; // multiline string with `
```

# Numbers

- Numbers are numeric values that can be integers or decimals.
- You can use scientific notation, hexadecimal, octal, or binary literals to create numbers.
- You can use some built-in properties and methods of the global `Number` object to work with numbers.

```javascript
let num = 42; // integer
num = 3.14; // decimal
num = 1.23e4; // scientific notation (12300)
num = 0xff; // hexadecimal (255)
num = 0o77; // octal (63)
num = 0b1010; // binary (10)

Number.MAX_VALUE; // the largest representable number (1.7976931348623157e+308)
Number.MIN_VALUE; // the smallest representable number (5e-324)
Number.NaN; // not a number
Number.isNaN(num); // check if a value is NaN
Number.isInteger(num); // check if a value is an integer
Number.isFinite(num); // check if a value is finite
Number.parseFloat("3.14"); // parse a string as a floating-point number
Number.parseInt("42", 10); // parse a string as an integer with a given radix
num.toFixed(2); // return a string representation of a number with a fixed number of decimals ("3.14")
num.toExponential(2); // return a string representation of a number in exponential notation ("1.23e+4")
num.toString(16); // return a string representation of a number in a given base ("2a")
```

# Booleans

- Booleans are logical values that can be either `true` or `false`.
- You can use comparison or logical operators to create booleans from other values.
- You can also use the `Boolean` function to convert any value to a boolean.
- Falsy values are values that are converted to `false` when used in a boolean context. They are: `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
- Truthy values are values that are converted to `true` when used in a boolean context. They are any values that are not falsy.

```javascript
let bool = true; // boolean literal
bool = 1 < 2; // comparison operator
bool = true && false; // logical operator
bool = Boolean(42); // Boolean function

if (bool) {
  // do something if bool is truthy
} else {
  // do something if bool is falsy
}

bool = !!42; // double negation to convert any value to a boolean
```

# Null and Undefined

- Null and undefined are special values that represent the absence of a meaningful value.
- Null is an intentional absence of any value, and must be assigned.
- Undefined is an unintentional absence of any value, and is the default value of variables that are not assigned, function parameters that are not passed, and properties that do not exist.

```javascript
let x = null; // assign null to x
let y; // declare y without assigning
console.log(y); // undefined

function foo(a) {
  console.log(a); // undefined if no argument is passed
}

let obj = { name: "Alice" };
console.log(obj.age); // undefined if the property does not exist
```

# Symbols

- Symbols are unique and immutable identifiers that can be used as object property keys.
- You can use the `Symbol` function to create symbols, optionally with a description.
- You can use the global symbol registry to create or access symbols that are shared across your code.

```javascript
let sym1 = Symbol("foo"); // create a symbol with a description
let sym2 = Symbol("foo"); // create another symbol with the same description
console.log(sym1 === sym2); // false, symbols are unique

let sym3 = Symbol.for("bar"); // create or access a symbol in the global registry
let sym4 = Symbol.for("bar"); // access the same symbol as sym3
console.log(sym3 === sym4); // true, symbols from the registry are shared

let obj = {};
obj[sym1] = "baz"; // use a symbol as an object property key
console.log(obj[sym1]); // "baz"
```

# Objects

- Objects are collections of key-value pairs, where keys can be strings or symbols, and values can be any data type.
- You can use object literals, the `Object` constructor, or the `Object.create` method to create objects.
- You can use dot notation or bracket notation to access or modify object properties.

```javascript
let obj1 = {}; // empty object literal
let obj2 = new Object(); // empty object with Object constructor
let obj3 = Object.create(null); // empty object with no prototype

let person = {
  name: "Alice", // string key and value
  age: 25, // number key and value
  [Symbol("id")]: 123, // symbol key and value
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  }, // function key and value (method)
}; // object literal with properties

person.name; // access name property with dot notation (Alice)
person["age"]; // access age property with bracket notation (25)
person.greet(); // call greet method (Hello, I'm Alice)

person.name = "Bob"; // modify name property with dot notation
person["age"] = 26; // modify age property with bracket notation

person.height = 170; // add height property with dot notation (170)
person["weight"] = 60; // add weight property with bracket notation (60)

delete person.height; // delete height property with dot notation
delete person["weight"]; //
```

# Arrays

- Arrays are ordered collections of values that can be accessed by index.
- You can use array literals, the `Array` constructor, or the `Array.of` and `Array.from` methods to create arrays.
- You can use various methods of the `Array` prototype to manipulate arrays.

```javascript
let arr1 = []; // empty array literal
let arr2 = new Array(); // empty array with Array constructor
let arr3 = Array.of(1, 2, 3); // array with Array.of method
let arr4 = Array.from("abc"); // array with Array.from method

let fruits = ["apple", "banana", "cherry"]; // array literal with values
fruits[0]; // access the first element with index (apple)
fruits[2]; // access the third element with index (cherry)
fruits.length; // get the length of the array (3)

fruits.push("date"); // add an element to the end of the array (["apple", "banana", "cherry", "date"])
fruits.pop(); // remove and return the last element of the array (date)
fruits.unshift("apricot"); // add an element to the beginning of the array (["apricot", "apple", "banana", "cherry"])
fruits.shift(); // remove and return the first element of the array (apricot)

fruits.reverse(); // reverse the order of the array (["cherry", "banana", "apple"])
fruits.sort(); // sort the array in ascending order (["apple", "banana", "cherry"])
fruits.slice(1, 3); // return a shallow copy of a portion of the array (["banana", "cherry"])
fruits.splice(1, 2, "blueberry", "cranberry"); // remove and replace some elements of the array (["apple", "blueberry", "cranberry"])

fruits.forEach((fruit) => console.log(fruit)); // iterate over the array and execute a function for each element (apple, blueberry, cranberry)
fruits.map((fruit) => fruit.toUpperCase()); // create a new array with the results of calling a function on every element (["APPLE", "BLUEBERRY", "CRANBERRY"])
fruits.filter((fruit) => fruit.startsWith("b")); // create a new array with the elements that pass a test (["blueberry", "cranberry"])
fruits.reduce((acc, fruit) => acc + fruit, ""); // apply a function to an accumulator and each element to reduce the array to a single value ("appleblueberrycranberry")
```

# Functions

- Functions are blocks of code that can be defined and invoked to perform a specific task or return a value.
- You can use function declarations, function expressions, arrow functions, or the `Function` constructor to create functions.
- You can use parameters and arguments to pass values to functions.
- You can use the `return` statement to return a value from a function.
- You can use function hoisting, closures, recursion, and higher-order functions to achieve different behaviors with functions.

```javascript
function add(x, y) {
  // function declaration with parameters x and y
  return x + y; // return statement with an expression
}

let subtract = function (x, y) {
  // function expression assigned to a variable
  return x - y;
};

let multiply = (x, y) => {
  // arrow function with parentheses and braces
  return x * y;
};

let divide = (x, y) => x / y; // arrow function with implicit return

let pow = new Function("x", "y", "return x ** y"); // function with Function constructor

add(1, 2); // invoke or call a function with arguments 1 and 2 (3)
subtract(3, 4); // invoke or call another function with arguments 3 and 4 (-1)
multiply(5, 6); // invoke or call another function with arguments 5 and 6 (30)
divide(7, 8); // invoke or call another function with arguments 7 and 8 (0.875)
pow(2, 3); // invoke or call another function with arguments 2 and 3 (8)

// function hoisting: you can call a function before it is defined
sayHello("Alice"); // Hello, Alice

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

// closure: a function that can access variables from its outer scope
function makeCounter() {
  let count = 0; // count is local to makeCounter
  return function () {
    count++; // the inner function can access count
    console.log(count);
  };
}

let counter = makeCounter(); // counter is a function that has a closure over count
counter(); // 1
counter(); // 2
counter(); // 3

// recursion: a function that calls itself until a base case is reached
function factorial(n) {
  if (n === 0) {
    // base case
    return 1;
  } else {
    // recursive case
    return n * factorial(n - 1);
  }
}

factorial(5); // 5 * 4 * 3 * 2 * 1 (120)

// higher-order function: a function that can take another function as an argument or return another function as a result
function greet(name) {
  console.log(`Hello, ${name}`);
}

function repeat(n, func) {
  // repeat is a higher-order function that takes a function as an argument
  for (let i = 0; i < n; i++) {
    func(i); // call the function with i as an argument
  }
}

repeat(3, greet); // Hello, 0, Hello, 1, Hello, 2

function makeAdder(x) {
  // makeAdder is a higher-order function that returns a function as a result
  return function (y) {
    return x + y; // the returned function has a closure over x
  };
}

let add10 = makeAdder(10); // add10 is a function that adds 10 to its argument
add10(20); // 30
```

# Control Flow

```javascript
// conditional statements
let x = 10;
if (x > 0) {
  // if statement with a condition
  console.log("x is positive");
} else if (x < 0) {
  // else if statement with another condition
  console.log("x is negative");
} else {
  // else statement with no condition
  console.log("x is zero");
}

let y = "red";
switch (y) {
  // switch statement with an expression
  case "red": // case clause with a value
    console.log("y is red");
    break; // break statement to exit the switch
  case "green":
    console.log("y is green");
    break;
  case "blue":
    console.log("y is blue");
    break;
  default:
    // default clause with no value
    console.log("y is not red, green, or blue");
}

// loops
let i = 0;
while (i < 5) {
  // while loop with a condition
  console.log(i);
  i++; // increment i
}

let j = 0;
do {
  // do-while loop with a condition
  console.log(j);
  j++; // increment j
} while (j < 5);

for (let k = 0; k < 5; k++) {
  // for loop with an initializer, a condition, and an updater
  console.log(k);
}

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  // for-of loop to iterate over iterable objects
  console.log(fruit);
}

let person = { name: "Alice", age: 25 };
for (let key in person) {
  // for-in loop to iterate over object properties
  console.log(key, person[key]);
}

// jumps
let x = 10;
if (x > 0) {
  console.log("x is positive");
} else {
  return; // return statement to exit the current function
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // continue statement to skip the current iteration of the loop
  }
  console.log(i); // only odd numbers are printed
}

outer: for (let i = 0; i < 3; i++) {
  // outer is a label for the outer loop
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      break outer; // break statement with a label to exit the labeled loop
    }
    console.log(i, j); // only pairs with i != j are printed
  }
}
```
