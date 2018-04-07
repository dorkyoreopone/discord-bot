const Discord = require("discord.js");
const client = new Discord.Client();

function doMagic8BallVoodoo() {
    var rand = ['<:wildcarduno:431938867629785088>: Wild Card! Go Fish! Wait... Is that not how Uno works?...', '<:greenuno:431938265239650314>: Draw 4! ***All around you are familiar faces...***', '<:greenuno:431938265239650314>: Draw 2! Yeah... Youre getting more cards, amigo. Still, could be worse!', '<:greenuno:431938265239650314>: Reverse! SorryNotSorry if you werent ready for that!!', '<:greenuno:431938265239650314>: Skip! Man, sure hope the guy after you didnt have the perfect card in store.', '<:yellowuno:431938327462019082>: Reverse! Hah! Right back at ya!', '<:yellowuno:431938327462019082>: Draw 4! Awww, boo-hoo... let me play you a sad song on the worlds smallest violin!', '<:yellowuno:431938327462019082>: Draw 2! Looks like your game continues...', '<:yellowuno:431938327462019082>: Skip! Guess the person after you is waiting... Bummer!', '<:blueuno:431938301469917209>: Skip! Skip blip dibbly bip!', '<:reduno:431938212760387594>: Skip! That either helped or harmed the person after you... lets hope its not the latter if you guys arent friends, right?', '<:reduno:431938212760387594>: Reverse! Hope the person before you was ready for that...', '<:reduno:431938212760387594>: Draw 2! Ehhh.. could be worse, I guess?', '<:blueuno:431938301469917209>: Draw 2! Sorry if you were close to an Uno...', '<:blueuno:431938301469917209>: Draw 4! Sheesh. Thats gonna hurt the soul a little, huh?', '<:blueuno:431938301469917209>: Reverse! The tables have been turned! And I mean that literally...', '<:reduno:431938212760387594>: Draw 4! ***Sad Trombone Noises...***'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicInflationVoodoo() {
    var rand = ['***Fwoomp!*** H-Hey! S-Someone get me down here!', '***Bwooomph!*** *Creeeaaak!* L-Little too much air, nnnmmppph...', '***Fwooomp~!*** *Squeeeakycreak* H-Hmmnnph... N-Not funny you guys...', '***Bwoomph~!*** Hey! Look! Imma blimp pone! No free rides, though...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicFeedingVoodoo() {
    var rand = ['***gwumblegloooooorp~!*** O-Okay, thats enough sweets- **Urrrrp~!** Mind giving me some belly rubs?...', '***guuurglegroooooan~!*** <:gurgle:422862360521474068> Hey! Why did you stop? I still see oreos in that package!', '***blooooorpglorrp~!*** <:gurgle:422862360521474068> A-Ah... Hang on, Im absolutely stuffed- **urrrrp~!**', '***glrrrrbloooorp~!*** <:gurgle:422862360521474068> Y-You gonna help knead my belly or are you just gonna stand there?... Maybe you could even use it as a bed- **urrrrp~!** if youre cute enough~'];
           
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

client.on("message", (message) => {
  if (message.content.startsWith("!inflate")) {
    message.channel.send(doMagicInflationVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!feed")) {
    message.channel.send(doMagicFeedingVoodoo());
  }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'general').send("Welcome to my oreo fort!");
});

client.login(process.env.BOT_TOKEN);
