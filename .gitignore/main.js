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
        .addField("Commandes du Denoria Bot!","   **..aide** : Affiche les commandes du bot.\n **..invite** : Donne le lien du discord.\n **..minecraft** : Donne des informations sur le serveur Minecraft.\n **..staff** : Affiche tout le staff de Denoria.")
    message.channel.send(embed_help);
    }

    if(message.content === prefix){
        var embed_help = new Discord.RichEmbed()
        .setColor('#D9F200')
        .addField("Commandes du Denoria Bot!","   **..aide** : Affiche les commandes du bot.\n **..invite** : Donne le lien du discord.\n **..minecraft** : Donne des informations sur le serveur Minecraft.\n **..staff** : Affiche tout le staff de Denoria.")
    message.channel.send(embed_help);
    }

    if(msg == prefix + "invite"){
        message.channel.send("Le lien vers le discord de Denoria est: " + invite_serveur);
    }

    else if (message.content.includes('https://discord.gg/') || message.content.includes('discord.gg/') || message.content.includes('discord.me') || message.content.includes('discord.me/')) {
        if(message.member.roles.some(r=>["Fondateur", "Adminstrateur", "Graphiste", "Modérateur", "Modérateur-Test", "Helpeur"].includes(r.name)) ) {
            var embed_pub_staff = new Discord.RichEmbed()
            .setColor('#0b7a75')
            .addField(":warning: Un membre du staff à fait sa pub : :warning:","\n►Joueur: **" + message.author + "**\n►Id Joueur: **`" + message.author.id + "`**\n►Message: `" + message.content + "`\n►Channel: **`" + message.channel.name + "`**\n►Action: **`Rien`**")
            message.guild.channels.find("name", "👑logs-discord").send(embed_pub_staff)
        }else{
            var embed_pub = new Discord.RichEmbed()
            .setColor('#0b7a75')
            .addField(":warning: Un membre du discord à fait sa pub : :warning:","\n►Joueur: **" + message.author + "**\n►Id Joueur: **`" + message.author.id + "`**\n►Message: `" + message.content + "`\n►Channel: **`" + message.channel.name + "`**\n►Action: **`Suppression du message + Avertissement en privé `**")
            var embed_warn = new Discord.RichEmbed()
            .setColor('#0b7a75')
            .addField(":warning: Avertissement:","**Il est interdit de vers de la pub pour d'autres serveurs discord !**")
            message.delete()
            message.author.send(embed_warn)
            message.guild.channels.find("name", "👑logs-discord").send(embed_pub);
      }
    }
    else if(msg === prefix + "staff"){
        var embed_staff = new Discord.RichEmbed()
        .setColor('#0b7a75')
        .addField("Le staff de Denoria est composé de:"," **Fondateurs**:\nCalvineries et UgoGame\n**Modérateur**:\nVolax6600\n**Helpeur**:\nLilian142700")
        .setFooter("Actualisation du bot entre 1 heure et 1 jour.")
        message.channel.send(embed_staff);
    }
    else if(msg === prefix + "minecraft"){
        var embed_mc = new Discord.RichEmbed()
        .setColor('#0b7a75')
        .addField("Informations sur Denoria:","**Ip**: `" + minecraft_ip + "`\n**Version**: `" + minecraft_version + "`\n**Crack**: `" + minecraft_crack + "`\n**But du Serveur**: " + minecraft_but)
        message.channel.send(embed_mc);
    }
    else if(msg === prefix + "mc"){
        var embed_mc = new Discord.RichEmbed()
        .setColor('#0b7a75')
        .addField("Informations sur Denoria:","**Ip**: `" + minecraft_ip + "`\n**Version**: `" + minecraft_version + "`\n**Crack**: `" + minecraft_crack + "`\n**But du Serveur**: " + minecraft_but)
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
