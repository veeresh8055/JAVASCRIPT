function memory() {

    //create memory objet that stores -->  n : factorial of n 
    let memoryObject = {};

    return function fact(n) {
        
        // find n fact is avilable in memory or not if available just print and return 
        if (n in memoryObject) {
            console.log("from memory");
            return memoryObject[n];
        }

        // if n fact is not available in memory calculate factorial of n an store it in memory 
        let fact = 1;

        for (let i = 2; i <= n; i++) {
            fact *= i;
        }

        memoryObject[n] = fact;

        console.log("calculating...");
        return fact;
    };
}

let factorial = memory();

console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(4));