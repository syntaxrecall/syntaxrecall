---
id: fa82323c-519a-4c31-ab58-73945b42fc61
title: Protobuf
description: A cheatsheet for Protocol Buffers
keywords: ["protobuf"]
---

Table of contents
[[toc]]

## Defining a message type

Use the `message` keyword to define a message type with one or more fields. Each field has a name, a type, and a tag number. For example:

```protobuf
message Person {
  string name = 1;
  int32 age = 2;
  bool is_married = 3;
}
```

## Generating code from a proto file

Use the `protoc` compiler to generate code from a proto file. Specify the language and the output directory. For example, to generate Java code:

```bash
protoc --java_out=output_dir input_file.proto
```

## Serializing and deserializing data

Use the generated classes to create, serialize, and deserialize objects. For example, in Java:

```java
// Create a Person object
Person person = Person.newBuilder()
    .setName("Alice")
    .setAge(25)
    .setIsMarried(true)
    .build();

// Serialize the object to a byte array
byte[] data = person.toByteArray();

// Deserialize the byte array to a Person object
Person person2 = Person.parseFrom(data);
```

## Using proto3 syntax

Use the `syntax` keyword to specify the proto3 syntax. Proto3 has some differences from proto2, such as no required or optional fields, no default values, and no extensions. For example:

```protobuf
syntax = "proto3";

message Person {
  string name = 1;
  int32 age = 2;
  bool is_married = 3;
}
```

## Using enums

Use the `enum` keyword to define an enumeration type with a set of named values. For example:

```protobuf
enum Gender {
  UNKNOWN = 0;
  MALE = 1;
  FEMALE = 2;
}

message Person {
  string name = 1;
  Gender gender = 2;
}
```

## Using nested types

Use the `message` keyword inside another message to define a nested type. For example:

```protobuf
message Person {
  string name = 1;

  message Address {
    string street = 1;
    string city = 2;
    string state = 3;
    string zip = 4;
  }

  Address address = 2;
}
```

## Using repeated fields

Use the `repeated` keyword to define a field that can have zero or more values of the same type. For example:

```protobuf
message Person {
  string name = 1;
  repeated string hobbies = 2;
}
```

## Using maps

Use the `map` keyword to define a field that can have key-value pairs of a specified type. For example:

```protobuf
message Person {
  string name = 1;
  map<string, string> phone_numbers = 2; // key: type, value: number
}
```

## Using oneofs

Use the `oneof` keyword to define a field that can have only one of a set of subfields. For example:

```protobuf
message Person {
  string name = 1;

  oneof contact {
    string email = 2;
    string phone = 3;
  }
}
```

## Using reserved fields

Use the `reserved` keyword to prevent the reuse of field numbers or names that have been removed from a message type. For example:

```protobuf
message Person {
  reserved 2, 15, 9 to 11;
  reserved "foo", "bar";
  string name = 1;
  int32 age = 3;
}
```
