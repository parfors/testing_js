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
