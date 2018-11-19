const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
var Canvas = require('canvas')
var jimp = require('jimp')
const moment = require('moment');
const pretty = require('pretty-ms');
const rn = require('random-number');
const prefix = 'w'

client.on('message', message => {
	if (message.content.startsWith("رابط")) {
		if (message.author.bot) return
		message.channel.createInvite({
		thing: true,
		maxUses: 5,
		maxAge: 1,
	}).then(invite =>
		message.author.sendMessage(invite.url)
	)
	const embed = new Discord.RichEmbed()
		.setColor("RANDOM")
			.setDescription(" تم ارسال الرابط في الخاص :link: ")
			 .setAuthor(client.user.username, client.user.avatarURL)
				 .setAuthor(client.user.username, client.user.avatarURL)
				.setFooter('طلب بواسطة: ' + message.author.tag)
 
		message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
				const Embed11 = new Discord.RichEmbed()
		.setColor("RANDOM")
 
	.setDescription(" مدة الرابط :  24 ساعه فقط  عدد استخدامات الرابط : 5 ")
		message.author.sendEmbed(Embed11)
	}
});
 
 

client.on('message', message => { // RadThiek
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      var user = message.mentions.users.first() || message.author
      var personalInvites = invs.filter(i => i.inviter.id === user.id);
      var inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              var mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(`Your Invites :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});




client.on('message', msg => {
  if (msg.content === '.restart') {
    msg.channel.sendMessage(' **سيتم إعادة تشغيل**');

  }
}); 


client.on('message',function(message) {
                  if(!message.channel.guild) return;
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);
}
});


client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let norElden = msg.mentions.members.first()
      if (!norElden) return msg.reply(`**يجب تحديد الشخص**`)
      let norEldenEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "))

      client.users.get(`${norElden.id}`).send(norEldenEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});


   client.on("message", msg => {
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  Name", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  Id", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  Watching', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   Playing', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  role', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':roclient:  Its client', `**[ ${msg.author.client.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});


client.on('message', function(message) {
	const myID = "428285710588444694";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});

client.on('message', message => { 
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('message', function(msg) {
if(msg.content.startsWith ('wserver')) {
	if(!msg.channel.guild) return msg.reply('**:x: Error**');         
	let embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setThumbnail(msg.guild.iconURL)
	.addField(':globe_with_meridians: **Name Sever : **' , `**[ ${msg.guild.name} ]**`,true)
	.addField(':earth_africa: ** Site Server :**',`**[ ${msg.guild.region} ]**`,true)
	.addField(':military_medal:** Role :**',`**[ ${msg.guild.roles.size} ]**`,true)
	.addField(':bust_in_silhouette:** Members :**',`**[ ${msg.guild.memberCount} ]**`,true)
	.addField(':white_check_mark:** Members Online:**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
	.addField(':pencil:** Rommes Text :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
	.addField(':loud_sound:** Rommes Voice :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
	.addField(':crown:** Owoner :**',`**[ ${msg.guild.owner} ]**`,true)
	msg.channel.send({embed:embed});
}
});


var dat = JSON.parse("{}");
function forEachObject(obj, func) {
	Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
	var guild;
	while (!guild)
			guild = client.guilds.find("name", "WordShop")
	guild.fetchInvites().then((data) => {
			data.forEach((Invite, key, map) => {
					var Inv = Invite.code;
					dat[Inv] = Invite.uses;
			})
	})
})
client.on("guildMemberAdd", (member) => {
	let channel = member.guild.channels.find('name', 'word');
	if (!channel) {
			console.log("!channel fails");
			return;
	}
	if (member.id == client.user.id) {
			return;
	}
	console.log('made it till here!');
	var guild;
	while (!guild)
			guild = client.guilds.find("name", "WordShop")
	guild.fetchInvites().then((data) => {
			data.forEach((Invite, key, map) => {
					var Inv = Invite.code;
					if (dat[Inv])
							if (dat[Inv] < Invite.uses) {
									console.log(3);
									console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
channel.send(`invited by : ${Invite.inviter}  `)            
}
					dat[Inv] = Invite.uses;
			})
	})
});

const shorten = require('isgd');
client.on('message', message => {

if (message.content.startsWith(prefix + 'short')) {
	let args = message.content.split(" ").slice(1);
if (!args[0]) return message.channel.send('**Usage**: '+ prefix +'short <رابط>')
if (!args[1]) { 
	shorten.shorten(args[0], function(res) {
		if (res.startsWith('Error:')) return message.channel.send('**Usage**: '+ prefix +'short <link>');
		message.channel.send(`اختصار الرابط:**<${res}>**`); 
	})
} else { 
	shorten.custom(args[0], args[1], function(res) { 
		if (res.startsWith('Error:')) return message.channel.send(`اختصار الرابط:**${res}**`); 
		message.channel.send(`اختصار الرابط:**<${res}>**`); 
})}}});


      client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
		.setFooter('======= Welcome To WordShop =======')

    var channel =member.guild.channels.find('name', 'word')
    if (!channel) return;
    channel.send({embed : embed});
    });
	
	
	client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
});

  client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**Hi ! ** ${member} **Welcome To WordShop !** `) 
}).catch(console.error)
})


client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("Name:", message.author.tag)
	.addField("Level:", userData[message.author.id].Level)
	.addField("Xp:",Math.floor(userData[message.author.id].Xp))
	.addField("Money:",Math.floor(userData[x5bzm.id].money))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});
//BY NorElden
////////////LEVEL
//BY NorElden
 let points = JSON.parse(fs.readFileSync("./level.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = points[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./level.json", JSON.stringify(points), (err) => {
     if (err) console.error(err)
   });
 
 });
//BY NorElden
////////////REP
//BY NorElden
let rep = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
client.on('message', message => { 
    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('ar');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر
            message.channel.send(`** :white_check_mark: Successfly Added rep To ${getvalueof} **`)
        } else {
           message.channel.send(`** You Do it Befor \' Pls Try Agin After:`  + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
        }
       }
    fs.writeFile('./rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});
//BY NorElden
////////////PROFILE
//BY NorElden
client.on("message",  message => {
     var mentionned = message.mentions.users.first();
      var z;
      if(mentionned){
          var z = mentionned;
      } else {
          var z = message.author;
          
      }
     let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let msg = message.content.toUpperCase();
    if(!command.startsWith(prefix)) return;
    
    var jimp = require('jimp')
    const w = ['./images_profile/1.png',];
    if(command === prefix + 'profile') {
    let Canvas = require('canvas')
    let canvas = new Canvas(500, 500)

    let ctxx = canvas.getContext('3d')
    let Images = Canvas.Image
    fs.readFile(__dirname + '/images_profile/1.png', function(err, picture) { 
      if (err) throw err
      var img = new Images
      img.onload = () => {
        ctx.drawImage(img, 5, 5, 500, 500) 
      }
      img.src = picture
    })
     
    let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
    fs.readFile(__dirname + '/images_profile/background.png', function(err, picture) { 
    if (err) throw err
    var img = new Image
    img.onload = () => {
    ctx.drawImage(img, 0, 0, 500, 500) 
      }
      img.src = picture
    })
   
                      let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
	                //XP
			ctx.font = '22px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Total XP : ${Math.floor(userData[z.id].Xp)}`,  110,467);
	                //MONEY
			ctx.font = '24px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Credits : ${Math.floor(userData[z.id].money)}`,  220,360);
                        //USERNAME
                   	ctx.font = '25px Cairo';
			ctx.fillStyle = '#020202';
                        ctx.fillText(`${z.username}`, 215, 170)
                        //LEVEL
			ctx.font = '30px Cairo';
			ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
			ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
			ctx.fillText(`${userData[z.id].level}`, 90, 310);
		        //info Box :)
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`${userData[z.id].text}`,265 , 270)
                        //LIKE
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'Center';
                        ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`❤${rep[message.author.id].repo}`, 80,395);
			//AVATAR
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(98, 144, 84, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 13, 60, 175, 175);

    setTimeout(function() {
      fs.readFile(__dirname + '/images_profile/background.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
        fs.writeFile(`images.png`, buf)
        message.channel.send(`**:pencil: | Showing your Profile ${message.author.username}**`, {
          file: `images.png` // Or replace with FileOptions object
        })
      })
    }, 1000)

    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
          // Determine how much of the word will fit
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
      ctx.fillText(line, x, y);
    }
      })
      })
      }
      });

