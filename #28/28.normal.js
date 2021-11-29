// --------------task 1 - sum of the proper divisors -----------------
let num = 5;

function sumPerfectNumbers() {
   let result = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        result += i;
    }
  }
  if (result == num) {
   console.log(num + " is a perfect number.");
  } else {
   console.log(num + " is not a perfect number.");
  }
}
sumPerfectNumbers(num);

// Old-------------- Old------------ Old------------ Old------------ Old------------ Old

// function sumPerfectNumbers(num) {
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
// console.log((sumPerfectNumbers(num) == num) ? "true": "false");


// // -------------- task 2 - The range of perfect numbers

function sumPerfectNumbers(num) {
   let result = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
        result += i;
    }
  }
  if (result == num) {
   console.log(`The perfect number is ${result}`);
  } 
}

function rengeNumbers(numRangeStart, numRangeEnd) {
  for (let i = numRangeStart; i <= numRangeEnd; i++) {
    sumPerfectNumbers(i);
  }
}
rengeNumbers(2, 512);

