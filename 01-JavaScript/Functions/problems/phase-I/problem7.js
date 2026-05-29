// Write a function that returns the greater of two numbers.

function maxReturn( a, b ){
    if(  a > b ){
        return a ;
    }else{
        return b ; 
    }
}

// ternary operator 
function maxReturn(a , b){
    return ( a > b ? a : b ) ;
}

console.log(maxReturn(4,5))
console.log(maxReturn(0,0))
console.log(maxReturn(10,30))

