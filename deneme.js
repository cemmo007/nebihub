const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`NebiHub botu sunucuya girdi ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!nebihub') {
    msg.channel.send('https://www.twitch.tv/nebihub');
  }
});

client.login('ODM4MTA4OTk2Mjc0NzQ5NDky.YI2T1A.jlsuHECPOGl0c0PHOsD5yC1P1qU');
