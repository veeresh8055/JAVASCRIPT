// for(var i=0;i<3;i++){
//    setTimeout(()=>{
//       console.log(i)
//    },1000)
// }
// // 3
// // 3
// // 3

// for(let i=0;i<3;i++){
//    setTimeout(()=>{
//       console.log(i)
//    },1000)
// }
// // 0
// // 1
// // 2

// // When var is used inside a loop, it is function scoped, meaning only one variable i exists for all iterations.
// // The setTimeout callback runs after the loop finishes, so i becomes 3. All callbacks reference the same variable, printing 3 3 3.

// // When let is used, it is block scoped. JavaScript creates a new i binding for each iteration of the loop, so each callback captures a different value of i. Therefore the output becomes 0 1 2.


console.log([7] + [])