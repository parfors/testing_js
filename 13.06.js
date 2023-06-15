// const foo = (user) => {
//   const a = user || { name: "boob" };
//   const b = user && user.name;
//   console.log(a.name, b);
// };

// foo();

// function createClicker() {
//   let clicks = 0;
//   return {
//     click() {
//       clicks++;
//     },
//     get() {
//       return clicks;
//     },
//   };
// }

// const clicker = createClicker();

// clicker.click();
// clicker.click();

// console.log(clicker.get());
// console.log(clicker);

// let a = {
//   a: 234,
// };

// let b = {
//   some: "String",
// };

// let c = a;

// console.log(c);

// c = {
//   ter: "first",
// };

// console.log(c);
// const a = new Number(5);

// a.name = "name";

// console.log(a);
// a = 5;
// console.log(a);
// var a = 5;
// console.log(a);

// var a = {
//   b: 1,
//   getContext: function () {
//     console.log(this);
//   },
// };

// a.getContext();

// var b = {
//   b: 5,
//   getContext: a.getContext.bind(this),
// };

// b.getContext();

// console.log(window);

// window.name = "some name";

// console.log(window, window.name);

// console.log(foo());
// console.log(foo1());

// function foo() {
//   return 1;
// }

// const foo1 = () => {
//   return 5;
// };

// console.log(a);
// a = 5;
// console.log(a);
// var a = 4;
// console.log(a);
// let a = 1;

// function foo() {
//   a = 2;
//   console.log(a);
//   function test() {
//     a = 5;
//     console.log(a);
//   }
//   test();
// }
// console.log(a);
// foo();
// console.log(a);

// var a = 1;
// function foo(b) {
//   console.log(b);
//   b = 10;
//   return b;
// }

// var b = foo(a);

// console.log(a, b);

// let obj = {
//   1: 0,
//   0: 1,
//   4: 79,
// };

// console.log(obj[1]);

// let a = 30;

// const stateControl = (function foo() {
//   const state = {
//     name: null,
//     age: null,
//   };

//   function setName(name) {
//     state.name = name;
//   }
//   function getState() {
//     return console.log(state);
//   }

//   function setAge(age) {
//     state.age = age;
//   }
//   return { setAge, setName, getState };
// })();

// stateControl.setName("Oleg");
// stateControl.getState();
