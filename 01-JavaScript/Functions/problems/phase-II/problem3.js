// Create a function that finds power using recursion.

function power(a , b){
    if(b == 1 ){
        return a ;
    }

    return a * power(a , b-1);
}

console.log(power(2,3))
console.log(power(10,3))
console.log(power(3,3))