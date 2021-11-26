// 28.1 Функції/ НОРМА/ Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function sumProperDivisors(num) {
// // Final result of summation of divisors
//   let result = 0;
// // find all divisors which divides 'num'
//   for (let i = 2; i <= Math.sqrt(num); i++) {
// // if 'i' is divisor of 'num'
//       if (num % i == 0) {
// // if both divisors are same then add
// // it only once else add both
//         if (i==(num / i))
//             result += i;
//         else
//             result += (i + num / i);
//       }
//   }
// // Add 1 to the result as 1 is also a divisor
//   return (result + 1);  
// }
// let num = 6;
// console.log((sumProperDivisors(num) == num) ? "true": "false");
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------


