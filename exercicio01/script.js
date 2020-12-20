// Escreva uma função que receba dois números e retorne o maior deles

function obtemNumeros() {
    let inputN1 = document.getElementById("n1"); 
    let inputN2 = document.getElementById("n2"); 

    maiorNumero(inputN1, inputN2);
}

function maiorNumero(n1, n2) {
    
    num1 = n1.value;
    num2 = n2.value;
  
    let result = 0;

    if(num1 > num2){
        result = num1;
    }
    else {
       result = num2;
    }

    alert(result);
}
