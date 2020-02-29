const GameFunctions = require('./GameFunctions.js');
const Discord = require('discord.js');
const {prefix, token} = require('./auth.json');
const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Kaede is at your service.');
})

bot.on('message', message => {
    if (message.content.substring(0, 1) === prefix) {
        var firstcmd = "help"
        if (message.content.length !== 1) {
            var arr = message.content.substring(1).split(' ');
            var firstcmd = arr[0];
            for (i = 0; i < arr.length; i++) {
                arr[i] = arr[i].toLowerCase();
            }
        }
        switch (firstcmd) {
            case "help":
                message.channel.send("in");
                break;
            case "test":
                message.channel.send("hello");
                break;
            case "play":
                if (arr.length === 1) {
                    message.channel.send(
                        "What game do you want to play? Type `^play [gameCMD]` to play the game.\n" +
                        ">>> Rock, paper & scissors; `= rps`\n" + 
                        "Guess the number; `= guess`\n" + 
                        "hi\n" +
                        "hi"
                        );
                }
                else {
                    switch (arr[1]) {
                        case "rps":
                            GameFunctions.rps(message);
                            break;
                        case "guess":
                            GameFunctions.guessNumber(message);
                            break;
                        default:
                            message.channel.send("Kaede doesn't know that game!! <:illyapout:683110138235977758>");
                            break;
                    }
                }
                break;
            default:
                message.channel.send("This is not a valid command.\nType ^ or ^help for Kaede's Kawaii commands! :heart:");
                break;
        }
    }
})

bot.login(token);
