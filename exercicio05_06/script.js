function processar(){
    let inputNumero = document.getElementById("numero"); 

    let num = numero.value;
    let resp;

    if (num%2 == 0) {
        resp = "O número digitado é Par";
    }
    else{
        resp = "O número digitado é ímpar"
        }
  
    alert(resp);

    multiplosDe4();
}

//Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar//

function multiplosDe4() {
    let i;
    for (i = 0; i <= 100; i++) {
      if (i%4 == 0) {
        console.log(i);
      }
      else {
          console.log("pi");
      } 
    }
}

