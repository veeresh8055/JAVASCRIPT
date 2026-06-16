// Advance Methods of Array:

// 1. forEach():
// forEach() accepts a callback function as argument
// Callback function receives 3 parameters: value, index, and array
// execute a callback function for every element.
// Index and array parameters are optional
// Used for side effects like logging, updating DOM, modifying variables, etc.
// return is not allowed if used; then it always returns undefined instead of values.
// Empty elements are skipped.
// It does not return a new array.
// break / continue not allowed.

// Syntax: 
// array.forEach((element, index, array) => {
//   	// logic
// });
// Ex:
// let arr = ["JS", "HTML", "CSS"];
// arr.forEach((value, index) => {
//   console.log(index, value);
// });

// Ex-2: Modify original array (side effect)

// let arr1 = [1, 2, 3];
// arr1.forEach((value, index, array) => {
//   array[index] = value * 2;
// });
// console.log(arr); // [2, 4, 6]

// Ex-3: 
// let arr2 = [1, 2, 3, 4];
// let sum = 0;
// arr2.forEach(value => {
//   sum += value;
// });
// console.log(sum); // 10

// 2. find()
// It accepts callback function as argument with upto 3 parameters: element, index, and array
// Index and array parameters are optional
// Callback must return true or false
// Returns the FIRST element that satisfies a condition
// Stops after first match
// Returns undefined if not found
// Returns value, not array 
// Does not modify array

// Syntax:
// array.find((element, index, array) => {
//   return condition;
// });

// Ex: Find first even Number?

// let arr = [1, 3, 4, 6];
// let result = arr.find(n => n % 2 === 0);
// console.log(result); // 4

// Ex:2 Find first number greater than 10

// let arr2 = [5, 8, 12, 20];
// let res = arr2.find(n => n > 10);
// console.log(res); // 12

// 3. some():
// some() accepts a callback function as argument
// Callback function receives value, index, and array
// Index and array parameters are optional
// Callback must return true or false
// some() checks whether at least ONE element in the array satisfies a given condition.
// Returns true if at least one element satisfies condition
// Returns false if no element satisfies condition
// Stops immediately after first true
// Does not modify the array
// Skips empty slots

// Syntax:
// array.some((value, index, array) => {
//   return condition;
// });

// Ex-1: check if any even number exists
// let arr = [1, 3, 5, 8];
// let result = arr.some(n => n % 2 === 0);
// console.log(result);

// Ex-2: Checking presence of element
// let arr2 = [10, 20, 30];
// let exists = arr2.some(n => n === 20);
// console.log(exists); // true

// Note:
// [ ].some(n => n > 0);
// some() on empty arrays always returns false because there is no single element which satisfies the condition

// 4. every():
// every() accepts a callback function first argument
// Callback function receives value, index, and array
// Index and array parameters are optional
// Callback must return true or false
// every() checks whether ALL elements in the array satisfy a given condition.
// Returns true if all elements satisfy condition
// Returns false if any element fails condition
// Stops immediately on first false
// Does not modify the array
// Skips empty slots

// Syntax:
// array.every((value, index, array) => {
//   return condition;
// });

// Ex-1: check if all numbers are even
// let arr = [2, 4, 6];
// let result = arr.every(n => n % 2 === 0);
// console.log(result); 

// Ex-2: When one element fails
// let arr2 = [2, 3, 6];
// let result = arr2.every(n => n % 2 === 0);
// console.log(result); 

// Note:
// [ ].every(n => n > 0);
// every() on empty arrays always returns true because there is no element which fails the condition.  

// 5. filter():
// filter() accepts a callback function first argument
// Callback function receives value, index, and array
// Index and array parameters are optional
// Callback must return true or false
// filter() is used to select all the elements from an array that satisfies the condition.
// Returns a new array.
// Returns empty array if no match
// Length ≤ original array.
// Does not modify the original array
// Skips empty slots

// Syntax:
// array.filter((value, index, array) => {
//   return condition; 
// });

// Ex-1: filter all even numbers
// let arr = [1, 2, 3, 4, 5];
// let even = arr.filter(n => n % 2 === 0);
// console.log(even); 

// Ex-2: When no element matches returns empty array
// let arr2 = [1, 3, 5];
// let result = arr2.filter(n => n % 2 === 0);
// console.log(result);

// 6. map():
// map() accepts a callback function as argument
// Callback function receives value, index, and array
// Index and array parameters are optional
// map() is used to transform each element of an array 
// returns a new array of the same length.
// Does not modify original array
// Syntax:
// http://array.map((value, index, array) => {
//   return newValue;
// });

// Ex-1: double each element of array
// let arr = [1, 2, 3];
// let result = http://arr.map(n => n * 2);
// console.log(result); 
// console.log(arr);    

// Ex-2: Transform array of strings to upperCase
// let names = ["ram", "sam"];
// let upperNames = http://names.map(name => name.toUpperCase());
// console.log(upperNames);

// Ex-3: Chaining Example
// let arr2 = [1, 2, 3, 4];
// let result = http://arr2.map(n => n * 2).filter(n => n > 4);
// console.log(result); 

// 7. reduce():
// reduce() accepts a callback function and initial value as arguments
// Initial value is optional but recommended
// Callback function receives accumulator, currentValue, index, and array
// Index and array parameters are optional
// reduce() is used to reduce an array into a single value by repeatedly applying a callback function.
// Iteration happens from left to right
// The final value can be: number, string, object, array, boolean
// Throws TypeError on empty array without initialValue

// Syntax:
// array.reduce((accumulator, currentValue, index, array) => {
//   return updatedAccumulator;
// }, initialValue);

// How reduce() Works (Core Idea)
// Start with initialValue
// For each element: Update accumulator
// After last element → return accumulator

// Ex-1: Sum of array of elements
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(sum); 

// Ex-2: Without initial value (Important)
// let arr2 = [1, 2, 3];
// let sum = arr2.reduce((acc, curr) => acc + curr);
// console.log(sum);

// // If initial value is not provided then accumulator will take first element of array as initial value and cur will be next element of array
// i.e., acc = 1 and curr = 2

// Ex-3: Find Maximum Value
// let arr = [10, 5, 20, 8];
// let max = arr.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// });
// console.log(max); 

// Ex-4: Reduce to a String
// let arr = ["J","A","V","A", "S", "C", "R", "I", "P", "T"];
// let result = arr.reduce((acc, cur) => acc + cur, "");
// console.log(result)

// Ex-5: Frequency count each element
// let arr = ["a", "b", "a", "c"]; or let arr = [1,3,5,6,3,8,5,3,0,6,0]

// let freq = arr.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   return acc;
// }, {});
// console.log(freq);

// 8. reduceRight():
// reduceRight() accepts a callback function and initial value as arguments
// Initial value is optional but recommended
// Callback function receives accumulator, currentValue, index, and array
// Index and array parameters are optional
// reduceRight() is used to reduce an array into a single value by repeatedly applying a callback function.
// Iteration happens from right to left
// The final value can be: number, string, object, array, boolean
// Throws TypeError on empty array without initialValue
// Syntax:
// array.reduceRight((acc, cur, index, array) => {
//   return updatedAcc;
// }, initialValue);

// Ex-1: Sum of elements of array
// let arr = [1, 2, 3, 4]; 
// let sum = arr.reduceRight((acc, cur) => acc + cur, 0);
// console.log(sum); 

// Ex-2: Reverse a string using reduceRight()
// let str = "JS";
// let reversed = str.split("")
//   .reduceRight((acc, cur) => acc + cur, "");
// console.log(reversed);