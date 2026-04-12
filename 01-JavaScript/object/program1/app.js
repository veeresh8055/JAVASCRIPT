// object 

let obj = {
    name : "veeresh",
    age:22,
    greet(){
        console.log(`HI ${this.name}` );
    },
    address:{
        city:"gadag",
        state:"karnataka"
        
    }
}

// accessing 
console.log(obj.name)//veeresh
console.log(obj["age"])//22
console.log(obj["address"]["city"])//gadag



// adding key value in object 
obj.marks = 22;

// console.log(obj)


//deleting attribute
delete obj.age

console.log(obj)

//calling function
obj.greet()

//Object static methods
console.log(Object.keys(obj))// array of keys name in string
console.log(Object.values(obj))// array of values name in string
console.log(Object.entries(obj))// array of [ array of key value ] name in string
