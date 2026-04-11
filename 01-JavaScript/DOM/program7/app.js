// applying class atribute to the HTML elements using DOM

//1.add class name 
//2.take that class in variable 
//3.give css attributes to the class 

// diff bt className vs classList


let h1 = document.querySelector('h1');

h1.className = "demo";
let demo = document.querySelector('.demo');

demo.style.color = 'white';
demo.style.fontFamily = "monospace";

h1.className = "demo2"
let demo2 = document.querySelector(".demo2")
demo2.style.backgroundColor = "tomato";




