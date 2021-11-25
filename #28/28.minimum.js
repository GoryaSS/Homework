// -------------- 1 ------------------

// function newFunc() {
//     console.log('Hello World');
// }
// newFunc();

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

function factorial(a) {
  if (a === 0) {
    return 1;
 }
  return a * factorial(a-1);  
}
console.log(factorial(5));
