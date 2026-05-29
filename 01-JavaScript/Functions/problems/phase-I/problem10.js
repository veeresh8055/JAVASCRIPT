// create a function to reverse a string

function reverseString(str) {
  //convert string into array of characters
  let strArray = str.split("");

  //reverse strArray
  strArray.reverse();

  // merge characters in strArray
  let newStr = strArray.join("");

  return newStr;
}

// shorthand
function reverseString2(str){
    return str.split("").reverse().join("") ;
}



console.log(reverseString("Hello"));
console.log(reverseString2("Hello"));
