// BOM (BROWSER OBJECT MODEL):
// BOM (Browser Object Model) allows JavaScript to communicate with the browser.
// The window object is the main entry point for accessing BOM features. 
// It provides objects that let us:
// Control browser window
// Read browser information
// Navigate between pages
// Display dialogs (alert, prompt, confirm, etc.).
// Control timers

// NOTE: BOM is provided by the browser, not JavaScript.

// All BOM objects exist inside window object.
// console.log(window);

// Window Properties:
// 1. document:
// document represents the HTML page loaded in the browser.
// When the browser loads a web page, it converts HTML into a DOM tree, and that tree is accessible using document.
// By using this, we can make changes in the HTML page.
// document belongs to DOM but it is accessed through BOM.

// 2. screen:
// It provides the basic information about the user's screen like height, width, orientation, etc…
// console.log(screen.width); //How wide the monitor is
// console.log(screen.height); //How wide the monitor is

// Note: We cannot change these values because they belong to the hardware, not the browser.

// 3. history:
// It will keep a track of web pages you opened and it will store as history. We   
// can perform forward() , back() operations using this. 

// history.back();     // Go to previous page
// history.forward();  // Go to next page
// history.go(-1);     // Same as back

// 4. navigator:
// It provides information about browsers, like app name, app version,  Internet status, etc.,
// console.log(navigator.userAgent); // browser details
// console.log(http://navigator.onLine);    // true or false
// console.log(navigator.appName) // app name
// console.log(navigator.appVersion) // app  version

// 5. location:
// It provides the basic information about the current location like path, hostname, href, etc., 
// console.log(location.href);  // full URL
// To redirect:
// location.href = "https://google.com"; // This tells the browser to open google page.

// 6 & 7. innerHeight & innerWidth:
// These represent the visible area of the webpage.
// Ex:
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// This tells:
// How much space is available to show your website
// Used in responsive design.

// 8 & 9. outerHeight & outerWidth:
// These represent the full browser window size, including: Tabs, Address bar, Borders
// Ex:
// console.log(window.outerWidth);
// console.log(window.outerHeight);



// BOM (Browser Object Model):

// ? window properties:
// console.log(window.document);
// ? console object:
// var a = 10;
// console.log(a);
// console.log(window.a);

// window.console.log("hello");
// console.error("I am error");
// console.warn("be aware");

// let obj = {
//   name: "Ayan",
//   age: 21,
//   reason: "fever",
// };

// console.table(obj);

// console.time("forLoop");
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }
// console.timeEnd("forLoop");

// console.time("whileLoop");
// let i = 0;
// while (i < 1000) {
//   console.log(i);
//   i++;
// }
// console.timeEnd("whileLoop");

// ?location:
// console.log(location);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.protocol);
// location.reload();

// window.location = "https://www.amazon.com/"; //--->history

// location.href="https://www.flipkart.com"//---->history

// location.assign("https://www.redbus.in/")//---->history

// location.replace("https://www.w3schools.in/")

// ?history
// console.log(history);
// console.log(history.back())
// console.log(history.forward());
// console.log(history.go())

// ? navigator:
// console.log(navigator);
// console.log(navigator.appName);

// console.log(navigator.appCodeName);
// console.log(http://navigator.onLine)
// console.log(navigator.userAgent)

// ?screen
// console.log(screen)
// console.log(screen.width)
// console.log(screen.height);

// console.log(innerHeight);
// console.log(outerHeight);
// console.log(innerWidth)
// console.log(outerWidth);

//? window methods:

//! dialogs : prompt, alert, confirm
//? prompt()
// let a = Number(prompt("value of a"));
// console.log(a)
// console.log(typeof a);

// ? default value:
// let b = Number(prompt("value of a","234"));
// console.log(b)

// ? alert()
// alert("shivam look here")

// ?confirm()
// let value=confirm("are you sure you want to exit")
// console.log(value)

//! Timers:
// ?setTimeout(callback, delay)
// let timeId=setTimeout(() => {
//     console.log("i am set Timeout")
// },3000 );

// ?clearTimeout(id)
// clearTimeout(timeId)

// ?setInterval(callback, interval)
// let interval=setInterval(() => {
//     console.log("I am set Interval")
// }, 1000);

// ?clearInterval(id)
// clearInterval(interval)

//? open() & close()
// var newpge=open("https://www.w3schools.in/","_blank","height=500px,width=500px")
// var anotherpage123=open("https://www.w3schools.in/")

// setTimeout(() => {
//     newpge.close()
// }, 5000);

//? using html page
//                  demo.html
//     <button onclick="newPage()">open window</button>
//     <button onclick="closePage()">close window</button>

// var newpge;
// function newPage() {
//   newpge = open(
//     "https://www.w3schools.in/",
//     "_blank",
//     "height=500px,width=500px",
//   );
// }

// function closePage() {
//   newpge.close();
// }

