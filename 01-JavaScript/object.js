// Object:
// It is a non-primitive datatype which is mutable in nature.
// An object is a collection of key-value pairs.
// It is used to represent real-world entities in a program. 
// Keys and value pair is called property, and values can be anything like 
// strings, numbers, booleans, functions, etc

// Ways to create Objects:
// 1. Object Literal {}:
// Creates an object directly using curly { } braces.
// Simplest & fastest
// Best for small objects
// This syntax allows you to define properties and methods directly within curly braces.

// Syntax:
// let obj= {
//   key: value,
//   key2: value2
// };

// Ex-1:
// let person = {
//   name: "Smith",
//   age: 20,
// };

// We can access object properties in 2 ways:
// 1 Dot Notation: 
// console.log(http://person.name)

// 2. Bracket Notation:
// console.log(person["age"])

// Adding Properties:

// http://person.city = "New York";
// console.log(person)

// Updating properties:

// person.age = 26;
// console.log(person)

// Deleting Properties:
// delete http://person.city;
// console.log(person)

// Ex-2:
// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     fullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// };
// console.log(person2)
// console.log(person2.fullName())

// Ex-3: Nested Objects:

// const student = {
//   name: "Emma",
//   marks: {
//     math: 90,
//     science: 95
//   }
// };
// console.log(student.marks.math;)

// 2. new Object():
// Creates an object using JavaScript’s built-in Object constructor.
// Internally same as { }
// Rarely used in Modern JS
// literals {} are preferred over new Object()

// Syntax:
// let obj1 = new Object();

// Ex:
// let obj2 = new Object();
// http://obj2.name = "Rahul";
// obj2.age = 25;

// 3. Constructor Function:
// A function used with new keyword to create multiple similar objects.
// Used before ES6
// Must use new

// Syntax:
// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
// }
// const person1 = new Person("John", "Doe", 30);
// const person2 = new Person("allen", "solly", 20);

// How new Works :
// 1. Creates empty object {}
// 2. Binds this to created object
// 3. Assigns passed arguments as values.
// 4. Returns object automatically

// 4. ES6 Classes: 
// Introduced in ECMAScript 2015 (ES6), classes provide a cleaner, more structured syntax.
// Cleaner syntax over constructor functions.
// Internally prototype-based
// Preferred in modern JavaScript
// constructor() is mandatory

// Syntax:
// class Person {
//   constructor(name, age) {
//     http://this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello");
//   }
// }
// let p1 = new Person("Rahul", 25);
// p1.greet();

// 5. Object.create():
// Creates a new object with a specified prototype.
// No constructor function
// Direct control over prototype
// Properties are linked, not copied
// Useful for inheritance

// Syntax:
// Object.create(protoObject);

// Ex:
// let grandParent = {
//   	grandFather:"Venkata Rao"
// };

// let parent = Object.create(grandParent);
// 	parent.Father = "Pawan Kalyan";

// let child = Object.create(parent);
// 	http://child.name = "Akira";

// console.log(`Myself: ${http://child.name}`);
// console.log(`Father's Name: ${child.Father}`); 
// console.log(`grand Father's Name: ${child.grandFather}`); 

//? Object Methods:

// 1. Object.keys():
// Returns an array of keys of an object.
// Returns empty array if object has no keys

// Syntax: Object.keys(object)

// Ex:
// let user = { name: "Rahul", age: 25 };
// console.log(Object.keys(user));
// ["name", "age"]

// 2. Object.values()
// Returns an array of values of an object.

// Syntax: Object.values(object)

// Ex:
// let user = { name: "Rahul", age: 25 };
// console.log(Object.values(user));
// ["Rahul", 25]

// 3. Object.entries():
// Returns an array of [key, value] pairs.

// Syntax: Object.entries(object)

// Ex:
// let user = { name: "Rahul", age: 25 };
// console.log(Object.entries(user));  // [["name","Rahul"], ["age",25]]

// 4. Object.assign():
// Copies properties from one or more source objects into a target object.

// Syntax: Object.assign(target, source1, source2,......sources)

// Ex:
// let a = { x: 1 };
// let b = { y: 2 };

// let c = Object.assign({}, a, b);
// console.log(c); // { x:1, y:2 }

// 5. Object.seal():
// Prevents adding and deleting properties, but allows updating existing values.

