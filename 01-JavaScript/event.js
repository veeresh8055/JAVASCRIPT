// ?Events:
// mouse events
// keyboard events
// form events

// ? 3 ways:
//? 1. html attributes: we will use events directly on html elements, all the events will be prefixed by word "on".
// ex: click ----> onclick
// ec: dblclick ----> ondblclick

// function btnclick() {
//   console.log("button clicked");
// }

// function btnclick() {
//   console.log("button clicked twice");
// }

//? 2. dom elements:
// let btn = document.querySelector(".btn");
// console.log(btn)

// btn.onclick = () => {
//   console.log("you clicked first time");
// };

// btn.onclick = () => { //? overrides previous event
//   console.log("you clicked twice");
// };

//? addEventListener():

// ? mouse events:
// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   console.log("button clicked once");
// });

// btn.addEventListener("dblclick", () => {
//   console.log("button clicked twice");
// });

// btn.addEventListener("mouseover", () => {
//   console.log("mouseovered");
// });

// btn.addEventListener("mousemove", () => {
//   console.log("mouse moved");
// });

// ? keyboard events
// let inp = document.querySelector("input");
// console.log(inp.value);
// inp.addEventListener("keypress", (e) => {
//   console.log("key pressed");
//   console.log(http://e.target);
//   console.log(e.key);
// });

// inp.addEventListener("keydown", () => {
//   console.log("key down");
// });

// inp.addEventListener("keyup", () => {
//   console.log("key up");
// });

// ? form events:
// submit
// change
// input

let form = document.querySelector(".form");
let inp = document.querySelector(".inp");
let h1 = document.querySelector("h1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("form submitted");
  // console.log(inp.value);
  // inp.value = "";
});

form.addEventListener("change", (e) => {
  e.preventDefault();
  // console.log("form submitted");
  // console.log(inp.value);
  // h1.innerHTML = "My name is: " + inp.value;
  // inp.value = "";
});

// form.addEventListener("input", (e) => {
//   e.preventDefault();
  // console.log("form submitted");
//   console.log(inp.value);
//   h1.innerHTML = "My name is: " + inp.value
  // inp.value = "";
// }); 