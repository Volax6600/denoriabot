const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("..");
var invite_serveur = ("https://discord.gg/eqpJaFr");
var minecraft_ip = ("Serveur pas encore ouvert !");
var minecraft_version = ("de la 1.8 à la 1.13");
var minecraft_crack = ("Crack OFF");
var minecraft_but = ("SkyBlock");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[..aide] | Denoria Bot', type: 0}})
    bot.user.setStatus("dnd");
    console.log("Bot de ready!");  
});

bot.login('NDgyNjEwMzM3NjI0MDk2NzY4.DmH46A.reuRS-YHT21eQ4-TLzZ0j6cIU-w') 

bot.on('message', message =>{
    var server = message.guild;
    var msg = message.content;
    var msgr = message.reply;
    var msgs = message.channel.sendMessage;
    if(message.author.bot)return;

    if(message.content === prefix + "aide"){
        var embed_help = new Discord.RichEmbed()
        .setColor('#D9F200')
        .addField("Commandes du Denoria Bot!","   **..aide** : Affiche les commandes du bot.\n**..invite** : Donne le lien du discord.\n**..minecraft** : Donne des informations sur le serveur Minecraft.")
    message.channel.send(embed_help);
    }

    if(message.content === prefix){
        var embed_help = new Discord.RichEmbed()
        .setColor('#D9F200')
        .addField("Commandes du Denoria Bot!","   **..aide** : Affiche les commandes du bot.\n**..invite** : Donne le lien du discord.\n**..minecraft** : Donne des informations sur le serveur Minecraft.")
    message.channel.send(embed_help);
    }

    if(msg == prefix + "invite"){
        message.channel.send("Le lien vers le discord de Denoria est: " + invite_serveur);
    }

    else if (message.content.includes('https://discord.gg/') || message.content.includes('discord.gg/') || message.content.includes('discord.me') || message.content.includes('discord.me/')) {
        if(message.member.roles.some(r=>["Fondateur", "Donateur", "Adminstrateur", "Graphiste", "Modérateur"].includes(r.name)) ) {
        }else{
            message.delete()
            message.author.send("**Les liens vers d'autre serveurs discord sont interdit!**")
      }
    }
    else if(msg === prefix + "minecraft"){
        var embed_mc = new Discord.RichEmbed()
        .setColor('#0b7a75')
        .addField("Informations sur Denoria:","**Ip**: " + minecraft_ip + "\n**Version**: " + minecraft_version + "\n**Crack**: " + minecraft_crack + "\n**But du Serveur**: " + minecraft_but)
        message.channel.send(embed_mc);
    }

    else if(msg === prefix + "mc"){
        var embed_mc = new Discord.RichEmbed()
        .setColor('#0b7a75')
        .addField("Informations sur Denoria:","**Ip**: " + minecraft_ip + "\n**Version**: " + minecraft_version + "\n**Crack**: " + minecraft_crack + "\n**But du Serveur**: " + minecraft_but)
        message.channel.send(embed_mc);
    }

    else if(message.content.startsWith(prefix + "purge")){
        message.delete()
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande !");
        
        let args = message.content.split(" ").slice(1);
        
    if(!args[0]) return message.channel.send("Vous n'avez pas précisé le nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            console.log( args + " messages trouvés, suppression..." )
        })
    }
})
