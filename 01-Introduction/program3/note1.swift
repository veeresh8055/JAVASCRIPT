// ? Tokens:
// Tokens are the smallest meaningful units of a JavaScript program.
// The JavaScript engine recognizes during the lexical analysis (tokenization) phase.
// ? lexical analysis (tokenization) phase.: The phase where JavaScript engine reads the source code character by character and converts it into tokens.

// Types of tokens:
// Keywords
// Identifiers
// Operators
// Literals
// Separators
// Comments
// functions

// ? Keywords:
// Keywords are reserved words in JavaScript that have a predefined meaning.
// Used to declare variables, functions, or classes.
// Ex: var, let, const, function, class, etc...

// Keywords cannot be used as variable names
// Keywords are case-sensitive
// Their behavior is fixed by JavaScript

// ? Identifiers:
// An identifier is the name given to a variable, function, or class in JavaScript to identify it uniquely in a program.

//? Rules:
// Cannot start with a number
// Cannot contain spaces
// Cannot use special symbols except $ and _
// Cannot be a JavaScript keyword

// ! Var:
// var is a variable declaration keyword used in JavaScript before ES6.
// It declares function-scoped or globally scoped variables.
// using var we can declare, initialise, declare & initialise, redelcare, reinitialise and redeclare & initialise a variable

// !let:
// let is an ES6 variable declaration keyword used to declare block-scoped variables.
// using let we can declare, initialise, declare & initialise, reinitialise a variable
// redeclare, redeclare and initialise a variable is not possible in let 

// !const:
// const declares block-scoped constants whose value cannot be reassigned.
// using const we can only declare & initialise a variable at a time

// ?Scopes:
//! Global Scope
// Global scope contains variables that are accessible from anywhere in the program.
// The variables declared by using var keyword are in global scope
// Ex: var a = 10;

// !Script Scope:
// Script scope refers to variables declared with let and const at the top level of a js file or directly inside <script> tag.
// Ex: let x = 10; const y = 20;

// !Function Scope
// Function scope means variables declared inside a function are accessible only inside that function.
// function test() {
//  var a = 10;
//  let b = 20;
// const c = 30;
//   console.log(a);
// }
// test();        // 10
// console.log(a); //  ReferenceError

// !Block scope:
// Block scope means variables declared with let and const inside { } are accessible only inside that block.
// if (true) {
//   let x = 10;
//   const y = 20;
// console.log(x); // 10
// console.log(y); // 20
// }

// console.log(x); // ❌ ReferenceError
// console.log(y); // ❌ ReferenceError

// ? Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope.
// Only declarations are hoisted, not initializations.
// ? TDZ
// Temporal Dead Zone is the time between variable declaration and its initialization, where accessing the variable causes a ReferenceError.
// TDZ applies to let and const only

// ?why tdz occurs only in let and const why not in var:
// var declarations are hoisted to the top of their scope and immediately initialized with value as undefined whereas let and const are also hoisted, but they are not initialized with any value and placed in a state within their block scope where they exist in memory but cannot be accessed until initialized.

// Difference between var, let and const 