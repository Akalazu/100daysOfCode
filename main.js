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
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

const arr2 = [5, 10, 15, 20];

// const [first, second, , fourth, ...otherNumbers] = [...arr, ...arr2];
// console.log(first, second, fourth, otherNumbers); //rest with arrays
//output: first = 1, second = 2, fourth = 4, otherNumbers = [5, 10, 15, 20]

let friends = ["Joe", "Stones", "Vincent"];
let periodOfTheDay = ["morning", "afternoon", "evening"];
// var numb = Symbol("66");
// console.log(typeof numb);
// const person = {
//   fullName: "John Smith",
//   age: 12,
//   friends,
//   [numb]: 404,
//   job: "Waiter",
//   orderMenu: function (param) {
//     return `Waiter ${this.fullName} was called to bring ${param}`;
//   },
// };
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

// person && person.orderMenu();
console.log(true && false); //false
console.log("" && false); // ""

// var randVar = person.position || 100;
// console.log(randVar);

/*********************** NULLISH COALESCIAN OPERATOR [ ?? ] *******************************/

console.log("david" ?? null); //david
console.log(null ?? "henry"); //henry
console.log(null ?? true); //true
console.log(null ?? false); //false
console.log(undefined ?? null); //null

// person.position = 0;
// var randVar = person.position ?? 100;
// console.log(randVar); //0

/*********************** LOGICAL ASSIGNMENT OPERATORS*******************************/

// person.children = person.children ?? 2;
// console.log(person.children); //2
// person.children = 0;
// person.children ??= 2;
// console.log(person.children); //0

// person.gender = person.gender || "male";
// console.log(person.gender); //male
// delete person.gender;
// person.gender ||= "female";
// console.log(person.gender); //female

// person.hobby =
//   person.hobby && "[coding, playing video games, solving maths problems]";
// console.log(person.hobby); //undefined
// person.hobby = "watching cartoons";
// person.hobby &&= "[coding, playing video games, solving maths problems]";
// console.log(person.hobby); //[coding, playing video games, solving maths problems]

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
// console.log(person.orderMenu?.("pasta") ?? "Object");

/*********************** OBJECT DATA KEYS, VALUES AND ENTRIES*******************************/

//keys
// let keys = Object.keys(person);
// console.log(keys); [0: "fullName","age","friends", "job", "orderMenu","position", "children", "gender", "hobby"]
// console.log(Object.keys(person).length); //9

//values
// console.log(Object.values(person).length); //9

//entries
// let entries = Object.entries(person);
// console.log(entries); //Turning an array to an Object
// console.log(...entries.entries()); //nested array with index
// for (const [index, [key, value]] of entries.entries())
// console.log(index, key, value); //looping over an object

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

// myMap.set(person, "Object");
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
var ordArr = ["a", "b", "c", "d", "e", "f"];

console.log(ordArr.splice(1, 3));
console.log(ordArr.splice());
console.log(ordArr);
console.log(ordArr.at(0));

ordArr.forEach((arr, index, theArr) => {
  console.log(arr, index, theArr);
});

var arrSet = new Set(["Smith", "Walker", "Stones", "Smith"]);

arrSet.forEach((arr) => {
  console.log(arr);
});

var arrMap = new Map();
arrMap.set("Walker", "First Name");
arrMap.set("Judith", "Second Name");
console.log(arrMap.values());
console.log(arrMap.keys());

console.log(arrMap);
arrMap.forEach((maps, key, map) => {
  console.log(maps, " ", key, map);
});
/*********************** Learning map method of arrays *******************************/

var randNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var numCheck = randNumbers.map(function (n, index) {
//   let result = n % 2 == 0 ? "even" : "odd";
//   return `At number ${index + 1} the number is ${result}`;
// });
// console.log(numCheck);

var transactions = [600, 400, -1200, 430, 1500, -900];

// var transacReport = transactions.map((transaction, index) => {
//   return `Your ${
//     index + 1 > 3 ? index + 1 + "th" : index + 1
//   } transaction of the day is ${transaction > 0 ? "deposit" : "withdrawal"}`;
// });
// console.log(transacReport);

/*********************** Learning filter method of arrays *******************************/
const filterTrans = transactions.filter((trans, index) => {
  console.log(index);
  return trans > 400;
});
console.log(filterTrans);
var withdrawals = transactions.filter((trans) => trans < 0);
console.log(withdrawals);

/*********************** Learning reduce method of arrays *******************************/
var balance = transactions.reduce((acc, curr, index) => {
  console.log(
    `At iteration ${index} the currentCount is ${acc} with the currentValue being ${curr}`
  );
  return curr + acc;
}, 0);
console.log(balance);
// var transactions = [600, 400, -1200, 430, 1500, -900];

// let sum = 0;
// for (const trans of transactions) sum += trans;
// console.log(sum); //tried to achieve the same result as above using for of Loop and i did it!🥳
let maxTrans = transactions.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  transactions[0]
);
console.log(maxTrans); //getting max transaction results using reduce

/*********************** Coding Challenge #2 *******************************/
var testDataI = [5, 2, 4, 1, 15, 8, 3];
var testDataII = [16, 6, 10, 5, 6, 1, 4];

function testDogAge(arr) {
  let filterDogAge = arr
    .map((dogAge) => (dogAge < 3 ? dogAge * 2 : dogAge * 4 + 16))
    .filter((age) => age > 17);
  console.log(filterDogAge);
  let convertDogAge = filterDogAge.reduce((acc, curr) => acc + curr, 0);
  return convertDogAge / filterDogAge.length;
}

console.log(testDogAge(testDataI));
console.log(testDogAge(testDataII));
// 08039607746, 07086111162, 090 80383508

var newArr = [1, 2, 3, 4, 5];
console.log(newArr.findIndex((arr) => arr === 5));

/*********************** Flat and FlatMap *******************************/
var deepArr = [[1, 2, 3], [4, 5, 6], 7, 8, [9]];
console.log(deepArr.flat()); //Output: [1,2,3,4,5,6,7,8,9]

var hugeArr = [testDataI, testDataII];
const overallFigure = hugeArr.flat().reduce((acc, curr) => acc + curr, 0);
console.log(overallFigure); //Output: 86

/*********************** Sorting Arrays *******************************/

var myGees = ["Divine", "Purity", "Victory", "Kachi"];

console.log(myGees);
console.log(myGees.sort());
console.log(myGees);

var randNumb = [9, 8, 7, 6, 100, -30, -22, -91, -87, 45, 102, 405];
console.log(
  randNumb.sort((x, y) => {
    if (x > y) {
      return -1;
    } else {
      return 1;
    }
  })
); //sorting numbers in descending order
console.log(
  randNumb.sort((x, y) => {
    if (x > y) {
      return 1;
    } else {
      return -1;
    }
  })
); //sorting numbers in ascending order

/*********************** Creating & Filling Arrays *******************************/
let instArr = [1, 2, 3, 4, 5];
const myArr = new Array(7);
console.log(myArr.fill(1));
instArr.fill(25, 3, 5);
console.log(instArr);

let randArrs = Array.from({ length: 15 }, (curr, i) => 1 + i);
console.log(randArrs); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

var myTransacs = [
  1000,
  600,
  -300,
  -3300,
  74633,
  2882,
  1200,
  300,
  5340,
  2300,
  -21310,
  [1000, -2000, 3000, 4000, 5000, -4100],
];

/*********************** Using reduce method to get the length of an array rather than using the .length property *******************************/

// var finDisp = myTransacs.flat().filter((trans) => trans >= 5000);
//   .reduce((acc, curr) => acc + curr, 0);

// var finDisp = myTransacs
//   .flat()
//   .reduce((acc, curr) => (curr >= 5000 ? acc + 1 : acc), 0);

var { deposit, withdrawal } = myTransacs.flat().reduce(
  (acc, curr) => {
    // curr > 0 ? (acc.deposit += curr) : (acc.withdrawal += curr);
    // return acc;
    acc[curr > 0 ? "deposit" : "withdrawal"] += curr;
    return acc;
  },
  { deposit: 0, withdrawal: 0 }
); //using the reduce method to return an object

// console.log(finDisp);
console.log(deposit, withdrawal);

var finDisp = myTransacs
  .flat()
  .reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);

console.log(finDisp);

function titleCase(title) {
  var exceptions = [
    "an",
    "but",
    "and",
    "or",
    "not",
    "on",
    "in",
    "is",
    "the",
    "this",
    "a",
  ];

  const capitalized = (str) => str[0].toUpperCase() + str.slice(1);

  var finRest = title
    .toLowerCase()
    .split(" ")
    .map((arr) => (exceptions.includes(arr) ? arr : capitalized(arr)))
    .join(" ");

  return capitalized(finRest);
}

console.log(titleCase("this is me learning JAVASCRIPT"));
console.log(titleCase("and the enemies submitted"));
console.log(titleCase("and here is another title with an EXAMPLE"));
// titleCase

