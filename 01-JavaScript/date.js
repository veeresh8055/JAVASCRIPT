//! DATE OBJECT:
// Date is a built-in JavaScript object
// Used to work with date and time
// Date internally stores time in milliseconds
// Reference date: Jan 1, 1970 

//? Creating Date Object (Current Date & Time)

// let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// ? Get Methods of Date Object

// console.log(date.getFullYear());       // Year (YYYY)
// console.log(date.getMonth());          // Month (0–11)
// console.log(date.getDate());           // Day of month (1–31)
// console.log(date.getDay());            // Day of week (0–6)
// console.log(date.getHours());          // Hours
// console.log(date.getMinutes());        // Minutes
// console.log(date.getSeconds());        // Seconds
// console.log(date.getMilliseconds());   // Milliseconds

//? Creating Date using String Format
// Format: "YYYY-MM-DD" or "YYYY/MM/DD"

// let date = new Date("2026-02-20");
// console.log(date);

//? Creating Date using Parameters
// new Date(year, month, day, hours, minutes, seconds)
// Month is 0-based (0 = January)

// let date = new Date(2026, 1, 22, 12);
// console.log(date);

//? http://Date.now()
// Returns current time in milliseconds from Jan 1, 1970

// let date = http://Date.now();
// console.log(date);
// console.log(date / (1000 * 60 * 60 * 24 * 365)); // Convert to years

//? Set Methods of Date Object

// let setDate = new Date();
// console.log(setDate);

// setDate.setFullYear(2030);
// setDate.setMonth(1);
// setDate.setDate(1);
// setDate.setHours(12);
// setDate.setMinutes(1);

// console.log(setDate);

//? Real-Time Example (Experience Calculator)

// Prabhat joined in a company on 12-april-2026 and left on 21-nov-2029.
// find the experience of prabhat in company.

// let start = new Date("2026/4/12");
// let left = new Date("2029/1/1");

// let years = left.getFullYear() - start.getFullYear();
// let months = left.getMonth() - start.getMonth();
// let days = left.getDate() - start.getDate();

// if (days < 0) {
//   months--;
//   days += 30;
// }

// if (months < 0) {
//   years--;
//   months += 12;
// }

// console.log(`${years} years ${months} months and ${days} days`);
//! DATE OBJECT:
// Date is a built-in JavaScript object
// Used to work with date and time
// Date internally stores time in milliseconds
// Reference date: Jan 1, 1970 

//? Creating Date Object (Current Date & Time)

// let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// ? Get Methods of Date Object

// console.log(date.getFullYear());       // Year (YYYY)
// console.log(date.getMonth());          // Month (0–11)
// console.log(date.getDate());           // Day of month (1–31)
// console.log(date.getDay());            // Day of week (0–6)
// console.log(date.getHours());          // Hours
// console.log(date.getMinutes());        // Minutes
// console.log(date.getSeconds());        // Seconds
// console.log(date.getMilliseconds());   // Milliseconds

//? Creating Date using String Format
// Format: "YYYY-MM-DD" or "YYYY/MM/DD"

// let date = new Date("2026-02-20");
// console.log(date);

//? Creating Date using Parameters
// new Date(year, month, day, hours, minutes, seconds)
// Month is 0-based (0 = January)

// let date = new Date(2026, 1, 22, 12);
// console.log(date);

//? http://Date.now()
// Returns current time in milliseconds from Jan 1, 1970

// let date = http://Date.now();
// console.log(date);
// console.log(date / (1000 * 60 * 60 * 24 * 365)); // Convert to years

//? Set Methods of Date Object

// let setDate = new Date();
// console.log(setDate);

// setDate.setFullYear(2030);
// setDate.setMonth(1);
// setDate.setDate(1);
// setDate.setHours(12);
// setDate.setMinutes(1);

// console.log(setDate);

//? Real-Time Example (Experience Calculator)

// Prabhat joined in a company on 12-april-2026 and left on 21-nov-2029.
// find the experience of prabhat in company.

// let start = new Date("2026/4/12");
// let left = new Date("2029/1/1");

// let years = left.getFullYear() - start.getFullYear();
// let months = left.getMonth() - start.getMonth();
// let days = left.getDate() - start.getDate();

// if (days < 0) {
//   months--;
//   days += 30;
// }

// if (months < 0) {
//   years--;
//   months += 12;
// }

// console.log(`${years} years ${months} months and ${days} days`);