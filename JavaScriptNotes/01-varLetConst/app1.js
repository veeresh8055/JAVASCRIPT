{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a); // a
// console.log(b);//reference error
// console.log(c);// reference error

// 🎯 How You Should Explain in Interview---:

// Perfect structured answer:

// In JavaScript, var, let, and const are used to declare variables but they differ in scope, hoisting behavior, and reassignment capability.

// var is function scoped and hoisted with undefined, while let and const are block scoped and exist in the Temporal Dead Zone until initialization.

// let allows reassignment but prevents redeclaration, while const prevents both.

// Also const only protects the reference, so object properties can still be modified.


// var--
// function scope
// redeclare allowed
// reassign allowed
// hoisted with undefined
// let--
// block scope
// no redeclare
// reassign allowed
// TDZ exists
// const--
// block scope
// no redeclare
// no reassign
// TDZ exists



// ~~~~~Interview questions ~~~~~~~~~``
// Which lines will work?

// Why?

// What happens in memory?
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~NOTES~~~~~~~~~~~~~~~~~~~``

// 1. Your Code
// {
//     var a = 10;
//     let b = 20;
//     const c = 20;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a); // ?
// console.log(b); // ?
// console.log(c); // ?
// 2. Which lines work?
// Inside the block { }

// All 3 variables work.

// 10
// 20
// 20

// Because they are declared and accessed inside the same block.

// Outside the block
// console.log(a) → Works
// console.log(b) → ReferenceError
// console.log(c) → ReferenceError

// Output:

// 10
// ReferenceError: b is not defined
// ReferenceError: c is not defined
// 3. Why does this happen?
// var

// var does NOT follow block scope.

// It follows:

// Function Scope
// or
// Global Scope

// So even if var is inside {}, it leaks outside the block.

// Example:

// {
//    var a = 10;
// }

// console.log(a); // 10
// let and const

// They follow block scope.

// That means they exist only inside {}.

// Example:

// {
//    let b = 20;
// }

// console.log(b); // ReferenceError

// Same for const.

// 4. Memory Creation Phase (What happens internally)

// JavaScript execution happens in two phases.

// 1️⃣ Memory Creation Phase
// 2️⃣ Execution Phase
// Step 1 — Memory Creation

// JS scans variables.

// Memory looks like this:

// Global Execution Context

// a → undefined
// b → not created
// c → not created

// Why?

// Because

// var → hoisted
// let → hoisted but in TDZ
// const → hoisted but in TDZ
// Step 2 — Execution Phase

// Code runs line by line.

// {
//    a = 10
//    b = 20
//    c = 20
// }

// Memory becomes

// a → 10
// b → 20 (only inside block)
// c → 20 (only inside block)

// After block ends:

// a → still exists
// b → destroyed
// c → destroyed
// 5. Visual Memory Diagram
// Global Memory
// GLOBAL MEMORY

// a → 10
// Block Memory
// BLOCK SCOPE

// b → 20
// c → 20

// After block finishes:

// BLOCK SCOPE removed

// Only:

// a → 10

// remains.

// 6. Important Interview Trick Question
// {
//    var x = 5;
// }

// console.log(x); // ?

// Answer:

// 5

// Because var ignores block scope.

// 7. FAANG Interview Summary
// Keyword	Scope	Hoisted	TDZ
// var	function/global	Yes	No
// let	block	Yes	Yes
// const	block	Yes	Yes
// 8. One More Important Example (Tricky)
// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError
// let b = 10;

// Reason:

// var → initialized with undefined
// let → stays in TDZ
