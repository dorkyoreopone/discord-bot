const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!ping")) {
    message.channel.send("pong!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!boop")) {
    message.channel.send("blep!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!pancake")) {
    message.channel.send(":pancakes: omnom!");
  }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'general').send("Welcome to my oreo fort!");
});

function doMagic8BallVoodoo() {
    var rand = [':8ball: Absolutly.', ':8ball: Absolutly not.', ':8ball: It is true.', ':8ball: Impossible.', ':8ball: Of course.', ':8ball: I do not think so.', ':8ball: It is true.', ':8ball: It is not true.', ':8ball: I am very undoubtful of that.', ':8ball: I am very doubtful of that.', ':8ball: Sources point to no.', ':8ball: Theories prove it.', ':8ball: Reply hazy try again', ':8ball: Ask again later', ':8ball: Better not tell you now', ':8ball: Cannot predict now', ':8ball: Concentrate and ask again'];

    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);
  
  if (command === "!8ball") {
    msg.channel.sendMessage(doMagic8BallVoodoo())
  }
});

client.login(process.env.BOT_TOKEN);
