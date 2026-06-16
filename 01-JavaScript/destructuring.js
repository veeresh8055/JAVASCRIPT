//? Destructuring:
// Destructuring is a feature introduced in ES6 that allows you to unpack values from Arrays, Objects and assign them into variables in a clean and readable way.

// let arr=[10,20,30]

// let a = arr[0];
// let b = arr[1];

// by destructuring:
// let [a,b]=arr;

// let arr = [10, 20, 30, 40, 50];
// let [, a, b, c, d, e] = arr;

// How It Works:
// Destructuring matches position by position
// , skips a value
// First element (10) is skipped
// Then values assigned sequentially
// a = 20
// b = 30
// c = 40
// d = 50
// e = undefined
// Why e is undefined?
// Because array has only 5 elements, but you are trying to destructure 6 positions.

//? Nested Array Destructuring
// let arr1 = [10, [20, [30, [40]]], 50];
// let [a, [b, [c, [d]]], e] = arr1;

//!Note: Pattern must match structure exactly.

//? Object Destructuring:
// let student = {
//   name: "shivam",
//   age: 46,
//   desc: "start preparing for mock",
// };
// let { name, age } = student;

// !Note: property name must be same

//? Nested Object Destructuring
// let student2 = {
//   name: "shivam",
//   age: 46,
//   address: {
//     name: "panna",
//     state: "mp",
//     pin: 488001,
//   },
// };

// let {
//   name: studentName, // we can rename key names
//   age,
//   address: { name, state },
// } = student2;

//? Spread Operator (...)
// Spread operator expands elements of Array,Objects.

//? Spread with Array
// let arr = [10, 20, 30];
// console.log(...arr);  //10 20 30

//? Merging Arrays
// Traditional way:
// let arr=[10,20,30]
// let arr1=[400,500,600]
// let arr3 = arr.concat(arr1);

//? Modern way: (using spread)
// let arr4 = [60, ...arr, 100, ...arr1, 600];
// Spread allows to Insert values anywhere and maintains Cleaner syntax

//? Rest Operator (...)
// Spread and Rest look same but work differently.

//? Rest in Array Destructuring
// let [a, b, ...args] = arr;
// a = first element
// b = second element
// args = remaining elements as array

//!Note: Rest must be Always at last position

// let arr = [10, 20, 30, 40, 50, 60];
// function add(a,b,...args) { // rest operator
// let mul = a * b;
// console.log(mul);
// console.log(args);
//   let sum = 0;
//   for (let el of args) {
//     sum += el;
//   }
//   console.log(sum);
// }
// let res = add(...arr); // spread operator

//? Shallow Copy:
// A shallow copy creates a new object or array,
// but only copies the first level of values.
// If a property contains another object (nested object),
// the reference to that object is copied — not the actual object.

//? Ex:
// let student = {
//   name: "prabhat",
//   age: 22,
// };
// let trainer = { ...student }; // shallow copy
// http://trainer.name = "sreenivas";
// console.log(student)

//? Ways to Create a Shallow Copy
//1. Spread Operator
// const copy = { ...original };  //for object
// const arrCopy = [...array];    // for array

// 2️. Object.assign()
// const copy = Object.assign({}, original);

// 3️. Array.slice()
// const arrCopy = array.slice(startIndex, endIndex);

// let student = {
//   name: "prabhat",
//   age: 22,
//   skills: {
//     frontend: "web",
//     backend: "java",
//   },
// };

// let trainer3 = { ...student };
// trainer3.skills.backend = "Nodejs";  //? it will modify skills because shallow copy won't work for nested objects. to overcome it we use deep copy

//? Deep Copy
//  A deep copy creates a completely independent copy of an object, including:
// All nested objects, All nested arrays, All levels of data, Nothing is shared by reference.
// So if you change the copied object, the original stays completely unchanged.

//? Using JSON Method:
// Convert object to JSON string
// Parse back to object
// Now modifying copied object does NOT affect original nested object also.

// let student = {
//   name: "prabhat",
//   age: 22,
//   skills: {
//     frontend: "web",
//     backend: "java",
//   },
// };

// let trainer = JSON.parse(JSON.stringify(student));
// trainer.skills.backend = "Nodejs";
// http://trainer.name = "Sreenivas";

// console.log(student);
// console.log(trainer);

// Limitations of JSON Deep Copy:
// Removes functions
// Removes undefined
// Converts Date to string
// Doesn’t support Map/Set

//? Modern Deep Copy:
// by using structuredClone(original obj);

// Built-in modern JS method
// Better than JSON
// Handles Objects, Arrays, Nested data, Dates, Maps, Sets
//? Ex:
// const user1 = {
//   name: "Zack",
//   address: {
//     city: "New York"
//   }
// };

// const user2 = structuredClone(user1); // deep copy
// http://user2.address.city = "Los Angeles";
// console.log(http://user1.address.city); // "New York" ✅

//? JSON:
// JSON stands for: JavaScript Object Notation
// It is a text format used to store and exchange data.
// JSON looks like a JavaScript object — but it is just plain text.
// JSON is a lightweight data format used to send data between a server and a client.
//? Note: Keys and values are in double quotes.

//? JSON.stringify()
// Converts JS object → JSON string
// let jsonObj = JSON.stringify(jsObject);

//? JSON.parse()
// Converts JSON string → JS object
// JSON.parse(jsonObj); 