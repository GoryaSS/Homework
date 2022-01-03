"use strict";
// обявляємо змінні
let add, subtract, divide, multiply;

// set up the form
function initialise() {
  add = document.calculateForm.operator.options[0];
  subtract = document.calculateForm.operator.options[1];
  divide = document.calculateForm.operator.options[2];
  multiply = document.calculateForm.operator.options[3];
  document.calculateForm.val1.value = 0;
  document.calculateForm.val2.value = 0;
}

// check that the text box just used is filled with a number
// function numberCheck(elementName) {
//   switch (elementName) {
//     case "val1":
//       let tmp = parseInt(document.calculateForm.val1.value);
//       if (isNaN(tmp)) {
//         alert("Please enter a valid numerial value into the first text box.");
//         document.getElementById("val1").value = 0; // a different way to access a form element
//         return false;
//       }
//       break;
//     case "val2":
//       let tmp = parseInt(document.calculateForm.val2.value);
//       if (isNaN(tmp)) {
//         alert("Please enter a valid numerial value into the second text box.");
//         document.calculateForm.val2.value = 0;
//         return false;
//       }
//       break;
//   }
//   return true;
// }

// do the requested calculation

function calculate() {
  // temporary place to store the result
  let result = 0;
  // convert the vales in the boxes into integers
  let x = parseInt(document.calculateForm.val1.value);
  let y = parseInt(document.calculateForm.val2.value);
  // work out which operation needs to be performed and do it
  if (add.selected) result = x + y;
  else if (subtract.selected) result = x - y;
  else if (multiply.selected) result = x * y;
  else // (divide.selected) need to test for divide by zero request
  {
    if (y == 0) {
      alert("Sorry, you cannot divide by 0!");
    } else {
      result = x / y;
    }
  }
  document.calculateForm.val3.value = result;
}