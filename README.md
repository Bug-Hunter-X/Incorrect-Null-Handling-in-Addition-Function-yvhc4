# Incorrect Null Handling in Addition Function

This repository demonstrates a common error in JavaScript: incorrect handling of null values.

The `foo` function is intended to add two numbers. However, it incorrectly returns `null` if either input is `null`.  A more robust solution would either explicitly handle null values (e.g., treating them as 0) or throw an error to indicate invalid input.

## Bug

The `bug.js` file contains the function with the flawed null handling.  The function returns `null` when it receives a null value, which might lead to unexpected behavior in other parts of the application.

## Solution

The `bugSolution.js` file shows an improved version of the function. This improved version checks for null values and handles them appropriately, either by returning 0 or throwing an error, making the function more reliable and less prone to unexpected behavior.
