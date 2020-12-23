// Escreva uma função que receba um Array com 3 números e imprima eles em ordem

function obtemNumeros() {
    let inputN1 = document.getElementById("n1"); 
    let inputN2 = document.getElementById("n2");
    let inputN3 = document.getElementById("n3"); 

    let numeros = [inputN1.value, inputN2.value, inputN3.value];
    
    ordenarLista(numeros);

}

function ordenarLista(lista) {
    
    var listaOrdenada = lista.sort((a,b)=>a-b)
    let res = "";
    for (let num of listaOrdenada) {
       console.log(num);
       res = res + " " + num;
    }
    alert(res);
}
    