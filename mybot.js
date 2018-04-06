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

var cards = [
  'Green - 1',
  'Red - 1',
  'Blue - 1',
  'Yellow - 1'
]

function newCard() {
  var randomNumber = Math.floor(math.random() * (cards.length));
}

client.on("message", (message) => {
  if (message.content.startsWith("!uno")) {
    message.channel.send(""+cards[randomNumber]+".");
  }
});

client.login(process.env.BOT_TOKEN);
