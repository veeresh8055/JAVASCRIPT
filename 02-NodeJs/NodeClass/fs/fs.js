const fs = require('fs')

//? Synchronus

// create
fs.writeFileSync("app.js","app.js file created")
console.log("created file ")
// update old file data 
fs.writeFileSync('app.js',"updatigng app.js") // it will orrie the old data and add new data to the file 

fs.appendFileSync('app.js',"\n updated new data to the app.js without orriding the old data ")
console.log("app.js updated ")


// copying the one file data to another file 
fs.writeFileSync('text.txt',"modules are the built in code , which is present in js  ")
console.log('text.txt created')
//copy text.txt to module.txt
//1.read text.txt and store in one variable 
//2.add the data in module.txt 
let data = fs.readFileSync('text.txt' , 'utf-8')
fs.appendFileSync('moddule.txt',data)
console.log("text.txt file was copied ")




//? Asynchronus

