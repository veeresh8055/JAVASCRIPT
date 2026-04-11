let str = 'javascript'
console.log(str.concat('Type'))// javascriptType
console.log(str.toLocaleUpperCase())// JAVASCRIPT

console.log(str.includes('va'))//true 
console.log(str.charAt(1))//a
console.log(str.charAt(11))//   [emptySpace]
console.log(str.charAt(-1))//   [empty space]

console.log(str.at(1))// a  
console.log(str.at(10))// undefined 

// ~~~~~~~~~~~Diff bt charCodeAt() and codePointAt()~~~~~~~
console.log(str.charCodeAt(1))// 97
console.log(str.charCodeAt(-1))// NaN
console.log(str.charCodeAt(10))// NaN
console.log(str.charCodeAt(0))// 106

console.log(str.codePointAt(1))// 97
console.log(str.codePointAt(0))// 106

console.log(str.codePointAt(-1))// undefined
console.log(str.codePointAt(10))// undefined

// ~~~~~
console.log(str.endsWith('script'))//true
console.log(str.endsWith('pt'))//true
console.log(str.endsWith('java'))//false

// ~~~~~~~
console.log(str.includes('va'))//true
console.log(str.includes('scr'))//true
console.log(str.includes('pt'))//true
console.log(str.includes('js'))//false

// ~~~~~~~~~
console.log(str.indexOf('a'))//1
console.log(str.indexOf('a',2))//3
console.log(str.indexOf('a',3))//3
console.log(str.indexOf('a',4))//-1

console.log(str.indexOf('j',2))//-1
// [Note]
console.log(str.indexOf('v',1))//2  [here v only one occurance ]
console.log(str.indexOf('v',2))//2
console.log(str.indexOf('v',3))//-1
console.log(str.indexOf('',3))//-1



console.log(str.substring(-4,-1))// [empty][str.substring(0,0)]
console.log(str.slice(-4))//ript


