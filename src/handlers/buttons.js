const { Markup } = require('telegraf')
const { BUTTONS, OWNER_ID, GIRLFRIEND_ID, getKeyboard } = require('../utils/constants')

function isAllowed(userId) {
  return userId === OWNER_ID || userId === GIRLFRIEND_ID
}

function getRecipientId(senderId) {
  return senderId === OWNER_ID ? GIRLFRIEND_ID : OWNER_ID
}

module.exports = (bot) => {
  bot.start((ctx) => {
    if (!isAllowed(ctx.from.id)) {
      return ctx.reply('Sorry, but this bot is for cats only.')
    }

    ctx.reply(
      'Этот бот предназначен для отправки мрррр. Выберите, какое мрррр отправить вашему молодому человеку:',
      Markup.keyboard(getKeyboard()).resize()
    )
  })

  bot.hears([
    BUTTONS.REGULAR_MRRRR,
    BUTTONS.GENTLE_MRRRR,
    BUTTONS.PLAYFUL_MRRRR,
    BUTTONS.AGGRESSIVE_MRRRR,
    BUTTONS.HUNGRY_MRRRR,
    BUTTONS.IRRITATED_MRRRR
  ], (ctx) => {
    if (!isAllowed(ctx.from.id)) return

    const text = ctx.message.text
    const recipientId = getRecipientId(ctx.from.id)
    const recipientMessage = ctx.from.id === OWNER_ID
      ? `Ваш молодой человек отправил вам ${text.toLowerCase()}`
      : `Ваша девушка отправила вам ${text.toLowerCase()}`

    ctx.reply(`${text} отправлено!`)
    ctx.telegram.sendMessage(recipientId, recipientMessage)
  })
}
