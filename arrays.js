const acessorios = ['sapato', 'cinto', 'casaco', 'chapéu'];
const acessoriosDois = 'tênis';
console.log(acessorios);
//--------------------------------------------------------
let frutas = ['banana', 'maçã', 'figo', 'morango', 'uva', 'goiaba'];
console.log(frutas.length);
console.log(frutas.length-1);
console.log(frutas.length-3);
//--------------------------------------------------------
let frutasDois = ['melancia','banana', 'maçã', 'figo', 'morango', 'uva', 'goiaba'];
console.log(frutasDois.push('pera')); //add um elemento no final do array
console.log(frutasDois); 
console.log(frutasDois.pop()); //remove um elemento no final do array
console.log(frutasDois);
console.log(frutasDois[2]); //acessa um elemento do array pelo índice
console.log(frutasDois.sort()); //ordena em ordem alfabética
//console.log(frutasDois.findIndex('banana')); //localiza um elemento no array
//--------------------------------------------------------
const nomes = ['Pafúncio', 'Ana Banana', 'Florisbela', 'Mauro', 'Jacinto', 'Mafaldo'];
console.log(nomes);
console.log(nomes.shift());
console.log(nomes);
console.log(nomes.unshift("Pafúncio"));
console.log(nomes);
//-------------------------------------------------------
const meninas = ['Ana', 'Bia', 'Clara', 'Mafalda'];
const meninos = ['Pedro', 'João', 'Pafúncio', 'Josenildo'];
const lista = meninas.concat(meninos); //cria um outro array concatenando os elementos
console.log(lista);
//-------------------------------------------------------
//Arrays com médias de alunos em cada aula
//Método reducer: reduz um array de valores em um ÚNICO valor
//Não cria outro array
const salaJs = [6, 3, 5, 8, 9, 10, 5];
const salaJava = [2, 5, 6, 3, 9];
const salaBD = [8, 10, 7, 8, 5];

function calcMedia(mediaDeSala) {
    const somaDasNotas = mediaDeSala.reduce((acumulado, nota) => acumulado + nota, 0);
    const media = somaDasNotas / mediaDeSala.length;
    return media;
}

console.log(`A média da sala de JS é: ${calcMedia(salaJs)}`);
console.log(`A média da sala de Java é: ${calcMedia(salaJava)}`);
console.log(`A média da sala de BD é: ${calcMedia(salaBD)}`);

