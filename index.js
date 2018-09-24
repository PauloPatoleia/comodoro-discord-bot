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
        message.member.addRole("493907904555122698").catch(console.error)
        console.log('USER unmuted')
        message.reply(" welcome back!")
    }, 100000);
        
        
    } 
   
})


bot.login(botconfig.token)