var stages = {
    0: {
      descricao: "Boas Vindas",
      obj: require("./stages/0"),
    },
    1: {
      descricao: "Menu",
      obj: require("./stages/1"),
    },
    1.1: {
      descricao: "Dados dos Clientes",
      obj: require("./stages/1.1.1-site-dadosCliente"),
    },
    1.2: {
      descricao: "Confirmação de Dados",
      obj: require("./stages/1.1.2-confirmacaoDados"),
    },
    2.1: {
      descricao: "Tipos de Produtos para Orçamentos",
      obj: require("./stages/1.2.1-tiposProdutosOrcamentos"),
    },
    2.2: {
      descricao: "Confirmação de Dados dos Produtos",
      obj: require("./stages/1.2.2-confirmacaoDadosProdutos"),
    },
    4: {
      descricao: "Encerramento",
      obj: require("./stages/4"),
    },
  };
  
  exports.step = stages;
  