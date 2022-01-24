const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('ff0000')
.setAuthor(`Axlo Guard Bot`)
.setDescription(`


:white_small_square: **=**  \`a.kanal-koruma\` : **Kanal Koruma Aç/Kapat**
:white_small_square: **=**  \`a.küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`a.reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`a.sohbet lock-unlock\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`a.ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
:white_small_square: **=**  \`a.unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`a.istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`a.temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`a.ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`a.avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};