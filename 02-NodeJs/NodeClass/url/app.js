const url = require('url')

let urlLink = 'http://localhost:3000/login?username=veeresh&password=1234'

let urlData = new URL(urlLink)

// console.log(urlData) // details about the url 

console.log(urlData.hostname)

console.log(urlData.searchParams) // it is a  map structure 
// use map methods to get the values
console.log(urlData.searchParams.get('username'))
console.log(urlData.searchParams.get('password'))






// ~~~~~~~ example for map structure ~~~~~~~
// const userMap = new Map([
//   ['username', 'veeresh'],
//   ['password', '1234']
// ]);

// console.log(userMap.get('username'))