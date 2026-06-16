// !Promise:
// A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// In simple terms:
// A promise is a placeholder for a value that will be available later
// It avoids callback hell
// It makes async code readable and manageable

//? A promise has three states:
//?1. Pending
// Initial state
// Neither fulfilled nor rejected

//? 2️. Fulfilled
// Operation completed successfully
// Promise has a resolved value

//? 3. Rejected
//Operation failed
//Promise has a reason (error)

//!Note: Once a promise is settled (fulfilled/rejected), it cannot change its state again.

// Creating a Promise:
//? Syntax
// const promise = new Promise((resolve, reject) => {
// async operation
// });

// resolve(value) → when operation succeeds
// reject(error) → when operation fails

//? Example:
// let promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved")
//   }, 2000);
// })
//? Consuming a Promise (then, catch, finally):
// promiseOne
//   .then((data) => {   //?   .then()---> To Handling Success
//     console.log(data);
//   })
//   .catch((error) => { //?   .catch()---> To Handling error
//     console.log(error);
//   })
//   .finally(() => {   //?   .finally()---> Executes Either way
//     console.log("finally has been executed");
//   });

// ? Example-2:
// let promiseTwo = new Promise((resolve, reject) => {
//   let login = true;
//   if (login) {
//     setTimeout(() => {
//       resolve("Login Successful");
//     }, 2000);
//   } else {
//     reject("Failed to login");
//   }
// });
// promiseTwo
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally has been executed");
//   });

//? Promises are used to overcome Callback Hell Problem:
//? Callback Hell problems:
// Deep nesting
// Hard to read
// Hard to debug
//? Ex:
// function demo(id, callback) {
//   setTimeout(() => {
//     console.log("data", id);
//     if (callback) {
//       callback();
//     }
//   }, 1000);
// }

// !callback hell:
// demo(1, () => {
//   demo(2, () => {
//     demo(3, () => {
//       demo(4, () => {
//         demo(5, () => {
//           console.log("All data fetched");
//         });
//       });
//     });
//   });
// });

// ? Using promises to overcome callback hell:
//? solution:
// Flat structure
// Readable
// Maintainable

// function demo(id, callback) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("data", id);
//       if (callback) {
//         callback();
//       }
//       resolve();
//     }, 1000);
//   });
// }

// demo(1)
//   .then(() => demo(2))
//   .then(() => demo(3))
//   .then(() => demo(4))
//   .then(() => demo(5))
//   .then(() => console.log("All done"));

// This is called Promise Chaining.
// It’s a way to perform asynchronous operations sequentially.
// Each step depends on the previous step.
// The flow is linear and readable, unlike callback hell.

//? To overcome promise chaining we use async/await
// async is a keyword used before a function to make it asynchronous.
// An async function always returns a promise, even if you don’t explicitly return one.
// Inside an async function, you can use the await keyword.
// await can only be used inside an async function.
// It pauses the execution of the function until the promise resolves.

// function demo(id,callback) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("data", id);
//       if (callback) {
//       callback();
//     }
//       resolve();
//     }, 1000);
//   });
// }

// !using async and await
// async function getAllData() {
//   await demo(1);
//   await demo(2);
//   await demo(3);
// }
// getAllData();

//! fetch()
// What is fetch?
// fetch is a built-in browser API used to make network requests (HTTP requests) like GET, POST, PUT, DELETE, etc.
// It replaces older AJAX methods like XMLHttpRequest.
// It returns a Promise, so it works naturally with .then() chaining or async/await

//? Syntax:
// Basic Syntax
// fetch(url, options)
// url → the address of the resource you want to fetch
// options → an optional object to configure the request (method, headers, body, etc.)

//? Ex:1 Using Promises which leads to Promise Chaining
// fetch("https://fakestoreapi.com/users")
//   .then(response => response.json()) // Convert response to JSON
//   .then(data => console.log(data))
//   .catch(error => console.log("Error:", error));

//? Explanation:
// fetch() sends a GET request to the URL.
// response.json() converts the response into a JavaScript object (also a promise).
// The second .then() gets the actual data.
// .catch() handles any errors (like network failure).

//? Example 2: Using Async/Await
// let body = document.body;
// async function getProducts() {
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");
// console.log(response);
//     let data = await response.json();
//     console.log(data);
//     data.forEach((el) => {
//     let heading = document.createElement("h6");
//     heading.innerHTML = http://el.id;
//     body.append(heading);
//     })
//   } catch (error) {
//     console.log("error");
//   }
// }
// getProducts();

// !Note:
// fetch only rejects the promise for network errors:
// Server unreachable
// DNS failure
// No internet

// fetch does NOT reject for HTTP errors like:
// 404 Not Found
// 500 Internal Server Error
// 403 Forbidden