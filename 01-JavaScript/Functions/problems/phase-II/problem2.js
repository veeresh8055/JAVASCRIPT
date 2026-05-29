// Write recursive Fibonacci function.

let a = 0 ;
let b = 1;


function Fibonacci( n , a , b){
    if(n == 2 )
        return ;

    let f = a + b; 
    console.log(f)
    return Fibonacci( n-1 , b , f);
}

console.log(a)
console.log(b)
Fibonacci( 15 , a , b);
