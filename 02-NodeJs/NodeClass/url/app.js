const url = require('url')

let urlLink = 'http://localhost:3000/login?username=veeresh&password=1234'

let urlData = new URL(urlLink)

console.log(urlData)
const {search}= urlData
console.log(search)