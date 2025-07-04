const { Markup } = require('telegraf')
const { BUTTONS, EMOJI_MAP, OWNER_ID, GIRLFRIEND_ID, getKeyboard } = require('../utils/constants')

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
    BUTTONS.GOODNIGHT_MRRRR,
    BUTTONS.MISSING_MRRRR,
    BUTTONS.AGGRESSIVE_MRRRR,
    BUTTONS.HUNGRY_MRRRR,
    BUTTONS.IRRITATED_MRRRR
  ], (ctx) => {
    if (!isAllowed(ctx.from.id)) return

    const text = ctx.message.text
    const recipientId = getRecipientId(ctx.from.id)
    const recipientMessage = ctx.from.id === OWNER_ID
      ? `<b>Ваш молодой человек отправил вам ${text.toLowerCase()} ${EMOJI_MAP[text]}</b>`
      : `<b>Ваша девушка отправила вам ${text.toLowerCase()} ${EMOJI_MAP[text]}</b>`

    ctx.reply(`<i>${text} отправлено!</i>`, { parse_mode: 'HTML' })
    ctx.telegram.sendMessage(recipientId, recipientMessage, { parse_mode: 'HTML' })
  })
}
