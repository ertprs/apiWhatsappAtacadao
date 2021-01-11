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
    `Confirme seus dados por favor : \n ${msg} \n`,
    "```Digite # para confirmar ou * para cancelar o atendimento```",
  ];
}

exports.execute = execute;