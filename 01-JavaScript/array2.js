// Array:
// In JS, an array is a non-primitive data type.
// An array is a collection of homogeneous and heterogeneous types of data.
// Used to store multiple values in a single variable
// In JS, arrays are dynamic in nature; that means the length and data types are not restricted. 
// Arrays are mutable and Stored as objects internally.
// Values are stored in indexed order
// The index starts from 0.


// Arrays can be created in 2 ways: 
// 1. Using Literals 
// 2. Using new Keyword

// 1. Using Literals 
// Syntax: var arr = [element1, element2, ..., elementN]; 
// Example: 
// var arr = [10, 20, 30, 40, 50]; 
// console.log(arr);

// 2. Using new Keyword 
// Syntax: var arr1 = new Array(); 
// Example: 
// var arr2 = new Array(); // Creates an empty array 
// console.log(arr2);
// var arr3 = new Array(10, 20, 30, 40, 50); // Creates an array with elements 
// console.log(arr3);

// Note: 
// Single-value issue
// let arr4 = new Array(5); // creates empty array of length 5.

// Insertion in Arrays :
// Insertion is the process of adding elements into an array.
// var arr5 = [ ]
// arr5[0] = 10; // Inserts 10 at index 0 
// arr5[1] = 20; // Inserts 20 at index 1 
// arr5[2] = 30; // Inserts 30 at index 2 
// console.log(arr5);

// Modification in Arrays: 
// Modification is the process of updating the elements present in an array.
// arr5[1] = 200; // Modify element at index 1 
// arr5[2] = 300; // Modify element at index 2 
// arr5[4] = 500; // Modify element at index 4 
// console.log(arr5);

// Deletion in Arrays:
// Deletion is the process of removing elements from an array.
// delete arr5[1]; // Delete element at index 1 
// delete arr5[2]; // Delete element at index 2
// console.log(arr5);

// Mutating methods of Array:

// push():
// Adds one or more elements to the end of the array
// Modifies the original array
// Returns the new length of array
// Can add multiple elements
// Ex:
// let arr = [1, 2];
// arr.push(3, 4);
// console.log(arr);
// arr.push("apple", "banana", "mango");
// console.log(arr);

// pop():
// Removes the last element of the array.
// Modifies original array
// Returns removed element
// Returns undefined if array is empty
// accepts no arguments and ignored if passed
// Ex:
// let removed = arr.pop();
// let removed2=arr.pop()
// console.log(arr);     
// console.log(removed); 

// unshift():
// Adds elements at the beginning of the array
// Modifies original array
// Returns new length
// Slower than push() (reindexes array)
// Ex:
// arr.unshift(100, 200);
// console.log(arr)

// shift():
// Removes the first element of the array
// Modifies original array
// Returns removed element
// Slower than pop()
// accepts no arguments and ignored if passed
// Ex:
// arr.shift();
// console.log(arr);

// splice():
// Add, remove, or replace elements at any index of the array.
// It accepts three or more args: first: starting index, second: delete count; and third and more to 
// add the elements in the array.  
// Modifies original array
// Returns array of removed elements
// Syntax:
// array.splice(start, deleteCount, item1, item2...)
// Ex:
// let removed = arr.splice(1, 2, 9, 8);
// console.log(arr);     
// console.log(removed)

// sort():
// Sorts the elements of an array.
// Modifies original array
// Returns the sorted array
// Converts elements to strings by default and sorts 
// Syntax:
// array.sort(compareFunction)
// Ex:
// let arr4=["apple","ball","zomato","swiggy","instagram","zepto","minutes"]
// console.log(arr4.sort())

// let arr5=["Apple",{},"apple",()=>{},"Ball",10,"ball",30,"zomato","swiggy",40,"Instagram","zepto","Minutes"]
// console.log(arr5.sort())

// Note: For numbers, a compare function is needed
// Ex:
// let arr4=[100,10,3,420,5];
// console.log(arr4.sort((a,b)=>a-b)); //ascending order
// console.log(arr4.sort((a,b)=>b-a))  //descending order

// reverse()

// Reverses the order of elements in an array.
// Modifies original array
// Returns the reversed array
// Does NOT create a new array
// Syntax:
// array.reverse()
// Ex:
// let arr = [10, 20, 30, 40, 50];
// console.log(arr.reverse());

// let arr = ["abc", "def", "ghi", "jkl", "mno"];
// console.log(arr.reverse());

// fill(): // very rarely using so we can skip
// Fills elements of an array with a specified value.

// Modifies original array
// Returns the modified array
// Does NOT change array length
// Can fill the full or partial array
// Overwrites existing values
// Syntax:
// array.fill(value, startIndex, endIndex)
// Ex:
// let arr6=[1,2,3,4,5]
// console.log(arr6.fill(9)) // if only target mentioned then by default start=0, end=arraay.length
// console.log(arr6.fill(10,2)) // it fills value 10 from 2nd index to end of array
// console.log(arr6.fill(1,1,4))
// console.log(arr6.fill(5,-2,-1))
// console.log(arr6.fill(5,-2,1))

