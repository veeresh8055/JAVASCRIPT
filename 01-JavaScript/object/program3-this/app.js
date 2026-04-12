// underatnding this keyword

//non-strict mode
// function normal(){
// console.log(this)//window
// }

// let arrow = ()=>{
//     console.log(this)//window
// }

// normal()
// arrow()


"use strict"

function normal(){
console.log(this)//undefined
}

let arrow = ()=>{
    console.log(this)//window
}

normal()
arrow()