// math functions

// Math.abs()
console.log( Math.abs(4))
console.log( Math.abs(-4))

//Math.trunc()[delete decimals]
console.log( Math.trunc(1.232))

//Math.floor() [least value ]
console.log( Math.floor(2.33))
console.log( Math.floor(2.99))

//Math.ciel() [highest value ]
console.log( Math.ceil(3.01))
console.log( Math.ceil(3.99))

//Math.round()
console.log(Math.round(3.45))
console.log(Math.round(3.51))

//Math.min Math.max 
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))

//Math.random()
console.log(Math.random()) 

// let otp = Math.random() * (max - min + 1)
let otp = Math.floor(Math.random() * (9999 - 1000 + 1) +1000 )
console.log(otp)
// console.log(Math.floor((Math.random() * 10000)+1000) ) 