/*********************** Coding Challenge 4: Arrays *******************************/

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1.
dogs.forEach((dog) => {
  dog.recommendedFood = Math.ceil(dog.weight ** 0.75 * 28);
});
// console.log(dogs);

// 2.
const sarahObj = dogs.find((dog) => dog.owners.includes("Sarah"));

dogs.forEach(function (obj) {
  let difference = Math.abs(obj.recommendedFood - obj.curFood);
  let differencePercentage = (difference / obj.recommendedFood) * 100;
  obj.difference = difference;
  obj.differencePercentage = +differencePercentage.toFixed(0);
});
console.log(dogs);
sarahObj.differencePercentage > 10
  ? console.log("This dog eats more than recommended")
  : console.log("This dog is eating within recommended range");

// 3.

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];
dogs.forEach((dog) => {
  dog.differencePercentage > 10
    ? ownersEatTooMuch.push(...dog.owners)
    : ownersEatTooLittle.push(...dog.owners);
});

// 4.
console.log(ownersEatTooMuch.flat().join(" and ") + " dogs eat too much!");
console.log("**************");
console.log(ownersEatTooLittle.join(" and ") + " dog eats little!");

// 5.
const exactFood = dogs.some((dog) => dog.recommendedFood === dog.curFood);
console.log(exactFood);

// 6.
// const okayFood = dogs.some((dog) => dog.differencePercentage <= 10);
const okayFood = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(okayFood));

// 7.
/* var arrOkayFood = [];
dogs.forEach((dog) => {
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1
    ? arrOkayFood.push(dog)
    : arrOkayFood.push();
});
console.log(arrOkayFood);
*/ //Init code

// Optimized code
console.log(dogs.filter(okayFood));

// // 8.
var dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCopy);

/*********************** Section 12: Numbers, Dates, Intl and Timers *******************************/
console.log(23 === 23.0);
console.log(0.1 + 0.2);

//ParseInt and ParseFloat
console.log(Number("23"));
console.log(Number.parseFloat("2.3%"));
console.log(Number.parseInt("2.3#"));
console.log(Number.parseInt("13px"));

// isNaN and isFinite method Of Numbers
/*
1. isFinite checks if a value/Argument is a number or negative infinity or positive infinity

2. isNaN checks if an argument passed is a NaN or not

3. Using IsFinite is a better practice for checking if a value is a number compared to isNaN. Know this and know peace! ✌
*/

console.log(Number.isNaN(23 / 0));
console.log(23 / 0);
// console.log(Number.isNaN(Number.parseFloat("2.3X")));

// console.log(isFinite(23 / 0));
// console.log(isFinite(+"23"));
// console.log(isFinite(+"23p"));
// console.log(isFinite(Number.parseFloat("2.3X")));

console.log(isNaN("Infinity"));
console.log(isNaN("infinity"));
console.log(Number.isInteger(23));

/*********************** Math and Rounding *******************************/
// what is type coersion

// sqrt, min, max
// console.log(Math.sqrt(2));
// console.log(2 ** (1 / 3));
// console.log(1.2599210498948732 ** 3);
// console.log(Math.pow(2, 3));
// console.log(Math.max(12, 11, 10, 9, Number.parseFloat("50px"), false));
// console.log(Math.max(0, true));
// console.log(Math.min(30, false));

// console.log(Math.PI * Number.parseFloat("34px") ** 2);

/*

  toFixed ===> decimal point
  toPrecision ===> significant figures

  // var floatNum = Math.PI;
  // console.log(floatNum.toFixed(2));
  // console.log(floatNum.toPrecision(3));
*/

// console.log(Math.floor(Math.random() * 6) + 1);

// const randInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;

// console.log(randInt(1, 30));
// console.log(randInt(20, 30));

// console.log("*****************");

// console.log(Math.trunc(23.5));
// console.log(Math.trunc(-23.5));
// console.log("************** 0");

// console.log(Math.round(23.51));
// console.log(Math.round(23.9));
// console.log(Math.round(-24.9));
// console.log("************** 1");
// console.log(Math.ceil(21.9));
// console.log(Math.ceil(0));
// console.log(Math.ceil(-22.1));
// console.log("************** 2");
// console.log(Math.floor("28.1"));
// console.log(Math.floor("28.9"));
// console.log(Math.floor("-24.9"));

