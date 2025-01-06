function foo(a, b) {
  if (a === null) a = 0; // Handle null value for a
  if (b === null) b = 0; // Handle null value for b
  return a + b;
}

console.log(foo(1, null)); // Output: 1
console.log(foo(null, 1)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, null)); //Output 0
//Alternative solution that throws an error:
function foo(a,b){
    if(a === null || b === null){
        throw new Error("Null values are not allowed");
    }
    return a + b;
}