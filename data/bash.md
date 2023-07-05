---
id: bea4619b-3223-459b-8975-4d049a869937
title: Bash
description: A cheatsheet for Bash
---

Table of contents
[[toc]]

# Variables
- To declare a variable, use `var=value` (no spaces around `=`).
- To access a variable, use `$var` or `${var}`.
- To assign the output of a command to a variable, use `var=$(command)` or `var=`command``.
- To make a variable read-only, use `readonly var`.
- To unset a variable, use `unset var`.

```bash
# Example
name="Alice"
echo "Hello, $name"
age=$(date +%Y -d "1990-01-01")
readonly age
unset name
```

# Parameters
- To access the parameters passed to a script or a function, use `$1`, `$2`, etc.
- To access all the parameters as a single string, use `$*`.
- To access all the parameters as an array, use `$@`.
- To access the number of parameters, use `$#`.
- To access the name of the script or the function, use `$0`.

```bash
# Example
echo "The name of this script is $0"
echo "You passed $# parameters"
echo "The first parameter is $1"
echo "All the parameters are $*"
echo "The parameters as an array are ${@}"
```

# Arrays
- To declare an array, use `array=(value1 value2 ...)` or `array[0]=value1; array[1]=value2; ...`.
- To access an array element, use `${array[index]}`.
- To access all the array elements, use `${array[@]}` or `${array[*]}`.
- To access the number of array elements, use `${#array[@]}` or `${#array[*]}`.
- To add an element to an array, use `array+=(value)`.
- To delete an element from an array, use `unset array[index]`.

```bash
# Example
colors=(red green blue)
echo "The first color is ${colors[0]}"
echo "The number of colors is ${#colors[@]}"
colors+=(yellow)
unset colors[1]
echo "The new colors are ${colors[@]}"
```

# Arithmetic
- To perform arithmetic operations, use `$((expression))` or `let expression`.
- To increment or decrement a variable, use `((var++))`, `((var--))`, `((++var))`, or `((--var))`.
- To assign the result of an arithmetic operation to a variable, use `((var=expression))` or `let var=expression`.

```bash
# Example
x=10
y=$((x + 5))
let z=x*y
echo "x=$x, y=$y, z=$z"
((x++))
let y*=2
((z=x+y))
echo "x=$x, y=$y, z=$z"
```

- To use floating-point arithmetic, use `bc` command with `-l` option.
- To round a number to a given precision, use `printf "%.*f" precision number`.
- To generate a random number, use `$RANDOM` or `shuf` command.

```bash
# Example
x=3.14
y=2.71
z=$(bc -l <<<"$x*$y")
echo "z=$z"

n=3.14159
m=$(printf "%.2f" $n)
echo "m=$m"

r=$RANDOM
echo "r=$r"

s=$(shuf -i 1-10 -n 1)
echo "s=$s"
```

# Strings
- To get the length of a string, use `${#string}`.
- To get a substring of a string, use `${string:start:length}`.
- To remove a prefix from a string, use `${string#pattern}` (shortest match) or `${string##pattern}` (longest match).
- To remove a suffix from a string, use `${string%pattern}` (shortest match) or `${string%%pattern}` (longest match).
- To replace a substring in a string, use `${string/pattern/replacement}` (first match) or `${string//pattern/replacement}` (all matches).

```bash
# Example
name="Alice Smith"
echo "The length of name is ${#name}"
echo "The first name is ${name:0:5}"
echo "The last name is ${name#* }"
echo "The initials are ${name:0:1}.${name:6:1}."
echo "The name with lower case is ${name,,}"
echo "The name with upper case is ${name^^}"
```

# Conditionals
- To test a condition, use `[ condition ]` or `[[ condition ]]` (preferred).
- To combine conditions, use `-a` (and), `-o` (or), and `!` (not) with `[ ]`, or `&&` (and), `||` (or), and `!` (not) with `[[ ]]`.
- To compare strings, use `=` (equal), `!=` (not equal), `<` (less than), and `>` (greater than).
- To compare numbers, use `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), and `-ge` (greater than or equal).
- To check file attributes, use `-f` (regular file), `-d` (directory), `-e` (exists), `-s` (non-empty), `-r` (readable), `-w` (writable), and `-x` (executable).

```bash
# Example
x=10
y=20
if [[ $x -lt $y ]]; then
  echo "x is less than y"
elif [[ $x -gt $y ]]; then
  echo "x is greater than y"
else
  echo "x is equal to y"
fi

name="Alice"
if [[ -n $name ]]; then
  echo "name is not empty"
