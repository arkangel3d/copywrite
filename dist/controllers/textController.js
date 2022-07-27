'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

const textReverse = (req, res) => {
  const text = req.query.text
  const textReverse = text.split('').reverse().join('')
  const palindrome = text === textReverse

  if (!text) {
    return res.status(400).json({
      error: 'no text'
    })
  }

  ;
  res.json({
    text: textReverse,
    palindrome
  })
}

const _default = textReverse
exports.default = _default
