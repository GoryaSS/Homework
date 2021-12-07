const arr = ['s', 'a', 'b'];
arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    return 0;
});
console.log(arr);








const langArr = [
    { value: 'ENG', labet: 'Eng' },
    { value: 'UA', labet: 'Ukr' },
   
];
langArr.sort((a, b) => {
    if (a.value > b.value) return 1;
    else if (a.value < b.value) return -1;
    
    if (a.labet > b.labet) return 1;
    else if (a.labet < b.labet) return -1;

    return 0;
});
console.log(langArr);