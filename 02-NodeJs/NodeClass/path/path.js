// path module 
const path = require('path')
// cur directory name 
__dirname
// curr file name
__filename
console.log(__dirname)// absolute path of directory 
console.log(__filename) // absolute path of the current file name 

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

//
console.log(path.extname(__dirname))
console.log(path.extname(__filename))

// convert string path into object 
console.log(path.parse(__dirname))
console.log(path.parse(__filename))

// convert object path into string 
console.log(path.format(path.parse(__dirname)))
console.log(path.format(path.parse(__filename)))

//joining multipla file or folder 
console.log(path.join('node','express','path.js'))
console.log(path.join('node','/express','path.js'))// nothing happens when e use / here 

// resolve [it gives absolute path ]
console.log(path.resolve('node','express','path.js'))
// by using / 
console.log(path.resolve('/node','express','path.js'))

console.log(path.resolve('node','/express','path.js'))

