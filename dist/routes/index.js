'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

const _express = require('express')

const _textController = _interopRequireDefault(require('../controllers/textController'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

const router = (0, _express.Router)()
router.get('/iecho', _textController.default)
const _default = router
exports.default = _default
