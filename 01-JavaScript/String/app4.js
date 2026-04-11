//string methods 
let str = 'javascript';

//charAt[positive only]
console.log(str.charAt(2))// v
console.log(str.charAt(10))// empty
console.log(str.charAt(-3))//empty

//at [positive and negative ]
console.log(str.at(2))//v
console.log(str.at(11))//undefined
console.log(str.at(-3))//i

//split() method 
console.log(str.split(''))//['j', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't']
console.log(str.split())//[ 'javascript' ]
console.log(str.split())//[ 'javascript' ]

// separating according to space 
let str2='hi every one welcome to javascript'
console.log(str2.split(" "))//[ 'hi', 'every', 'one', 'welcome', 'to', 'javascript' ]

//separating according to comma(,)
let str3='am lerning js , and  i wnat become good at it ,after i learn react'
console.log(str3.split(",")) //['am lerning js ', ' and  i wnat become good at it ','after i learn react']

//startsWith() [starts from 0 ]
console.log(str.startsWith('java'))//true
console.log(str.startsWith('J'))//false

//endsWith('str' , length') [endingindex is postion u give ]
console.log(str.endsWith('script'))//true
console.log(str.endsWith('a',4))//true
console.log(str.endsWith('j',-2))//false

//toString()[conevert any datatype to string except null and undefined ]
console.log([1,2,3,4].toString())//1,2,3,4

console.log({name:'veeresh',age:22}.toString())//[object object]

console.log(true.toString())//true 

console.log(null.toString())// error [ Cannot read properties of null]


