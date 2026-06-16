// String:
// A string is a primitive data type in JavaScript used to store and manipulate the sequence of characters, essentially text.

// Strings are immutable
// Stored inside quotes: ' ', " ", or ` `
// Indexing starts from 0
// JavaScript automatically converts strings to objects when calling methods, which leads to auto-boxing

// Auto-boxing is the process where JavaScript automatically converts a primitive value into its corresponding object when you try to access properties or methods on it.
// Happens only when accessing properties or methods. After execution, the object is destroyed

// Ex:
// let name = "JavaScript"
// let name2 = 'JavaScript'

// let name3 = `JavaScript is 
// 		     scripting and
// 		     programming language`

// To find the length of the string, we have to use length property

// console.log(name3.length)

// String Methods:
// All string methods return a new string, and they do not change the original one.

// 1. toLowerCase()
// 	Converts string to lowercase

// 	let sub="JAVASCRIPT"
// 	console.log(sub.toLowerCase())

// 	"HELLO".toLowerCase(); // "hello"

// 2. toUpperCase()
// 	Converts string to uppercase

// 	let sub2="html"
// 	console.log(sub2.toUpperCase())

// 3. toString()
// 	Converts value to string

// 	console.log((123).toString())
// 	or
// 	let value=true
// 	console.log(value.toString())

// Note: We should not used toString() with null and undefined. It causes an error.

// 4. trimStart()
// 	Removes spaces from start only
// 	let str4 = "   hi";
// 	console.log(str4.trimStart());

// 5. trimEnd()
// 	Removes spaces from end only
// 	let str5 = "hi   ";
// 	console.log(str5.trimEnd());

// 6. trim()

// 	Removes spaces from both ends
// 	let str6 = "   hi   ";
// 	console.log(str6.trim());

// 7. replace(searchValue, newValue)

// 	Replaces first occurrence only
// 	Case-sensitive

// 	let str7 = "Java Java";
// 	let result7 = str7.replace("Java", "JS");
// 	console.log(result7);

// 8. replaceAll(searchValue, newValue)
// 	Replaces all occurrences
// 	Case-sensitive

// 	let str8 = "Java Java";
// 	let result8 = str8.replaceAll("Java", "JS");
// 	console.log(result8);

// 9. substring(startIndex, endIndex)
// 	Extracts part of a string based on indexes 
// 	Negative values treated as 0
// 	Swaps startIndex & endIndex if startIndex > endIndex 
// 	end index is not included

// 	let str10 = "JavaScript";
// 	let result10 = str10.substring(4, 10);
// 	console.log(result10);

// 10. slice(startIndex, endIndex) 
// 	Extracts part of a string based on index
// 	end index is not included
// 	Supports negative indexes
// 	Most preferred method

// 	let str11 = "JavaScript";
// 	let result11 = str11.slice(-6);
// 	console.log(result11);

// 11. split(separator)

// 	Converts string to array
// 	Uses a separator to split

// 	let str12 = "ap&ple,ban&ana,man&go";
// 	let result12 = str12.split(",");
// 	console.log(result12);
// 	console.log(str12.split("&"));

// 12. concat()

// string1.concat(string2, string3, ...)

// joins multiple strings
// Returns a new string
// + operator or template literals are more commonly used

// let a = "Hello";
// let b = "JS";
// let result13 = a.concat(" ", b);
// console.log(result13);

// 13. indexOf()

// string.indexOf(searchValue, startIndex)
// Returns first occurrence index
// Returns -1 if not found
// Case-sensitive
// Searches from left to right
// Negative index will be treated as 0

// let str14 = "JavaScript";
// console.log(str14.indexOf("a"));
// console.log(str.indexOf("a", 2)); // starts searching from 2nd index to right

// 14. lastIndexOf(): 
// 	string.lastIndexOf(searchValue, fromIndex)
//       	Returns the last occurrence index
// 	Returns -1 if not found
// 	Case-sensitive
// 	If the index is negative, then it returns -1
// 	Searches from right to left	

// 	let str15 = "bananananana";
// 	console.log(str15.lastIndexOf("a", 8)); // starts searching from 8th index to left

// // To find nth occurrence of particular character
// let str = "bananananana";
// let n = 4;
// let index = -1;

// for (let i = 1; i <= n; i++) {
//   index = str.indexOf("a", index + 1);
//   if (index === -1) break;
// }
// console.log(index);

// 15. includes()
// 	string.includes(searchValue, startIndex)
// 	Checks if string contains a specified value or not
// 	Returns true or false
// 	Case-sensitive
	
// 	let str16 = "I love JavaScript";
// 	console.log(str16.includes("JavaScript"));
// 	console.log(str.includes("Java", 8))

// 16. charAt(index)
// 	Returns the character at given index
// 	Returns empty string if index is invalid

// 	let str17 = "JavaScript";
// 	console.log(str17.charAt(0));
// 	console.log(str17.charAt(5));

// 17. startsWith()
// 	string.startsWith(searchString, position)
// 	Checks whether a string starts with a given value.
// 	Returns boolean (true / false)
// 	Case-sensitive

// 	Ex:
// 		let str = "JavaScript";
// 		console.log(str.startsWith("Java")); // true
// 		console.log(str.startsWith("Script")); // false
	
// 		Using position: starts searching from this particular index
// 			let str = "JavaScript";
// 			console.log(str.startsWith("Script", 4)); //true

// 18. endsWith()
// 	string.endsWith(searchString, length)
// 	Checks whether a string ends with a given value.
// 	Returns boolean (true / false)
// 	Case-sensitive

// 	Ex: 
// 	let str = "JavaScript";
// 	console.log(str.endsWith("Script")); // true
// 	console.log(str.endsWith("Java")); // false

// 	Using length: The length parameter in endsWith() limits the string before checking the ending
// 		let str = "JavaScript";
// 		console.log(str.endsWith("Java", 4));

// 19. repeat():
// 	The repeat() method creates a new string by repeating the original string a specified number of times.
// 	The original string does not change

// 	Syntax : string.repeat(count)
// 	count → the number of times the string should be repeated.
// 	Must be integer ≥ 0.
// 	Ex:
// 	Examples
// 	let str = "Hi! ";

// 	console.log(str.repeat(3)); // "Hi! Hi! Hi! "
// 	console.log("abc".repeat(5)); // "abcabcabcabcabc"

// 	if count = 0 → returns an empty string
// 	count is negative → throws RangeError
// 	count is a decimal → converted to integer


