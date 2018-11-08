const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'w'


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
if(msg.content.startsWith ('.server')) {
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



client.login('NTEwMTUwMzY1NzI3OTQ4ODAx.DsYKTw.cZWj4crRRXDbLOvo4ViKG8AKmhI');