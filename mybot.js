const Discord = require("discord.js");
const client = new Discord.Client();

function doMagic8BallVoodoo() {
    var rand = [':reduno: 1!', ':reduno: 2!', ':reduno: 3!' ':reduno: 4!', ':reduno: 5!', ':reduno: 6!', ':reduno: 7!', ':reduno: 8!', ':reduno: 9!', ':reduno: Reverse!', ':reduno: Skip!', ':reduno: Draw 2!', ':reduno: Draw 4!', ':blueuno: 1!', ':blueuno: 2!', ':blueuno: 3!' ':blueuno: 4!', ':blueuno: 5!', ':blueuno: 6!', ':blueuno: 7!', ':blueuno: 8!', ':blueuno: 9!', ':blueuno: Reverse!', ':blueuno: Skip!', ':blueuno: Draw 2!', ':blueuno: Draw 4!', ':greenuno: 1!', ':greenuno: 2!', ':greenuno: 3!' ':greenuno: 4!', ':greenuno: 5!', ':greenuno: 6!', ':greenuno: 7!', ':greenuno: 8!', ':greenuno: 9!', ':greenuno: Reverse!', ':greenuno: Skip!', ':greenuno: Draw 2!', ':greenuno: Draw 4!', ':yellowuno: 1!', ':yellowuno: 2!', ':yellowuno: 3!' ':yellowuno: 4!', ':yellowuno: 5!', ':yellowuno: 6!', ':yellowuno: 7!', ':yellowuno: 8!', ':yellowuno: 9!', ':yellowuno: Reverse!', ':yellowuno: Skip!', ':yellowuno: Draw 2!', ':yellowuno: Draw 4!', ':wildcarduno: Wild Card! ***Spoooooky~!***'];

    return rand[Math.floor(Math.random()*rand.length)];
}

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

client.on("message", (message) => {
  if (message.content.startsWith("!uno")) {
    message.channel.send(doMagic8BallVoodoo());
  }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'general').send("Welcome to my oreo fort!");
});

client.login(process.env.BOT_TOKEN);
