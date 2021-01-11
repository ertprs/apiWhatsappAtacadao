const menuPrincipal = require("../menuPrincipal");
const menuSite = require("../menuSites")
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

  if(msg === "1"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "2"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "3"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "4"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "5"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "6"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "7"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "8"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "9"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if(msg === "10"){
    banco.db[user].stage = 1.2;
    return ["Por favor nos informe teu nome completo e teu CPF"]
  }

  if (!menuSite.menuS[msg]) {
    return [
      "Código inválido, digite corretamente",
    ];
  }

  return ["```Digite # para voltar ou * para cancelar```"]
}

exports.execute = execute;
