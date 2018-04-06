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

bot.on('serverNewMember',function (user, userID, channelID, message, evt){
if(user === bot.servers.get('id',"SERVERID"))
bot.sendMessage(channelID.get('name','general'),"Welcome to my Server "+user.mention()+"!")
});

client.login(process.env.BOT_TOKEN);
