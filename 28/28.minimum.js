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


// -------------- PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------


// // let input = "parameter"
// let inputTwo = 550;
// let integer = 55.50;

// function ourFunc(value) {

    // task 1 ЖЕНЯ ГРИШИН
    // function checkString(enterText) {
  
    //     if (typeof enterText === `String`) {
    //         textLenght = enterText.Lenght;
    //         return console.log('строка длиной ${textLength} символов')
    //     } else {
    //         return console.log('Это не строка');
    //     };
    // }

//     if (Number(value) > 100) {
//     console.log("більше 100");
//   } else {
//     console.log("менше 100");
//   };


//   // task 3
//   if ((parseInt(value) % (Math.floor(value))) == 0) {
//     console.log("ціле число");
//   } else {
//     console.log("число не ціле");
//   };

// }
// ourFunc(inputTwo, integer);
// checkString();

// _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+ BREAK _+_+_+_+_+_+_+_+_+_+_+_+_+_+_+


// -------------- PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------

// // let input = "parameter"
// let value = 550.50;

// function ourFunc(checkString, task2, task3) {
//     console.log();
// };
//     // task 1
// let checkString = function(value) {
//   if (typeof enterText === `string`) {
//     textLenght = enterText.lenght;
//     return console.log('строка длиной ${textLenght} символов')
//   } else {
//     return console.log('Это не строка');
//   };
// };
//     // task 2
// let task2 = function(value) {
//   if (Number(value) > 100) {
//     console.log("більше 100");
//   } else {
//     console.log("менше 100");
//   };
// };

//   // task 3
//   let task3 = function(value) {
//   if ((value % (Math.floor(value))) == 0) {
//     console.log("ціле число");
//   } else {
//     console.log("число не ціле");
//   }
// };


// ourFunc();


// PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------PRACTICE -----------------

// function ourFunc(value, $task1, $task2, $task3) {
//   $task1(value);
//   $task2(value);
//   $task3(value);


// }
// /* checkString('aaa'); */
// //checkString();



// let task1 = function(enterText) {

//   if (typeof enterText === `string`) {
//     textLenght = enterText.lenght;
//     return console.log('строка длиной ${textLenght} символов')
//   } else {
//     return console.log('Это не строка');
//   };
// }
// let task2 = function(num) {
//   if (Number(value) > 100) {
//     console.log("більше 100");
//   } else {
//     console.log("менше 100");
//   };
// }

// let task3 = function(integer) {
//   if ((value % (Math.floor(value))) == 0) {
//     console.log("ціле число");
//   } else {
//     console.log("число не ціле");
//   };
// }

// ourFunc("sergey", task1, task2, task3);