// BOM (BROWSER OBJECT MODEL):
// BOM (Browser Object Model) allows JavaScript to communicate with the browser.
// The window object is the main entry point for accessing BOM features.
// It provides objects that let us:
// Control browser window
// Read browser information
// Navigate between pages
// Display dialogs (alert, prompt, confirm, etc.).
// Control timers

// NOTE: BOM is provided by the browser, not JavaScript.

// All BOM objects exist inside window object.
// console.log(window);

//? Window Properties:
//? 1. document:
// document represents the HTML page loaded in the browser.
// When the browser loads a web page, it converts HTML into a DOM tree, and that tree is accessible using document.
// By using this, we can make changes in the HTML page.
// document belongs to DOM but it is accessed through BOM.

//? 2. screen:
// It provides the basic information about the user's screen like height, width, orientation, etc…
// console.log(screen.width); //How wide the monitor is
// console.log(screen.height); //How wide the monitor is

// Note: We cannot change these values because they belong to the hardware, not the browser.

//? 3. history:
// It will keep a track of web pages you opened and it will store as history. We
// can perform forward() , back() operations using this.

// history.back();     // Go to previous page
// history.forward();  // Go to next page
// history.go(-1);     // Same as back

//? 4. navigator:
// It provides information about browsers, like app name, app version,  Internet status, etc.,
// console.log(navigator.userAgent); // browser details
// console.log(http://navigator.onLine);    // true or false
// console.log(navigator.appName) // app name
// console.log(navigator.appVersion) // app  version

//? 5. location:
// It provides the basic information about the current location like path, hostname, href, etc.,
// console.log(location.href);  // full URL
// To redirect:
// location.href = "https://www.google.com"; // This tells the browser to open google page.

//? 6 & 7. innerHeight & innerWidth:
// These represent the visible area of the webpage.
// Ex:
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// This tells:
// How much space is available to show your website
// Used in responsive design.

//? 8 & 9. outerHeight & outerWidth:
// These represent the full browser window size, including: Tabs, Address bar, Borders
// Ex:
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// !Window methods:
// ?Dialog Methods:
//? 1. alert():
// Displays a simple message box with an OK button.
// Show information
// Warning messages
// Notifications
//? Syntax:
// alert(message);
// Ex: alert("Shivam look here");
//  ! Note:
// Stops execution until user clicks OK
// No return value
//? 2. prompt()
// Takes input from the user.
// Syntax
// prompt(message, defaultValue);4
// Returns:
// string → if user enters value
// null → if user clicks Cancel

// Ex 1: Without default value
// let a = Number(prompt("Value of a"));
// console.log(a);
// console.log(typeof a);
//? Input is always string, so we convert it using Number().

// Ex 2: With default value
// let b = Number(prompt("Value of a", "234"));
// console.log(b);

//? 3. confirm()
// Asks user to confirm an action.

// Syntax:
// confirm(message);
// Returns:
// true → OK
// false → Cancel
// Ex:
// let value = confirm("Are you sure you want to exit?");
// console.log(value);

// Commonly used before delete, logout, exit actions.

//? 2. Timer Methods
// Timers are used to delay execution or repeat tasks.

//? setTimeout()
// Executes a function once after a delay.

// Syntax:
// setTimeout(callback, delay);
// Ex:
// setTimeout(() => {
//   console.log("I am setTimeout");
// }, 3000);
// Runs after 3 seconds

//? clearTimeout()

// Stops a setTimeout() before execution.
// Syntax:
// clearTimeout(timeoutId);

// Ex:
// let timeId=setTimeout(() => {
//   console.log("I am setTimeout");
// }, 3000);

// clearTimeout(timeId);

//? setInterval()
// Executes a function repeatedly at fixed intervals.
//? Syntax:
// setInterval(callback, interval);
// Ex:
// setInterval(() => {
//   console.log("I am setInterval");
// }, 1000);
// Runs every 1 second
// ? clearInterval()
// Stops a running interval.
// ?Syntax:
// clearInterval(intervalId);
// Ex:
// let interval = setInterval(() => {
//   console.log("I am setInterval");
// }, 1000);
// clearInterval(interval);

//? 3. Window Control Methods
//open()
// Opens a new browser window or tab.
// Syntax:
// http://window.open(url, target, features);
// ?Parameters
// url → website URL
// target → _blank, _self
// features → height, width, etc.
// Ex:
// var newpge = open(
//   "https://www.w3schools.in/",
//   "_blank",
//   "height=500px,width=500px"
// );

//? close():
// Closes a window opened by JavaScript.

// Using open() & close() with HTML Buttons
//?  HTML (demo.html)

// <button onclick="newPage()">Open Window</button>
// <button onclick="closePage()">Close Window</button>

// ?JavaScript
// var newpge;

// function newPage() {
//   newpge = open(
//     "https://www.w3schools.in/",
//     "_blank",
//     "height=500px,width=500px"
//   );
// }

// function closePage() {
//   newpge.close();
// }

//!Note:
// Browser only allows closing windows opened by JavaScript
// Otherwise close() will fail 