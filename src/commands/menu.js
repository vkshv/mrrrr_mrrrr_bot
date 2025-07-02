const { Markup } = require('telegraf')
const { getKeyboard } = require('../utils/constants')

module.exports = (bot) => {
  bot.command('menu', (ctx) => {
    ctx.reply('Выберите, какое мрррр отправить вашему молодому человеку:', Markup.keyboard(getKeyboard()).resize())
  })
}
