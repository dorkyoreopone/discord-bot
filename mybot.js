const Discord = require("discord.js");
const client = new Discord.Client();

function doMagic8BallVoodoo() {
    var rand = ['<:wildcarduno:431938867629785088>: Wild Card! Go Fish! Wait... Is that not how Uno works?...', '<:greenuno:431938265239650314>: Draw 4! ***All around you are familiar faces...***', '<:greenuno:431938265239650314>: Draw 2! Yeah... Youre getting more cards, amigo. Still, could be worse!', '<:greenuno:431938265239650314>: Reverse! SorryNotSorry if you werent ready for that!!', '<:greenuno:431938265239650314>: Skip! Man, sure hope the guy after you didnt have the perfect card in store.', '<:yellowuno:431938327462019082>: Reverse! Hah! Right back at ya!', '<:yellowuno:431938327462019082>: Draw 4! Awww, boo-hoo... let me play you a sad song on the worlds smallest violin!', '<:yellowuno:431938327462019082>: Draw 2! Looks like your game continues...', '<:yellowuno:431938327462019082>: Skip! Guess the person after you is waiting... Bummer!', '<:blueuno:431938301469917209>: Skip! Skip blip dibbly bip!', '<:reduno:431938212760387594>: Skip! That either helped or harmed the person after you... lets hope its not the latter if you guys arent friends, right?', '<:reduno:431938212760387594>: Reverse! Hope the person before you was ready for that...', '<:reduno:431938212760387594>: Draw 2! Ehhh.. could be worse, I guess?', '<:blueuno:431938301469917209>: Draw 2! Sorry if you were close to an Uno...', '<:blueuno:431938301469917209>: Draw 4! Sheesh. Thats gonna hurt the soul a little, huh?', '<:blueuno:431938301469917209>: Reverse! The tables have been turned! And I mean that literally...', '<:reduno:431938212760387594>: Draw 4! ***Sad Trombone Noises...***'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicBoopVoodoo() {
    var rand = ['*Mlem!* Hey, you need something cutiebutt?', '*Beep boop!* Hah! Get it? Robot noises? B-Because I\'m a bot?... Pls laugh...', '*Sneezes and flops back!* Ahoy! OreoDork bot at your service!! Need a hug or a belly to rub? I\'m your guy!', 'Blep! Hey! Look, my tongue\'s sticking out... N-No, that doesn\'t mean you can have tongue kisses, how lewd! >///>', 'Mlem! Hey now, that\'s my booplesnoot you fluff! :T'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicInflationVoodoo() {
    var rand = ['***Fwoomp!*** H-Hey! S-Someone get me down here!', '***Bwooomph!*** *Creeeaaak!* L-Little too much air, nnnmmppph...', '***Fwooomp~!*** *Squeeeakycreak* H-Hmmnnph... N-Not funny you guys...', '***Bwoomph~!*** Hey! Look! Imma blimp pone! No free rides, though...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicFeedingVoodoo() {
    var rand = ['***blooooorrrpsloooosh~!*** <:blooorp:431972532250476545> M-Mnnnphh... G-Got anymore? **Urrrp~!** Uggghh... I-I just made some room, I\'m more than happy to give you a little more belly to knead.', '***gurrrrrrglebwooorrrp~!*** E-Emmph.. T-Those are a lot of donuts, are you sure you don\'t have anymore for me~? ***Urrrrp~!*** <:blooorp:431972532250476545> My belly will make it worth your while~!', '***gwumblegloooooorp~!*** O-Okay, thats enough sweets- **Urrrrp~!** Mind giving me some belly rubs?...', '***guuurglegroooooan~!*** <:blooorp:431972532250476545> Hey! Why did you stop? I still see oreos in that package!', '***blooooorpglorrp~!*** <:blooorp:431972532250476545> A-Ah... Hang on, Im absolutely stuffed- **urrrrp~!**', '***glrrrrbloooorp~!*** <:blooorp:431972532250476545> Y-You gonna help knead my belly or are you just gonna stand there?... Maybe you could even use it as a bed- **urrrrp~!** if youre cute enough~'];
           
    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicWelcomeVoodoo() {
    var rand = ['This just in! New user has spawned, give them some love and offer them a seat at the Uno table!', 'Oh hey, new pone! Tell me, did you bring snacks- ***Gloooorpbwoorp~!*** <:blooorp:431972532250476545> W-We could sure use some, eheh... D-Dont mind the noisey belly.', 'Come on in, new guy! Grab a seat, current card is a yellow 7! Hope thats not a problem for ya~!', 'Have the Monopoly Money to play? Then what are you waiting for! Come place your bet and get yourself an Uno, amigo!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicSnuggleVoodoo() {
    var rand = ['*Gives the biggest hug possible!* Awwh, thanks for the hug donation!!', '***Bloooorpgurrgle~!*** <:blooorp:431972532250476545> H-Hey! Donut hug me too hard- I-I just ate! Still a little full. xP!', '*Snugsnugs!!* Well now, youre just hecking precious, huh~?', '*Squeezes the fluff outta you!* Congrats! Youre now my own personal teddy bear. Off to the snugglefort we go! Hope you like twinkies...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicCuteVoodoo() {
    var rand = ['W-What? Are you sure youre not looking at a mirror...', 'N-No! Im not cute, thats you!! H-Have you even seen yourself? Y-Youre leagues and bounds better lookin... >////>', 'ahjkslauhofdkhbja I-I am not! I have no idea where you got that from, but its false... B-But I really appreciate it t-though... <3', '>//w//< O-Oh my fluff you guys, please!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicGamerVoodoo() {
    var rand = ['<:gameboy:431983078836273182>! Beep boop! Hey, playing some Pokemon. Wanna battle?', '<:gameboy:431983078836273182>! This ones two player if you wanna join~! Be warned though, Im very good at it.', '<:gameboy:431983078836273182>! Grrrr! Gosh fluff it, why is this boss so hard?! Uh, hey... D-Do you think you could help me out?...', '<:gameboy:431983078836273182>! Wanna take the controller for a little while? ***glooooorpgrooooan~!*** <:blooorp:431972532250476545> O-Ooof... Y-You can even have the best seat in the house! This belly is fit for a king/queen~!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicBellyrubVoodoo() {
    var rand = ['***gwuuumbleblooorp~!*** <:blooorp:431972532250476545> G-Gotta admit, you\'re kneading me quite well here... Oooooh~ Like I\'m some kind of massive doughball, or maybe you prefer overpuffed marshmallow~?', '***Bwooooorpslooosh~*** <:blooorp:431972532250476545> W-Wow you\'re really good at this! Tell me, is my massive gut squishy enough for ya~?', '***Gloooooorpgroooan~!*** <:blooorp:431972532250476545> O-Oooooh yeah, right there... G-Get in there deep, there\'s a lot of blubber to get past~! :purple_heart:'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicOreoVoodoo() {
    var rand = ['<:happyoreo:432272791895670787> Ah! There\'s where my cookie went. Thanks for finding it! Wanna hug as a reward? I heard I\'m *suuuuuper* soft!', '<:happyoreo:432272791895670787> N-Nobody minds if I have this last oreo, right?... ***Gurrrrglebloorp~!*** <:blooorp:431972532250476545> A-Admittedly my midnight snack didn\'t help my hunger problem...', '<:happyoreo:432272791895670787> I spy with my little eye the best kind of cookie on the planet!!', '<:happyoreo:432272791895670787> ***Omnom!*** Hey now, how\'d that cookie get loose! Did one of you hide it on me?...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicSittingVoodoo() {
    var rand = ['***Plop! Wobbbbble~!*** Oh? Hey, is somebody underneath me?... Eh, hope they don\'t mind being a pancake for a little while~!', '***Bwomp! Woooble~!*** Oh wow! You\'re a good cushion... Super comfy too, hope my tush is big enough for ya~! I\'m still shedding some winter weight admittedly... >///>', '***Plop! Blooorp~!*** Oof, hope you don\'t mind being my seat! I\'ve been on my hooves all day, need to take a rest...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicHintingVoodoo() {
    var rand = ['No current hidden commands! Y\'all have figured me out for the time being. Bunch of cute lil detectives you are!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicWaifuVoodoo() {
    var rand = ['W-What? No! I didn\'t call Blurb my \'Cookie-Dough Queen\' w-what are you on about... *Fidgets nervously*', 'Mnnnhh Uno~... H-Hey, what\'re you doing here! Go on, shoo! T-This ain\'t none of your business...', 'Y-Yeah Gizmo\'s a cute dork, w-whatever... I-I\'ve played a game or two with her so what??', 'So what if I think Icy is hot? Being part gay is a worthy excuse to that... r-right? Oh come on, I like Frost too! N-No fair, you got me cornered!!', 'Salem Cuisine makes good food, y-yeah... a-and gives pretty nice belly rubs... M-Mnnph, w-what\'re you looking at! I\'m not blushing!!!', 'N-No! Glowstick\'s just a friend... A-A friend who I hug a lot... and occasionally smooch... C-Can you blame me, she\'s so hecking cute!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicCuriousVoodoo() {
    var rand = ['!amidoingaresponseright?', '...Really? What do you think you are, clever?...', '***Family Feud Buzzer Noise*** Wow. You\'re really hitting the mark, huh?', 'Not even close, bud.'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicFeederVoodoo() {
    var rand = ['**In goes the cake, out goes your waistline~!** ***GwooooOOORPBLOORP~!*** <:blooorp:431972532250476545> Thank\'s for being the server\'s belly bed, fatso. Don\'t worry, we\'ll get to kneading that gut in no time~!', '**Blimps you up with maple syrup.** Oooof! Gosh, didn\'t even let me make pancakes with that? ***Slooooshbloorp~!*** Heh, not that I\'m sure you mind that sloshy, heavy gut.', '**Fills you to the brim with pie.** Pie day is everyday with you around, isn\'t it fatso... Come on, we still haven\'t gotten to the blueberry pie yet!- ***Gruuuuumbleblrrrp~!*** <:blooorp:431972532250476545> Sounds like that beached whale gut you\'re sporting wants to try it~!', '**Stuffs you full of whipped cream!** What\'s a matter, cream-puff? You look a lil full there... *Digs hooves into your massive gut* Listen to that thing! ***GwooOORPBWOOORP~!*** <:blooorp:431972532250476545>'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicBlueberryVoodoo() {
    var rand = ['***Groooooan~! Sweeeeelllslooosh~!*** O-Okay, that\'s enough with the berries!! M-Mnngh, s-so tight... M-Mind squeezing some of the juice outta me, h-hope you don\'t mind the sloshing... >////>', '***Sloooooosh~! Grrrrbbl~!*** H-Haha very funny, someone better juice me... A-Actually this doesn\'t feel too bad, just a little tight...', '***Sloooooosh~! Grrrrrnnnn...*** M-Mnnphh! W-What was in that, w-why am I all blue and huge?... O-Oh fluff, a-am i leaking?...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicAdviceVoodoo() {
    var rand = ['Listen, if you\'re looking for help on your math homework... well I\'ve got some bad news for you. But I can offer some diet advice! Eat ***lots*** of oreos. Believe me, your tummy will thank us later once we\'re all snuggling and rubbing it like a precious lil doughball. :purple_heart:', '***INSPIRATION!!!*** Is that good? Ah, screw it. I\'m just gonna snuggle the daylights outta ya instead. Your amazing tush needs a good session of affection. Hah! Session of affection, we should trademark that, buddy!', 'If you\'re worthless, then we all are. Becasue we wanna be right here for and with you until the end, and that\'s a promise...', '**Pushes hooves into chest!** I can feel your heartbeat! You\'d better keep it that way, the world needs to hear the tune it drums too~!', 'Want some tips on being cute? What! But you\'re already cute! You don\'t need any tips, you adorkable mess. Love ya~!'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function doMagicPachimariVoodoo() {
    var rand = ['<:squishybabbu:443026200852692994> What\'s a matter? Ain\'t ever seen a squeaky, cutie patootie onion-octopus before?', '<:squishybabbu:443026200852692994> ***Squeaky Squook~!*** This Pachimari hopes you have a wonderful day!', '<:squishybabbu:443026200852692994> Need a cuddle friend? Fret not, Squishy Bab is here to save the day! Seeing as how all your other snuggle companions are busy stuffin themselves...', '<:squishybabbu:443026200852692994> ***SqueakSqueak!!*** H-Hey, don\'t hug me too hard, you\'ll break my squeaker!', '<:squishybabbu:443026200852692994> ***Squeeeeeeak~!*** H-Hey now, don\'t you think you should be helping your team out? That Genji over there doesn\'t seem to be holding his own very well...'];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!boop")) {
    message.channel.send(doMagicBoopVoodoo());
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
  if (message.content.startsWith("!hug")) {
    message.channel.send(doMagicSnuggleVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!feed")) {
    message.channel.send(doMagicFeedingVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!cute")) {
    message.channel.send(doMagicCuteVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!game")) {
    message.channel.send(doMagicGamerVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!bellyrub")) {
    message.channel.send(doMagicBellyrubVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!oreo")) {
    message.channel.send(doMagicOreoVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!sit")) {
    message.channel.send(doMagicSittingVoodoo());
  }
});


client.on("message", (message) => {
  if (message.content.startsWith("!waifu")) {
    message.channel.send(doMagicWaifuVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!hint")) {
    message.channel.send(doMagicHintingVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!amidoingthisright")) {
    message.channel.send(doMagicCuriousVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!stuffer")) {
    message.channel.send(doMagicFeederVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!blueberry")) {
    message.channel.send(doMagicBlueberryVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!advice")) {
    message.channel.send(doMagicAdviceVoodoo());
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!pachimari")) {
    message.channel.send(doMagicPachimariVoodoo());
  }
});

client.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'the-uno-table').send(doMagicWelcomeVoodoo());
});

client.login(process.env.BOT_TOKEN);
