var botconfig = require("./botconfig.json")
var discord = require("discord.js")


var bot = new discord.Client()

bot.on("message", (message) => {

    if (message.content.startsWith('!work')) {
        
        
        // 493907904555122698
        message.member.removeRole("493907904555122698").catch(console.error);
        message.reply("good decision. We will be waiting for your return.")
         setTimeout(
    function() {
        if(message.member.roles.has(493907904555122698)) {
          
        } else {
          message.member.addRole("493907904555122698").catch(console.error)
          message.reply(" welcome back!")
        }
        
    }, 1500000);
        
        
    } 
   
})


bot.login(botconfig.token)