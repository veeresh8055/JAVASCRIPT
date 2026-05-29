// Create a function named greet that prints "Hello World".

// normal function 
function greet(){
    console.log("Hello World")
}

greet()


// arrow function 
let greet2 = ()=>{
    console.log("Hello World")
}

greet2()

// note 
// Normal functions are hoisted with their full function definition during the memory creation phase. Arrow functions assigned to let or const behave like variables; memory is allocated during creation, but the function is assigned only during execution, so they cannot be used before their declaration.
