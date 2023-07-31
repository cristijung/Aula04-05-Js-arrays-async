
//Temporizadores

setTimeout(() => {
    console.log('Esperamos por 4 segundos');
}, 4000)

setTimeout(() => {console.log('Mensagem 1 - depois de 5 segundos'), 5000});

//-------------------------------------------

console.log('Vou executar antes de setInterval');
let counter = 0;
let timer = setInterval(function() {
    if(counter >= 10) {
        clearInterval(timer);
    }

    console.log(counter++);
}, 4000);

console.log('E eu, apesar de estar depois, tambpem vou executar antes do setInterval');