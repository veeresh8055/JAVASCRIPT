🚀 JAVASCRIPT OBJECTS — FULL MASTER NOTES
🔹 1. What is an Object?

👉 A collection of key–value pairs

let obj = {
  name: "veeresh",
  age: 22
};
Keys → strings (or symbols)
Values → anything (string, number, array, function, object…)
🔹 2. Ways to Create Objects
✅ Object literal (most common)
let obj = { a: 1 };
✅ Constructor function
function Person(name) {
  this.name = name;
}
let p1 = new Person("veeresh");
✅ Class (modern way)
class Person {
  constructor(name) {
    this.name = name;
  }
}
✅ Object.create()
let obj = Object.create({ x: 10 });

👉 Important for prototypes

🔹 3. Accessing Properties
obj.name        // dot notation
obj["name"]     // bracket notation

👉 Use bracket when:

key is dynamic
key has spaces
🔹 4. Add / Update / Delete
obj.city = "Gadag";     // add
obj.age = 25;           // update
delete obj.age;         // delete
🔹 5. Methods (Functions inside objects)
let obj = {
  name: "veeresh",
  greet() {
    console.log(this.name);
  }
};
🔥 6. this Keyword (VERY IMPORTANT)
👉 Rule:

this = object that calls the function

obj.greet(); // this → obj
❗ Interview trap
let fn = obj.greet;
fn(); // this → undefined (or window in non-strict)
✅ Fix with bind
let fn = obj.greet.bind(obj);
fn();
🔹 7. Objects are Reference Types
let a = { x: 1 };
let b = a;

b.x = 10;

console.log(a.x); // 10 😲

👉 Both point to same memory

🔹 8. Shallow vs Deep Copy
❌ Shallow copy
let obj2 = { ...obj };

👉 Nested objects still share reference

✅ Deep copy
let deep = JSON.parse(JSON.stringify(obj));

OR (modern)

structuredClone(obj);
🔹 9. Looping Objects
for (let key in obj) {
  console.log(key, obj[key]);
}
Better methods
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
🔹 10. Destructuring
let { name, age } = obj;
With rename
let { name: username } = obj;
🔹 11. Spread & Rest
let newObj = { ...obj, marks: 100 };
🔹 12. Optional Chaining
obj.address?.city

👉 Prevents crash if undefined

🔹 13. Property Checks
"name" in obj
obj.hasOwnProperty("name")
🔥 14. Object.freeze vs seal
Object.freeze(obj);

👉 No changes allowed

Object.seal(obj);

👉 Can modify but not add/delete

🔹 15. Computed Properties
let key = "age";

let obj = {
  [key]: 22
};
🔥 16. Prototype (VERY IMPORTANT)

👉 Every object has hidden link → [[Prototype]]

let obj = {};
console.log(obj.__proto__);
Example
let parent = {
  greet() {
    console.log("hello");
  }
};

let child = Object.create(parent);
child.greet(); // inherited
🔥 17. Prototype Chain

👉 JS looks for property like this:

object → prototype → prototype → null
🔹 18. Constructor + Prototype
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log("Hi");
};

👉 Memory efficient

🔹 19. Classes (syntactic sugar)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hi");
  }
}

👉 Internally uses prototypes

🔹 20. Object.defineProperty
Object.defineProperty(obj, "name", {
  value: "veeresh",
  writable: false
});

👉 Control behavior of properties

🔹 21. Getter & Setter
let obj = {
  get name() {
    return "veeresh";
  }
};
🔥 22. this in Arrow Function
let obj = {
  name: "veeresh",
  greet: () => {
    console.log(this.name);
  }
};

❌ this does NOT refer to object

👉 Arrow uses outer this

🔹 23. JSON vs Object
JSON.stringify(obj)
JSON.parse(json)

👉 JSON is string format

🔹 24. Object Comparison
{} === {} // false

👉 Compare by reference, not value

🔥 25. Interview MUST-KNOW Questions

Be ready for these:

✅ Q1: Difference between shallow & deep copy
✅ Q2: How this works
✅ Q3: Object vs Map
✅ Q4: Prototype chain
✅ Q5: Arrow vs normal function in object
✅ Q6: Object.freeze vs seal
✅ Q7: How to clone object
✅ Q8: How inheritance works in JS
✅ Q9: in vs hasOwnProperty
✅ Q10: How JS searches properties (prototype chain)
🧠 Final Truth (Very Important)

👉 Objects are the core of JavaScript

If you master:

this
prototypes
reference behavior

👉 You understand 80% of JavaScript deeply