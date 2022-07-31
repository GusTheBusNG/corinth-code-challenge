const quotes = [
  'Inputting data into the navicomputer...',
  'Do or do not. There is no try...',
  'The ability to speak does not make you intelligent...',
  'Would somebody get this big walking carpet out of my way?',
  "I'd just as soon kiss a wookiee",
  'Some moof milker put a compressor on the ignition line.',
  "These aren't the droids you're looking for.",
  'I find your lack of faith disturbing.'
]

const errorQuotes = [
  'Our hyperdrive is down! Try to bypass the compressor!',
  "I've got a bad feeling about this",
  'Be careful not to choke on your aspirations, director',
  'Some moof milker put a compressor on the ignition line.',
  'This is the way'
]

const getRandom = list => list[Math.floor(Math.random() * list.length)]

export const getLoadingQuote = () => getRandom(quotes);
export const getErrorQuote = () => getRandom(errorQuotes);