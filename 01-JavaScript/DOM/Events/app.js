// event 
// 3 ways 
// 1.HTML ATTRIBUTE
// <h1 onclick = "alert('button clicked')"> Hii </h1>
//-->  if we add two event listener to the h1 only firts event will run 
// <h1 onclick = "alert('button clicked')" ondblclick="alert('dbl clicked')"> Hii </h1> [not work seconde event]


// 2.DOM Element
// --> by giving onclick function and define a fnc in js file 

 
// 3.addEventlistener
//  most used 
// -->  1.mouse events
// -->  2.keyboard events
// -->  3.form events
// -->  4.browser events

// mouse events 
// click , dblclick , mouseover , mouseleave , mousemove ,

// keyboard Events [only three events ]
// keypress , keydown , keyup

//form events [only three]
// submit , onChange , input , value

// using addEventlistener we can add muliple events to the single element 
// add click and dblclick event to the button
let btn = document.querySelector('button')
btn.addEventListener('click' , ()=>{
    console.log("button was clicked")
})

btn.addEventListener('dblclick' , ()=>{
    console.log("button was clicked twice ")
})


// mouseover , mouseenter , mouseleave , mousemove
btn.addEventListener("mouseleave",()=>{
    console.log("mouse overing..!")
})


// keyboard Events
let inp = document.querySelector('input')
// keyup , keydown , keypress

inp.addEventListener('keyup' ,(e)=>{
    console.log("input typing...!")
    console.log(e.target.value)
})