// Write a recursive function for factorial.


function factorial(n){

    if(n == 1){
        return 1 ;
    }

    return n * factorial(n-1);
}
let factorialVal =BigInt( factorial(50) )// 3.0414093201713376e+64

console.log(factorialVal)