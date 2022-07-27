'use strict'

const _express = _interopRequireDefault(require('express'))

const _index = _interopRequireDefault(require('./routes/index'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

const app = (0, _express.default)()
const port = process.env.PORT || 3000
app.use(_express.default.json())
app.use('/', _index.default)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
