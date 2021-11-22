// //========== VAR 1 - alert ==========

// let input = prompt('Enter your nuber to check', 100);

// let isPalindromeNumber = function (x) {
//   if (x < 0) return false;
//   if (x < 10) return true;
//   if (x % 10 === 0) return false;

//   let rev = 0;

//   while (x > rev) {
//     x = Math.trunc(x / 10);
//   }

//   return x === rev || x === Math.trunc(rev / 10);
// };

// alert(isPalindromeNumber(input));

//========== VAR 2 - console.log ==========

// const input = 100; // Output: true

// const isPalindromeNumber = function (x) {
//   if (x < 0) return false;
//   if (x < 10) return true;
//   if (x % 10 === 0) return false;

//   let rev = 0;

//   while (x > rev) {
//     // console.log(x, rev);
//     // rev *= 10;
//     // rev += x % 10;
//     x = Math.trunc(x / 10);
//   }

// //   console.log(x, rev);

//   return x === rev || x === Math.trunc(rev / 10);
// };

// console.log(isPalindromeNumber(input));

//========== VAR 3 - alert ==========

let number = prompt('Enter your nuber to check', 100);
    number = number + '';
    if (number === number.split('').reverse().join(''))
        alert('palindrome');
    else
        alert('NOT palindrome');