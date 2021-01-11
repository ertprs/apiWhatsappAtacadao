const menuPrincipal = require("../menuPrincipal");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = " Menu  \n\n";

  Object.keys(menuPrincipal.menuP).forEach((value) => {
    let element = menuPrincipal.menuP[value];
    menu += `${value} - ${element.descricao}      \n`;
  });

  banco.db[user].stage = 1;

  return [
    `Olá ${contato} sou uma assistente virtual, e para que possamos agilizar o atendimento me diga em que posso ajudar? Escolha uma das opções digitando apenas o número, por favor.`,
    menu,
  ];
}

exports.execute = execute;
