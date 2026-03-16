// Call Apply Bind
// we use these fnc to point the this the specific object otherwise it point to the Window Object 

let obj = {
  name: "veeresh",
  age: 22,
  city: "Banglore",
};
let newObj = {
    name : 'kiran',
    age : 20,
    city:'gadag'
}
// call apply  bind


function details(agr1, arg2) {
  console.log(`I am ${this.name} am ${this.age} old and am from ${this.city} `);
  console.log(`skills are ${agr1} and ${arg2}`);
}
// details('java','sql')

// using call apply bind
details.call(obj, "javascript", "java");
details.apply(obj,[ "javascript", "java" ]);
let det = details.bind(obj );
det("javascript", "java");
det("SQL", "Web Tech");

//
// using call apply bind
details.call(newObj, "javascript", "java");
details.apply(newObj,[ "javascript", "java" ]);
let det1 = details.bind(newObj );
det1("javascript", "java");
det1("SQL", "Web Tech");