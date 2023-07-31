let usuarios = [
  { nome: "Ana", sobreNome: "Banana" },
  { nome: "Bia", sobreNome: "Souza" },
  { nome: "Pedro", sobreNome: "Silva" },
  { nome: "Josefo", sobreNome: "Soares" },
];

let nomeCompleto = usuarios.map(function (element) {
  return `${element.nome} ${element.sobreNome}`;
});

console.log(nomeCompleto);
//-----------------------------------------
const listMercadorias = [
  { item: "TV", preco: 5000 },
  { item: "Sofá", preco: 7896 },
  { item: "Sala de Jantar", preco: 10200 },
  { item: "Poltrona", preco: 1000 },
];

const mostrarMercadorias = listMercadorias.map(mercadorias);
function mercadorias(elemento) {
  return {
    item: elemento.item,
    preco: elemento.preco,
  };
}

console.log(mostrarMercadorias);

const mercadoriasComDesconto = listMercadorias.map(aplicarDesconto);
function aplicarDesconto(elemento) {
  return {
    item: elemento.item,
    preco: elemento.preco - elemento.preco * 0.5,
  };
}

mercadoriasComDesconto.forEach((elemento) => {
  console.log(
    `O preço da mercadoria ${
      elemento.item
    } com desconto é: ${elemento.preco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`
  );
});
