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

    propriedadesDoObjeto(aluno);

    let hoje = new Date;
    
    data(hoje);

    escada(10);
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

//Escreva uma função que receba um objeto e imprima suas propriedades

let aluno = {
    nome: "Gustavo",
    turma: "6º A",
    nota: "8,5"
}

function propriedadesDoObjeto() {
    
    for(let prop in aluno){
        console.log(prop);
    }
}

// Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

function data(hoje){
    var meses = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']
   let result = {
        dia:hoje.getDate(),
        mes: meses[hoje.getMonth()],
        ano: hoje.getFullYear()
    }
    console.log(result.dia, result.mes, result.ano);
}

// Escreva um programa que imprima o seguinte padrão
// * 
// * * 
// * * * 
// * * * * 
// * * * * *

function escada(altura){
    for(let i = 1; i <=altura;i++){
        let string = ""
        for(let j =1 ;j<= i; j++){
            string +="* "
        }
        console.log(string)
    }
}


