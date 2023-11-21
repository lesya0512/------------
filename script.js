

const TelegramBot = require('node-telegram-bot-api');
const token = '6821895091:AAHItsL3l4blOL-4rrLXKGCAdlHfowOJKno';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, msg.text);
});
