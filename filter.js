const alunos = ['Ana', 'Bia', 'Caio', 'Mauro'];
const medias = [7.5, 8.6, 4.6, 6.3];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});
console.log(reprovados);

//-----------------------------------
const numeros = [1, 2, 4, 6];
const pares = numeros.filter(item => item % 2 === 0);
console.log(pares);