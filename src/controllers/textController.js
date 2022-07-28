
const textReverse = (req, res) => {
  const text = req.query.text
  const textReverse = text.split('').reverse().join('')
  const palindrome = text.toLowerCase() === textReverse.toLowerCase()
  const reg = /^[a-zA-Z\s]*$/
  if (!text) {
    return res.status(400).json({ error: 'no text' })
  }
  if (!reg.test(text)|| text.length<2) {
    return res.status(400).json({ error: 'invalid text' })
  }
  if (text.includes(' ') && text.length<3) {
    const textReverse = text.split('').reverse().join('').replace(/\s+/g, '')
     if(textReverse.toLowerCase()===text.toLowerCase()){
       palindrome = true
       return res.json({
    text: text,
    palindrome
     }
    return res.json({
    text: textReverse,
    palindrome
  })
  }
  res.json({
    text: textReverse,
    palindrome
  })
}

export default textReverse