//BY NorElden//BY NorElden
//BY NorElden
//BY NorElden
client.on('message', message => {
if (message.author.bot) return null;
let sender = message.author;
let msg = message.content.toUpperCase();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
if (!userData[sender.id].lastDaily) userData[sender.id].lastDaily = 'Not Collected';
if (!userData[sender.id].messages) userData[sender.id].messages = 1;
if (!userData[sender.id].level) userData[sender.id].level = 1;
if (!userData[sender.id].like) userData[sender.id].like = 1;
if (!userData[sender.id].text) userData[sender.id].text = `${prefix}setinfo to set.`

if(message.content.startsWith(prefix + 'credit')) {
 var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
        
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }

      var mando = message.mentions.users.id;
      if  (!userData[x5bzm.id]) userData[x5bzm.id] = {}
      if (!userData[x5bzm.id].money) userData[x5bzm.id].money = 0;
      message.channel.send("**:credit_card:  | **" + '`' + x5bzm.username + '`' + "** , your credit is :yen: **" + '`' + userData[x5bzm.id].money + '`' + "** credits!**")
}


let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
if(message.content.startsWith(prefix + 'transfer')) {
          if (!args[0]) {
            message.channel.send(`**قم بالتحويل عن طريق: ${prefix}credits <mention> <المبلغ>**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`قم بالتحويل عن طريق: ${prefix}credits <mention> <المبلغ>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`قم بالتحويل عن طريق: ${prefix}credits <mention> <المبلغ>**`);
            var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!userData[defineduser.id]) userData[defineduser.id] = {}
      if (!userData[defineduser.id].money) userData[defineduser.id].money = 200;
      userData[defineduser.id].money += (+args[0]);
      userData[sender.id].money += (-args[0]);
      let mariam = message.author.username
message.channel.send('`' + mentionned.username + '`' + '** Ø§Ù„Ù‰  **'+ '`' + mariam + '`' + '**  ØªÙ… ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¨Ù„Øº**'+ (args[0]) + '** :dollar: Ù…Ù† **')
}

if(message.content.startsWith(prefix + 'daily')) {
if (userData[sender.id].lastDaily != moment().format('6800000')) {
    userData[sender.id].lastDaily = moment().format('6800000')
    userData[sender.id].money += 200; 
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send('**your next Daily :moneybag: : ' + moment().endOf('6800000').fromNow()  + '.**')
}
}
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})

if(message.content.startsWith(prefix + 'setinfo')) {
if (!userData[message.author.id].text) userData[message.author.id].text = 'معلومات عني:';
var mard = userData[message.author.id].text
let args = message.content.split(' ').slice(1).join(' ');
if (!args) return message.channel.send('**عليك كتابه المعلومات بعد الامر التي تريد ان تغيره**')
userData[message.author.id].text = args ;
message.channel.send(':ballot_box_with_check:**تم تغير معلوماتك بنجاح**')
}
}
)


client.login('NTA1NDQ0NzgxMzM0MjAwMzIx.DtAiWA.WeHLkm-7g8B-bDhRQ0yE2pmP-VE');
