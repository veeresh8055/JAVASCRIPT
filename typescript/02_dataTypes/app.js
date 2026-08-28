"use strict";
// basic types 
// Primitive type (String , Number , Boolean)
// Array 
// Tuples
// Enum 
// Any , unknown  , Void , Null , Undefined , Never 
// --> difference between any and unknown 
Object.defineProperty(exports, "__esModule", { value: true });
// primitives 
let number = 10;
let name = "veeresh";
let isLogin = true;
// Array 
let nums = [1, 2, 3, 6, "hello"]; // --> type : Number | String 
console.log(nums);
let num = [1, 2, 3]; // Only for Numbers it stores 
console.log(num);
let names = ["hello", "Typescript"];
console.log(names);
// tuples : fixed two diffreent data type in an array 
let users = ["age", 22];
// console.log(  users.map(el=> console.log(el ) )  )
// Enums -> Enumerations 
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["USER"] = "user";
    userRoles["GUEST"] = "guest";
})(userRoles || (userRoles = {}));
console.log(userRoles);
console.log(userRoles.ADMIN);
//Any -> when we didnt set the datatypes of a variable by defualt it is Any -> we have to set the datatype of that variable -> in future we can change the the data type of a variable of it like we did in js 
let a; // type : any
a = 10; // now type is Number 
a = "hello"; // now the type is String 
// -> we avoid to set a datatype of a vaiable into any , because we can change the type in runtime 
// unknow 
let b;
b = 20;
b = "hello";
if (typeof b === "string") {
    let res = b.endsWith("o");
    console.log(res);
}
// Void --> if a function doesnt return anything set that into void 
function greet() {
    console.log("Helo the function return nothing so its 'void' ");
}
greet();
//null 
let owner = null; //-> type : any 
let newOwner;
// newOwner = 10  --> when we set a variable with null in future we cannot change its value we have to add only a null for this the solution is we use a union
//union 
let newOwn; // the dataype is string or null 
newOwn = null;
newOwn = "veeresh";
//# sourceMappingURL=app.js.map