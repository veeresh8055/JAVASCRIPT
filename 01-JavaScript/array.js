// ?Array :
// ? flat()
// let arr1 = [10, 20, [30, [40]]];
// console.log(arr1.flat())
// console.log(arr1.flat(2))
// console.log(arr1.flat(Infinity))

// copyWithin()
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.copyWithin(1));
// console.log(arr.copyWithin(1, 3));
// console.log(arr.copyWithin(2,0,3));

// let arr = [10, 20, 30, 40, 50];
// for (let el of arr) {
//   console.log(el);
// }

// for (let el in arr) {
//   console.log(el);
// }

// let str = "javascript";
// for (let el of str) {
//   console.log(el);
// }

// let prices = [110, 150, 200, 450, 750, 900];
// for(let el of prices){
// }

// for (let el in prices) {
//   prices[el] = prices[el] - 0.1 * prices[el];
// }
// console.log(prices);

// for (let el in prices) {
//   prices[el] = prices[el] * 0.9;
// }
// console.log(prices);

//? NON-MUTATING METHODS OF ARRAY :

// ? at():
// let arr = [1, "@", 2, , "&", 3, "%", 4, "@", 5, "&"];
// console.log(arr[3]);
// console.log(arr[1]);
// console.log(arr[arr.length -1]);

// console.log(http://arr.at(-3));

// ? indexOf()
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(12));

// ?lastIndexOf()
// console.log(arr.lastIndexOf(3));
// console.log(arr.lastIndexOf(12));

// ? toString()
// console.log(arr.toString());

// ?join()
// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join(" "));
// console.log(arr.join("@"));
// console.log(arr.join("jsp"));

// ?wap to reverse the given string
// let str = "javascript";
// tpircsavaj
// console.log(str.split("").reverse().join(""));

// ?Array Advance Methods:
// let arr = [10, 2, 30, 4, 50, 6];
// let ele = arr.forEach((el, i, ar) => {
//   console.log(el);
//   console.log(i)
//   console.log(ar)
//   return el;
// });
// console.log(ele);

//? map()
let arr = [1, 2, 3, 4, 5, 6];
// let values = http://arr.map((el) => {
//   return el ** 2;
// });
// console.log(arr)
// console.log(values);
// console.log(arr)
// let data = http://arr.map((el) => {
//   if (el % 2 === 0) {
//     return el ** 2;
//   } else {
//     return el ** 3;
//   }
// });

// let data = http://arr.map((el) => (el % 2 === 0 ? el ** 2 : el ** 3));
// console.log(data);
// console.log(arr);

// let arr2 = [145, 176, 230, 467, 870, 975];
// discount of 17%
// let finalPrice = http://arr2.map((el) => el * 0.83);
// console.log(finalPrice)

//? find()
// let arr2 = [145, 176, 230, 467, 870, 975];
// console.log(arr2.find((el) => el > 200));

// ? filter()

// let arr3 = [145, 176, 230, 467, 870, 975];
// console.log(arr3.filter((el) => el > 200));

//? reduce()
// let arr3 = [145, 176, 230, 467, 870, 975];
// console.log(
//   arr3.reduce((acc, curr) => {
//     return acc + curr;
//   }),
// );

// let arr3 = [1, 2, 3, 4, 5, 6];
// console.log(
//   arr3.reduce((acc, curr) => {
//     return acc + curr;
//   },0),
// );

// let arr3 = [1, 2, 3, 4, 5, 6, 3, 2, 1];
// console.log(
//  arr3.reduce((acc, curr) => {
//  console.log(acc);
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   },{}),
// );

//? some():
// let arr3 = [2, 3, 4, 6, 8, 10];
// console.log(arr3.some((value) => value % 2 == 1))

// console.log([].some((value) => value % 2 == 1))

// ? every():
// let arr3 = [2, 3, 4, 6, 8, 10];
// console.log(arr3.every((value) => value % 2 == 0))

// console.log([].every((value) => value % 2 == 1))

// let str = "javascript";

// console.log(
//   str.split("").reduceRight((acc, curr) => {
//     return acc + curr;
//   }),
// );