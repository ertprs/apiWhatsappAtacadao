const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");

bot.create(
  'atacadaodoartesanatomdf',
  {
    WABrowserId: "\"KThMhg774n6b5KjWljH7rA==\"",
    WASecretBundle:
    "{\"key\":\"ZSgy+AiNv+4ps2HhzfZfQe3JnyyniNssq74deYYGgE4=\",\"encKey\":\"hzM0iX8pvFFuUaFxYUz4UcHJ0EBmGdzPsY47YxU54iM=\",\"macKey\":\"ZSgy+AiNv+4ps2HhzfZfQe3JnyyniNssq74deYYGgE4=\"}",
    WAToken1: "\"4Q4JzBG2vtOL/zBTs7jwdY+tA4MlaUy9N9BIBqlb3dA=\"",
    WAToken2: "\"1@XrXYEza3VCMkAJOppyoB1UTuy96MuCLxZz8Q33GuBYINZebNLjzqshW50a7Kr2/siY36K7G6DB+F7A==\"",
  }
).then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name
    );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
  });
}

function getStage(user) {
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    return banco.db[user].stage;
  }
}

