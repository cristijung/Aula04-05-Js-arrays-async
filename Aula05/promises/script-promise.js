const tempo = (duration) => {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, duration)
    })    
}

tempo(4000)
    .then(function() {
        console.log('Apareceu depois de 4 segundos');
    })

    //-------------------------------------------------
    // Função que retorna uma Promise ---- colocar no consolelog para ver executando
function minhaFuncao() {
    return new Promise((resolve, reject) => {
      // Lógica assíncrona ou operação demorada
      const sucesso = true;
  
      if (sucesso) {
        // Se a operação for bem-sucedida, chame resolve
        resolve("Operação bem-sucedida!");
      } else {
        // Se a operação falhar, chame reject
        reject("Erro na operação");
      }
    });
  }
  
  // Usando a Promise
  minhaFuncao()
    .then((resultado) => {
      console.log(resultado); // Saída: Operação bem-sucedida!
    })
    .catch((erro) => {
      console.error(erro); // Saída: Erro na operação
    });
  