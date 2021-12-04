// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 25. площа кола в залежності від радіуса ~~~~~~~~~~~~~~~~~~~~~~~~
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let radius = prompt('What Your circle radius is in m?');
alert(`hooray! You circle square is ${ (radius ** 2 * 3.14) } m2`);
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 27.1 Цикли/ МІНІМУМ/ Запитай у користувача його вік і визначи, ким він є: дитиною (0-2), підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//========== VAR 1 - alert ==========
let yourAge = prompt('Input here Your age', 0);
let massage = (yourAge <= 12) ? 'You are a child, what are you doing here?' :
    (yourAge <= 18) ? 'You are a tinager' :
    (yourAge < 60) ? 'You are an adult' :
    'Are You retired or probably dead?';
alert(massage);
//========== VAR 2 - alert ==========
let yourAge = prompt('Input here Your age', 0);
if (yourAge >= 0 && yourAge < 12) {
    alert('You are a child, what are you doing here?');
} else if (yourAge >= 12 && yourAge < 18) {
    alert('You are a tinager');
} else if (yourAge >= 18 && yourAge < 60) {
    alert('You are an adult');
} else if (yourAge >= 60) {
    alert('Are You retired or probably dead?');
}
//========== VAR 3 - console.log ==========
let yourAge = (70);
if (yourAge >= 0 && yourAge < 12) {
    console.log('You are a child, what are you doing here?');
}
else
{
    if (yourAge >= 12 && yourAge < 18)
    console.log('You are a tinager');
    else
    {
        if (yourAge >= 18 && yourAge < 60)
        console.log('You are an adult');
        else
        {
            if (yourAge >= 60)
            console.log('Are You retired or probably dead?');
        }
    }
}
//========== VAR 4 - console.log ==========
let yourAge = (10);
if (yourAge >= 0 && yourAge < 12) {
    console.log('You are a child, what are you doing here?');
} else if (yourAge >= 12 && yourAge < 18) {
    console.log('You are a tinager');
} else if (yourAge >= 18 && yourAge < 60) {
    console.log('You are an adult');
} else if (yourAge >= 60) {
    console.log('Are You retired or probably dead?');
}
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------


// 27.2 min // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let yourNumber = 2;
let simbol = (yourNumber == 1) ? '!' :
    (yourNumber == 2) ? '@' :
    (yourNumber == 3) ? '#' :
    (yourNumber == 4) ? '$' :  
    (yourNumber == 5) ? '%' :
    (yourNumber == 6) ? '^' :
    (yourNumber == 7) ? '&' :
    (yourNumber == 8) ? '*' :
    (yourNumber == 9) ? '(' :
    ')' ;
console.log(simbol);
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------


// 27.3 main // Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let startRange = 2;
let endRange = 4;
let sum = 0;
  while(startRange <= endRange) {       
    sum += startRange;  
    startRange++;
  }
console.log(sum);
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------















