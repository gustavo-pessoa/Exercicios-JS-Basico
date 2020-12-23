// Escreva uma função que receba um Array com 5 números e retorne o maior deles

function obtemNumeros() {
    let inputN1 = document.getElementById("n1"); 
    let inputN2 = document.getElementById("n2");
    let inputN3 = document.getElementById("n3"); 
    let inputN4 = document.getElementById("n4");
    let inputN5 = document.getElementById("n5");

    let numeros = [inputN1.value, inputN2.value, inputN3.value, inputN4.value, inputN5.value];
    
    ordenarLista(numeros);

}

function ordenarLista(lista) {
    
    var listaOrdenada = lista.sort((a,b)=>a-b)
    let res = [];
    for (let num of listaOrdenada) {
       res.push(num); //Adiciona número ao array
    }
    
    alert(res[res.length - 1]); //Último valor do array

    // Retorna a média entre os 5 números
    let soma = 0

    for (let i=0; i < lista.length; i++) {
        soma +=parseInt(lista[i]);
     }
     let media = soma / lista.length;
     
    alert(media);
     //document.getElementById("resultado").innerHTML = soma;

}
    






