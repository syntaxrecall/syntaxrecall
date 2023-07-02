---
id: c808edcc-a6f8-4b48-afba-fc0102d4def9
title: Java
description: A quick reference for Java
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



