let amount = prompt('Enter the amount of USD:', 0);
let currency = prompt('EUR = 1, UAH = 2, ZL = 3', 0);

switch (currency) {
    case '1':
        alert(amount * 0.89 + 'EUR');
        break;
    case '2':
        alert(amount * 26.58 + 'UAH');
        break;
    case '3':
        alert(amount * 4.16 + 'ZLT');
        break;
}