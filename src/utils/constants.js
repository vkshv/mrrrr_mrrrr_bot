const BUTTONS = {
  REGULAR_MRRRR: 'Обычное мрррр',
  GENTLE_MRRRR: 'Ласковое мрррр',
  PLAYFUL_MRRRR: 'Игривое мрррр',
  AGGRESSIVE_MRRRR: 'Агрессивное мрррр',
  HUNGRY_MRRRR: 'Голодное мрррр',
  IRRITATED_MRRRR: 'Раздражённое мрррр'
}

function getKeyboard() {
  return [
    BUTTONS.REGULAR_MRRRR,
    BUTTONS.GENTLE_MRRRR,
    BUTTONS.PLAYFUL_MRRRR,
    BUTTONS.AGGRESSIVE_MRRRR,
    BUTTONS.HUNGRY_MRRRR,
    BUTTONS.IRRITATED_MRRRR
  ]
}

module.exports = {
  OWNER_ID: parseInt(process.env.OWNER_ID, 10),
  GIRLFRIEND_ID: parseInt(process.env.GIRLFRIEND_ID, 10),
  BUTTONS,
  getKeyboard
}
