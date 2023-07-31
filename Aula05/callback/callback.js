
// function saudacao(name) {
//     alert(`Olá ${name}`);
// }

// function proInput(callback) {
//     var name = prompt('Por favor, insira seu nome!');
//     callback(name);
// }

// proInput(saudacao);

//------------------------------------------------------
function operacaoAssincrona(tempo, callback) {
    console.log("Iniciando operação assíncrona...");
    setTimeout(function() {
      console.log(`Operação assíncrona concluída após ${tempo} milissegundos.`);
      callback();
    }, tempo);
  }
  
  function buscaCallback() {
    console.log("Callback executado! A operação foi concluída.");
  }
  
  // Chamando a função operacaoAssincrona com o callback
  operacaoAssincrona(5000, buscaCallback);
  