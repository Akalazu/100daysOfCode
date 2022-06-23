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
let answer = Number(
  prompt(
    "Input your option as a Number e.g 1 is for Option A , 3 is for Option C"
  )
);
console.log(answer);
console.log(`${question.get(answer === question.get("Answer"))}`);

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
