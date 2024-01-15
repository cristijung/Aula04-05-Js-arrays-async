const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Carlos', nota: 7 },
    // ... outros objetos de alunos
  ];

  function buscarAlunoENota(nomeAluno, arrayAlunos) {
    let encontrado = false;
  
    arrayAlunos.forEach(function (aluno) {
      if (aluno.nome === nomeAluno) {
        console.log(`Aluno: ${aluno.nome}, Nota: ${aluno.nota}`);
        encontrado = true;
      }
    });
  
    if (!encontrado) {
      console.log(`Aluno "${nomeAluno}" não encontrado.`);
    }
  }
  
  // Exemplo de uso
  buscarAlunoENota('Maria', alunos);
  buscarAlunoENota('Pedro', alunos);
  