// copyWithin(): // very rarely using so we can skip
// Copies part of an array to another location within the same array.

// Modifies original array
// Returns modified array
// Does NOT change array length
// Overwrites existing elements
// Syntax: array.copyWithin(target, start, end)

// let arr7=[1,2,3,4,5]
// console.log(arr7.copyWithin(2)) // if only target mentioned then by default start=0, end=array.length
// console.log(arr7.copyWithin(0,3))
// console.log(arr7.copyWithin(1,3,4))
// console.log(arr7.copyWithin(2,0,3))

// let arr8=[1,2,3,4]
// console.log(arr8.copyWithin(-2,0))
// console.log(arr8.copyWithin(1,2))
// console.log(arr8.copyWithin(1,-4,-1))


// Array Loops:

// for of():
// Direct access to values
// Cannot directly access index
// we can use it on Iterating arrays and strings
// Ex:
// let snacks = ["Biscuit", "Chips", "Chocolate"];

// for (let items of snacks) {
//   console.log("Eating:", items);
// }

// let name = "RAM";
// for (let letter of name) {
//   console.log(letter);
// }

// for in():
// Direct access to indexes, not values
// Can be used on arrays but NOT recommended
// The index is returned as a string

// Ex:
// let snacks = ["Biscuit", "Chips", "Chocolate"];

// for (let items in snacks) {
//   console.log("Eating:", items);
// }

// let name = "RAM";
// for (let letter in name) {
//   console.log(letter);
// }

// Qs. For a given array with prices [120, 245, 300, 420, 150, 850] All items have an offer of 10% OFF on them. Change the array to store the final price after applying the offer.

// Non-mutating methods of Array:
// These methods do NOT change the original array.

// 1. at(index) 
// it will return the element present at a particular index. 
// It also accepts negative indexes.
// it returns undefined if the index is not found
 
// let arr = [10, 20, 30, 10, 40, 50, 60]; 
// console.log(http://arr.at(2));
// console.log(http://arr.at(-2));

// 2. arr.indexOf(element) 

// Returns first occurrence index
// Returns -1 if not found

// console.log(arr.indexOf(40)); //3 
// console.log(arr.indexOf(100)); //-1 

// 3. lastIndexOf(element) 
// it will return the index of last occurrence of the element 
// console.log(arr.lastIndexOf(10));

// 4. includes()
// array.includes(searchValue, startIndex)
// Checks if array contains a specified value or not
// Returns true or false
// console.log(arr.includes(20)); // true
// console.log(arr.includes(50)); // false

// 5. concat() 
// // Syntax: array.concat(array1, array2, ..., arrayN) 
// Combines two or more arrays and returns a new array. 
// Ex:
// let arr1 = [1, 2]; 
// let arr2 = [3, 4]; 
// let newArr = arr1.concat(arr2); 
// console.log(newArr);

// 6. slice() 
// Syntax: array.slice(startIndex, endIndex) 
// Returns a copy of a portion of an array. 
// It will always exclude the ending index 
// Supports negative indexes

// Example: 
// let arr = [1, 2, 3, 4]; 
// let sliced = arr.slice(1, 3); // Extracts elements from index 1 to 2 
// console.log(sliced);

// 7. toString()
// It converts an array into a string.
// Syntax: array.toString()
// console.log(arr.toString())

// Note:
// Uses ,(comma) as default separator
// Does not modify original array
// Cannot customize separator

// 8. join():
// Converts array elements into a string by using a custom separator.
// Syntax: array.join(separator)
// Returns string
// Default separator is ,
// Does not modify array
// Custom separator allowed
// More flexible than toString()
// Ex:
// let arr = [1, 2, 3];
// console.log(arr.join()); //default separator --->  "1,2,3"

// let arr = ["H", "I"];
// console.log(arr.join("")); // empty string separator --->  "HI"

// let arr = [1, 2, 3];
// console.log(arr.join(0)); //numeric separator ---> "10203"

// Note:
// Nested arrays call toString()
// let arr = [1, [2, 3], 4];
// console.log(arr.join("-")); // "1-2,3-4"

// join() treats empty slots, undefined, and null all as empty strings
// let arr = [1, , 3];
// console.log(arr.join("-")); // "1--3"

// 9. flat():
// It creates a new array by flattening nested arrays.
// array.flat(depth)
// Default depth = 1
// Removes empty slots
// Flattens only up to given depth
// we can use Infinity as depth when we don't know exact depth
// Ex:
// let arr = [1, [2, 3]];
// console.log(arr.flat()); // [1, 2, 3]

// let arr = [1, [2, [3]]];
// console.log(arr.flat()); // default depth ----> [1, 2, [3]]

// console.log(arr.flat(2)); // custom depth----> [1, 2, 3]

// console.log(arr.flat(Infinity)); // when we don't know depth

// let arr = [1, , 2, [ , 3]];
// console.log(arr.flat()); //removes empty slots----> [1, 2, 3]

