"use strict";
// var ingredients = [
//   prompt("Lets make pasta! Ingredient 1"),
//   prompt("Lets make pasta! Ingredient 2"),
//   prompt("Lets make pasta! Ingredient 3"),
// ];
// console.log(...ingredients);
// function pastaIngr(ing1, ing2, ing3) {
//   console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3} `);
// }

// pastaIngr(...ingredients); //using spread operator as the parameter of a function
// Note: primitive values are stored in the call stack, reference types are stored in the memory heap

/************** DAY 9: SPREAD OPERATOR*****************/
// const person = {
//   fullName: "John Smith",
//   age: 12,
//   friends: ["Joe", "Stones", "Vincent"],
// };
// const person2 = {
//   fullName2: "Adam Williams",
//   age2: 20,
//   hobby: {
//     morning: "Jogging",
//     afternoon: "Playing chess",
//     evening: "Playing video games",
//   },
// };
// person2.age = 20;
// person2.fullName = "Adam Williams";
// console.log(person);
// console.log(person2);
// const everybody = {
//   ...person,
//   ...person2,
// };
// var length = Object.keys(everybody).length; //get the length of an object
// console.log(everybody, length); //spread operator using javascript object

// const person3 = { job: "trader", ...person };
// person3.age = 32;
// console.log(person3, person);

/**************REST OPERATOR[opposite of spread operator]*****************/
// 1. Rest with destructuring
const arr = [1, 2, ...[3, 4]];
console.log(arr);

const arr2 = [5, 10, 15, 20];

const [first, second, , fourth, ...otherNumbers] = [...arr, ...arr2];
console.log(first, second, fourth, otherNumbers); //rest with arrays
//output: first = 1, second = 2, fourth = 4, otherNumbers = [5, 10, 15, 20]

const person = {
  fullName: "John Smith",
  age: 12,
  friends: ["Joe", "Stones", "Vincent"],
  job: "Waiter",
  orderMenu: function () {
    console.log(`${this.fullName}! menu was called`);
  },
};
const person2 = {
  fullName2: "Adam Williams",
  age2: 20,
  hobby: {
    morning: "Jogging",
    afternoon: "Playing chess",
    evening: "Playing video games",
  },
};

const { hobby, ...otherDetails } = { ...person2 };
console.log(hobby, otherDetails); //rest with objects
//Output: hobby = { morning: "Jogging", afternoon: "Playing chess", evening: "Playing video games",} , oherDetails = {fullName2: 'Adam Williams', age2: 20}

// 2. Rest with Functions
let addNum = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}; //function that finds the sum any group of numbers
addNum(1, 2, 3); //output = 6
addNum(5, 6, 7); //output = 18
addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //output = 55
const x = [5, 10, 15];
addNum(...x); //output = 30

/*

 1. Spread operator is used where values are seperated by commas, while Rest Operator is used where variables are seperated by commas.
 
 2. Spread is on the RHS of the = , and the Rest is on the LHS of the =

*/

/*********************** DAY 10 : SHORT CIRCUITING[ && , || ] *******************************/
/*
  1. The OR operator would always return a truthy value! such as true, " ", string, number etc.

  2. The AND operator would always return a falsy value! such as false, "", null, undefined etc.
*/

console.log(undefined || true); //true
console.log(null || undefined); //undefined
console.log(0 || undefined); //undefined
console.log(undefined || 0); //0
console.log("Jonas" || "Jude"); //Jonas
console.log(false || true); //true
console.log(3 || " "); //3
console.log("" || 3); //3

null == true ? console.log("1") : console.log("2"); //2
if (undefined) {
  console.log(true);
} else {
  console.log(false);
} //check if undefined is truthy || falsy value[output: false]

person && person.orderMenu();
console.log(true && false); //false
console.log("" && false); // ""

var randVar = person.position || 100;
console.log(randVar);

/*********************** NULLISH COALESCIAN OPERATOR [ ?? ] *******************************/

console.log("david" ?? null); //david
console.log(null ?? "henry"); //henry
console.log(null ?? true); //true
console.log(null ?? false); //false
console.log(undefined ?? null); //null

person.position = 0;
var randVar = person.position ?? 100;
console.log(randVar); //0
