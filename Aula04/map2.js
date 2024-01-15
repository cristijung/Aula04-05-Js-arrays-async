const produtos = [
    { produto: 'Notebook', valor: 1200 },
    { produto: 'Smartphone', valor: 500 },
    { produto: 'Tablet', valor: 150 },
    // ... outros objetos de produtos
  ];
  
  // Método para calcular valor de venda acrescentando 50%
  function calcularValorDeVendaComAcrescimo(produtos) {
    return produtos.map(function (produto) {
      const valorVenda = produto.valor * 1.5; // Acrescenta 50%
      return { ...produto, valorVenda };
    });
  }
  
  // Método para aplicar desconto de 5% em valores de venda >= 100
  function aplicarDesconto(produtos) {
    return produtos.map(function (produto) {
      if (produto.valorVenda >= 100) {
        const valorComDesconto = produto.valorVenda * 0.95; // Desconto de 5%
        return { ...produto, valorVenda: valorComDesconto };
      }
      return produto;
    });
  }
  
  // Exemplo de uso
  const produtosComAcrescimo = calcularValorDeVendaComAcrescimo(produtos);
  const produtosComDesconto = aplicarDesconto(produtosComAcrescimo);
  
  // Imprime os resultados
  console.log('Produtos com acréscimo de 50%:', produtosComAcrescimo);
  console.log('Produtos com desconto de 5% em valores >= 100:', produtosComDesconto);
  