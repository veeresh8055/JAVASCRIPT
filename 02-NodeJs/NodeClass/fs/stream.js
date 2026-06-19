// streams 

const fs = require('fs')

// // writable stream 
// fs.createWriteStream('./text.txt').write('This is a text file create by using the createWriteStream')
// console.log('file created ')

// // readable stream 
// let fileData = fs.createReadStream('./text.txt','utf-8')
// // data getting
// fileData.on('data',(res)=>{
//     console.log(res)
// })

// //error handling 
// fileData.on('error',(err)=>{
//     console.log(err)
// })
// //end the stream event
// fileData.on('end',()=>{
//     console.log('stream ended')
// })
// // close all the stream which are running 
// fileData.on('close',()=>{
//     console.log('all streams are closed ')
// })

// duplex stream 
// copy the content in the text.txt and paste that in another file 
// fs.createReadStream('text.txt','utf-8').pipe(fs.createWriteStream('demo.txt'))



let res= fs.createReadStream('text.txt','utf-8')
console.log(res.buffer())