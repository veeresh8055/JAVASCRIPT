// primitives are immutable in javascript
// when we reintialize the variable it creates a new variable withe same name and assign new value and we cannot access old variable
// :--> Strng Number and Boolean have there methods [when we use methhods for primitivies it converts a primitive into objects and  for this we can add mothods to the primitives ]

// string methods
let str = "Veeresh";

// finding the lenght of the string
console.log(str.length);//7

let str2 = "    Javascript   ";
//removing the spaces from the beginneing and ending spaces from the string
console.log(str2.trim()); //Javascript
console.log(str2.trim().length); //10

str2 = "    Javascript   ";
//removing beginning spaces
console.log(str2.trimEnd()); //    Javascript
console.log(str2.trimEnd().length); //14

str2 = "    Javascript   ";
//removing ending spaces
console.log(str2.trimStart()); //Javascript   |
console.log(str2.trimStart().length); //13

console.log(str.toLowerCase()); //veeresh
console.log(str.toUpperCase()); //VEERESH

// ~~~~~~REPLACE METHOD ~~~~~~~~~~~
// REPLACE METHOD IS CASE SENSITIVE 
// ACCESPT TWO AGR  1ST ONE IS STRORIGINAL AND 2ND ONE REPLACING VALUE 
// IT CHANGES ONLY THE FIRST OCCURCANCE OF VALUE 

str2 = "javascript";
//string replace [no methods effect original string ]
console.log(str2.replace('java' , 'type')); //typescript
console.log(str2.replace('j' , 'T')); //Tavascript
console.log(str2.replace('a' , 'A')); //jAvascript

//replaceAll
console.log(str2.replaceAll('a' , 'A')); //jAvAscript
str2="   ja  va script ";
console.log(str2.replaceAll(" " ,"")); //javascript

// ~~~~~~~~ substring(start,end)~~~~~~~~~~~~~
str2 = "javascript";
console.log(str2.substring(-1,4))// in substring negative index treaded as zero 
console.log(str2.substring(-1,-4))// emptyspace 

console.log(str2.substring(9,4))//scrip 
console.log(str2.substring(6,1))//avasc 





