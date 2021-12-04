// -------------- 1 - sum of the proper divisors -----------------

function sumProperDivisors(num) {
// Final result of summation of divisors
  let result = 0;
// find all divisors which divides 'num'
  for (let i = 2; i <= Math.sqrt(num); i++) {
// if 'i' is divisor of 'num'
      if (num % i == 0) {
// if both divisors are same then add
// it only once else add both
      if (i==(num / i))
          result += i;
      else
          result += (i + num / i);
      }
  }
// Add 1 to the result as 1 is also a divisor
  return (result + 1);  
}
let num = 6;
console.log((sumProperDivisors(num) == num) ? "true": "false");


// -------------- 2 - sum of the proper divisors -----------------
// function ideal(num) {
//     let rez = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) rez = rez + i;
//     }
//     if (rez == num) console.log(rez, "Совершенное число");
//     else console.log(num, "НЕ совершенное число");
// }
// function numRange(start, finish) {
//     for (let i = start; i <= finish; i++) {
//         ideal(i);
//     }
// }
// numRange(2, 500);