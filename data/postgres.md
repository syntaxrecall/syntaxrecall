---
id: af18caf1-d422-4d0a-97fb-4414e03e5451
title: Postgres
description: A cheatsheet for Postgres
---

# Data Types

| Data Type | Description | Example |
|-----------|-------------|---------|
| Boolean | Logical Boolean (true/false) | true |
| Character | Fixed-length character string | 'Hello' |
| Varchar | Variable-length character string | 'World' |
| Text | Variable-length character string with unlimited length | 'This is a long text' |
| Integer | 4-byte integer | 42 |
| Bigint | 8-byte integer | 9223372036854775807 |
| Numeric | Arbitrary precision number | 3.14159 |
| Real | 4-byte floating point number | 1.23e4 |
| Double precision | 8-byte floating point number | 1.23456789e8 |
| Date | Calendar date (year, month, day) | '2023-07-05' |
| Time | Time of day (hour, minute, second, fraction of second) | '01:04:21.123456' |
| Timestamp | Both date and time (no time zone) | '2023-07-05 01:04:21.123456' |
| Interval | Time span | '1 year 2 months 3 days' |
| UUID | Universally Unique Identifier | 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' |
| Array | A collection of data values of the same type | '{1,2,3}' |
| JSON | JavaScript Object Notation for storing JSON data | '{"name": "John", "age": 25}' |

# SQL syntax

## Create a database

```sql
CREATE DATABASE database_name;
```

## Drop a database

```sql
DROP DATABASE database_name;
```

## Create a table

```sql
CREATE TABLE table_name (
  column1 data_type constraints,
  column2 data_type constraints,
  ...
);
```

## Drop a table

```sql
DROP TABLE table_name;
```

## Alter a table

```sql
ALTER TABLE table_name
ADD column_name data_type constraints;

ALTER TABLE table_name
DROP column_name;

ALTER TABLE table_name
RENAME column_name TO new_column_name;
```

## Insert data into a table

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

## Update data in a table

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## Delete data from a table

```sql
DELETE FROM table_name
WHERE condition;
```

## Select data from table

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## Join tables

```sql
SELECT column1, column2, ...
FROM table1
JOIN table2 ON table1.column = table2.column
WHERE condition;
```

## Group data by 1 or more columns

```sql
SELECT column1, column2, aggregate_function(column3)
FROM table_name
GROUP BY column1, column2
HAVING condition;
```

## Order data by 1 or more columns

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 ASC/DESC, column2 ASC/DESC, ...;
```

## Limit number of rows returned

```sql
SELECT column1, column2, ...
FROM table_name
LIMIT number;
```

## Offset the result set

```sql
SELECT column1, column2, ...
FROM table_name
OFFSET number;
```



