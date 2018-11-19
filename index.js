const Discord = require('discord.js');
const client = new Discord.Client();
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


client.login('NTA1NDQ0NzgxMzM0MjAwMzIx.DtAiWA.WeHLkm-7g8B-bDhRQ0yE2pmP-VE');
