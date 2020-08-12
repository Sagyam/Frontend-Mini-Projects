// //Console Output
// console.log("Hello World");
// console.error("This is an Error");
// console.warn("This is warning");
/* **************************************************************************************************/
// //Variables
// let age = 30;
// console.log(age);
// const pi = 3.14156;
// console.log(pi);
/* **************************************************************************************************/
// // String, Number, Boolean, Undefined, Null, Undefined
// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof y);
/* **************************************************************************************************/
// //Concatenaton
// const myName = "Sagyam";
// const myAge = 21;
// // console.log("My name is " + myName + " and I am " + myAge + " years old");
/* **************************************************************************************************/
// // Template String
// const greet = `My name is ${myName} and I am ${myAge} years old`;
// console.log(greet);
/* **************************************************************************************************/
// //String Methods
// const s = "Hello World";
// console.log(s.length);
// console.log(s.toLocaleLowerCase());
// console.log(s.toLocaleUpperCase());
// console.log(s.substring(0, 5).toLocaleUpperCase());
// console.log(s.split(" "));
/* **************************************************************************************************/
// //Arrays
// const numbers = new Array(1, 2, 3);
// const fruits = ["apple", "oranges", "banana"];
// console.log(numbers);
// console.log(fruits);

// console.log(fruits[1]);
// fruits[3] = "grapes";
// console.log(fruits[3]);

// fruits.push("mangoes");
// console.log(fruits[4]);

// fruits.unshift("pear");
// console.log(fruits);

// console.log(fruits.indexOf("mangoes"));
/* **************************************************************************************************/
// //Object literls
// const person = {
//   firstName: "Jon",
//   lastName: "Snow",
//   house: "Stark",
//   age: 24,
//   quotes: [
//     "The true enemy wont wait out the storm. He brings the storm",
//     "You know nothing Jon Snow",
//   ],
//   address: {
//     birthPlace: "Winterfell",
//     previousOffice: "The Wall",
//     currentAddress: "Beyond The Wall",
//   },
//   allegeance: "Daneryas Targaryean",
// };
// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.quotes[0]);

// //Destructuring
// const {
//   firstName,
//   lastName,
//   address: { birthPlace },
// } = person;
// console.log(birthPlace);

// //Add properties
// person.realLastname = "Targaryean";
// console.log(person.realLastname);

/* **************************************************************************************************/
// // Array of objects

// const todos = [
//   {
//     id: 1,
//     text: "Task 1",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Task 2",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Task 3",
//     isCompleted: false,
//   },
// ];
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

/* **************************************************************************************************/
// //For loops
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   i++;
// }

// //While loop
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 0; i < todo.length; i++) {
//   console.log(todo[i].text);
// }

// for (let t of todo) {
//   console.log(t.text);
// }
/* **************************************************************************************************/
//forEach, map, filter

// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//   return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function (todo) {
//   return todo.isCompleted === true;
// });
// console.log(todoText);

// //Chaining multiple functions
// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);
/* **************************************************************************************************/
//Conditionals

// const x = 10;
// if (x == 10) {
//   console.log("x is " + x + " and it's a " + typeof x);
// }

// const y = "10";
// if (y === "10") {
//   console.log("y is " + y + " and it's a " + typeof y);
// }

// if (x == 10 && y == "10") {
//   console.log("Yes");
// }

// Ternary Operator

// const x = 12;
// // ? is if
// //: is then
// const color = x > 10 ? "red" : "blue";
// console.log(color);

// // Switch Cases
// switch (color) {
//   case "red":
//     console.log("The color is red");
//     break;
//   case "blue":
//     console.log("The color is blue");
//     break;
//   default:
//     console.log("Neither");
//     break;
// }
/* **************************************************************************************************/

// Functions
// function addNum(a = 1, b = 1) {
//   return a + b;
// }
// console.log(addNum(1, 3));
// console.log(addNum());

// //Arrow Function
// const addNum = (a = 1, b = 1) => {
//   return a + b;
// };

// console.log(addNum(1, 3));
// console.log(addNum());
/* **************************************************************************************************/

// //OOP
// //Constructor function
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirtyear = function () {
//     return this.dob.getFullYear();
//   };
//   this.getFullName = function () {
//     return `${this.firstName}  ${this.lastName}`;
//   };
// }
// // Instanciate object
// const person1 = new Person("John", "Doe", "12-8-2020");
// console.log(person1);
// console.log(person1.dob.getFullYear());
// console.log(person1.getBirtyear());
// console.log(person1.getFullName());
/* **************************************************************************************************/
// //Prototype
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }
// //Using prototype funtion saves memory as the same function is shared by the every object
// Person.prototype.getBirtyear = function () {
//   return this.dob.getFullYear();
// };
// Person.prototype.getFullName = function () {
//   return `${this.firstName}  ${this.lastName}`;
// };

// // Instanciate object
// const person1 = new Person("John", "Doe", "12-8-2020");

// console.log(person1.getBirtyear());
// console.log(person1.getFullName());
/* **************************************************************************************************/
// //Classes (introduced in ES6)
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirtyear = function () {
//     return this.dob.getFullYear();
//   };
//   getFullName = function () {
//     return `${this.firstName}  ${this.lastName}`;
//   };
// }

// const person1 = new Person("John", "Doe", "12-8-2020");

// console.log(person1.getBirtyear());
// console.log(person1.getFullName());
/* **************************************************************************************************/
