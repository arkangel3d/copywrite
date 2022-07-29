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
    if (text.includes(' ') && text.length>3) {
      const textReverse = text.split('').reverse().join('')
      const textReverseNotSpace = textReverse.replace(/\s+/g, '')
       if (textReverseNotSpace.toLowerCase() === text.toLowerCase().replace(/\s+/g, '')) {
         
         return res.json({ text: text,palindrome: true})
         }
      return res.json({ text: textReverse, palindrome: false})
    }
    res.json({text: textReverse,palindrome})
  }

export default textReverse
