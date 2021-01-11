const menuPrincipal = require("../menuPrincipal");
const menuSite = require("../menuSites")
const menuOrcamento = require("../menuOrcamentos")
const stages = require("../stages");
const banco = require("../banco");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Ah! Que pena, ficaremos aguardando o seu retorno. Obrigada!"];
  }

  if (msg === "#") {
    banco.db[user].stage = 1;
    return ["OK!"];
  }

  if (msg === "1"){
    let sites = " Sites  \n\n";

  Object.keys(menuSite.menuS).forEach((value) => {
    let elements = menuSite.menuS[value];
    sites += `${value} - ${elements.descricao}      \n`;
  });

  banco.db[user].stage = 1.1;

  return [
    `Em qual site você efetuou a compra? Escolha uma das opções digitando apenas o número, por favor.`,
    sites,
  ];
  }

  if (msg === "2"){
    let Orcamentos = " Orçamentos  \n\n";

  Object.keys(menuOrcamento.menuO).forEach((value) => {
    let elements = menuOrcamento.menuO[value];
    Orcamentos += `${value} - ${elements.descricao}      \n`;
  });

  banco.db[user].stage = 2.1;

  return [
    `Qual tipo de produto? Escolha uma das opções digitando apenas o número, por favor.`,
    Orcamentos,
  ];
  }

  if (msg === "3") {
    banco.db[user].stage = 4;
    
    return stages.step[4].obj.execute(user, "");
  }

  if (!menuPrincipal.menuP[msg]) {
    return [
      "Código inválido, digite corretamente",
    ];
  }

  banco.db[user].itens.push(menuPrincipal.menuP[msg]);

  return [
    "```Digite # para Voltar ou * para cancelar```",
  ];

}

exports.execute = execute;
