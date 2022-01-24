module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(`${client.user.id}                                                                                                                                                                     `)
  //client.user.setActivity(`${prefix}yardım | ${client.guilds.size} sunucu | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı`, { type: "LISTENING"});
client.user.setActivity(`Sirius 🧡 İlker `, { type: "PLAYING"});  
//LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
 console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + ` kullanıcıya hizmet veriliyor!`);
};