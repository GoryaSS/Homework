// -------------- 1 ------------------
//  1.1 Function Declaration
// function funcMetod() {
//     console.log('Hello World');
// }
// funcMetod();

// 1.2 Function Expresion
// let funcMetod = function() {
//   console.log('Hi!');
// }
// funcMetod();

// 1.3.1 arrow functions (single-line)
// let funcMetod = (text, name) => text + ', ' + name + '!';
// console.log(funcMetod('Hi', 'everyone!'));

// 1.3.2 arrow functions (multiline)
// let funcMetod = (text, name) => {
//   let massage = text + ', ' + name + '!';
//   return massage;
// };
// console.log(funcMetod('Hi', 'everyone!'));


// -------------- 2 ------------------

// let sum = function (a, b, c, d) { }
// console.log(sum.length);

// -------------- 3 ------------------

// function newFunc(a, b) {
//     if (a > b) {
//         console.log(-1);
//     } else if (a < b) {
//         console.log(1);
//     } else {console.log(0);}
// }
// newFunc(5, 5);

// -------------- 4 ------------------

// let a = 5;
// function factorial(a) {
//   if (a === 0) {
//     return 1;
//   }
//   return a * factorial(a - 1);
// }
// console.log(factorial(a - 1));

// -------------- 5 ------------------

// function splitNumber(a, b, c) {
//   return Number(String(a)+b+c);
// }
// console.log(splitNumber(1, 4, 9));

// -------------- 6 - square area-----------------

// function squareArea(a, b) {
//   if (isNaN(b)) {
//     return (a * a);
//   } else {
//     return (a * b);
//   }
// }
// // console.log(squareArea(2));
// console.log(squareArea(2, 6));
