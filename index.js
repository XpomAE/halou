const TelegramBot = require('node-telegram-bot-api');

const token = '717587063';

const options = {
webHook: {
port: process.env.PORT
}
};
const bot = new TelegramBot(token, options);
const url = "https://halou.herokuapp.com/:443";

bot.setWebHook(${url}/bot${token});