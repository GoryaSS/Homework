// --------------- 1 -- palindrome -------------- //

// var 1
let number = 1010101;
    number = number + '';
    if (number === number.split('').reverse().join(''))
        console.log('palindrome');
    else
        console.log('NOT palindrome');



// var 2 

// const PALINDROME = 23132;
// const LENGHT = 5;
// let palindrome = "" + PALINDROME;

// let i = 0;

// palindrome[i++] === palindrome[LENGHT - i] &&
//     palindrome[i] === palindrome[LENGHT - ++i] &&
//     console.log('palindrome');

