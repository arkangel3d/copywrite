import { Router } from 'express'
import textReverse from '../controllers/textController'
const router = Router()

router.get('/iecho', textReverse)

export default router
