// Array in Javascript
// literals
let arr = [1, "hi", null, true, undefined, {}];
// Array object
let arr1 = new Array(1, "java", true);

let arr2 = new Array(5); //[ <5 empty items> ]
console.log(arr2);

let arr3 = new Array("5");
console.log(arr3); //['5']

// when we perform function on them it changes the original array also
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr4.pop();
// console.log(arr4)// [1,2,3,4,5,6,7,8]

arr4.push(-1);
console.log(arr4); //[1,2,3,4,5,6,7,8,-1]

arr4.unshift(22);
console.log(arr4); //[22,1,2,3,4,5,6,7,8,-1]

arr4.shift();
console.log(arr4); //[1,2,3,4,5,6,7,8,-1]

//splice(start , deleteCount , addingElements)[return deleted elements ]
console.log(arr4.splice(2, 0, 100, 200)); // []
console.log(arr4); //[1,2,100,200,3,4,5,6,7,8,-1]

//sort() [--> first coverts anything all datatype it into string then sort according to the UNICODE ]
let strArray = ["naveen", "kiran", "arun", "veeresh", "manu"];
console.log(strArray.sort()); //[ 'arun', 'kiran', 'manu', 'naveen', 'veeresh' ]

//~~~ number array converted into string and sorting
console.log(arr4.sort()); //[ -1, 1, 100, 2, 200, 3, 4,   5, 6,   7,  8]

// by callback function sorting
// ascending order
console.log(arr4.sort((a, b) => a - b));
// [
//    -1, 1, 2, 3,   4,
//     5, 6, 7, 8, 100,
//   200
// ]

console.log(arr4.sort((a, b) => b - a));
// [
//   200, 100, 8, 7, 6,
//     5,   4, 3, 2, 1,
//    -1
// ]

//reverse() [for arrayelements reverseing]
console.log(arr1.reverse()); //[ true, 'java', 1 ]

console.log(strArray.reverse()); //[ 'veeresh', 'naveen', 'manu', 'kiran', 'arun' ]
