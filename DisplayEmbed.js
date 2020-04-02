/**
 * Module used to implement features that require displaying of "MessageEmbed" Objects.
 */

 module.exports = {helpMenu}

 /**
  * Module imports.
  */

 const Discord = require('discord.js');

 /**
  * Function used to display a MessageEmbed text to show the users the help menu and commands list.
  * @param {Object} message Message object sent to execute the function.
  */
 function helpMenu(message) {
    const helpMenu = new Discord.MessageEmbed().setColor('#7A2F8F').setTitle("Kaede's Commands").setTimestamp(Date.now()).setAuthor(
                    'Kaede', 'https://vignette.wikia.nocookie.net/aobuta/images/5/5e/Kaede_regains_original_memories.png/revision/latest?cb=20181221013117' /* if have kaede website link put here*/).setImage(
                    "https://ih0.redbubble.net/image.675681423.7320/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg").setDescription(
                    'Every command is categorized into a category!\nDo ^help <category> for more details!').addField("__**Game**__", "`game`", false ).addField(
                    "__**Music**__", "`play`\t`skip`\t`skipall`\t`pause`\t`resume`\n`loop`\t`nowplaying`\t`queue`\t`repeat`\t`remove`\n`first`\t`swap`\t`previous`\t`playlist`", false).addField(
                    "__**Other**__", "`profile`").setFooter('Did you know Kaede has a website? Click on the link on Kaede\'s name!', 'https://external-preview.redd.it/PmVd8MTMoW70-aUU92H2YlHKO9ilnubtdyzVugj18vI.jpg?auto=webp&s=4150b336b0280d8934cbd3682f298c8750819273');
    return message.channel.send(helpMenu);
 }