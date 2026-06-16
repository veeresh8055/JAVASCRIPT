// What is DOM?

// When a browser loads an HTML file:
// It reads the HTML.
// It parses it.
// It converts it into a tree structure of objects.
// That tree is called the DOM.
// So DOM is:
// A structured object representation of your HTML document that JavaScript can manipulate.
// Note:
// DOM is NOT JavaScript.
// DOM is provided by the browser.
// JavaScript interacts with DOM.

// DOM Tree Structure:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Page</title>
//   </head>
//   <body>
//     <h1>Hello</h1>
//     <p id="para">Welcome</p>
//   </body>
// </html>

// Browser converts it into:

// Document
//  └── html
//       ├── head
//       │    └── title
//       │         └── "Page"
//       └── body
//            ├── h1
//            │    └── "Hello"
//            └── p (id="para")
//                 └── "Welcome"


// Everything becomes a Node.

// Types of DOM Nodes:
// 1. Document Node
// Root of everything.
// document

// 2. Element Node
// Tags like:
// <div>, <p>, <h1>

// 3. Text Node
// Text inside element.
// Ex:
// <p>Hello</p>
// "Hello" is a text node.

// 4. Comment Node
// <!-- comment -->

// 5. Attribute Node
// id="para"

// DOM Selection Methods:

// 1. document.getElementById('idName'):

// Selects a single element by its id.
// Returns: The element object or null.

// const heading = document.getElementById('h1');

// 2. document.getElementsByClassName('className')

// Selects all elements with a specific class.
// Returns: An HTMLCollection (array-like, but not a real array).

// const items = document.getElementsByClassName('className');
// // usage: items[0]

// we can even iterate as well
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// 3. document.getElementsByTagName('tagName')

// Selects all elements with a specific tag name (e.g., 'p', 'div').
// Returns: An HTMLCollection.
// const paragraphs = document.getElementsByTagName('p');

// 4. document.querySelector('cssSelector')

// Selects the first element that matches the CSS selector.
// Returns: The element object or null

// const button = document.querySelector('#id');
// const firstItem = document.querySelector('.className');
// const firstItem = document.querySelector('div');

// 5. document.querySelectorAll('cssSelector')

// Selects all elements that match the CSS selector.
// Returns: A NodeList (can be looped with .forEach()).

// const allButtons = document.querySelectorAll('.btn');
// allButtons.forEach(btn => console.log(btn));

// Manipulating Content:
// Once selected, you can change what an element displays.

// 1. innerHTML:

// Gets or sets the HTML content (including tags).
// Can be a security risk (XSS attacks) if used with user input.
// element.innerHTML = "<strong>Bold Text</strong>";

// 2. textContent:

// Gets or sets the text content of the node and its descendants.
// Ignores HTML tags (treats them as text) and CSS styling (returns hidden text too).
// element.textContent = "Just plain text";

// 3. innerText:

// Similar to textContent but aware of CSS styling (won't return hidden text).
// Slower than textContent.
// element.innerText = "Visible text only";

// 4. value:
// Used specifically for form elements (input, textarea, select).
// const inputValue = document.getElementById('username').value;

// Manipulating Styles:

// You can change the CSS of an element directly.

// style property:
// Properties are camelCased (e.g., background-color becomes backgroundColor).

// const box = document.querySelector('.box');
// box.style.backgroundColor = 'blue';
// box.style.fontSize = '20px';
// box.style.display = 'none'; // Hides element

// Using classList: Instead of inline styles, it's often better to toggle CSS classes.

// element.classList.add('active');    // Adds class
// element.classList.remove('active'); // Removes class
// element.classList.toggle('dark');   // Adds if missing, removes if present

// Manipulating Attributes:
// Control HTML attributes like src, href, alt, type.

// const img = document.querySelector('img');
// // Get
// console.log(img.getAttribute('src')); 

// // Set
// img.setAttribute('src', 'new-image.jpg');
// img.setAttribute('alt', 'Description of new image');

// // Remove
// img.removeAttribute('hidden');

// Creating and Removing Elements:
// 1. Create:

// const newDiv = document.createElement('div');
// newDiv.textContent = "I am a new element!";
// newDiv.classList.add('alert');

// 2. Append:

// document.body.appendChild(newDiv); 
// // Or add to a specific container
// const list = document.getElementById('myList');
// list.appendChild(newItem); // appendChild only accepts one node.

