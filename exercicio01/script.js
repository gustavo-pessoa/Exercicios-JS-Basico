// Escreva uma função que receba dois números e retorne o maior deles
function maiorNumero() {
    let inputN1 = document.getElementById("n1"); 
    let inputN2 = document.getElementById("n2"); 

    
    num1 = inputN1.value;
    num2 = inputN2.value;
  
    let result = 0;

    if(num1 > num2){
        result = num1;
    }
    else {
       result = num2;
    }

    alert(result);
}