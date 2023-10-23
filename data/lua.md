---
id: f0181320-c403-4cdf-b5db-2a9e5b11ba64
title: Lua
description: A cheatsheet for Lua
keywords: ["lua"]
---

Table of Contents
[[toc]]

# Arrays

- Arrays are called "tables" in Lua
- Index starts at 1 not 0 like most languages.
- Tables are not fixed-length like arrays.
- Tables are not confined to a single type. They act like tuples and you can store any data type you want.

```lua
-- one-dimensional
array = {1, "hi", false}

-- length
print(#array)
-- output
--[[
    3
 ]]

-- You grab the element inside the table the same as most C-like languages.
print(array[2])
-- output
--[[
    hi
 ]]

--[[ This is different than most languages; typically this would throw an error.
    Not in Lua though, instead returns nil.
]]
print(array[4])
-- output

-- note this returns nil as well because Lua arrays/tables start at index 1 not 0.
print(array[0])
-- output
--[[
    nil
 ]]

-- multi-dimensional array
array = {
    {"Chad", "Bob", "Sally"},
    {1, 2 },
    {false, true, false, true, true }
}

print(array[1][1])
-- output
--[[
    Chad
 ]]

print(array[3][2])
-- output
--[[
    true
 ]]

-- Arrays are not fixed in Lua.
array = {1}

-- This would usually be an issue in most languages.
array[2] = "I am a new element!"

-- This will show how many elements are in the array/table.
print(#array)

-- This will get the value of the element at the specified index.
print(array[2])
-- output
--[[
    1
    I am a new element!
 ]]
```

# Comments

```lua
-- single line

--[[
    multi
    line
    comments
--]]
```
