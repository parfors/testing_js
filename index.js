// const promise = () => {
//   return new Promise((res, reg) => {
//     if (true) {
//       console.log("first");
//       return res("hello");
//     }
//   });
// };

// promise().then((data) => console.log(data));

// const promise2 = new Promise((res, reg) => {
//   if (true) {
//     console.log("first2");
//     return res("hello2");
//   }
// });

// promise2.then((data) => console.log(data));

// console.log(String(3) + String(3));

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   ((i) =>
//     setTimeout(() => {
//       console.log("async", i);
//     }, 0))(i);
// }

// const a = [1, 2, 5, 6, 7];

// const b = [...a.reverse()];

// console.log(b);

// const c = "To be or not to Be".replace(/be/, "eat");

// console.log(c);

// const d = {
//   get x() {
//     return 5;
//   },
// };

// d.number = 7;

// console.log(++d.number);

// const arr = [1, 3, 5, 7, 8];

// const b = JSON.stringify(arr);

// console.log(b);

// const foo = (a) => {
//   return a.toArray().splice(4);
// };

// console.log(foo("javaScript"));

// const a = "some";
// const b = `three`;

// const contains = (string, symbol) => string.includes(symbol);
// console.log(contains(a, '"'), contains(b, "`"));

// const obj = { a: 2 };

// function is(o) {
//   return Object.keys(o).length === 0;
// }

// console.log(is(obj));

// function first() {
//   let string = "string";

//   function second() {
//     return "return string";
//   }
//   return second();
// }

// let a = first();

// console.log(a);

// const a = "string";

// console.log(!!a);

// const foo = (cb) => {
//   return cb();
// };
// const cb = () => {
//   return "string";
// };

// const a = foo(cb);

// console.log(a);

// let string = "Map - is a collection of keyed values";

// string = string.replace("Map", "Met");
// string = string.replace("keyed", "unique");

// string[4] = "S";

// console.log(string);

// function foo(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// console.log(foo(4)(8));

// let value = 20;

// const showValue = () => {
//   console.log("firstFunc" + value);
// };

// const wrapper = () => {
//   let value = 30;
//   console.log("secondFunc" + value);
//   showValue();
// };

// wrapper();

// const obj = { a: 2, b: 4, c: 5 };

// const a = Object.keys(obj).forEach((val) => console.log(obj[val]));

// for (var val in obj) {
//   console.log(obj[val]);
// }

// const a = {
//   a: 5,
//   b: 4,
//   c: {
//     soon: "sting",
//   },
//   d: {
//     foo() {
//       console.log("first");
//     },
//   },
// };

// const b = { ...a };

// console.log(a === b);

// b.d.foo();

// console.log(b.d.foo);

// promise2.then((data) => console.log(data));

// console.log(String(3) + String(3));

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   ((i) =>
//     setTimeout(() => {
//       console.log("async", i);
//     }, 0))(i);
// }

// const a = [1, 2, 5, 6, 7];

// const b = [...a.reverse()];

// console.log(b);

// const c = "To be or not to Be".replace(/be/, "eat");

// console.log(c);

// const a = "some";
// const b = `three`;

// const contains = (string, symbol) => string.includes(symbol);
// console.log(contains(a, '"'), contains(b, "`"));

// const obj = { a: 2 };

// function is(o) {
//   return Object.keys(o).length === 0;
// }

// console.log(is(obj));

// const a = [1, 2, 5, 6, 7];

// const b = [...a.reverse()];

// console.log(b);

// const c = "To be or not to Be".replace(/be/, "eat");

// console.log(c);

// const d = {
//   get x() {
//     return 5;
//   },
// };

// d.number = 7;

// console.log(++d.number);

// const arr = [1, 3, 5, 7, 8];

// const b = JSON.stringify(arr);

// console.log(b);

// const foo = (a) => {
//   return a.toArray().splice(4);
// };

// console.log(foo("javaScript"));

// const a = "some";
// const b = `three`;

// const contains = (string, symbol) => string.includes(symbol);
// console.log(contains(a, '"'), contains(b, "`"));

// const obj = { a: 2 };

// function is(o) {
//   return Object.keys(o).length === 0;
// }

// console.log(is(obj));

// function first() {
//   let string = "string";

//   function second() {
//     return "return string";
//   }
//   return second();
// }

// ------------------------------------------------------My CODE---------------------------------------------------------------
// const string = "w27y7";
// const subString1 = "27";
// const subString2 = "w7y";

// const stringChecker = function (s, p1, p2) {
//   const checkLength = s.length === p1.length + p2.length;

//   if (!checkLength) {
//     return false;
//   }

//   let firstSubString = p1;
//   let secondSubString = p2;
//   let checkInclude = true;

//   for (let i = 0; i < s.length; i++) {
//     if (!checkInclude) {
//       return false;
//     }
//     let isOneCharEqualInP1 = s[i] === firstSubString[0];
//     let isOneCharEqualInP2 = s[i] === secondSubString[0];

//     if (isOneCharEqualInP1) {
//       firstSubString = firstSubString.slice(1);
//     }

//     if (!isOneCharEqualInP1 && isOneCharEqualInP2) {
//       secondSubString = secondSubString.slice(1);
//     }

//     if (!isOneCharEqualInP1 && !isOneCharEqualInP2) {
//       checkInclude = false;
//     }
//   }

//   return checkInclude;
// };

// console.log(stringChecker(string, subString1, subString2));

// ------------------------------------------------GPT CODE-----------------------------------------------------------

// function canInterleaveStrings(s, p1, p2, sIndex = 0, p1Index = 0, p2Index = 0) {
//   if (sIndex === s.length) {
//     return true;
//   }

//   const currentChar = s[sIndex];

//   if (p1Index < p1.length && currentChar === p1[p1Index]) {
//     if (canInterleaveStrings(s, p1, p2, sIndex + 1, p1Index + 1, p2Index)) {
//       return true;
//     }
//   }

//   if (p2Index < p2.length && currentChar === p2[p2Index]) {
//     if (canInterleaveStrings(s, p1, p2, sIndex + 1, p1Index, p2Index + 1)) {
//       return true;
//     }
//   }

//   return false;
// }

// Test case
// const string = "w27y7";
// const subString1 = "27";
// const subString2 = "w7y";
// console.log(canComposeString(string, subString1, subString2)); // Output: true

// function canComposeString(s, p1, p2, sIndex = 0, p1Index = 0, p2Index = 0) {
//   if (sIndex === s.length) {
//     return p1Index === p1.length && p2Index === p2.length;
//   }

//   const currentChar = s[sIndex];

//   if (p1Index < p1.length && currentChar === p1[p1Index]) {
//     if (canComposeString(s, p1, p2, sIndex + 1, p1Index + 1, p2Index)) {
//       return true;
//     }
//   }

//   if (p2Index < p2.length && currentChar === p2[p2Index]) {
//     if (canComposeString(s, p1, p2, sIndex + 1, p1Index, p2Index + 1)) {
//       return true;
//     }
//   }

//   return false;
// }

// // Test cases
// const string1 = "Do you have a cup of tea? Yes, I do!";
// const subString1 = " yo ha a cof tea Yes I";
// const subString2 = "Douveup ?, do!";

// const string1 = "w27y7";
// const subString1 = "27";
// const subString2 = "w7y";

// Test failed with: Fixed test - S = "radency", P1 = "radency", P2 = ""

// Test failed with: Fixed test - S = "radency", P1 = "", P2 = "radency"

// Test failed with: Fixed test - S = "radency", P1 = "rade", P2 = "ncyy"

// Test failed with: Fixed test - S = "radency", P1 = "rade", P2 = "nc"

// Test failed with: Fixed test - S = "radency", P1 = "rade", P2 = "ncy"

// Test failed with: Fixed test - S = "radency", P1 = "rdnc", P2 = "aey"

// Test failed with: Fixed test - S = "radency", P1 = "rad", P2 = "ncy"

// Test failed with: Fixed test - S = "radency", P1 = "rade", P2 = "nyc"

// Test failed with: Fixed test - S = "Will do", P1 = "Wl o", P2 = "ild"

// Test failed with: Fixed test - S = "Do you have a cup of tea? Yes, I do!", P1 = " yo ha a cof tea Yes I", P2 = "Douveup ?, do!"

// Test failed with: Fixed test - S = "Do you have a cup of tea? Yes, I do!", P1 = " yo ha a cof tea I", P2 = "Dou veup ?, do!"

// Test failed with: Fixed test - S = "Hacker News!", P1 = "Haerws", P2 = "ck Ne!"

// Test failed with: Fixed test - S = "Hacker News!", P1 = "cker Ne", P2 = "Haws!"

// Test failed with: Fixed test - S = " Hacker News! ", P1 = " cker s ", P2 = "HaNew!"

// Test failed with: Fixed test - S = " Hacker News! ", P1 = " Hacker News ", P2 = "!"

// Test failed with: Fixed test - S = "F?NI3+6'sK2.M"", P1 = "NI3+6s", P2 = "F?'K2.M""

// Test failed with: Fixed test - S = "w27y7", P1 = "27", P2 = "w7y"

// Test failed with: Random Test -  S = "3QUcf3245P1ec 9ex7d", P1 = "3QUcf3245P1ec 9ex7d", P2 = ""

// Test failed with: Random Test -  S = "0zqzweAnnk5bWQ6XFb7", P1 = "", P2 = "0zqzweAnnk5bWQ6XFb7"

// Test failed with: Random Test -  S = " Q2W9zivVM zonfjSuJ", P1 = " Q2W9zivV", P2 = "M zonfjSuJJ"

// Test failed with: Random Test -  S = "ee6ReQ5p36 B4LkNCWT", P1 = "ee6ReQ5p3", P2 = "6 B4LkNCW"

// Test failed with: Random Test -  S = "M72JyiU0g oqFFEjF6b", P1 = "M72JyiU0g", P2 = " oqFFEjF6b"

// Test failed with: Random Test -  S = "TyzY7gU 3U4kv4Tvv9Q", P1 = "Tz7U34vTvQ", P2 = "yYg Uk4v9"

// Test failed with: Random Test -  S = "vEuivZfAa45jVf87iZ ", P1 = "vEia5Vf8iZ ", P2 = "uvZfA4j7"

// Test failed with: Random Test -  S = "4BDATpUjmz2SAP1U1pF", P1 = "4BDATpUj", P2 = "z2SAP1U1pF"

// Test failed with: Random Test -  S = "nh4o12f30HQ3zHwLUAp", P1 = "nh4o12f30", P2 = "A3LpUwHzQH"

// Test failed with: Random Test -  S = "x0ySFFzib6y7H4EvBp y", P1 = "x0ySFFzib6", P2 = "y7H4EvBp y"

// --------------------------------------------------Chat CODE-----------------------------------------------------

// function isMerge(s, part1, part2) {
//   return !s
//     ? !(part1 || part2)
//     : (s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2)) ||
//         (s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1)));
// }

// // console.log(isMerge(string, subString1, subString2));

// var empl = "hello";

// function Empl() {
//   this.empl = "hi";
// }

// console.log(Empl.empl);

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  const average =
    classPoints.reduce((acc, value) => {
      return acc + value;
    }, 0) / classPoints.length;
  console.log(average);
  console.log(yourPoints);
  console.log(typeof yourPoints);
  if (yourPoints > average) {
    console.log("first");
    return true;
  }
  return false;
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