fi

file="test.txt"
if [[ -f $file && -r $file ]]; then
  echo "file is a readable regular file"
fi
```

# Loops
- To create a for loop, use `for var in list; do commands; done`.
- To create a while loop, use `while condition; do commands; done`.
- To create an until loop, use `until condition; do commands; done`.
- To break out of a loop, use `break`.
- To skip to the next iteration of a loop, use `continue`.

```bash
# Example
for i in {1..10}; do
  echo "i=$i"
done

j=1
while [[ $j -le 10 ]]; do
  echo "j=$j"
  ((j++))
done

k=1
until [[ $k -gt 10 ]]; do
  echo "k=$k"
  ((k++))
done

for i in {1..5}; do
  if [[ $i -eq 3 ]]; then
    break
  fi
  echo "i=$i"
done

for i in {1..5}; do
  if [[ $i -eq 3 ]]; then
    continue
  fi
  echo "i=$i"
done
```

# Functions
- To define a function, use `function name() { commands; }` or `name() { commands; }`.
- To call a function, use `name arguments`.
- To return a value from a function, use `return value`.
- To access the return value of a function, use `$?`.

```bash
# Example
function add() {
  ((result=$1+$2))
  return $result
}

add 3 4
echo "The sum is $?"

square() {
  echo "$(($1*$1))"
}

square 5
echo "The square is $?"
```

# Input and Output
- To read input from the user, use `read var`.
- To print output to the screen, use `echo string` or `printf format args`.
- To redirect output to a file, use `command > file` (overwrite) or `command >> file` (append).
- To redirect input from a file, use `command < file`.
- To redirect both output and error to a file, use `command &> file` or `command > file 2>&1`.

```bash
# Example
read name
echo "Hello, $name"

printf "%s\n" "Hello, world"

echo "This is a test" > test.txt

wc -l < test.txt

ls -l &> log.txt
```

# Case
- To create a case statement, use `case value in pattern1) commands1;; pattern2) commands2;; ... esac`.
- To match multiple patterns, use `pattern1|pattern2|...) commands;;`.
- To match any pattern, use `*) commands;;`.

```bash
# Example
read color
case $color in
  red|green|blue) echo "Primary color";;
  yellow|cyan|magenta) echo "Secondary color";;
  *) echo "Other color";;
esac
```

# Options
- To parse options passed to a script, use `getopts optstring var` in a loop.
- To access the option name, use `$var`.
- To access the option argument, use `$OPTARG`.
- To handle invalid options, use `?` as a case.

```bash
# Example
while getopts "a:b:" opt; do
  case $opt in
    a) echo "Option a with argument $OPTARG";;
    b) echo "Option b with argument $OPTARG";;
    ?) echo "Invalid option $opt";;
  esac
done
```

# Traps
- To execute a command when a signal is received, use `trap command signal`.
- To ignore a signal, use `trap "" signal`.
- To restore the default behavior of a signal, use `trap - signal`.
- To list the signals and their numbers, use `trap -l`.

```bash
# Example
trap "echo 'You pressed Ctrl-C'" SIGINT
trap "" SIGQUIT
trap - SIGTERM

echo "Press Ctrl-C, Ctrl-\, or Ctrl-Z to test the traps"
sleep 10

trap -l
```

# Strings
- To concatenate two strings, use `${string1}${string2}` or `string1+string2`.
- To convert a string to lower case, use `${string,,}`.
- To convert a string to upper case, use `${string^^}`.

```bash
# Example
name="Alice"
greeting="Hello, ${name}!"
echo $greeting

prefix="un"
word="happy"
new_word="${prefix}${word}"
echo $new_word

name="Alice"
lower_name="${name,,}"
upper_name="${name^^}"
echo $lower_name
echo $upper_name
```

# Arrays
- To slice an array, use `${array[@]:start:length}`.
- To sort an array, use `sorted=($(sort <<<"${array[*]}"))`.
- To reverse an array, use `reversed=($(tac <<<"${array[*]}"))`.

```bash
# Example
colors=(red green blue yellow cyan magenta)
slice=(${colors[@]:1:3})
echo "The slice is ${slice[@]}"

numbers=(5 3 8 2 9 1 4 7 6)
sorted=($(sort -n <<<"${numbers[*]}"))
echo "The sorted array is ${sorted[@]}"

words=(apple banana cherry date elderberry fig grape)
reversed=($(tac <<<"${words[*]}"))
echo "The reversed array is ${reversed[@]}"
```
