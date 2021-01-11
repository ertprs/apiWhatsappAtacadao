const menuPrincipal = require("../menuPrincipal");
const menuSite = require("../menuSites")
const menuOrcamento = require("../menuOrcamentos")
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
  banco.db[user].stage = 2.2;
  return [
    "Perfeito!",
    "Para que possamos te dar um orçamento mais preciso, precisamos de algumas informações",
    "Modelo:\n Medida:\n Espessura do MDF ((2,5),3,6 e 9mm):\n Pintado ou Cru:\n Quantidade:\n CEP:\n \n",
    "E caso precise da personalização na laser ou plotter, por favor nos envie uma imagem (de preferência em arquivo Corel)",
  ];
  }

  if (msg === "2"){
    banco.db[user].stage = 2.2;
    return [
      "Perfeito!",
      "Para que possamos te dar um orçamento mais preciso, precisamos de algumas informações",
      "Modelo:\n Medida:\n Pintado ou Cru:\n Quantidade:\n CEP:",
    ];
    }

  if (!menuOrcamento.menuO[msg]) {
    return [
      "Código inválido, digite corretamente",
    ];
  }

  banco.db[user].itens.push(menuOrcamento.menuO[msg]);

  return [
    "```Digite # para Voltar ou * para cancelar```",
  ];

}

exports.execute = execute;