function circleSquare() {

    let firstInp = Number(document.querySelector('#a').value); 

    let degree = 2;
    let numberP = 3.14;
                    
    let result = ((firstInp * numberP) ** degree);
    document.getElementById('result').value = `${result}`;

}
