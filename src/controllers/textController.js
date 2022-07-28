
const textReverse = (req, res) => {
  const text = req.query.text
  const textReverse = text.split('').reverse().join('')
  const palindrome = text === textReverse
  const reg = '[A-Za-z]'
  if (!text) {
    return res.status(400).json({ error: 'no text' })
  }
  if (!reg.test(text)) {
    return res.status(400).json({ error: 'invalid text' })
  }
  res.json({
    text: textReverse,
    palindrome
  })
}

export default textReverse