// Syntax: Object.seal(object)
// Ex:
// let user = { name: "Rahul", age: 25 };

// Object.seal(user);
// user.age = 20;     // allowed
// http://user.city = "Blr";   // not allowed
// delete http://user.name; // not allowed

// 6. Object.freeze():
// Object.freeze() makes an object completely immutable.
// Once frozen we Cannot add, delete, or modify existing properties 

// Syntax: Object.freeze(object)

// Ex:
// const user = {
//   name: "John",
//   age: 25
// };

// Object.freeze(user);

// user.age = 30; 
// http://user.city = "Delhi"; 
// delete http://user.name;   

// console.log(user);

// 7. Object.isFrozen():
// Checks whether an object is frozen.

// Syntax: Object.isFrozen(object)
// Ex:
// const data = { x: 10 };
// Object.isFrozen(data); // false
// Object.freeze(data);
// Object.isFrozen(data); // true

// 8. Object.isSealed()
// Checks whether an object is sealed.

// Syntax: Object.isSealed(object)
// Ex:
// const obj = { a: 1 };
// Object.isSealed(obj); // false

// Object.seal(obj);
// Object.isSealed(obj); // true

//? call(), apply() bind()

// In JavaScript, this keyword is dynamic.
// It changes based on how a function is called, not where it is written.

// why call, apply, bind???

// They allow us to:
// control what this keyword refers to.
// Reuse functions across objects (function borrowing)
// Avoid code duplication

// Ex:
// function greet() {
//   console.log(http://this.name);
// }

// greet(); // undefined (or http://window.name)

// Note: We cannot control this here that's why we need call, apply, bind

// call(): 
// It is a function method in JavaScript used to invoke a function immediately by explicitly setting the value of this.
// Arguments passed one by one separated by commas ( , )

// Syntax: 
// http://func.call(thisArg, arg1, arg2, ...)

// thisArg → object to be used as this
// Remaining arguments → passed individually

// Ex-1:
// function greet() {
//   console.log(http://this.name);
// }

// let user = { name: "Rahul" };
// http://greet.call(user); // Rahul

// Ex-2: Passing Arguments

// function introduce(city, country) {
//   console.log(`${http://this.name} from ${city}, ${country}`);
// }

// let person = { name: "Anita" };

// http://introduce.call(person, "Delhi", "India");
// Anita from Delhi, India

// Ex-3: Borrowing Methods 

// let user1 = { name: "A" };
// let user2 = { name: "B" };

// function showName() {
//   console.log(http://this.name);
// }

// Same function, different objects.
// http://showName.call(user1); // A
// http://showName.call(user2); // B

// apply():
// It is a function method used to invoke a function immediately while explicitly setting the value of this, and passing arguments as an array.

// Syntax:
// functionName.apply(thisArg, [arg1, arg2, ...])

// thisArg → object to be used as this
// arg1, arg2.... → arguments inside an array 

// Why apply():
// To control the value of this keyword
// When arguments are already available in array form
// Useful for array-like objects

// Ex-1:
// function greet(city, country) {
//   console.log(`${http://this.name} from ${city}, ${country}`);
// }

// let person = { name: "Rahul" };

// greet.apply(person, ["Delhi", "India"]);
// Rahul from Delhi, India

//Same as call(), but arguments are in an array.

// bind():
// bind() is a function method that does NOT invoke the function immediately. Instead, it returns a new function with a fixed this value and optionally pre-set arguments.

// Syntax:
// const newFn = functionName.bind(thisArg, arg1, arg2, ...)
// newFn()

// Why bind():
// To fix to what this refers permanently
// To use a function later (callbacks, events, async)
// To avoid losing this reference

// Ex:
// function greet() {
//   console.log(http://this.name);
// }

// let user = { name: "Rahul" };
// let boundGreet = greet.bind(user);
// boundGreet(); // Rahul

// this is permanently bound to user here

// call vs apply vs bind:
// http://greet.call(user);   // invoked immediately
// greet.apply(user); // invoked immediately

// let fn = greet.bind(user);
// fn();               // invoked later

// Ex-2: Partial or pre-filled arguments:

// function introduce(city, country) {
//   console.log(`${http://this.name} from ${city}, ${country}`);
// }

// let person = { name: "Anita" };

// let intro = introduce.bind(person, "Delhi");

// intro("India");
// Anita from Delhi, India