📑 Agenda for Day02 - Hoisting & Functions in JavaScript

📌 Operators 
📌 Conditional Statements
📌 Looping
📌 Hoisting
📌 String


## Operators

JavaScript operators are symbols used to perform operations on operands.

- *Arithmetic Operators*: Perform arithmetic on numbers (`+`, `-`, `*`, `/`, `%`).
- *Comparison Operators*: Compare two values and return a boolean (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`).
- *Logical Operators*: Used to determine the logic between variables or values (`&&`, `||`, `!`).
- *Assignment Operators*: Assign values to JavaScript variables (`=`, `+=`, `-=`, `*=`, `/=`, `%=`).

## Conditional Statements

Control the flow of code based on conditions.

- *if statement*: Executes a block of code if a specified condition is true.
- *else statement*: Executes a block of code if the same condition is false.
- *else if statement*: Specifies a new condition to test if the first condition is false.
- *switch statement*: Specifies many alternative blocks of code to be executed.

## Looping Statements

Execute a block of code a number of times.

- *for loop*: Loops through a block of code a number of times.
- *while loop*: Loops through a block of code as long as a specified condition is true.
- *do...while loop*: Also loops through a block of code as long as a specified condition is true, but executes the code block once before checking the condition.
- *for...in loop*: Loops through the properties of an object.
- *for...of loop*: Loops over iterable objects (like Arrays, Strings).

## Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use functions and variables before they are declared.

- **Variable Hoisting**: Only variable declarations are hoisted to the top, not the initializations.
    ```javascript
    console.log(x); // undefined
    var x = 5;
 
## String and Its Methods
     Represents a sequence of characters.

Methods include .length, .charAt(), .indexOf(), .toUpperCase(), .toLowerCase(), .substring(), .slice(), .split(), .replace(),replaceAll()

| Shortcut | Matches                             | Example Match                                           |
| -------- | ----------------------------------- | ------------------------------------------------------- |
| `\d`     | Any digit (0–9)                     | `"123abc"` → matches `1`, `2`, `3`                      |
| `\D`     | Any non-digit                       | `"123abc"` → matches `a`, `b`, `c`                      |
| `\w`     | Word characters: `[a-zA-Z0-9_]`     | `"abc_123"` → matches `a`, `b`, `c`, `_`, `1`, `2`, `3` |
| `\W`     | Non-word characters                 | `"abc@#"` → matches `@`, `#`                            |
| `\s`     | Whitespace: space, tab, newline     | `"a b\tc\n"` → matches space, tab, newline              |
| `\S`     | Non-whitespace characters           | `"a b"` → matches `a`, `b`                              |
| `.`      | Any character (except newline `\n`) | `"abc!"` → matches `a`, `b`, `c`, `!`                   |
