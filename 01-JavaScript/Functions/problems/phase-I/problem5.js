//  Write a function that converts Celsius to Fahrenheit. 

function celsiusToFarenheit( celsius ){
    let F = (celsius * 1.8 ) + 32;
    return (F + " F");
}

console.log(celsiusToFarenheit(3))
console.log(celsiusToFarenheit(10))
console.log(celsiusToFarenheit(100))