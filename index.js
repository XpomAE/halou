const TelegramBot = require('node-telegram-bot-api');

const token = '717587063:AAEx24bfXYLVZHVp7z0fa8AA9lk82FpZnD8';

const options = {
webHook: {
port: process.env.PORT
}
};
const bot = new TelegramBot(token, options);
const url = "https://halou.herokuapp.com/:443";

bot.setWebHook(${url}/bot${token});

	       
	       
	       
bot.onText(/\/test/, function (msg) {
	bot.sendMessage(msg.chat.id,'Сам себя потести, уебок');
});
