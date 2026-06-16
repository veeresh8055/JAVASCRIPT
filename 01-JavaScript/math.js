// Math:
// Math in JavaScript is a built-in global object that provides properties and methods for performing mathematical operations.
// It is a non-primitive data type
// All methods and properties are static
// It is used directly as: Math.method() or http://Math.property

// The Math object helps to:
// Perform calculations (square root, power, etc.)
// Round numbers
// Generate random numbers
// Math works only with Number type

// Methods:

// 1. Math.round():
// Rounds a number to the nearest integer.
// Ex:
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.4)) // 4

// 2. Math.floor():
// Rounds a number down to the nearest integer.
// Ex:
// console.log(Math.floor(4.9));  // 4
// console.log(Math.floor(-4.1)); // -5

// 3. Math.ceil():
// Rounds a number up to the nearest integer.
// Ex:
// Math.ceil(4.1);   // 5
// Math.ceil(-4.9);  // -4

// 4. Math.trunc():
// Removes the decimal part of a number.
// Ex:
// Math.trunc(4.9);   // 4
// Math.trunc(-4.9);  // -4

// 5. Math.pow(number, power):
// Returns the value of a number raised to a power.
// Ex:
// Math.pow(2, 3); // 8

// 6. Math.sqrt():
// Returns the square root of a number.
// Ex:
// Math.sqrt(25); // 5

// 7. Math.cbrt():
// Returns the cube root of a number.
// Ex:
// Math.cbrt(27); // 3

// 8. Math.abs():
// Returns the absolute (positive) value of a number.
// Ex:
// Math.abs(-10); // 10

// 9. Math.min():
// Returns the smallest number.
// Ex:
// Math.min(3, 7, 1); // 1

// 10. Math.max():
// Returns the largest number.
// Ex:
// Math.max(3, 7, 1); // 7

// 11. Math.random():
// Generates a random number between 0 (inclusive) and 1 (exclusive).

// Math.random(); // e.g. 0.3847

// // generate 4 digit otp

// // let min = 1000;
// // let max = 9999;

// // let otp = Math.floor(Math.random() * (max - min + 1) + min);
// // console.log(otp);

// or

// // let otp1 = Math.floor(Math.random() * 9000 + 1000);
// // console.log(otp1);