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
