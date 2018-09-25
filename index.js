var botconfig = require("./botconfig.json")
var discord = require("discord.js")


var bot = new discord.Client()

bot.on("message", (message) => {
    

    if (message.content.startsWith('!work')) {
        
        
         var args = message.content.slice().trim().split(/ +/g)
         var time = args[1] * 60000
         
          if(isNaN(time)) {
              message.reply(`do you want to be muted forever?`)
          } else {
              
               // 493907904555122698
        message.member.removeRole("493907904555122698").catch(console.error);
        message.reply(`good decision. We will be waiting for your return in ${args[1] || 25} minutes.`)
         setTimeout(
    function() {
        if(message.member.roles.has(493907904555122698)) {
          
        } else {
          message.member.addRole("493907904555122698").catch(console.error)
          message.reply(" welcome back!")
        }
        
    }, time || 150000000);
        
        
    } 
              
          }
   
})


bot.login(botconfig.token)