// parent.append(child1,);
// parent.prepend(child1, child2);
// parent.before(child1);
// parent.after(child1);

// Remove:
// element.remove()

// const target = document.querySelector('.remove-me');
// target.remove()
// parent.removeChild(childName);

// Replacing Elements
// parent.replaceChild(newElement, oldElement);

// DOM Traversing:
// Parents:
// element.parentElement (The direct parent element)

// Children:
// element.children (HTMLCollection of child elements - tags only)
// element.childNodes (NodeList of all children including text nodes/whitespace)
// element.firstElementChild / element.lastElementChild

// Siblings:
// element.nextElementSibling (Next tag sibling)
// element.previousElementSibling (Previous tag sibling)

// DOM Events:
// Events are things that happen to HTML elements (clicks, typing, loading, etc.).
// or
// Events are actions triggered by the browser or user (e.g., clicking a button, 
// pressing a key, etc.).

// Common Events:
// Mouse: click, dblclick, mouseenter, mouseleave, mousemove
// Keyboard: keydown, keyup, keypress
// Form: submit, change, input, focus, blur
// Window: load, resize, scroll

// Ways to Attach Events in JavaScript 
// We can attach events to an HTML element in three ways: 
// 1. HTMLAttributes 
// 2. DOMProperties 
// 3. addEventListiners 

// 1. Using HTML Attributes 
// Here, the event is assigned directly as an attribute in the HTML tag. 
// <tagname onEventName="JavaScript Code">Content</tagname>; 
// <div onclick="alert('Click Event is triggered')">Click Me</div>; 

// 2. Using DOM Properties 
// Here, we attach events using JavaScript properties. 
// element.onEventName = function; 
// let div = document.getElementById("myDiv"); 
// div.onclick = function () { 
// div.style.cssText = "color: white; background-color: teal; border: 1px solid; text-align: 
// center;";
// }; 

// 3. Using addEventListener("event", function) - The standard way

// This is the best and most flexible way to attach events. 
// We can attach multiple functions to the same event. 
// We can remove the event later using removeEventListener(). 
// It supports event propagation. 

// element.addEventListener("eventName", function, useCapture); 
// let button = document.getElementById("myButton"); 
// button.addEventListener("click", () => { 
// console.log("Click Event is Triggered"); 
// });

// Understanding the Third Parameter in addEventListener() 
// The third parameter (useCapture) is optional and controls event propagation: 
// true → Capturing phase (event runs from parent to child) 
// false → Bubbling phase (event runs from child to parent, default 
// behavior) 

// Event Propagation 
// Event propagation refers to how events flow through the DOM hierarchy 
// when an event occurs. It consists of three phases:

// 1. Event Capturing
// 2. Event Target
// 3. Event Bubbling

// Capturing Phase (Event Capturing/Trickling) :
// ○ The event starts from the window and travels down to the target 
// element. 

// Target Phase (Event Execution) 
// ○ The event reaches the target element and executes its handler. 

// Bubbling Phase (Event Bubbling) 
// ○ The event bubbles up from the target element to the window. 

// Example :
// parent.addEventListener( "click", () => { 
// console.log("Parent Clicked"); 
// },  true ); // Capturing mode 

// child.addEventListener("click",() => { 
// console.log("Child Clicked"); 
// },true ); // Capturing mode 

// parent.addEventListener( "click", () => { 
// console.log("Parent Clicked"); 
// },  false); // bubbling mode 

// child.addEventListener("click",() => { 
// console.log("Child Clicked"); 
// },false ); // bubbling mode 

// Event Object 
// The event object (event or e) is an automatically passed argument to the 
// event handler function, when an event occurs in JavaScript. It contains 
// details about the event, such as the type of event, the target element, mouse 
// coordinates, key presses, and more. 

// document.getElementById("btn").addEventListener("click", function (e) { 
// console.log(e); // Logs the event object to the console 
// });

// e.preventDefault() :
// You use preventDefault() when you want to stop a default browser behavior, 
// such as: 
// Stopping form submission 
// Preventing link navigation 
// Disabling right-click menu 

// Stopping form submission 
// document.getElementById("myForm").addEventListener("submit", function (e) { 
// e.preventDefault(); // Stops the form from reloading the page 
// alert("Form submission prevented!"); 
// }); 

// Without preventDefault(): The form will submit and reload the page. 
// With preventDefault(): The form won't submit, allowing JavaScript validation. 