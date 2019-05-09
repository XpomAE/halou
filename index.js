const TelegramBot = require('node-telegram-bot-api');

const token = '717587063:AAEx24bfXYLVZHVp7z0fa8AA9lk82FpZnD8';

const options = {
	webHook: {
		port: process.env.PORT
	}
};
const bot = new TelegramBot(token, options);
const url = "https://halou.herokuapp.com/:443";

bot.setWebHook(`${url}/bot${token}`);
    
bot.on('message', function (msg) {
	if(msg.text.includes('/a')){
		bot.sendMessage(msg.chat.id,'Б');
	}	
	if(msg.text.includes('оплот для кого')){
		bot.sendMessage(msg.chat.id,'Оплот для пидрил',{reply_to_message_id: msg.message_id});
	}	
	if(msg.text.includes('@prrrrrrbot')){
		bot.sendMessage(msg.chat.id,'Свою мамку попинай',{reply_to_message_id: msg.message_id});
	}	
	if(msg.text.includes('/krokodil')){
		if(msg.from.username != 'Kawaii_Ghost'){
			setTimeout(function () {bot.sendMessage(msg.chat.id,'Я крокодил')},1000);
			setTimeout(function () {bot.sendMessage(msg.chat.id,'Крокожу')},2000);
			setTimeout(function () {bot.sendMessage(msg.chat.id,'И буду крокодить')},3000);
		}
	}	
	if(msg.text.includes('/ebu_sobak')){
		if(msg.from.username != 'Kawaii_Ghost'){
			bot.sendMessage(msg.chat.id,'Я ебу собак');
			setTimeout(function () {bot.sendMessage(msg.chat.id,'Всегда готов')},1000);
			setTimeout(function () {bot.sendMessage(msg.chat.id,'Сразу трахнуть несколько котов')},2000);
			setTimeout(function () {bot.sendMessage(msg.chat.id,'Да, я зоофил не говори')},3000);
			setTimeout(function () {bot.sendMessage(msg.chat.id,'Лучше мне собачку подари')},4000)
		}
	}	
	if(ex(msg.text,'/test')){
		bot.sendMessage(msg.chat.id,'Сам себя потести, уебок');
	}
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
