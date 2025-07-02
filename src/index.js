require('dotenv').config()
const bot = require('./bot')

require('./commands/menu')(bot)
require('./handlers/buttons')(bot)

bot.launch()
  .then(() => console.log('Bot started'))
  .catch((err) => console.error('Bot launch error: ', err))
