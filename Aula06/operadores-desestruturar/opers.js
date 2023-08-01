//Spread
//Ex01

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const juntarArray = [...array1, ...array2];

console.log(juntarArray);

//Ex02 - copiar array
const arrayOriginal = [1, 2, 3];
const copiarArray = [...arrayOriginal];

console.log(copiarArray);

//Ex03 - copiando objetos
const person = { nome: 'Ana', idade: 30, peso: '50kg', altura: '1.65'};
const addInfo = { pais: 'BR', ocupacao: 'Engenheira'};

const updatePerson = { ...person, ...addInfo, idade: 35};
console.log(updatePerson);

//Ex04 - com passagem de parâmetros
function somarNumeros(a, b, c) {
    return a + b + c
}

const numbers = [2, 3, 6];
const sum = somarNumeros(...numbers);
console.log(sum);

//Operador Rest
function soma(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num
    }
    return total;
}
console.log(soma(2, 5, 6, 8, 10, 25, 568));

//Desestruturação ----------------------------------------------
//Ex01 - de Array
const numero = [10, 20, 30];
const [primeiro, segundo, terceiro] = numero;

console.log(primeiro);
console.log(segundo);
console.log(terceiro);

//Ex02 de oobjetos
const pessoa = {
    nome: 'Mafalda',
    idade: '35',
    pais: 'BR',
    profissao: 'Engenheira de Software',
    empresa: 'DBC',
    formacao: 'Harward'
};

const { nome, idade, pais, profissao} = pessoa;

console.log(nome);
console.log(pais);
console.log(idade);
console.log(profissao);

//EX03 - com parâmetros de function
function printPersonInfo({nome, idade}) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

const pessoas = {
    nome: 'Ana',
    idade: 28
}
printPersonInfo(pessoas);

//Ex04 - com array de objetos
const alunos = [
    { nomes: 'Ana', turma: '3b'},
    { nomes: 'Bia', turma: '3b'},
    { nomes: 'Cassandra', turma: '4b'},
    { nomes: 'Pedro', turma: '4b'},
];

for (const {nomes, turma} of alunos) {
    console.log(`Nome: ${nomes} faz parte da turma: ${turma}`);
}

