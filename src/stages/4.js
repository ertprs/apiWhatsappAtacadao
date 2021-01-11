const banco = require("../banco");

function execute(user, msg) {
  banco.db[user].stage = 0;
  return [
    "Obrigado pelo contato!",
    "Aguarde, em breve uma de nossas atendentes irá te responder.",
    "Lembrando que nosso horário de atendimento é das 9h às 16h",
    "Mais informações ligue para (19) 2151-7173",
  ];
}

exports.execute = execute;