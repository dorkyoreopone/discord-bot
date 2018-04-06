const Discord = require("discord.js");
const client = new Discord.Client();

function doMagic8BallVoodoo() {
    var rand = ['<:blueuno:431938301469917209>: Skip! Skip blip dibbly bip!', '<:reduno:431938212760387594>: Skip! That either helped or harmed the person after you... lets hope its not the latter if you guys arent friends, right?', '<:reduno:431938212760387594>: Reverse! Hope the person before you was ready for that...', '<:reduno:431938212760387594>: Draw 2! Ehhh.. could be worse, I guess?', '<:blueuno:431938301469917209>: Draw 2! Sorry if you were close to an Uno...', '<:blueuno:431938301469917209>: Draw 4! Sheesh. Thats gonna hurt the soul a little, huh?', '<:blueuno:431938301469917209>: Reverse! The tables have been turned! And I mean that literally...', '<:reduno:431938212760387594>: Draw 4! ***Sad Trombone Noises...***'];

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
