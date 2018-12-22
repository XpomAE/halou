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

function ex(string,substring){
if(string.toLowerCase().indexOf(substring) != -1){return true;}else{return false;}
}
	       
bot.onText(/\/test/, function (msg) {
	bot.sendMessage(msg.chat.id,'Сам себя потести, уебок');
});

bot.onText(/\/a/, function (msg) {
	bot.sendMessage(msg.chat.id,'Б');
});
bot.on('message', function (msg) {
	if(ex(msg.text,'оплот для кого')){
	bot.sendMessage(msg.chat.id,'Оплот для пидрил',{reply_to_message_id: msg.message_id});
	}
});
bot.on('message', function (msg) {
	if(ex(msg.text,'@prrrrrrbot')){
	bot.sendMessage(msg.chat.id,'Свою мамку попинай',{reply_to_message_id: msg.message_id});
	}
});

bot.on('message', function (msg) {
	if(ex(msg.text,'кавай')){
	bot.sendMessage(msg.chat.id,'гей',{reply_to_message_id: msg.message_id});
	}
});


bot.onText(/\/ebu_sobak/, function (msg) {
	if(msg.from.username != 'Kawaii_Ghost'){
	bot.sendMessage(msg.chat.id,'Я ебу собак');
	setTimeout(function () {bot.sendMessage(msg.chat.id,'Всегда готов');},1);
	setTimeout(function (msg) {bot.sendMessage(msg.chat.id,'Сразу трахнуть несколько котов');},2);
	setTimeout(function (msg) {bot.sendMessage(msg.chat.id,'Да, я зоофил не говори');},3);
	setTimeout(function (msg) {bot.sendMessage(msg.chat.id,'Лучше мне собачку подари');},4);
	}
});

bot.onText(/\/krokodil/, function (msg) {
	bot.sendMessage(msg.chat.id,'Я крокодил');
	bot.sendMessage(msg.chat.id,'Крокожу');
	bot.sendMessage(msg.chat.id,'И буду крокодить');
});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
