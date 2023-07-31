let tabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDois(item) {
    console.log(item * 2);
}

tabuada.forEach(tabuadaDois);
//----------------------------------------------
let frutas = ['Maçã', 'Banana', 'Abacate', 'Morango', 'Melancia', 'Mamão', 'Melão'];
frutasIniciadasComM = [];
novoIndice = 0;

function selecionarFrutas(item, indice) {
    if (frutas[indice].indexOf('M') == 0) {
        frutasIniciadasComM[novoIndice] = frutas[indice];
        novoIndice++;
    }
}

frutas.forEach(selecionarFrutas);
console.log(frutasIniciadasComM);
//----------------------------------------------
let listNum = [1, 5, 6, 8, 24, 78, 3, 56, 79, 68];

function verificarPares(elemento, indice) {
    if (elemento % 2 == 0) 
    console.log(`Os números pares são: ${elemento} e sua posição é: ${indice}`);
}

listNum.forEach(verificarPares);
