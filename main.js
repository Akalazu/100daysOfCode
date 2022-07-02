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

let friends = ["Joe", "Stones", "Vincent"];
let periodOfTheDay = ["morning", "afternoon", "evening"];
var numb = Symbol("66");
console.log(typeof numb);
const person = {
  fullName: "John Smith",
  age: 12,
  friends,
  [numb]: 404,
  job: "Waiter",
  orderMenu: function (param) {
    return `Waiter ${this.fullName} was called to bring ${param}`;
  },
};
const person2 = {
  fullName2: "Adam Williams",
  age2: 20,
  hobby: {
    [periodOfTheDay[0]]: "Jogging",
    [periodOfTheDay[1]]: "Playing chess",
    [periodOfTheDay[2]]: "Playing video games",
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

/*********************** LOGICAL ASSIGNMENT OPERATORS*******************************/

person.children = person.children ?? 2;
console.log(person.children); //2
person.children = 0;
person.children ??= 2;
console.log(person.children); //0

person.gender = person.gender || "male";
console.log(person.gender); //male
delete person.gender;
person.gender ||= "female";
console.log(person.gender); //female

person.hobby =
  person.hobby && "[coding, playing video games, solving maths problems]";
console.log(person.hobby); //undefined
person.hobby = "watching cartoons";
person.hobby &&= "[coding, playing video games, solving maths problems]";
console.log(person.hobby); //[coding, playing video games, solving maths problems]

/*********************** FOR OF LOOP also the use of Object.entries() *******************************/
// let personArr = Object.entries(person2);
// console.log(...personArr);

// const newArr = ["corn", "maize", "beef"];
// for (const latestArr of newArr.entries()) {
//   // console.log(latestArr);
//   console.log(...latestArr);
// }
// for (const [key, element] of newArr.entries())
//   console.log(key + " : " + element);

/*********************** Coding challenge by jonas under data sturctures and modern operators *******************************/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let [players1, players2] = game.players;
console.log(players1);
console.log(players2);
// console.log(player1.length);

let [gk1, ...fieldPlayers1] = players1;
let [gk2, ...fieldPlayers2] = players2;

var allPlayers = [...players1, ...players2];
console.log(allPlayers);

let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

let { team1, x: draw, team2 } = game.odds;
console.log(team2);

const printGoals = function (...playerNames) {
  console.log(`Goals scored by: ${playerNames}`);
  console.log(`They've now scored a total of ${playerNames.length} goals`);
};
// printGoals(["Gnarby", "Lewandowski"]);
printGoals("Gnarby", "Lewandowski", "Hummels");

team1 < team2 && console.log("team 2 is more likely to win");
team2 < team1 || console.log("team 2 is more likely to win");

/*********************** OPTIONAL CHAINING (?.))*******************************/
console.log(person2.hobbies?.morning);

let ouputCons = person2.hobbies && person2.hobbies.Morning;
console.log(ouputCons);

let obj = {
  fName: "Stones",
  nationality: "American",
  pet: {
    type: "dog",
    name: "busky",
  },
  occupation: "bartender",
  workingHours: {
    thur: {
      open: 8,
      close: 5,
    },
    fri: {
      open: 11,
      close: 7,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};
const daysOfTheWeek = [
  // { month: "July" },
  "mon",
  "tue",
  "wed",
  "thur",
  "fri",
  "sat",
  "sun",
];
for (const days of daysOfTheWeek)
  console.log(obj.workingHours[days]?.open ?? `We don't open on ${days}`);

let temp = obj.pet?.name ?? "Slack";
console.log(temp);

console.log(daysOfTheWeek[0]?.month ?? "First value of array doesn't exist");
// person.orderMenu?.() ?? console.log('object');
console.log(person.orderMenu?.("pasta") ?? "Object");

/*********************** OBJECT DATA KEYS, VALUES AND ENTRIES*******************************/

//keys
let keys = Object.keys(person);
// console.log(keys); [0: "fullName","age","friends", "job", "orderMenu","position", "children", "gender", "hobby"]
console.log(Object.keys(person).length); //9

//values
console.log(Object.values(person).length); //9

//entries
let entries = Object.entries(person);
console.log(entries); //Turning an array to an Object
console.log(...entries.entries()); //nested array with index
for (const [index, [key, value]] of entries.entries())
  console.log(index, key, value); //looping over an object

console.log(...daysOfTheWeek);
console.log("mon", "tue", "wed", "thur", "fri", "sat", "sun");

/*********************** SETS*******************************/
const newSets = new Set(["Pizza", "Pasta", "Pizarro", "pasta", "Pizarro"]);
newSets.add("Spaghetti");
newSets.values("pasta");
newSets.delete("Pizarro");
newSets.delete("Spaghetti");
newSets.clear();
// console.log(newSets);

let staffs = [
  "Security",
  "Manager",
  "Chef",
  "Secretary",
  "Waiter",
  "Security",
  "Chef",
];

const allStaff = [...new Set(staffs)];
console.log(allStaff);
console.log(new Set("Accommodation"));
/*********************** UNION OF SETS *******************************/
function unionFn(a, b) {
  let unionOfSet = new Set(a);
  for (const i of b) {
    unionOfSet.add(i);
  }
  return unionOfSet;
}
let setA = [1, 2, 2, 2, 3, 4, 5];
let setB = [6, 7, 8, 9];
console.log(unionFn(setA, setB)); //{1, 2, 3, 4, 5, 6, 7, 8, 9};
/*********************** INTERSECTION OF SETS *******************************/
function intersectionFn(a, b) {
  let intersection = new Set(a);
  let intersectionOfSet = new Set();
  for (const i of b) {
    if (intersection.has(i)) {
      intersectionOfSet.add(i);
    }
  }
  return intersectionOfSet;
}
setA = [1, 2, 2, 2, 3, 4, 5];
setB = [2, 5, 6, 7, 8, 9];
console.log(intersectionFn(setA, setB)); //{2, 5}

/*********************** DIFFERENCE OF SETS *******************************/
function setDiff(a, b) {
  let diffOfSet = new Set(a);
  for (const i of b) {
    if (diffOfSet.has(i)) {
      diffOfSet.delete(i);
    }
  }
  return diffOfSet;
}
setA = [1, 2, 2, 5, 7, 8];
setB = [2, 6, 7, 8, 9];
console.log(setDiff(setA, setB)); //{1, 5}

/*********************** SUBSET OF SETS *******************************/
function subset(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  let subsets = new Set();
  for (const i of setB) {
    if (setA.has(i)) {
      subsets.add(i);
    }
  }
  let final = subsets.size == setB.size ? true : false;

  return final;
}
setA = [1, 2, 3, 4, 5];
setB = [2, 1, 5, 1, 5, 5];
console.log(subset(setA, setB)); //true
setA = [1, 2, 3, 4, 5];
setB = [1, 5, 5, 5, 6];
console.log(subset(setA, setB)); //false
/*********************** MAPS *******************************/

const myMap = new Map();
myMap.set("Name", "John");
myMap.set(true, "He is present in class today");
myMap.set(false, "He is absent in class today");
console.log(myMap.get(true)); //He is present in class today
console.log(myMap.has("Name")); //true
console.log(typeof myMap); // object
console.log(myMap.delete("Name"));
myMap.set("fullname", "Slevester Leon");

const isAbsent = true;
console.log(`Report on ${myMap.get("fullname")}: ${myMap.get(isAbsent)}`);

myMap.set(person, "Object");
myMap.set(daysOfTheWeek, "Array");
console.log(myMap.keys());
console.log(myMap.values());
console.log([...myMap.entries()]);

const question = new Map([
  ["Question", "Question: What is the best programming Langauge in the world?"],
  [1, "A: C#"],
  [2, "B: JavaScript"],
  [3, "C: Python"],
  [4, "D: PHP"],
  ["Answer", 2],
  [true, `Correct! 👏🎉`],
  [false, "Wrong, Try Again"],
]);

console.log(question.get("Question"));
for (const i of question.keys()) {
  if (typeof i === "number") {
    console.log("Option " + question.get(i));
  }
}
// let answer = Number(
//   prompt(
//     "Input your option as a Number e.g 1 is for Option A , 3 is for Option C"
//   )
// );
// console.log(answer);
// console.log(`${question.get(answer === question.get("Answer"))}`);

// /*********************** Coding Challenge 3 *******************************/
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow Card"],
  [69, "🟥 Red Card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow Card"],
]);

const eventTime = [...gameEvents.keys()].pop();
console.log(eventTime); //92
let events = new Set();
for (const [, value] of gameEvents) {
  events.add(value);
}
console.log(events); //Created an array 'events' of the different game events that happened (no duplicates)

gameEvents.delete(64); //After the game has finished, is was found that the yellow card from minute 64 was unfair. so i remove this event from the game events log.
console.log(gameEvents);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
); //Print the following string to the console: "An event happened, on average, every 9 minutes"
console.log(
  `An event happened, on average, every ${eventTime / gameEvents.size} minutes`
); //Print the following string to the console: "An event happened, on average, every 9 minutes"
for (const [key, value] of gameEvents) {
  const stats =
    key < 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`;
  console.log(stats);
} //Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game.
//what are iterables? 2. Sets.values()

var str = "David Akalazu";
console.log(str.charAt(3));
console.log(str.concat(" Akalazu"));
console.log(str.length);
console.log(str.indexOf(" "));
console.log(str.lastIndexOf("a"));
console.log(str.split());
console.log(str.slice(0, str.lastIndexOf(" ")));
console.log(str.slice(str.lastIndexOf(" ") + 1));
console.log(str.includes("David"));

// let studentCode = prompt("Input your student code").toUpperCase();
// //SAFM
// let studMap = new Map([
//   ["SAF", "You are a WAEC student"],
//   ["SAG", "You are a JAMB student"],
// ]);
// // console.log(studMap.key("SAF"));
// let morn = "M";
// let eve = "E";
// // console.log(studentCode.slice(0, 4));
// let codes = [...studMap.keys()];
// console.log(codes);
// var result =
//   studentCode.slice(0, 3) === codes[0] && studentCode.charAt(3) === morn
//     ? `${studMap.get("SAF")} who registered for morning classes`
//     : `${studMap.get("SAG")} who registered for morning classes`;
// var result2 =
//   studentCode.slice(0, 3) === codes[1] && studentCode.charAt(3) === eve
//     ? `${studMap.get("SAG")} who registered for evening classes`
//     : `${studMap.get("SAF")} who registered for evening classes`;

// // }
// studentCode.charAt(3) === morn && console.log(result);
// studentCode.charAt(3) === eve && console.log(result2);

console.log("Mason Greenwood".padStart(20, "*"));

// /*********************** Mask Number *******************************/
function starNumb(value) {
  let realNumb = String(value);
  return realNumb.slice(-4).padStart(realNumb.length, "*");
}
console.log(starNumb(456782863719201));
console.log(starNumb("0552572247"));

// /*********************** Mask Email *******************************/
//shows the first two letters of your email and 'stars' the rest till it gets to the '@'
// let userInput = prompt("Kindly Input your email");
function starMail(mail) {
  let realMail = mail.slice(0, mail.indexOf("@"));
  return (
    mail.slice(0, 2).padEnd(realMail.length, "*") +
    mail.slice(mail.lastIndexOf("@"))
  );
}
console.log(starMail("nicholasinnocent@gmail.com")); //ni**************@gmail.com
console.log(starMail("leonardogodfrey035@outlook.com")); //le****************@outlook.com
// console.log(starMail("akalazu@yahoo.com"));

console.log("lor:em:Ipsum".split(/::?/));
console.log("object".toUpperCase());

// /*********************** Capitalization Function *******************************/
// let userInput = prompt("What is your name?");
// capitalize(userInput);
function capitalize(str) {
  str = str.toLowerCase();
  let realStr = str.split(" ");
  // console.log(realStr);
  let strUpper = [];
  for (const i of realStr) {
    strUpper.push(i[0].toUpperCase() + i.slice(1));
  }
  console.log(strUpper.join(" "));
}
capitalize("Abraham mason");
capitalize("Oluwasegun Ladipo kevin smiTH jONAs nelson");
capitalize("okebaram precious");

// /*********************** Coding Challenge 4 *******************************/
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// let userText = document.querySelector("textarea");
// const userBtn = document.querySelector("button");
// userBtn.innerHTML = "Submit";
// userBtn.style.fontSize = "3em";
// userBtn.style.border = "transparent";

// userBtn.addEventListener("click", function () {
//   let userTextVal = userText.value;
//   let userTextValArr = userTextVal.split("\n");
//   let counter = 0;
//   for (let i of userTextValArr) {
//     counter++;
//     i = i.toLowerCase();
//     var camelCaseStr =
//       i.slice(0, i.indexOf("_")).replace("_", " ") +
//       i.slice(i.indexOf("_") + 1, i.indexOf("_") + 2).toUpperCase() +
//       i.slice(i.indexOf("_") + 2);
//     console.log(`${camelCaseStr.padEnd(20)} ${"✅".repeat(counter)}`);
//   }
// });
/* 
court_case ==> courtCase ✅
first_name ==> firstName ✅✅
self_Taught ==> someVariable ✅✅✅
Calculate_AGE ==> calculateAge ✅✅✅✅
server_SPIT ==> serverSpit ✅✅✅✅✅
 */

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = (str) => {
  return str.slice(0, 3).toUpperCase();
};
for (const i of flights.split("+")) {
  let [status, from, to, time] = i.split(";");
  let result = `${
    status.startsWith("_Delayed") ? "🔴" : ""
  } ${status.replaceAll("_", " ")} ${getCode(from)} ${getCode(
    to
  )} (${time.replace(":", "h")})`.padStart(55);
  console.log(result);
}
/*********************** A closer Look at Functions: Setting Default Parameters *******************************/

let orderMeal = function (
  swallow,
  soup = "Egusi",
  addExtra = false,
  numbOfMeat = 1,
  price = 400 + numbOfMeat * 100
) {
  // ES5 way of setting default parameters
  // soup = soup || "Egusi";
  // addExtra = addExtra || true;
  const order = {
    swallow,
    soup,
    addExtra,
    numbOfMeat,
    price,
  };
  console.log(order);
};

orderMeal("Eba", "Oha and Vegetable", true, 4);

const david = {
  name: "Akalazu Udo",
  age: 18,
};

const udo = david;
udo.age = 24;
console.log(udo, david);

let strr = "I am a dummy";

let newStrr = strr;

strr = "i am not a dummy";
console.log(strr, newStrr);

/*********************** Accepting Callback functions *******************************/
let oneWord = function (word) {
  return word.replace(/ /g, "").toLowerCase();
};
let firstUpper = function (str) {
  let [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
const transformStr = function (str, fn) {
  console.log(`This is the transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}; //transformStr is a high order function

transformStr("Jesus is my all in all", firstUpper);
transformStr("Jesus is my all in all", oneWord);

//abstraction in JS, functions that return functions

const greet = function (str) {
  return function (name) {
    console.log(`${name} is greeting ${str}`);
  };
};
greet("Good Morning")("Jonas");

const greet2 = (greet) => (name) => console.log(`${name} is greeting ${greet}`);

greet2("Hey")("Jude");

/*********************** Call, Apply and Bind *******************************/
const bekview = {
  flightName: "Bekview Flights",
  flightCode: "BK",
  bookings: [],
  book(flightNum, passName) {
    console.log(
      `${passName} just booked a seat on ${this.flightName} with flight number ${this.flightCode}${flightNum}`
    );
    this.bookings.push(flightNum, passName);
  },
};

const airwick = {
  flightName: "Airwick Airs",
  flightCode: "AA",
  bookings: [],
};

let book = bekview.book;
book.call(bekview, 12, "Zed");
bekview.book(123, "Serena Williams");
bekview.book(453, "Sarah serverSpit");
book.call(airwick, 190, "Jude Ashley");
console.log(bekview);
console.log(airwick);

// var name = "Global Ride";
const firstCar = {
  name: "Toyota Camry 2020 Model",
  isFaulty: false,
  switchOn() {
    console.log(`${this.name} is switching on`);
  },
  switchOff() {
    console.log(`${this.name} is switching off`);
  },
};

const secondCar = {
  name: "Mercedes Benz",
  isFaulty: false,
};

let switchOff = firstCar.switchOff;
let switchOn = firstCar.switchOn;
switchOff.call(secondCar);
switchOn.call(secondCar);

let randArr = [1, 2, 3];

let sample = bekview.book.bind(airwick);
// sample(113, "Adam Smith");
// sample(891, "Joe Biden");
const swiss = {
  flightName: "Swiss Airs",
  flightCode: "SS",
  bookings: [],
};
let sample2 = bekview.book.bind(swiss, 777);

sample2("Allegra");

function calcTax(rate, value) {
  console.log(rate * value + value);
}
let tax = calcTax.bind(null, 0.25);
tax(100);

let calcTaxes = (rate, value) => rate * value + value;
let finalTaxes = calcTaxes.bind(null, 0.5);
console.log(calcTaxes(0.5, 100));
console.log(finalTaxes(100));
console.log(finalTaxes(190));

const taxRate = function (rate) {
  return (value) => rate * value + value;
};

var randVatt = taxRate(0.5);
console.log(randVatt(100));
// console.log(taxRate(100));
// console.log(randVatt);

/*********************** Coding Challenge 1*******************************/

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   displayResults(type = "Array") {
//     if (type === "Array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log("Current poll results are: " + this.answers.join(" "));
//     }
//   },
//   registerNewAnswer() {
//     let inputVal = Number(
//       prompt(`${this.question}\n ${this.options.join("\n")}`)
//     );
//     if (inputVal < this.options.length) {
//       this.answers[inputVal] += 1;
//       let displayResult = this.displayResults.bind(poll.registerNewAnswer);
//       this.displayResults("string");
//     } else {
//       alert("Wrong Input ❌");
//     }
//   },
// };
// // poll.registerNewAnswer();

//voting casting system
// const poll = {
//   title: "Who do you vote for as president?",
//   options: [
//     "1: Atiku Abubakar",
//     "2: Ahmed Tinubu",
//     "3: Peter Obi",
//     "4: Ike Ekweremadu",
//   ], //[1: Atiku Abubakar - 1, 2: Ahmed Tinubu - 0,3: Peter Obi"- 0, 4: Ike Ekweremadu" - 0]
//   results: new Array(4).fill(0),
//   castVote() {
//     const cast = Number(prompt(`${this.title} \n ${this.options.join("\n")}`));
//     if (cast <= this.results.length) {
//       console.log(this.options[cast - 1]);
//       this.results[cast - 1]++;
//     } else {
//       alert("Wrong Input ❌");
//     }
//     this.displayResults();
//   },
//   displayResults() {
//     for (let i = 0; i < this.results.length; i++) {
//       // console.log(this.options[i], this.results[i]);
//       let lol = this.results[i] < 2 ? "vote" : "votes";
//       let finResult = `${this.options[i]} has ${this.results[i]} ${lol}`;
//       console.log(finResult);
//     }
//     // console.log(this.results);
//   },
// };
// let register = poll.castVote;
// let pollBtn = document.querySelector(".answer-poll");

// pollBtn.addEventListener("click", register.bind(poll));

//function that creates a sayName method in an object
const mixName = function (obj) {
  obj.sayName = function () {
    console.log(this.name);
  };
};
const me = {
  name: "Tyler",
  age: 12,
};
me.sayName = function () {
  console.log(this.name);
};
me.sayName();
console.log(me);

//function that returns an object
const newSoul = function (name, gender, isAlive) {
  return {
    name: name,
    gender: gender,
    isAlive: isAlive,
  };
};
console.log(newSoul("Stacey", "Female", false));

/*********************** Closures and self invoking functions *******************************/
//IIFE(Immediately Invoking Function Expression) was invented for data privacy
(function (a, b) {
  console.log("this is a self invoking function", a + b);
  return a + b;
})(5, 9);

var counter = function () {
  let currentCount = 1;

  return function () {
    currentCount++;
    console.log(currentCount);
  };
};
let count = counter();
count();
count();
console.dir(count);

function greeting() {
  let message = "hey there!";

  return function sayHi() {
    console.log(message);
  };
}
let hi = greeting();
hi();

//CASE 1
// for (var index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log("after " + index + " second(s) " + index);
//   }, index * 1000); //Output: after 4 second(s) 4 [3times]
// }
// //CASE 2
// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.dir(index);
//     console.log("after " + index + " second(s) " + index);
//   }, index * 1000);
// } //Output: after 1 second(s) 1, after 2 second(s) 2, after 3 second(s) 3

// let call2 = "para";
// function callPara(para) {
//   var call = para;
//   var call = "Last Str";
//   let call2 = "Lastest Str";
//   console.log(call, call2);
// }

/*********************** Variable initializaion & declaration, use of let, const and var *******************************/

var input; //variable declaration
let input2;
// input2 = 4; //variable initialization
console.log(input, input2);

function sayMyName(name) {
  let myName = name;
  if (myName.length < 20) {
    var report = "Name is eligible";
    console.log(report);
  } else {
    report = "Name is not eligible";
    console.log(report);
  }
}
sayMyName("Akimbo lawrence oluwasegun tohib"); // when report is declared with a "var" this codes run without but if declared with "let or const" it'll give errors cos they're block scoped and not function scoped. OUTPUT: "Name is not eligible";

// let a;
// a =4;
// console.log(a);

// a = 5;
// console.log(a);
// var a;
/*********************** Learning Math Object and its methods *******************************/

console.log(Math.PI);
console.log(Math.sign(Math.PI));
console.log(Math.sign(Math.E));
console.log(Math.abs(-Math.PI));
console.log(Math.sqrt(64));
console.log(Math.sqrt(81));
console.log(Math.pow(4, 3));
console.log(Math.max(...[3, 2, 5, 55]));
console.log(Math.min(...[3, 2, 5, 55]));
console.log(Math.round(4.5333));
console.log(Math.round(6.46));
console.log(Math.ceil(3.1));
console.log(Math.ceil(6.0001));
console.log(Math.floor(4.0));
console.log(Math.trunc(12.11));
console.log(Math.trunc(1.0));
console.log(Math.sin((Math.PI / 180) * 60));
console.log((Math.atan2(0, -1) * 180) / Math.PI);

/*********************** Learning Date Object and its methods *******************************/
let d;

d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());

/*********************** Array methods *******************************/

const items = [
  {
    name: "Bike",
    price: 100,
  },
  {
    name: "Biscuit",
    price: 70,
  },
  {
    name: "Laptop",
    price: 1200,
  },
  {
    name: "Bread",
    price: 450,
  },
];

let filteredItem = items.filter((item) => {
  return item.price < 100;
});
console.log(filteredItem);

let mappedItem = items.map((item) => {
  return item.name;
});

console.log(mappedItem);

let findItem = items.find((item) => {
  return item.price === 70;
});

console.log(findItem);

let foreachItem = items.forEach((item) => {
  console.log(item.name, item.price);
});

let isExpensive = items.every((item) => {
  return item.price < 200;
});
console.log(isExpensive);
