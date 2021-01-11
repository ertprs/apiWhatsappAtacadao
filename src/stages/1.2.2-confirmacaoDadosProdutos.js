const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "*") {
    banco.db[user].stage = 0;
    return ["Ah! Que pena, ficaremos aguardando o seu retorno. Obrigada!"];
  }

  if (msg === "#") {
    banco.db[user].stage = 4;
    
    return stages.step[4].obj.execute(user, "");
  }
  return [
    `Confirme se os dados dos produtos estão corretos por favor: \n ${msg} \n`,
    "```Digite # para confirmar ou * para cancelar o atendimento```",
  ];
}

exports.execute = execute;