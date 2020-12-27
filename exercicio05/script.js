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
}