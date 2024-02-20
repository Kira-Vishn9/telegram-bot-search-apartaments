const TelegramApi = require('node-telegram-bot-api')
const tokenTelegramApi = "6889479886:AAHL7dLTasFQe9KxA6Y6IoHRnUctLZN_nWU";

const bot = new TelegramApi(tokenTelegramApi, {polling: true})

bot.on('message', msg => {
    console.log(msg)
})