// Creating Dates
/*
console.log(new Date());

console.log(new Date("August 23, 2000"));

console.log(new Date("July 21, 2003"));

console.log(new Date(2003, 7, 21, 15, 11, 6));
console.log(new Date(2037, 0, 19, 15, 23, 5));
console.log(new Date(2022, 8, 31));
console.log("******************************");
console.log(new Date(0));
console.log(new Date(1 * 24 * 60 * 60 * 1000));
console.log(new Date(2 * 24 * 60 * 60 * 1000));
*/
// Working with dates

const theFuture = new Date(2042, 6, 21, 15, 11);
console.log(theFuture);
console.log(theFuture.getFullYear());
console.log(theFuture.getMonth());
console.log(theFuture.getDate());
console.log(theFuture.getDay());
console.log(theFuture.toDateString()); //get only the date as a string
console.log(theFuture.toISOString());
console.log(theFuture.getTime()); //how many milliseconds has past since Jan 01, 1970 till 'theFuture' date which is Mon Jul 21 2042
console.log(new Date(2289564660000)); //convert the milliseconds back to date. They are called 'Time Stamp'

console.log(Date.now()); // gives the 'Time Stamp of the current date and period in time'

// theFuture.setFullYear(2019);
console.log(+theFuture);

const calcDaysPassed = (day1, day2) => {
  return Math.abs((day2 - day1) / (1000 * 60 * 60 * 24));
};
const today = new Date("August 14, 2022");
const yesterday = new Date(2022, 7, 23);
console.log(today.toDateString());
console.log(yesterday.toDateString());
console.log(calcDaysPassed(yesterday, today));

var aNum = "12";

let myObj = {
  fullname: "Code Burster",
  age: 32,
};

let myobject = JSON.stringify(myObj);

console.log(myobject);

localStorage.setItem("objectA", myObj);
console.log(localStorage);

// Numeric Separators
var diameter = 312_400_000_000;
console.log(diameter);

console.log(diameter.toLocaleString());
var price = 35_42;
console.log(price);

var PI = 3.14_1;
console.log(PI);

// working with BIGINT
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(BigInt(true));
console.log(BigInt(123456789123456789));
console.log(typeof 123456789123456789n);

// Operations with bigint
var bigint1 = BigInt(1234567899);
var bigint2 = BigInt(9876543211);
var bigint3 = 5678912344n;

console.log(bigint1 + bigint2);
console.log(bigint2 * bigint1);
// console.log(bigint3 + 1000);
console.log(30n == 20);
console.log(20n > 15);
console.log(17n / 3n);
// console.log(Math.sqrt(16n));
console.log(`${bigint1} is a huge number`);

/*********************** Internationalizing Numbers[int'l] on dates *******************************/

const date = document.querySelector(".initialdate");
date.innerHTML = "Todays date!";
var nownow = new Date();
const optionss = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
  dayPeriod: "short",
};
date.textContent = Intl.DateTimeFormat("en-US", optionss).format(nownow);

// const locale = navigator.language;
// console.log(locale);
// const now = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
//   day: "numeric",
//   month: "short",
//   year: "numeric",
//   weekday: "long",
// };
// date.textContent = new Intl.DateTimeFormat(locale).format(now);

/*********************** Internationalizing Numbers[int'l] on numbers *******************************/

// const options = {
//   // style: "unit",
//   // unit: "meter-per-second",
//   // style: "percent",
//   style: "currency",
//   currency: "ngn",
//   // useGrouping: false
// };

// const numb = 123456789.123;
// const numbFormat = new Intl.NumberFormat(navigator.language, options).format(
//   numb
// );
// console.log(numbFormat);

// var number1 = 2312345678945.23;
// console.log(navigator.language);

// const variety = {
//   // style: "unit",
//   // unit: "meter-per-second",
//   // style: "percent",
//   style: "currency",
//   currency: "EUR",
// };
// console.log(Intl.NumberFormat(navigator.language, variety).format(number1));

/*********************** Settimeout() and Setinterval() *******************************/

var ing = ["olives", "cheese"];
var pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Pizza is Here!🍕😉 with ${ing1} and ${ing2}`),
  3000,
  ...ing
);
console.log("Waiting...");

if (ing.includes("cheese")) {
  clearTimeout(pizzaTimer);
}

// setInterval(() => {
//   const date = new Date();
//   console.log(date);
// }, 1000);

let timeLeft = 60;

let timer = setInterval(() => {
  let min = String(Math.trunc(timeLeft / 60)).padStart(2, 0);
  let sec = String(timeLeft % 60).padStart(2, 0);
  console.log(`${min}:${sec}`);
  timeLeft--;
  if (timeLeft === 0) {
    console.log("Time Out");
    clearInterval(timer);
  }
}, 1000);
